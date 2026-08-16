export default function Hero(){
  return <section className="domHero" id="about">
    <div className="domWrap domHeroGrid">
      <div className="domHeroCopy">
        <h1><span>화성인 가치를,</span><br/>사람의 네트워크로 잇다</h1>
        <p>화성인사이드는 화성 출신 인재들이 함께 성장하고<br className="desktopOnly"/> 연결할 수 있는 프리미엄 네트워크 플랫폼입니다.</p>
        <div className="domHeroActions">
          <a className="domButton primary" href="#join">지금 가입하기</a>
          <a className="domButton ghost" href="#network">더 알아보기 <b>›</b></a>
        </div>
      </div>
      <div className="domHeroVisual" aria-hidden="true">
        <span className="orb orb1"></span><span className="orb orb2"></span><span className="orb orb3"></span>
        <img src="/assets/ui/hero-city.png" alt=""/>
      </div>
    </div>
  </section>;
}
