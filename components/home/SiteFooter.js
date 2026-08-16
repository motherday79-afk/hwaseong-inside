'use client';
import { useSiteAdminData } from '../SiteAdminData';
export default function SiteFooter({className=''}){
  const {data}=useSiteAdminData();const f=data.footer;
  return <footer className={`v7Footer ${className}`.trim()}><div className="v7Shell v7FooterGrid">
    <div><a className="v7FooterBrand" href="/">★ 화성인사이드</a><p>사람과 사람을 잇고 가치 있는 네트워크를 만듭니다.</p><div className="v7Social"><span>◎</span><span>in</span><span>▶</span></div><small>© 2026 화성인사이드</small></div>
    <div><strong>링크 모음</strong><a href="/#about">화성인사이드 소개</a><a href="/#network">네트워크 찾기</a><a href="/notice-news">공지 & 뉴스</a><a href="/community">커뮤니티</a></div>
    <div><strong>이용 안내</strong><a href="#">이용 약관</a><a href="#">개인정보 처리방침</a><a href="#">커뮤니티 가이드</a><a href="#">회원탈퇴</a></div>
    <div><strong>문의 안내</strong><p>{f.phone}<br/>{f.hours}<br/>{f.email}</p></div>
  </div><a className="v7TopBtn" href="#top" aria-label="맨 위로">↑</a></footer>;
}
