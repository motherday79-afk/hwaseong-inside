import { NextResponse } from 'next/server';
import { createAdminClient } from '../../../../lib/supabase/admin';

function normalizeUsername(value=''){
  return String(value).trim().toLowerCase();
}
function validUsername(value){
  return /^[a-z0-9_]{4,20}$/.test(value);
}

export async function GET(request){
  const username=normalizeUsername(new URL(request.url).searchParams.get('username')||'');
  if(!validUsername(username)) return NextResponse.json({available:false,error:'아이디는 영문 소문자, 숫자, 밑줄(_) 4~20자로 입력해주세요.'},{status:400});
  const admin=createAdminClient();
  const {data,error}=await admin.from('app_users').select('user_id').eq('username',username).maybeSingle();
  if(error) return NextResponse.json({available:false,error:'아이디 중복 확인에 실패했습니다.'},{status:500});
  return NextResponse.json({available:!data});
}
