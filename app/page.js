'use client';
import {useState} from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MemberCard from '../components/MemberCard';
import {members} from '../data/members';

const newsItems=[
  ['5월 정기 네트워킹 행사 안내','화성인사이드 5월 멤버들과 함께 새로운 연결을 만들어보세요.','2026.08.10','/assets/ui/news-1.png'],
  ['2026 화성 어워즈 후보 공모','올해를 빛낸 화성의 인재를 추천해주세요.','2026.08.08','/assets/ui/news-2.png'],
  ['신규 그룹장 모집 안내','새로운 네트워크 그룹을 함께 이끌어갈 리더를 기다립니다.','2026.08.06','/assets/ui/news-3.png']
];

export default function Home(){
  const [expanded,setExpanded]=useState(false);
  const featured=members.slice(0,10);
  const regular=members.slice(10);
  const shown=expanded?regular:regular.slice(0,20);
  return <>
    <Header/>
    <main>
      <section className="hero wrap" id="about">
        <div className="heroCopy">
          <h1><span>화성인 가치를,</span><br/>사람의 네트워크로 잇다</h1>
          <p>화성인사이드는 화성 출신 인재들이 함께 성장하고<br/>연결될 수 있는 프리미엄 네트워킹 플랫폼입니다.</p>
          <div className="heroActions"><button>지금 가입하기</button><button className="ghost">더 알아보기 <b>›</b></button></div>
        </div>
        <div className="heroArt"><img src="/assets/ui/hero-city.png" alt="화성인사이드 네트워크 비주얼"/></div>
      </section>

      <section className="chairPanel wrap" id="network">
        <div className="videoCard">
          <img src="/assets/ui/chair-video.png" alt="의장 인사 영상 미리보기"/>
          <div className="videoBadge">의장 인사 영상</div>
          <button className="playButton" aria-label="영상 재생">▶</button>
        </div>
        <div className="chairMessage">
          <h3>의장 인사말</h3>
          <div className="chairPerson">
            <img src="/assets/ui/chair-portrait.png" alt="화성인사이드 의장"/>
            <div>
              <p>안녕하세요.<br/>화성인사이드 의장 김도현입니다.</p>
              <p>사람과 사람을 잇는 네트워크 안에 무너지지 않는 가치가 있습니다.</p>
              <p>화성의 우리의 가치와 기회이고,<br/>함께 만들어갈 미래입니다.</p>
            </div>
          </div>
          <div className="chairName">화성인사이드 의장 <b>김도현</b></div>
          <div className="signature">Kim Do Hyeon</div>
        </div>
      </section>

      <section className="featured wrap">
        <div className="sectionTitle"><span>LEADERS' CIRCLE</span><h2>Featured 10</h2><p>가치와 신뢰로 이끄는 10인의 프리미엄 멤버</p></div>
        <div className="featuredGrid">{featured.map(m=><MemberCard key={m.id} member={m}/>)}</div>
      </section>

      <section className="news wrap" id="news">
        <div className="headingRow"><h2>📣 공지 & 뉴스</h2><a>전체보기 ›</a></div>
        <div className="newsGrid">{newsItems.map((n)=><article key={n[0]}><img className="newsVisual" src={n[3]} alt=""/><div className="newsBody"><h3>{n[0]} <em>NEW</em></h3><p>{n[1]}</p><small>{n[2]}</small></div></article>)}</div>
      </section>

      <section className="membersSection" id="community"><div className="wrap">
        <div className="headingRow"><div><small>👥 멤버</small><h2>40인 멤버</h2><p>각자의 분야에서 빛나는 화성인사이드 멤버를 소개합니다.</p></div><a>전체 멤버 보기 ›</a></div>
        <div className="regularGrid">{shown.map(m=><MemberCard key={m.id} member={m} compact/>)}</div>
        <button className="more" onClick={()=>setExpanded(v=>!v)}>{expanded?'접기':'더 보기'} <span>{expanded?'⌃':'⌄'}</span></button>
      </div></section>
    </main>
    <Footer/>
  </>
}
