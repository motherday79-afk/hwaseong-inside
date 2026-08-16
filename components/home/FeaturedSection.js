'use client';
import { useSiteAdminData } from '../SiteAdminData';
function Portrait({m}){const src=m.profileImage||m.image;return src?<img src={src} alt={`${m.name} 프로필`}/>:<div className="v7AvatarFallback"><span>{(m.name||'?').slice(0,1)}</span></div>}
export default function FeaturedSection(){
 const {data,members}=useSiteAdminData(); const list=(data.featuredIds||[]).map(id=>members.find(m=>String(m.id)===String(id))).filter(Boolean).slice(0,10);
 return <section className="v7Section v7Featured"><div className="v7Wrap"><div className="v7CenteredTitle"><span>LEADERS' CIRCLE</span><h2>Featured 10</h2><p>가치와 신뢰로 이어지는 프리미엄 멤버</p></div><div className="v7FeaturedGrid">{list.map((m,i)=><a className="v7Leader" href={`/members/${m.id}`} key={m.id}><b>{i+1}</b><div className="v7LeaderPhoto"><Portrait m={m}/></div><strong>{m.name}</strong><small>{m.job}</small></a>)}</div></div></section>;
}
