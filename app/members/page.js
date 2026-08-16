import { createAdminClient } from '../../lib/supabase/admin';
export const dynamic='force-dynamic';
export default async function MembersPage(){
 let members=[];try{const admin=createAdminClient();const {data}=await admin.from('members').select('id,name,job,profile_image_url,tier,area').eq('is_published',true).order('featured_rank',{ascending:true,nullsFirst:false}).order('id');members=data||[]}catch{}
 return <main className="publicListPage"><div className="publicPageHead"><a href="/">← 화성인사이드</a><h1>화성인사이드 멤버</h1><p>각 분야의 전문성을 가진 멤버들을 만나보세요.</p></div><div className="publicMemberGrid">{members.map(m=><a href={`/members/${m.id}`} key={m.id}><div>{m.profile_image_url?<img src={m.profile_image_url} alt={`${m.name} 프로필`}/>:<span>프로필</span>}</div><b>{m.name}</b><small>{m.job}</small><em>{m.tier} · {m.area}</em></a>)}</div></main>
}
