export default function SiteHeader(){
  return <header className="webHeader">
    <div className="webWrap webHeaderRow">
      <a className="webBrand" href="/"><span>★</span><strong>화성인사이드</strong></a>
      <nav className="webNav">
        <a href="#about">소개</a><a href="#network">네트워크</a><a href="/notice-news">공지 & 뉴스</a><a href="#members">커뮤니티</a><a href="/login">로그인</a><a className="webJoin" href="/signup">회원가입</a>
      </nav>
      <details className="webMobileNav"><summary>☰</summary><nav><a href="#about">소개</a><a href="#network">네트워크</a><a href="/notice-news">공지 & 뉴스</a><a href="#members">커뮤니티</a><a href="/login">로그인</a><a href="/signup">회원가입</a></nav></details>
    </div>
  </header>;
}
