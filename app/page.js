const featured = [
  ['1', 140, 730], ['2', 276, 730], ['3', 412, 730], ['4', 548, 730], ['5', 684, 730],
  ['6', 140, 866], ['7', 276, 866], ['8', 412, 866], ['9', 548, 866], ['10', 684, 866]
];

const regular = Array.from({ length: 20 }, (_, i) => {
  const col = i % 10;
  const row = Math.floor(i / 10);
  return [String(i + 11), 101 + col * 74, 1326 + row * 87];
});

const toPercent = (value, total) => `${(value / total) * 100}%`;

function Hotspot({ href, x, y, w, h, label }) {
  return (
    <a
      href={href}
      className="rebuildHotspot"
      aria-label={label}
      style={{
        left: toPercent(x, 941),
        top: toPercent(y, 1672),
        width: toPercent(w, 941),
        height: toPercent(h, 1672),
      }}
    />
  );
}

function Anchor({ id, y }) {
  return <span id={id} className="rebuildAnchor" style={{ top: toPercent(y, 1672) }} />;
}

export default function Home() {
  return (
    <main className="rebuildMain">
      <div className="rebuildArtboard">
        <img
          className="rebuildMaster"
          src="/assets/rebuild/main-rebuild-v1@3x.png"
          alt="화성인사이드 메인페이지"
        />

        <Anchor id="about" y={80} />
        <Anchor id="network" y={350} />
        <Anchor id="news" y={1010} />
        <Anchor id="community" y={1245} />
        <Anchor id="login" y={0} />
        <Anchor id="join" y={0} />

        {/* Header */}
        <Hotspot href="/" x={68} y={13} w={145} h={38} label="화성인사이드 홈" />
        <Hotspot href="#about" x={497} y={14} w={43} h={34} label="소개" />
        <Hotspot href="#network" x={545} y={14} w={67} h={34} label="네트워크" />
        <Hotspot href="#news" x={614} y={14} w={78} h={34} label="공지와 뉴스" />
        <Hotspot href="#community" x={693} y={14} w={67} h={34} label="커뮤니티" />
        <Hotspot href="#login" x={761} y={14} w={43} h={34} label="로그인" />
        <Hotspot href="#join" x={805} y={16} w={55} h={30} label="회원가입" />

        {/* Hero */}
        <Hotspot href="#join" x={111} y={255} w={112} h={39} label="지금 가입하기" />
        <Hotspot href="#network" x={235} y={255} w={118} h={39} label="더 알아보기" />

        {/* Chairman */}
        <Hotspot href="#network" x={93} y={378} w={441} h={236} label="의장 인사 영상" />

        {/* Featured 10 */}
        {featured.map(([id, x, y]) => (
          <Hotspot key={id} href={`/members/${id}`} x={x} y={y} w={108} h={130} label={`Featured ${id}번 멤버`} />
        ))}

        {/* News */}
        <Hotspot href="#news" x={780} y={1028} w={68} h={35} label="공지 뉴스 전체보기" />
        <Hotspot href="#news" x={98} y={1065} w={238} h={155} label="정기 네트워킹 행사 안내" />
        <Hotspot href="#news" x={343} y={1065} w={238} h={155} label="화성 어워즈 후보 공모" />
        <Hotspot href="#news" x={588} y={1065} w={238} h={155} label="신규 그룹장 모집 안내" />

        {/* 40 members */}
        <Hotspot href="#community" x={746} y={1262} w={90} h={31} label="전체 멤버 보기" />
        {regular.map(([id, x, y]) => (
          <Hotspot key={id} href={`/members/${id}`} x={x} y={y} w={66} h={78} label={`${id}번 멤버 상세보기`} />
        ))}
        <Hotspot href="#community" x={420} y={1502} w={102} h={32} label="멤버 더 보기" />

        {/* Footer */}
        <Hotspot href="/" x={96} y={1548} w={165} h={70} label="화성인사이드 홈" />
        <Hotspot href="#about" x={330} y={1548} w={155} h={105} label="링크 모음" />
        <Hotspot href="#about" x={525} y={1548} w={145} h={95} label="이용 안내" />
        <Hotspot href="#about" x={700} y={1548} w={135} h={85} label="문의 안내" />
        <Hotspot href="#about" x={840} y={1590} w={42} h={42} label="맨 위로" />
      </div>
    </main>
  );
}
