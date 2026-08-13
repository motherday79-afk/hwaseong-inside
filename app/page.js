const featured = [
  [1, 14.878, 43.481], [2, 29.118, 43.481], [3, 43.464, 43.481], [4, 57.811, 43.481], [5, 72.157, 43.481],
  [6, 14.878, 51.794], [7, 29.118, 51.794], [8, 43.464, 51.794], [9, 57.811, 51.794], [10, 72.157, 51.794]
];

const regularX = [10.627, 18.491, 26.461, 34.325, 42.295, 50.159, 58.13, 65.994, 73.964, 81.828];
const regular = Array.from({ length: 20 }, (_, index) => {
  const row = Math.floor(index / 10);
  const col = index % 10;
  return [index + 11, regularX[col], row === 0 ? 79.187 : 84.749];
});

function Hotspot({ href, left, top, width, height, label, className = '' }) {
  return (
    <a
      href={href}
      aria-label={label}
      className={`mainHotspot ${className}`}
      style={{ left: `${left}%`, top: `${top}%`, width: `${width}%`, height: `${height}%` }}
    />
  );
}

export default function Home() {
  return (
    <main className="exactMain" id="top">
      <div className="exactArtboard">
        <img
          src="/assets/mockup/main-page-reference@3x.png"
          alt="화성인사이드 메인페이지"
          className="exactMainImage"
          width="2823"
          height="5016"
          decoding="sync"
          draggable="false"
        />

        <span id="about" className="anchorPoint" style={{ top: '5%' }} />
        <span id="network" className="anchorPoint" style={{ top: '21%' }} />
        <span id="news" className="anchorPoint" style={{ top: '60%' }} />
        <span id="community" className="anchorPoint" style={{ top: '74%' }} />
        <span id="login" className="anchorPoint" style={{ top: '0%' }} />
        <span id="join" className="anchorPoint" style={{ top: '12%' }} />

        <Hotspot href="/" left={7.439} top={0.598} width={12.221} height={2.512} label="화성인사이드 홈" />
        <Hotspot href="#about" left={53.666} top={0.718} width={4.251} height={2.153} label="소개" />
        <Hotspot href="#network" left={58.98} top={0.718} width={5.632} height={2.153} label="네트워크" />
        <Hotspot href="#news" left={65.675} top={0.718} width={6.589} height={2.153} label="공지와 뉴스" />
        <Hotspot href="#community" left={73.326} top={0.718} width={5.739} height={2.153} label="커뮤니티" />
        <Hotspot href="#login" left={79.171} top={0.718} width={4.782} height={2.153} label="로그인" />
        <Hotspot href="#join" left={84.272} top={0.478} width={6.908} height={2.632} label="회원가입" />

        <Hotspot href="#join" left={11.371} top={14.952} width={12.965} height={2.99} label="지금 가입하기" />
        <Hotspot href="#network" left={25.08} top={14.952} width={12.434} height={2.99} label="더 알아보기" />

        <Hotspot href="#network" left={9.777} top={22.548} width={46.652} height={14.175} label="의장 인사 영상" className="videoHotspot" />

        {featured.map(([id, left, top]) => (
          <Hotspot
            key={`featured-${id}`}
            href={`/members/${id}`}
            left={left}
            top={top}
            width={11.69}
            height={7.895}
            label={`Featured ${id} 멤버 상세보기`}
            className="cardHotspot"
          />
        ))}

        <Hotspot href="#news" left={81.828} top={61.603} width={6.057} height={1.854} label="공지 뉴스 전체보기" />
        <Hotspot href="#news" left={10.202} top={63.577} width={24.867} height={9.211} label="첫 번째 공지 보기" className="newsHotspot" />
        <Hotspot href="#news" left={36.557} top={63.577} width={25.08} height={9.211} label="두 번째 공지 보기" className="newsHotspot" />
        <Hotspot href="#news" left={63.018} top={63.577} width={25.399} height={9.211} label="세 번째 공지 보기" className="newsHotspot" />

        <Hotspot href="/members" left={80.234} top={75.658} width={8.183} height={2.333} label="전체 멤버 보기" />
        {regular.map(([id, left, top]) => (
          <Hotspot
            key={`regular-${id}`}
            href={`/members/${id}`}
            left={left}
            top={top}
            width={7.014}
            height={5.084}
            label={`${id}번 멤버 상세보기`}
            className="regularHotspot"
          />
        ))}
        <Hotspot href="/members" left={43.677} top={89.474} width={11.265} height={2.033} label="멤버 더 보기" />
        <Hotspot href="#top" left={88.948} top={94.199} width={4.782} height={2.931} label="맨 위로" />
      </div>
    </main>
  );
}
