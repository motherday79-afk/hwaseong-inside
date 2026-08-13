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

export default async function NoticeDetail({ params }) {
  await params;

  return (
    <main className="masterMain">
      <div className="masterBoard">
        <img src="/assets/master/news-detail-master-v1.png" alt="화성인사이드 공지와 뉴스 상세페이지" className="masterImage" />

        {/* header */}
        <Spot href="/" label="화성인사이드 홈" x={31} y={14} w={145} h={43} round="22px" />
        <Spot href="/#about" label="소개" x={492} y={17} w={40} h={28} />
        <Spot href="/#network" label="네트워크" x={551} y={17} w={54} h={28} />
        <Spot href="/notice-news" label="클래스와 뉴스" x={617} y={17} w={82} h={28} />
        <Spot href="/#community" label="커뮤니티" x={712} y={17} w={58} h={28} />
        <Spot href="/notice-news" label="공지사항" x={780} y={17} w={58} h={28} />
        <Spot href="/#top" label="회원가입" x={848} y={10} w={70} h={41} round="22px" />

        {/* breadcrumb */}
        <Spot href="/" label="홈" x={48} y={66} w={24} h={23} />
        <Spot href="/notice-news" label="공지와 뉴스 목록" x={102} y={66} w={92} h={23} />
        <Spot href="/notice-news/1" label="상세" x={210} y={66} w={45} h={23} />

        {/* CTA inside article */}
        <Spot href="/members/2" label="참가 신청하기" x={645} y={1171} w={166} h={43} round="10px" />

        {/* related news */}
        <Spot href="/notice-news" label="관련 공지 전체보기" x={790} y={1240} w={65} h={27} />
        <Spot href="/notice-news/2" label="관련 공지 2025 화성 어워즈 후보 공모" x={83} y={1269} w={242} h={143} round="16px" />
        <Spot href="/notice-news/3" label="관련 공지 신규 그룹장 모집 안내" x={342} y={1269} w={240} h={143} round="16px" />
        <Spot href="/notice-news/4" label="관련 공지 4월 클래스 일정 안내" x={599} y={1269} w={240} h={143} round="16px" />
        <Spot href="/notice-news" label="관련 공지 다음" x={824} y={1296} w={34} h={40} round="18px" />

        {/* back to list */}
        <Spot href="/notice-news" label="목록으로 돌아가기" x={365} y={1418} w={188} h={39} round="18px" />

        {/* footer */}
        <Spot href="/" label="푸터 화성인사이드 홈" x={31} y={1473} w={235} h={150} round="18px" />
        <Spot href="/#about" label="푸터 링크 모음" x={305} y={1473} w={165} h={145} />
        <Spot href="/#about" label="푸터 이용 안내" x={510} y={1473} w={150} h={135} />
        <Spot href="/#about" label="푸터 문의 안내" x={690} y={1473} w={160} h={128} />
        <Spot href="#" label="맨 위로" x={861} y={1570} w={50} h={50} round="50%" />
      </div>
    </main>
  );
}
