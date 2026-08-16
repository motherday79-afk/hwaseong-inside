import { NextResponse } from 'next/server';
import { createAdminClient } from '../../../../lib/supabase/admin';
function norm(v=''){return String(v).trim();}
export async function POST(request){
 try{
  const b=await request.json();
  const username=norm(b.username).toLowerCase(); const email=norm(b.email).toLowerCase();
  const password=String(b.password||''); const name=norm(b.name); const job=norm(b.job);
  if(!/^[a-z0-9_]{4,20}$/.test(username))return NextResponse.json({error:'아이디는 영문 소문자·숫자·_ 4~20자입니다.'},{status:400});
  if(password.length<6)return NextResponse.json({error:'비밀번호는 6자 이상 입력해주세요.'},{status:400});
  if(!email||!name||!job)return NextResponse.json({error:'필수 정보를 모두 입력해주세요.'},{status:400});
  const admin=createAdminClient();
  const {data:dupe}=await admin.from('app_users').select('user_id').eq('username',username).maybeSingle();
  if(dupe)return NextResponse.json({error:'이미 사용 중인 아이디입니다.'},{status:409});
  const {data,error}=await admin.auth.admin.createUser({email,password,email_confirm:true,user_metadata:{username,name,job}});
  if(error){
   const msg=(error.message||'').toLowerCase();
   if(msg.includes('already')||msg.includes('registered'))return NextResponse.json({error:'이미 가입된 이메일입니다.'},{status:409});
   return NextResponse.json({error:error.message||'회원가입에 실패했습니다.'},{status:400});
  }
  return NextResponse.json({ok:true,user_id:data.user?.id});
 }catch(e){return NextResponse.json({error:e?.message||'회원가입에 실패했습니다.'},{status:500});}
}
