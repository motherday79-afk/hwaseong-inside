import { NextResponse } from 'next/server';
import { assertApiRole } from '../../../../lib/auth';
import { createAdminClient } from '../../../../lib/supabase/admin';

export async function GET(){
 const auth=await assertApiRole(['admin']); if(!auth.ok)return NextResponse.json({error:auth.error},{status:auth.status});
 const admin=createAdminClient();
 const [{data:accounts,error},{data:members}]=await Promise.all([
  admin.from('app_users').select('*').order('created_at',{ascending:false}),
  admin.from('members').select('id,user_id,name,job,age,gender,public_email,school,area,tier,tags,intro,profile_image_url,is_published,youtube_url,youtube_thumbnail_url')
 ]);
 if(error)return NextResponse.json({error:error.message},{status:500});
 const {data:{users}}=await admin.auth.admin.listUsers({page:1,perPage:1000});
 const authMap=new Map((users||[]).map(u=>[u.id,u])); const memberMap=new Map((members||[]).filter(m=>m.user_id).map(m=>[m.user_id,m]));
 return NextResponse.json({users:(accounts||[]).map(a=>{const u=authMap.get(a.user_id);const m=memberMap.get(a.user_id)||{};return {user_id:a.user_id,username:a.username||'',role:a.role,status:a.status,created_at:a.created_at,email:u?.email||'',name:m.name||u?.user_metadata?.name||'',job:m.job||u?.user_metadata?.job||'',member_id:m.id||null,age:m.age||'',gender:m.gender||'',public_email:m.public_email||'',school:m.school||'',area:m.area||'',tier:m.tier||'Gold',tags:m.tags||[],intro:m.intro||'',profile_image_url:m.profile_image_url||'',is_published:m.is_published!==false,youtube_url:m.youtube_url||'',youtube_thumbnail_url:m.youtube_thumbnail_url||''};})});
}

export async function PUT(request){
 const auth=await assertApiRole(['admin']); if(!auth.ok)return NextResponse.json({error:auth.error},{status:auth.status});
 try{
  const b=await request.json(); if(!b.user_id)return NextResponse.json({error:'user_id 필요'},{status:400});
  if(b.user_id===auth.user.id&&b.status==='suspended')return NextResponse.json({error:'자기 계정을 정지할 수 없습니다.'},{status:400});
  const admin=createAdminClient();
  const accountPatch={updated_at:new Date().toISOString()};
  if(b.username!==undefined){const username=String(b.username).trim().toLowerCase();if(!/^[a-z0-9_]{4,20}$/.test(username))return NextResponse.json({error:'아이디는 영문 소문자·숫자·_ 4~20자입니다.'},{status:400});accountPatch.username=username;}
  if(['admin','editor','member'].includes(b.role))accountPatch.role=b.role;
  if(['active','suspended'].includes(b.status))accountPatch.status=b.status;
  const {error:accountError}=await admin.from('app_users').update(accountPatch).eq('user_id',b.user_id); if(accountError)return NextResponse.json({error:accountError.message},{status:500});

  const authPatch={}; if(b.email!==undefined)authPatch.email=String(b.email).trim(); if(b.password)authPatch.password=String(b.password); if(b.name!==undefined||b.job!==undefined)authPatch.user_metadata={name:b.name||'',job:b.job||''};
  if(Object.keys(authPatch).length){const {error:e}=await admin.auth.admin.updateUserById(b.user_id,authPatch);if(e)return NextResponse.json({error:e.message},{status:500});}

  const memberPatch={updated_at:new Date().toISOString()};
  const map={name:'name',job:'job',age:'age',gender:'gender',public_email:'public_email',school:'school',area:'area',tier:'tier',tags:'tags',intro:'intro',profile_image_url:'profile_image_url',is_published:'is_published',youtube_url:'youtube_url',youtube_thumbnail_url:'youtube_thumbnail_url'};
  for(const [src,dst] of Object.entries(map))if(src in b)memberPatch[dst]=b[src];
  if(b.email!==undefined&&!('public_email' in b))memberPatch.public_email=String(b.email).trim();
  if(Object.keys(memberPatch).length>1)await admin.from('members').update(memberPatch).eq('user_id',b.user_id);

  await admin.from('audit_logs').insert({actor_id:auth.user.id,action:'admin.user_full_update',target_type:'user',target_id:b.user_id,payload:{...accountPatch,email:b.email||undefined,password_reset:!!b.password,member_fields:Object.keys(memberPatch)}});
  return NextResponse.json({ok:true});
 }catch(e){return NextResponse.json({error:e?.message||'저장 실패'},{status:500});}
}
