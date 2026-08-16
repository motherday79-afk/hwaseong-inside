import { NextResponse } from 'next/server';
import { createAdminClient } from '../../../../lib/supabase/admin';
export async function GET(){
 const admin=createAdminClient();
 const [{data:site},{data:members},{data:news}]=await Promise.all([
  admin.from('site_state').select('payload').eq('id','main').maybeSingle(),
  admin.from('members').select('id,name,job,age,gender,public_email,school,area,tier,tags,intro,profile_image_url,featured_rank').eq('is_published',true).order('id'),
  admin.from('news_posts').select('id,category,title,excerpt,cover_url,published_at').eq('is_published',true).order('published_at',{ascending:false}).limit(12)
 ]);
 const data=site?.payload||{};data.news=(news||[]).map(n=>({id:String(n.id),category:n.category,title:n.title,excerpt:n.excerpt,date:(n.published_at||'').slice(0,10).replaceAll('-','.'),coverUrl:n.cover_url||'',published:true}));
 const out=(members||[]).map(m=>({id:String(m.id),name:m.name,job:m.job,age:m.age,gender:m.gender,email:m.public_email,school:m.school,area:m.area,tier:m.tier,featured:m.featured_rank!=null,tags:m.tags||[],intro:m.intro||'',image:m.profile_image_url||'',profileImage:m.profile_image_url||''}));
 return NextResponse.json({data,members:out},{headers:{'Cache-Control':'public, s-maxage=30, stale-while-revalidate=120'}});
}
