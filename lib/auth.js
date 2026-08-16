import { redirect } from 'next/navigation';
import { createClient } from './supabase/server';
import { createAdminClient } from './supabase/admin';

export async function getCurrentUser(){
  const supabase=await createClient();
  const {data:{user}}=await supabase.auth.getUser();
  if(!user) return null;
  const admin=createAdminClient();
  const {data:account}=await admin.from('app_users').select('username,role,status').eq('user_id',user.id).maybeSingle();
  return {...user,username:account?.username||'',role:account?.role||'member',status:account?.status||'active'};
}

export async function requireUser(){
  const user=await getCurrentUser();
  if(!user) redirect('/login');
  if(user.status==='suspended') redirect('/login?error=suspended');
  return user;
}

export async function requireRole(roles=['admin']){
  const user=await requireUser();
  if(!roles.includes(user.role)) redirect('/account?error=forbidden');
  return user;
}

export async function assertApiRole(roles=['admin']){
  const user=await getCurrentUser();
  if(!user) return {ok:false,status:401,error:'로그인이 필요합니다.'};
  if(!roles.includes(user.role)) return {ok:false,status:403,error:'권한이 없습니다.'};
  return {ok:true,user};
}
