const W = 941;
const H = 1672;
const pct = (v, total) => `${(v / total) * 100}%`;

function Spot({ href, label, x, y, w, h, round = '12px' }) {
  return (
    <a
      href={href}
      aria-label={label}
      className="masterSpot"
      style={{
        left: pct(x, W),
        top: pct(y, H),
        width: pct(w, W),
        height: pct(h, H),
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
      style={{ top: pct(y, H) }}
      aria-hidden="true"
    />
  );
}

const profileConfigs = {
  '1': {
    image: '/assets/master/detail-master-park-v1.png',
    alt: '화성인사이드 박인식 프로필 상세페이지',
    careerLinks: [
      '서울구로국제어린이영화제 주요 성과 보기',
      '청소년 뮤지컬영화 빵셔틀 주요 성과 보기',
      '디지털단편영화 및 한국AI콘텐츠학회 주요 성과 보기',
    ],
    recommended: [
      ['2', '추천 멤버 김광선'],
      ['3', '추천 멤버 홍서연'],
      ['4', '추천 멤버 박지은'],
      ['5', '추천 멤버 최우진'],
      ['6', '추천 멤버 서하윤'],
    ],
  },
  '2': {
    image: '/assets/master/detail-master-kim-v1.png',
    alt: '화성인사이드 김광선 프로필 상세페이지',
    careerLinks: [
      '인사이트랩 주요 성과 보기',
      '커넥트미디어 주요 성과 보기',
      '스테이지웍스 주요 성과 보기',
    ],
    recommended: [
      ['3', '추천 멤버 이준혁'],
      ['4', '추천 멤버 박소연'],
      ['5', '추천 멤버 정민수'],
      ['6', '추천 멤버 최유진'],
      ['1', '추천 멤버 박인식'],
    ],
  },
};

const fallback = profileConfigs['2'];

export default async function Profile({ params }) {
  const resolvedParams = await params;
  const config = profileConfigs[resolvedParams?.id] || fallback;

  return (
    <main className="masterMain detailMasterMain">
      <div className="masterBoard detailMasterBoard">
        <img src={config.image} alt={config.alt} className="masterImage" />

        <Anchor id="detail-top" y={0} />
        <Anchor id="profile" y={100} />
        <Anchor id="career" y={685} />
        <Anchor id="recommend" y={935} />
        <Anchor id="strength" y={1155} />
        <Anchor id="connect" y={1395} />

        {/* Header */}
        <Spot href="/" label="화성인사이드 홈" x={39} y={12} w={135} h={43} round="22px" />
        <Spot href="/#about" label="소개" x={495} y={14} w={38} h={30} />
        <Spot href="/#network" label="네트워크" x={548} y={14} w={55} h={30} />
        <Spot href="/notice-news" label="클래스와 뉴스" x={615} y={14} w={79} h={30} />
        <Spot href="/#community" label="커뮤니티" x={710} y={14} w={59} h={30} />
        <Spot href="/notice-news" label="공지사항" x={777} y={14} w={58} h={30} />
        <Spot href="/#top" label="회원가입" x={837} y={10} w={68} h={39} round="22px" />

        {/* Breadcrumb */}
        <Spot href="/" label="홈" x={48} y={67} w={24} h={24} />
        <Spot href="/members" label="멤버 목록" x={78} y={67} w={66} h={24} />
        <Spot href="#profile" label="프로필" x={146} y={67} w={58} h={24} />

        {/* Career performance links */}
        <Spot href="#career" label={config.careerLinks[0]} x={792} y={758} w={82} h={28} />
        <Spot href="#career" label={config.careerLinks[1]} x={792} y={819} w={82} h={28} />
        <Spot href="#career" label={config.careerLinks[2]} x={792} y={879} w={82} h={28} />

        {/* Recommended members */}
        <Spot href={`/members/${config.recommended[0][0]}`} label={config.recommended[0][1]} x={50} y={981} w={144} h={153} round="14px" />
        <Spot href={`/members/${config.recommended[1][0]}`} label={config.recommended[1][1]} x={219} y={981} w={144} h={153} round="14px" />
        <Spot href={`/members/${config.recommended[2][0]}`} label={config.recommended[2][1]} x={389} y={981} w={144} h={153} round="14px" />
        <Spot href={`/members/${config.recommended[3][0]}`} label={config.recommended[3][1]} x={558} y={981} w={144} h={153} round="14px" />
        <Spot href={`/members/${config.recommended[4][0]}`} label={config.recommended[4][1]} x={728} y={981} w={144} h={153} round="14px" />
        <Spot href="/members" label="추천 멤버 더 보기" x={883} y={1016} w={36} h={42} round="20px" />

        {/* CTA */}
        <Spot href="#connect" label="네트워크 요청하기" x={486} y={1413} w={186} h={48} round="12px" />
        <Spot href="#connect" label="메시지 보내기" x={693} y={1413} w={178} h={48} round="12px" />

        {/* Footer */}
        <Spot href="/" label="푸터 화성인사이드 홈" x={49} y={1492} w={183} h={110} round="18px" />
        <Spot href="/#about" label="푸터 링크 모음" x={313} y={1495} w={143} h={121} />
        <Spot href="/#about" label="푸터 이용 안내" x={518} y={1495} w={128} h={105} />
        <Spot href="/#about" label="푸터 문의 안내" x={691} y={1495} w={159} h={103} />
        <Spot href="#detail-top" label="맨 위로" x={859} y={1605} w={50} h={50} round="50%" />
      </div>
    </main>
  );
}
