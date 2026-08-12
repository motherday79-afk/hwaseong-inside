import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import Avatar from '../../../components/Avatar';
import MemberCard from '../../../components/MemberCard';
import Radar from '../../../components/Radar';
import { members, getMember } from '../../../data/members';

const copy={
  센스:'상황을 빠르게 파악하고 핵심을 짚어냅니다.',
  끈기:'포기하지 않고 끝까지 목표를 향해 나아갑니다.',
  열정:'일에 몰입하여 에너지를 만들어냅니다.',
  꿈:'더 나은 브랜드와 세상을 꿈꿉니다.',
  재능:'아이디어를 구체화하고 실행력으로 연결합니다.',
  협업:'다양한 사람들과 함께 시너지를 만들어냅니다.'
};
const icons={센스:'✧',끈기:'🏆',열정:'◉',꿈:'☆',재능:'✎',협업:'◌'};

export default async function Profile({params}){
  const {id}=await params;
  const member=getMember(id);
  const recs=members.filter(m=>m.id!==member.id).slice(0,5);
  return <>
    <Header/>
    <main className="profile wrap">
      <div className="crumb">⌂　›　Members　›　Profile</div>
      <section className="profileHero">
        <div className="profilePhoto"><Avatar member={member} large/></div>
        <div className="profileInfo">
          <div className="tier">◇ {member.tier} Member</div>
          <div className="name"><h1>{member.name}</h1><span>{member.job}</span></div>
          <p className="script">사람과 브랜드를 연결해, 가치를 오래 남기고 싶습니다.</p>
          <div className="facts"><span>◷ <b>나이</b>{member.age}세</span><span>⌘ <b>직업 / 직책</b>{member.job}</span><span>♙ <b>성별</b>{member.gender}</span><span>✉ <b>이메일</b>{member.email}</span><span>♜ <b>최종학력</b>{member.school}</span><span>⌖ <b>활동 지역</b>{member.area}</span></div>
          <div className="chips">{member.tags.map(t=><span key={t}>{t}</span>)}</div>
        </div>
      </section>

      <section className="profileCols">
        <article className="whiteCard intro"><h2>💬　개성있는 소개</h2><p>{member.intro}</p><p>데이터에 기반한 통찰과 감정적 이야기로 행동을 바꾸고, 더 나아가 사회적 가치를 만드는 브랜드를 기획하는 일을 하고 있습니다.</p><p>화성인사이드의 다양한 분야의 리더들과 교류하며 새로운 시너지를 만들고, 우리 지역에 긍정적인 변화를 만들어가고 싶어요.</p></article>
        <article className="whiteCard career"><h2>👜　믿을 수 있는 경력 · 이력</h2><div className="timeline">{member.careers.map(c=><div className="careerRow" key={c.period}><b>{c.period}</b><div><strong>{c.company}</strong><span>{c.role}</span><p>{c.desc}</p><a>주요 성과 보기　›</a></div></div>)}</div></article>
      </section>

      <section className="whiteCard recommend"><div className="recommendHead"><h2>♡　{member.name}님과 매칭 포인트가 높은 화성인사이드 멤버 추천</h2><button>→</button></div><div className="recommendGrid">{recs.map((m,i)=><div className="rec" key={m.id}><i>매칭 {92-i*3}%</i><MemberCard member={m} compact/><div><span>{m.tags[0]}</span><span>{m.tags[1]}</span></div></div>)}</div></section>

      <section className="whiteCard radarSection"><div><h2>☆　{member.name}님의 강점 레이더</h2><p>다양한 강점을 통해 디자인, 실행력의 강점을 소개합니다.</p><Radar values={member.strengths}/></div><div className="strengthGrid">{Object.keys(member.strengths).map(k=><div key={k}><b>{icons[k]}　{k}</b><span>{copy[k]}</span></div>)}</div></section>

      <section className="connect"><i>✈</i><div><b>함께 연결하고 싶다면?</b><span>{member.name}님과 네트워크를 맺고, 다양한 방식으로 협업의 기회를 만들어보세요.</span></div><button>네트워크 요청하기　♧</button><button className="outline">메시지 보내기　✉</button></section>
    </main>
    <Footer/>
  </>
}
