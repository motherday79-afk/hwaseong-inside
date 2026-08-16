-- 화성인사이드 v5.2: 이메일 로그인 -> 아이디 로그인 전환
-- 이미 schema.sql/seed.sql을 실행한 현재 Supabase 프로젝트에서 이 파일만 1회 실행하세요.

alter table public.app_users add column if not exists username text;

with candidates as (
  select
    au.id as user_id,
    case
      when regexp_replace(lower(split_part(coalesce(au.email,''),'@',1)), '[^a-z0-9_]', '', 'g') ~ '^[a-z0-9_]{4,20}$'
        then regexp_replace(lower(split_part(au.email,'@',1)), '[^a-z0-9_]', '', 'g')
      else 'member_' || left(replace(au.id::text,'-',''),8)
    end as base_username,
    row_number() over (
      partition by case
        when regexp_replace(lower(split_part(coalesce(au.email,''),'@',1)), '[^a-z0-9_]', '', 'g') ~ '^[a-z0-9_]{4,20}$'
          then regexp_replace(lower(split_part(au.email,'@',1)), '[^a-z0-9_]', '', 'g')
        else 'member_' || left(replace(au.id::text,'-',''),8)
      end
      order by au.created_at, au.id
    ) as rn
  from auth.users au
  join public.app_users ap on ap.user_id=au.id
  where ap.username is null or trim(ap.username)=''
)
update public.app_users ap
set username = case
  when c.rn=1 then c.base_username
  else left(c.base_username,13) || '_' || left(replace(c.user_id::text,'-',''),6)
end,
updated_at=now()
from candidates c
where ap.user_id=c.user_id;

alter table public.app_users alter column username set not null;

create unique index if not exists app_users_username_lower_uidx
on public.app_users (lower(username));

alter table public.app_users drop constraint if exists app_users_username_format;
alter table public.app_users add constraint app_users_username_format
check (username ~ '^[a-z0-9_]{4,20}$');

create or replace function public.handle_new_user()
returns trigger language plpgsql security definer set search_path=public as $$
declare
  v_username text;
begin
  v_username := lower(trim(coalesce(new.raw_user_meta_data->>'username','')));
  if v_username !~ '^[a-z0-9_]{4,20}$' then
    raise exception 'invalid username';
  end if;

  insert into public.app_users(user_id,username,role,status)
  values(new.id,v_username,'member','active')
  on conflict(user_id) do nothing;

  update public.members set user_id=new.id, updated_at=now()
    where user_id is null and lower(public_email)=lower(coalesce(new.email,''));
  if not found then
    insert into public.members(user_id,name,job,public_email,is_published)
    values(new.id,coalesce(new.raw_user_meta_data->>'name',''),coalesce(new.raw_user_meta_data->>'job',''),coalesce(new.email,''),true);
  end if;
  return new;
end;
$$;

-- 현재 가입된 motherday79@gmail.com 계정이 있다면 기본 아이디는 motherday79가 됩니다.
-- 확인:
-- select au.email, ap.username, ap.role, ap.status
-- from public.app_users ap join auth.users au on au.id=ap.user_id
-- order by ap.created_at;
