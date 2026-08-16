'use client';
import { usePathname } from 'next/navigation';
import { AdminProvider } from './AdminStore';

const nav=[
  ['/admin','대시보드','▦'],
  ['/admin/members','회원 관리','👥'],
  ['/admin/featured','Top10 관리','★'],
  ['/admin/home','메인 관리','⌂'],
  ['/admin/news','공지 & 뉴스','▤'],
  ['/admin/media-guide','이미지 규격','▧'],
  ['/admin/settings','사이트 설정','⚙'],
];
function Inner({children}){
  const path=usePathname();
  return <div className="adminApp">
    <aside className="adminSide">
      <a href="/" className="adminBrand"><span>★</span><div><b>화성인사이드</b><small>ADMIN</small></div></a>
      <nav>{nav.map(([href,label,icon])=><a key={href} href={href} className={(href==='/admin'?path===href:path.startsWith(href))?'active':''}><i>{icon}</i>{label}</a>)}</nav>
      <div className="adminSideBottom"><a href="/">← 사이트 보기</a><small>관리자 v1 · 구조 설계</small></div>
    </aside>
    <main className="adminMain"><header className="adminTop"><div><b>관리자 페이지</b><span>사이트 전체 콘텐츠와 노출 영역을 관리합니다.</span></div><div className="adminUser"><span>관리자</span><b>A</b></div></header>{children}</main>
  </div>;
}
export default function AdminShell({children}){ return <AdminProvider><Inner>{children}</Inner></AdminProvider>; }
