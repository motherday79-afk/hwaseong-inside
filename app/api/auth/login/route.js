import { NextResponse } from 'next/server';
import { createClient } from '../../../../lib/supabase/server';
import { createAdminClient } from '../../../../lib/supabase/admin';
function normalizeUsername(value=''){return String(value).trim().toLowerCase();}
export async function POST(request){
 try{
  const body=await request.json(); const username=normalizeUsername(body.username); const password=String(body.password||'');
  if(!username||!password)return NextResponse.json({error:'아이디와 비밀번호를 입력해주세요.'},{status:400});
  const admin=createAdminClient();
  const {data:account,error:accountError}=await admin.from('app_users').select('user_id,status,role').eq('username',username).maybeSingle();
  if(accountError)return NextResponse.json({error:'로그인 계정을 확인하지 못했습니다.'},{status:500});
  if(!account)return NextResponse.json({error:'아이디 또는 비밀번호가 올바르지 않습니다.'},{status:401});
  if(account.status==='suspended')return NextResponse.json({error:'정지된 계정입니다. 관리자에게 문의하세요.'},{status:403});
  const {data:userResult,error:userError}=await admin.auth.admin.getUserById(account.user_id); const email=userResult?.user?.email;
  if(userError||!email)return NextResponse.json({error:'로그인 계정 정보를 확인하지 못했습니다.'},{status:500});
  const supabase=await createClient(); const {error}=await supabase.auth.signInWithPassword({email,password});
  if(error)return NextResponse.json({error:'아이디 또는 비밀번호가 올바르지 않습니다.'},{status:401});
  return NextResponse.json({ok:true,role:account.role});
 }catch(e){return NextResponse.json({error:e?.message||'로그인에 실패했습니다.'},{status:500});}
}
