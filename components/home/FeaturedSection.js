'use client';
import { useSiteAdminData } from '../SiteAdminData';
export default function FeaturedSection(){
 const {data,members}=useSiteAdminData(); const list=(data.featuredIds||[]).map(id=>members.find(m=>String(m.id)===String(id))).filter(Boolean).slice(0,10);
 return <section className="webSection webFeatured"><div className="webWrap"><div className="webCenteredTitle"><span>LEADERS' CIRCLE</span><h2>Featured 10</h2><p>각각의 분야를 빛내는 화성인 리더 10명</p></div><div className="webFeaturedGrid">{list.map((m,i)=><a className="webLeader" href={`/members/${m.id}`} key={m.id}><b>{i+1}</b><div className="webLeaderImg"><img src={m.profileImage||m.image} alt={`${m.name} 프로필`}/></div><strong>{m.name}</strong><small>{m.job}</small></a>)}</div></div></section>;
}
