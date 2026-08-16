'use client';
import { useAdmin } from '../../../components/admin/AdminStore';
import { PageTitle, Card, Badge } from '../../../components/admin/AdminUI';
export default function FeaturedAdmin(){
 const {data,setData,members}=useAdmin();
 const ids=data.featuredIds||[];
 const move=(i,dir)=>{const next=[...ids];const j=i+dir;if(j<0||j>=next.length)return;[next[i],next[j]]=[next[j],next[i]];setData(p=>({...p,featuredIds:next}));};
 const remove=(id)=>setData(p=>({...p,featuredIds:p.featuredIds.filter(x=>x!==id)}));
 const add=(id)=>{if(ids.includes(id)||ids.length>=10)return;setData(p=>({...p,featuredIds:[...p.featuredIds,id]}));};
 return <div className="adminPage"><PageTitle title="Top10 관리" desc="메인 Featured 10의 노출 멤버와 순서를 관리합니다. 1~10번 순서가 메인 카드 순서가 됩니다."/>
  <div className="adminTwoCol adminFeatureCols"><Card title="현재 Featured 10" desc="위/아래 버튼으로 순서를 변경하세요."><div className="adminFeaturedList">{ids.map((id,i)=>{const m=members.find(x=>String(x.id)===String(id));if(!m)return null;return <div key={id}><b className="adminRank">{i+1}</b><img src={m.profileImage||m.image} alt=""/><span><strong>{m.name}</strong><small>{m.job}</small></span><div><button onClick={()=>move(i,-1)}>↑</button><button onClick={()=>move(i,1)}>↓</button><button onClick={()=>remove(id)}>제외</button></div></div>})}</div></Card>
  <Card title="후보 회원" desc="Top10에 넣을 회원을 선택합니다."><div className="adminCandidateList">{members.filter(m=>!ids.includes(String(m.id))).slice(0,25).map(m=><button key={m.id} disabled={ids.length>=10} onClick={()=>add(String(m.id))}><img src={m.profileImage||m.image} alt=""/><span><b>{m.name}</b><small>{m.job}</small></span><Badge>추가</Badge></button>)}</div></Card></div>
 </div>
}
