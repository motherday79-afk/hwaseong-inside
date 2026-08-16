import { NextResponse } from 'next/server';
import { getCurrentUser } from '../../../lib/auth';
import { createAdminClient } from '../../../lib/supabase/admin';

export async function GET(){
  const user=await getCurrentUser(); if(!user)return NextResponse.json({error:'unauthorized'},{status:401});
  const admin=createAdminClient();
  const {data,error}=await admin.from('members').select('*, careers(*)').eq('user_id',user.id).maybeSingle();
  if(error)return NextResponse.json({error:error.message},{status:500});
  return NextResponse.json({user:{id:user.id,email:user.email,role:user.role},member:data});
}

export async function PUT(request){
  const user=await getCurrentUser(); if(!user)return NextResponse.json({error:'unauthorized'},{status:401});
  const body=await request.json(); const admin=createAdminClient();
  const allowed=['name','job','age','gender','public_email','school','area','tags','intro','profile_image_url','youtube_url','youtube_thumbnail_url'];
  const patch={updated_at:new Date().toISOString()}; allowed.forEach(k=>{if(k in body)patch[k]=body[k]});
  const {data,error}=await admin.from('members').update(patch).eq('user_id',user.id).select().maybeSingle();
  if(error)return NextResponse.json({error:error.message},{status:500});
  if(data?.id && Array.isArray(body.careers)){
    await admin.from('careers').delete().eq('member_id',data.id);
    if(body.careers.length) await admin.from('careers').insert(body.careers.slice(0,10).map((c,i)=>({member_id:data.id,sort_order:i,period:c.period||'',company:c.company||'',role:c.role||'',description:c.description||c.desc||''})));
  }
  await admin.from('audit_logs').insert({actor_id:user.id,action:'member.self_update',target_type:'member',target_id:String(data?.id||''),payload:patch});
  return NextResponse.json({member:data});
}
