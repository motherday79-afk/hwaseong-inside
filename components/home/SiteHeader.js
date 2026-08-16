import { getCurrentUser } from '../../lib/auth';
import BrandIcon from '../BrandIcon';
export default async function SiteHeader(){
  const user=await getCurrentUser();
  const isAdmin=user && ['admin','editor'].includes(user.role);
  return <>
    {isAdmin&&<div className="v7AdminBar"><div className="v7Shell v7AdminBarInner"><strong><BrandIcon name="settings" size={14} className="hiIcon"/> 관리자 모드 ON</strong><span>@{user.username}</span><nav><a href="/admin/home">메인 관리</a><a href="/admin/members">회원 관리</a><a href="/admin/news">게시판 관리</a><a href="/admin">전체 관리자</a></nav></div></div>}
    <header className="v7Header">
      <div className="v7Shell v7HeaderRow">
        <a className="v7Brand" href="/"><span><BrandIcon name="brandSpark" size={19}/></span><strong>화성인사이드</strong></a>
        <nav className="v7Nav">
          <a href="/#about">소개</a><a href="/#network">네트워크</a><a href="/notice-news">공지게시판</a><a href="/community">커뮤니티</a>
          {user?<><a href="/account">내 프로필</a>{isAdmin&&<a className="v7Join" href="/admin">관리자</a>}</>:<><a href="/login">로그인</a><a className="v7Join" href="/signup">회원가입</a></>}
        </nav>
        <details className="v7MobileNav"><summary aria-label="메뉴 열기"><BrandIcon name="menu" size={24}/></summary><nav><a href="/#about">소개</a><a href="/#network">네트워크</a><a href="/notice-news">공지게시판</a><a href="/community">커뮤니티</a>{user?<><a href="/account">내 프로필</a>{isAdmin&&<a href="/admin">관리자</a>}</>:<><a href="/login">로그인</a><a href="/signup">회원가입</a></>}</nav></details>
      </div>
    </header>
  </>;
}
