import { members } from '../../data/members';
export default function MembersSection(){
 const list=members.slice(10,30);
 return <section className="domSection domMembers" id="community"><div className="domWrap">
   <div className="domSimpleTitle"><div><h2>👥 멤버<br/><b>40인 멤버</b></h2><p>각 분야에서 활약하는 화성인 멤버들을 소개합니다.</p></div><a href="/members">전체 멤버 보기 ›</a></div>
   <div className="domMemberGrid">{list.map(m=><a href={`/members/${m.id}`} className="domMiniMember" key={m.id}><img src={m.image} alt={`${m.name} 프로필`}/><strong>{m.name}</strong><small>{m.job}</small></a>)}</div>
   <div className="domMore"><a href="/members">더 보기⌄</a></div>
 </div></section>
}
