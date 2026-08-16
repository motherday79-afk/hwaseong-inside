import { NextResponse } from 'next/server';
import { createAdminClient } from '../../../../lib/supabase/admin';
export async function GET(){
 const admin=createAdminClient();
 const [{data:site},{data:members},{data:news}]=await Promise.all([
  admin.from('site_state').select('payload').eq('id','main').maybeSingle(),
  admin.from('members').select('id,name,job,age,gender,public_email,school,area,tier,tags,intro,profile_image_url,featured_rank').eq('is_published',true).order('id'),
  admin.from('board_posts').select('id,title,excerpt,cover_url,created_at').eq('board_type','notice').eq('is_published',true).order('created_at',{ascending:false}).limit(12)
 ]);
 const data=site?.payload||{};data.news=(news||[]).map(n=>({id:String(n.id),category:'공지',title:n.title,excerpt:n.excerpt,date:(n.created_at||'').slice(0,10).replaceAll('-','.'),coverUrl:n.cover_url||'',published:true}));
 const cleanProfile=(u='',id)=>{const v=String(u||'');if(v.startsWith('/assets/members/'))return Number(id)===1?'/assets/real/park-insik.jpg':Number(id)===2?'/assets/real/kim-gwangsun.jpg':'';return v};
 const out=(members||[]).map(m=>{const profile=cleanProfile(m.profile_image_url,m.id);return {id:String(m.id),name:m.name,job:m.job,age:m.age,gender:m.gender,email:m.public_email,school:m.school,area:m.area,tier:m.tier,featured:m.featured_rank!=null,tags:m.tags||[],intro:m.intro||'',image:profile,profileImage:profile};});
 return NextResponse.json({data,members:out},{headers:{'Cache-Control':'public, s-maxage=30, stale-while-revalidate=120'}});
}
