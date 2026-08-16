export default function ChairSection(){
  return <section className="domSection" id="network">
    <div className="domWrap domChairGrid">
      <a className="domVideoCard" href="#network" aria-label="박인식 의장 인사 영상">
        <img src="/assets/ui/chair-video-current.png" alt="박인식 의장 인사 영상 썸네일"/>
        <div className="domVideoShade"></div>
        <div className="domVideoCopy"><small>의장 인사 영상</small><strong>박인식의<br/>문화와 기술,<br/><em>사람을 잇다</em></strong></div>
        <div className="domPlayerBar"><span>▶</span><span className="timeline"></span><span>0:02 / 2:15</span></div>
      </a>
      <article className="domChairMessage">
        <div className="domChairPhoto"><img src="/assets/members/profile-01.jpg" alt="박인식 의장/영화감독"/></div>
        <div className="domChairText">
          <h2>의장 인사말</h2>
          <p>안녕하세요.<br/>화성인사이드의 의장/영화감독 박인식 입니다.</p>
          <p>한사람, 한사람을 깊이보고 공감하며 전문성 있는 네트워크의 연결을 구현하고 싶었습니다.</p>
          <p>화성인사이드를 통해 더넓은 세상으로의 도약을 응원합니다.</p>
          <strong>의장/영화감독<br/>박인식</strong>
          <span className="domSignature">박인식</span>
        </div>
      </article>
    </div>
  </section>;
}
