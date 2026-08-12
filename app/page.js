'use client';

import { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MemberCard from '../components/MemberCard';
import { members } from '../data/members';

const BASE_WIDTH = 941;
const BASE_HEIGHT = 1672;

const news = [
  ['5월 정기 네트워킹 행사 안내','화성인사이드 5월 멤버들과 함께 새로운 연결을 만들어보세요.','2025.05.23','/assets/ui/news-1.png'],
  ['2025 화성 어워즈 후보 공모','올해를 빛낸 화성의 인재를 추천해주세요.','2025.05.15','/assets/ui/news-2.png'],
  ['신규 그룹장 모집 안내','새로운 네트워크 그룹을 함께 이끌어갈 리더를 기다립니다.','2025.05.01','/assets/ui/news-3.png'],
];

export default function Home(){
  const [more,setMore]=useState(false);
  const [scale,setScale]=useState(1);
  const featured=members.slice(0,10);
  const regular=members.slice(10);
  const shown=more?regular:regular.slice(0,20);

  useEffect(()=>{
    const resize=()=>setScale(Math.min(window.innerWidth/BASE_WIDTH,1.45));
    resize();
    window.addEventListener('resize',resize);
    return ()=>window.removeEventListener('resize',resize);
  },[]);

  const extraHeight = more ? 225 : 0;
  const canvasHeight = BASE_HEIGHT + extraHeight;

  return <div className="homeStage" style={{width:BASE_WIDTH*scale,height:canvasHeight*scale}}>
    <div className="homeCanvas" style={{transform:`scale(${scale})`,height:canvasHeight}}>
      <Header/>
      <main id="top">
        <section className="hero wrap" id="about">
          <div className="heroText">
            <h1><span>화성인 가치를,</span><br/>사람의 네트워크로 잇다</h1>
            <p>화성인사이드는 화성 출신 인재들이 함께 성장하고<br/>연결될 수 있는 프리미엄 네트워킹 플랫폼입니다.</p>
            <div className="actions"><button>지금 가입하기</button><button className="whiteBtn">더 알아보기　›</button></div>
          </div>
          <div className="heroImage"><img src="/assets/ui/hero-city.png" alt="화성인사이드"/></div>
        </section>

        <section className="mainCard wrap" id="network">
          <div className="chairGrid">
            <div className="movie">
              <img src="/assets/ui/chair-video.png" alt="의장 인사 영상"/>
            </div>
            <div className="messageBox">
              <h3>의장 인사말</h3>
              <div className="messageBody"><img src="/assets/ui/chair-portrait.png" alt="의장"/><div><p>안녕하세요.<br/>화성인사이드 의장 김도현입니다.</p><p>사람과 사람을 잇는 네트워크 안에<br/>무너지지 않는 가치가 있습니다.</p><p>화성의 우리의 가치와 기회이고,<br/>함께 만들어갈 미래입니다.</p><p>화성인사이드는<br/>여러분과 함께 그 여정을 이어갈 것입니다.</p></div></div>
              <div className="signRow"><small>화성인사이드 의장<br/><strong>김도현</strong></small><span>Kim Do Hyeon</span></div>
            </div>
          </div>

          <div className="featuredTitle"><span>❧　LEADERS' CIRCLE　❧</span><h2>Featured 10</h2><p>가치와 신뢰로 이끄는 10인의 프리미엄 멤버</p></div>
          <div className="featuredGrid">{featured.map(m=><MemberCard key={m.id} member={m}/>)}</div>

          <div className="newsBlock" id="news">
            <div className="rowTitle"><h2>📣 공지 & 뉴스</h2><a>전체보기　›</a></div>
            <div className="newsGrid">{news.map(n=><article key={n[0]}><img src={n[3]} alt=""/><div><h3>{n[0]} <em>NEW</em></h3><p>{n[1]}</p><small>{n[2]}</small></div></article>)}</div>
          </div>
        </section>

        <section className={`membersZone ${more?'expanded':''}`} id="community"><div className="wrap membersInner">
          <div className="rowTitle memberTitle"><div><small>👥 멤버</small><h2>40인 멤버</h2><p>각 분야에서 빛나는 화성인사이드 멤버를 소개합니다.</p></div><a>전체 멤버 보기　›</a></div>
          <div className="regularGrid">{shown.map(m=><MemberCard key={m.id} member={m} compact/>)}</div>
          <button className="moreBtn" onClick={()=>setMore(v=>!v)}>{more?'접기':'더 보기'}　{more?'⌃':'⌄'}</button>
        </div></section>
      </main>
      <Footer/>
    </div>
  </div>
}
