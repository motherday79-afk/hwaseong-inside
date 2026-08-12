import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import Avatar from '../../../components/Avatar';
import MemberCard from '../../../components/MemberCard';
import Radar from '../../../components/Radar';
import {members,getMember} from '../../../data/members';

export default async function Profile({params}){
  const {id}=await params; const member=getMember(id);
  const recs=members.filter(m=>m.id!==member.id).slice((Number(member.id)+2)%20,((Number(member.id)+2)%20)+5);
  return <><Header/><main className="profilePage wrap"><div className="crumb">⌂　›　Members　›　Profile</div>
    <section className="profileHero"><Avatar member={member} large/><div className="profileInfo"><div className="tier">◇ {member.tier} Member</div><div className="nameLine"><h1>{member.name}</h1><span>{member.job}</span></div><p className="hand">사람과 브랜드를 연결해, 가치를 오래 남기고 싶습니다.</p><div className="facts"><span>◷ <b>나이</b> {member.age}세</span><span>⚙ <b>직업 / 직책</b> {member.job}</span><span>♙ <b>성별</b> {member.gender}</span><span>✉ <b>이메일</b> {member.email}</span><span>♜ <b>최종학력</b> {member.school}</span><span>⌖ <b>활동 지역</b> {member.area}</span></div><div className="chips">{member.tags.map(t=><span key={t}>{t}</span>)}</div></div></section>

    <section className="twoCol"><article className="card intro"><h2>💬 개성있는 소개</h2><p>{member.intro}</p><p>데이터와 감정을 함께 보고, 사람들의 일상 안에서 의미 있는 변화를 만드는 일을 즐깁니다.</p></article><article className="card career"><h2>♙ 믿을 수 있는 경력 · 이력</h2>{member.careers.map(c=><div className="careerRow" key={c.period}><b>{c.period}</b><div><strong>{c.company}</strong><span>{c.role}</span><p>{c.desc}</p></div><a>주요 성과 보기 ›</a></div>)}</article></section>

    <section className="card recommend"><h2>♡ {member.name}님과 매칭 포인트가 높은 화성인사이드 멤버 추천</h2><div className="recommendGrid">{recs.map((m,i)=><div className="recWrap" key={m.id}><span className="match">매칭 {92-i*3}%</span><MemberCard member={m} compact/><div className="miniTags"><span>{m.tags[0]}</span><span>{m.tags[1]}</span></div></div>)}</div></section>

    <section className="card strengths"><div><h2>☆ {member.name}님의 강점 레이더</h2><p>다양한 강점을 통해 {member.name}님의 성향을 소개합니다.</p><Radar values={member.strengths}/></div><div className="strengthList">{Object.keys(member.strengths).map((k,i)=><div key={k}><b>{['✧','🏆','🔥','☁','✎','☆'][i]} {k}</b><span>{['상황을 빠르게 파악하고 핵심을 짚어냅니다.','포기하지 않고 끝까지 목표를 향해 나아갑니다.','일에 몰입하며 에너지를 만들어냅니다.','더 나은 방향과 가능성을 꿈꿉니다.','아이디어를 구체화하고 실행력으로 연결합니다.','다른 사람들과 함께 시너지를 만들어냅니다.'][i]}</span></div>)}</div></section>

    <section className="connect"><div><b>➤ 함께 연결하고 싶다면?</b><span>{member.name}님과 네트워크를 맺고, 다양한 방식으로 협업의 기회를 만들어보세요.</span></div><button>네트워크 요청하기</button><button className="ghost">메시지 보내기 ✉</button></section>
  </main><Footer/></>
}
