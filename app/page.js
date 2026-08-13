const W = 941;
const H = 1672;
const px = (v, total) => `${(v / total) * 100}%`;

const featured = [
  ['1', 83, 733], ['2', 239, 733], ['3', 395, 733], ['4', 551, 733], ['5', 706, 733],
  ['6', 83, 877], ['7', 239, 877], ['8', 395, 877], ['9', 551, 877], ['10', 706, 877],
];

const regular = [
  ['11', 74, 1283], ['12', 145, 1283], ['13', 216, 1283], ['14', 287, 1283], ['15', 358, 1283],
  ['16', 429, 1283], ['17', 500, 1283], ['18', 571, 1283], ['19', 642, 1283], ['20', 713, 1283],
  ['21', 74, 1366], ['22', 145, 1366], ['23', 216, 1366], ['24', 287, 1366], ['25', 358, 1366],
  ['26', 429, 1366], ['27', 500, 1366], ['28', 571, 1366], ['29', 642, 1366], ['30', 713, 1366],
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
        <Anchor id="about" y={78} />
        <Anchor id="network" y={353} />
        <Anchor id="news" y={1036} />
        <Anchor id="community" y={1247} />
        <Anchor id="footer" y={1530} />

        {/* header */}
        <Spot href="#top" label="화성인사이드 홈" x={31} y={17} w={190} h={48} round="24px" />
        <Spot href="#about" label="소개" x={493} y={18} w={44} h={28} />
        <Spot href="#network" label="네트워크" x={559} y={18} w={63} h={28} />
        <Spot href="#news" label="공지와 뉴스" x={638} y={18} w={84} h={28} />
        <Spot href="#community" label="커뮤니티" x={738} y={18} w={68} h={28} />
        <Spot href="#top" label="로그인" x={819} y={18} w={47} h={28} />
        <Spot href="#top" label="회원가입" x={867} y={11} w={79} h={42} round="24px" />

        {/* hero buttons */}
        <Spot href="#top" label="지금 가입하기" x={80} y={315} w={145} h={51} round="26px" />
        <Spot href="#network" label="더 알아보기" x={240} y={315} w={145} h={51} round="26px" />

        {/* chair video */}
        <Spot href="#network" label="의장 인사 영상" x={50} y={430} w={489} h={221} round="16px" />

        {/* featured 10 */}
        {featured.map(([id, x, y]) => (
          <Spot
            key={id}
            href={`/members/${id}`}
            label={`${id}번 Featured 멤버 상세보기`}
            x={x}
            y={y}
            w={148}
            h={132}
            round="14px"
          />
        ))}

        {/* news */}
        <Spot href="#news" label="공지와 뉴스 전체보기" x={833} y={1050} w={70} h={26} />
        <Spot href="#news" label="5월 정기 네트워킹 행사 안내" x={67} y={1089} w={266} h={143} round="16px" />
        <Spot href="#news" label="2025 화성 어워즈 후보 공모" x={350} y={1089} w={266} h={143} round="16px" />
        <Spot href="#news" label="신규 그룹장 모집 안내" x={632} y={1089} w={266} h={143} round="16px" />
        <Spot href="#news" label="뉴스 오른쪽 넘기기" x={901} y={1133} w={28} h={39} round="20px" />

        {/* regular members */}
        <Spot href="/members" label="전체 멤버 보기" x={789} y={1269} w={103} h={27} round="14px" />
        {regular.map(([id, x, y]) => (
          <Spot
            key={id}
            href={`/members/${id}`}
            label={`${id}번 멤버 상세보기`}
            x={x}
            y={y}
            w={55}
            h={73}
            round="12px"
          />
        ))}
        <Spot href="/members" label="멤버 더보기" x={427} y={1458} w={95} h={32} round="18px" />

        {/* footer and top button */}
        <Spot href="#top" label="푸터 로고 홈" x={61} y={1537} w={205} h={92} round="20px" />
        <Spot href="#about" label="링크 모음" x={335} y={1548} w={123} h={101} />
        <Spot href="#about" label="이용 안내" x={548} y={1548} w={108} h={95} />
        <Spot href="#about" label="문의 안내" x={745} y={1548} w={128} h={88} />
        <Spot href="#top" label="맨 위로" x={893} y={1611} w={41} h={41} round="50%" />
      </div>
    </main>
  );
}
