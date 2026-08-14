const W = 941;
const H = 1672;
const px = (v, total) => `${(v / total) * 100}%`;

const featured = [
  ['1', '박인식 Featured 멤버 상세보기', 80, 728],
  ['2', '김광선 Featured 멤버 상세보기', 237, 728],
  ['3', '김도현 Featured 멤버 상세보기', 394, 728],
  ['4', '박지은 Featured 멤버 상세보기', 551, 728],
  ['5', '최우진 Featured 멤버 상세보기', 708, 728],
  ['6', '오지훈 Featured 멤버 상세보기', 80, 868],
  ['7', '손예린 Featured 멤버 상세보기', 237, 868],
  ['8', '정지호 Featured 멤버 상세보기', 394, 868],
  ['9', '서영영 Featured 멤버 상세보기', 551, 868],
  ['10', '송시우 Featured 멤버 상세보기', 708, 868],
];

const regular = [
  ['11', 64, 1280], ['12', 147, 1280], ['13', 229, 1280], ['14', 312, 1280], ['15', 394, 1280],
  ['16', 477, 1280], ['17', 559, 1280], ['18', 642, 1280], ['19', 724, 1280], ['20', 807, 1280],
  ['21', 64, 1368], ['22', 147, 1368], ['23', 229, 1368], ['24', 312, 1368], ['25', 394, 1368],
  ['26', 477, 1368], ['27', 559, 1368], ['28', 642, 1368], ['29', 724, 1368], ['30', 807, 1368],
];

function Spot({ href, label, x, y, w, h, round = '12px' }) {
  return (
    <a
      href={href}
      aria-label={label}
      className="masterSpot"
      style={{
        left: px(x, W),
        top: px(y, H),
        width: px(w, W),
        height: px(h, H),
        borderRadius: round,
      }}
    />
  );
}

function Anchor({ id, y }) {
  return (
    <span
      id={id}
      className="masterAnchor"
      style={{ top: px(y, H) }}
      aria-hidden="true"
    />
  );
}

export default function Home() {
  return (
    <main className="masterMain">
      <div className="masterBoard">
        <img
          src="/assets/master/main-master-v1.png"
          alt="화성인사이드 메인페이지 마스터"
          className="masterImage"
        />

        <Anchor id="top" y={0} />
        <Anchor id="about" y={80} />
        <Anchor id="network" y={355} />
        <Anchor id="news" y={1010} />
        <Anchor id="community" y={1215} />
        <Anchor id="footer" y={1490} />

        <Spot href="#top" label="화성인사이드 홈" x={34} y={12} w={150} h={43} round="22px" />
        <Spot href="#about" label="소개" x={486} y={14} w={42} h={32} />
        <Spot href="#network" label="네트워크" x={544} y={14} w={58} h={32} />
        <Spot href="/notice-news" label="공지와 뉴스" x={614} y={14} w={73} h={32} />
        <Spot href="#community" label="커뮤니티" x={699} y={14} w={63} h={32} />
        <Spot href="#top" label="로그인" x={775} y={14} w={48} h={32} />
        <Spot href="#top" label="회원가입" x={831} y={8} w={78} h={45} round="23px" />

        <Spot href="#top" label="지금 가입하기" x={72} y={282} w={148} h={49} round="25px" />
        <Spot href="#network" label="더 알아보기" x={228} y={282} w={140} h={49} round="25px" />
        <Spot href="#network" label="의장 인사 영상" x={58} y={377} w={474} h={257} round="16px" />

        {featured.map(([id, label, x, y]) => (
          <Spot key={id} href={`/members/${id}`} label={label} x={x} y={y} w={134} h={133} round="14px" />
        ))}

        <Spot href="/notice-news" label="공지와 뉴스 전체보기" x={803} y={1014} w={88} h={30} />
        <Spot href="/notice-news/1" label="5월 정기 네트워킹 행사 안내" x={58} y={1049} w={264} h={151} round="16px" />
        <Spot href="/notice-news/2" label="2025 화성 어워즈 후보 공모" x={333} y={1049} w={264} h={151} round="16px" />
        <Spot href="/notice-news/3" label="신규 그룹장 모집 안내" x={609} y={1049} w={264} h={151} round="16px" />
        <Spot href="/notice-news" label="뉴스 오른쪽 넘기기" x={856} y={1086} w={31} h={40} round="20px" />

        <Spot href="/members" label="전체 멤버 보기" x={786} y={1214} w={96} h={31} round="16px" />
        {regular.map(([id, x, y]) => (
          <Spot key={id} href={`/members/${id}`} label={`${id}번 멤버 상세보기`} x={x} y={y} w={69} h={78} round="12px" />
        ))}
        <Spot href="/members" label="멤버 더보기" x={407} y={1448} w={119} h={37} round="19px" />

        <Spot href="#top" label="푸터 로고 홈" x={53} y={1504} w={190} h={116} round="20px" />
        <Spot href="#about" label="링크 모음" x={319} y={1507} w={150} h={126} />
        <Spot href="#about" label="이용 안내" x={520} y={1507} w={142} h={116} />
        <Spot href="#about" label="문의 안내" x={696} y={1507} w={152} h={108} />
        <Spot href="#top" label="맨 위로" x={857} y={1603} w={55} h={55} round="50%" />
      </div>
    </main>
  );
}
