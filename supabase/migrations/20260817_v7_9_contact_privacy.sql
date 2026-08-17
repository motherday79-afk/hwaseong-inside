-- 화성인사이드 v7.9
-- 상세페이지 전화번호 + 비로그인 연락처 보호

alter table public.members
  add column if not exists phone text default '';

-- 비로그인 사용자가 Supabase Data API로 members 원본 테이블을 직접 읽어
-- 이메일/전화번호에 접근하지 못하도록 anon SELECT 권한을 제거합니다.
-- 공개 페이지는 Next.js 서버 API가 비민감 정보만 전달합니다.
revoke select on table public.members from anon;

-- 로그인한 회원은 기존 RLS 규칙 안에서 members를 조회할 수 있습니다.
grant select on table public.members to authenticated;
