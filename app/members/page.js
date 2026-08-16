import SamplePortrait from '../../components/SamplePortrait';
import { createAdminClient } from '../../lib/supabase/admin';
export const dynamic='force-dynamic';
const clean=(u='',id)=>{const v=String(u||'');if(v.startsWith('/assets/members/'))return Number(id)===1?'/assets/real/park-insik.jpg':Number(id)===2?'/assets/real/kim-gwangsun.jpg':'';return v};
export default async function MembersPage(){
 let members=[];try{const admin=createAdminClient();const {data}=await admin.from('members').select('id,name,job,gender,profile_image_url,tier,area').eq('is_published',true).order('featured_rank',{ascending:true,nullsFirst:false}).order('id');members=data||[]}catch{}
 const seen=new Set(); return <main className="publicListPage"><div className="publicPageHead"><a href="/">← 화성인사이드</a><h1>화성인사이드 멤버</h1><p>각 분야의 전문성을 가진 멤버들을 만나보세요.</p></div><div className="publicMemberGrid">{members.map(m=>{let src=clean(m.profile_image_url,m.id);if(src){if(seen.has(src))src='';else seen.add(src);}return <a href={`/members/${m.id}`} key={m.id}><div>{src?<img src={src} alt={`${m.name} 프로필`}/>:<SamplePortrait id={m.id} gender={m.gender}/>}</div><b>{m.name}</b><small>{m.job}</small><em>{m.tier} · {m.area}</em></a>})}</div></main>
}
