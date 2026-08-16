export default function SiteHeader(){
  const links=<>
    <a href="#about">소개</a>
    <a href="#network">네트워크</a>
    <a href="/notice-news">공지 &amp; 뉴스</a>
    <a href="#community">커뮤니티</a>
    <a href="#login">로그인</a>
    <a className="domJoinSmall" href="#join">회원가입</a>
  </>;
  return <header className="domHeader">
    <div className="domWrap domHeaderInner">
      <a href="/" className="domBrand" aria-label="화성인사이드 홈">
        <span className="domBrandIcon">★</span><strong>화성인사이드</strong>
      </a>
      <nav className="domNav" aria-label="주요 메뉴">{links}</nav>
      <details className="domMobileMenu">
        <summary aria-label="모바일 메뉴">☰</summary>
        <nav>{links}</nav>
      </details>
    </div>
  </header>;
}
