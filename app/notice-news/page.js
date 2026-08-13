const W = 941;
const H = 1672;
const pct = (v, total) => `${(v / total) * 100}%`;

function Spot({ href, label, x, y, w, h, round = '12px' }) {
  return (
    <a
      href={href}
      aria-label={label}
      className="masterSpot"
      style={{ left: pct(x, W), top: pct(y, H), width: pct(w, W), height: pct(h, H), borderRadius: round }}
    />
  );
}

export default function NoticeNewsPage() {
  return (
    <main className="masterMain">
      <div className="masterBoard">
        <img src="/assets/master/news-list-master-v1.png" alt="화성인사이드 공지와 뉴스 포털" className="masterImage" />

        {/* header */}
        <Spot href="/" label="화성인사이드 홈" x={33} y={14} w={145} h={43} round="22px" />
        <Spot href="/#about" label="소개" x={493} y={17} w={40} h={28} />
        <Spot href="/#network" label="네트워크" x={553} y={17} w={55} h={28} />
        <Spot href="/notice-news" label="클래스와 뉴스" x={621} y={17} w={82} h={28} />
        <Spot href="/#community" label="커뮤니티" x={716} y={17} w={59} h={28} />
        <Spot href="/notice-news" label="공지사항" x={783} y={17} w={58} h={28} />
        <Spot href="/#top" label="회원가입" x={850} y={10} w={70} h={41} round="22px" />

        {/* breadcrumb */}
        <Spot href="/" label="홈" x={48} y={67} w={23} h={22} />
        <Spot href="/notice-news" label="Notice and News" x={99} y={67} w={108} h={22} />

        {/* filters and search */}
        <Spot href="/notice-news" label="전체 필터" x={56} y={373} w={48} h={36} round="18px" />
        <Spot href="/notice-news" label="공지 필터" x={131} y={373} w={48} h={36} round="18px" />
        <Spot href="/notice-news" label="뉴스 필터" x={207} y={373} w={48} h={36} round="18px" />
        <Spot href="/notice-news" label="이벤트 필터" x={282} y={373} w={58} h={36} round="18px" />
        <Spot href="/notice-news" label="검색" x={598} y={372} w={317} h={39} round="12px" />

        {/* featured article */}
        <Spot href="/notice-news/1" label="대표 공지 5월 정기 네트워킹 행사 안내" x={60} y={438} w={845} h={225} round="18px" />
        <Spot href="/notice-news/1" label="자세히 보기" x={488} y={591} w={111} h={38} round="12px" />

        {/* card grid row 1 */}
        <Spot href="/notice-news/2" label="2025 화성 어워즈 후보 공모" x={58} y={714} w={273} h={308} round="18px" />
        <Spot href="/notice-news/3" label="신규 그룹장 모집 안내" x={342} y={714} w={273} h={308} round="18px" />
        <Spot href="/notice-news/4" label="상반기 감사 이벤트 안내" x={626} y={714} w={273} h={308} round="18px" />
        {/* row 2 */}
        <Spot href="/notice-news/5" label="2025 상반기 네트워크 리포트 발행" x={58} y={1040} w={273} h={308} round="18px" />
        <Spot href="/notice-news/6" label="서비스 점검 안내" x={342} y={1040} w={273} h={308} round="18px" />
        <Spot href="/notice-news/7" label="화성인사이드 제휴 혜택 확대" x={626} y={1040} w={273} h={308} round="18px" />

        {/* pagination */}
        <Spot href="/notice-news" label="이전 페이지" x={318} y={1370} w={29} h={29} round="10px" />
        <Spot href="/notice-news" label="1페이지" x={357} y={1369} w={31} h={31} round="10px" />
        <Spot href="/notice-news" label="2페이지" x={404} y={1369} w={31} h={31} round="10px" />
        <Spot href="/notice-news" label="3페이지" x={451} y={1369} w={31} h={31} round="10px" />
        <Spot href="/notice-news" label="4페이지" x={497} y={1369} w={31} h={31} round="10px" />
        <Spot href="/notice-news" label="5페이지" x={544} y={1369} w={31} h={31} round="10px" />
        <Spot href="/notice-news" label="다음 페이지" x={590} y={1369} w={29} h={31} round="10px" />

        {/* CTA */}
        <Spot href="/members/2" label="네트워크 요청하기" x={506} y={1410} w={182} h={48} round="12px" />
        <Spot href="/members/2" label="메시지 보내기" x={704} y={1410} w={177} h={48} round="12px" />

        {/* footer */}
        <Spot href="/" label="푸터 화성인사이드 홈" x={43} y={1488} w={210} h={142} round="18px" />
        <Spot href="/#about" label="푸터 링크 모음" x={310} y={1488} w={155} h={150} />
        <Spot href="/#about" label="푸터 이용 안내" x={522} y={1488} w={145} h={142} />
        <Spot href="/#about" label="푸터 문의 안내" x={693} y={1488} w={170} h={132} />
        <Spot href="#" label="맨 위로" x={861} y={1580} w={50} h={50} round="50%" />
      </div>
    </main>
  );
}
