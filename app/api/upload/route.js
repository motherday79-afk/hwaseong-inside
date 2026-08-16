import { NextResponse } from 'next/server';
import { getCurrentUser } from '../../../lib/auth';
import { createAdminClient } from '../../../lib/supabase/admin';

const ALLOWED=['image/jpeg','image/png','image/webp','image/svg+xml'];
export async function POST(request){
  const user=await getCurrentUser(); if(!user)return NextResponse.json({error:'로그인이 필요합니다.'},{status:401});
  const form=await request.formData(); const file=form.get('file'); const folder=String(form.get('folder')||'misc').replace(/[^a-z0-9_-]/gi,'');
  if(!file||typeof file==='string')return NextResponse.json({error:'파일이 없습니다.'},{status:400});
  if(!ALLOWED.includes(file.type))return NextResponse.json({error:'JPG, PNG, WEBP, SVG만 업로드할 수 있습니다.'},{status:400});
  if(file.size>12*1024*1024)return NextResponse.json({error:'파일은 12MB 이하만 가능합니다.'},{status:400});
  const admin=createAdminClient(); const ext=(file.name.split('.').pop()||'bin').toLowerCase();
  const path=`${folder}/${user.id}/${Date.now()}-${crypto.randomUUID()}.${ext}`; const bytes=Buffer.from(await file.arrayBuffer());
  const {error}=await admin.storage.from('hwaseong-media').upload(path,bytes,{contentType:file.type,upsert:false,cacheControl:'31536000'});
  if(error)return NextResponse.json({error:error.message},{status:500});
  const {data}=admin.storage.from('hwaseong-media').getPublicUrl(path);
  return NextResponse.json({url:data.publicUrl,path});
}
