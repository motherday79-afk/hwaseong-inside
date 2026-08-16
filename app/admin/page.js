'use client';
import { useAdmin } from '../../components/admin/AdminStore';
import { PageTitle, Card, Badge } from '../../components/admin/AdminUI';
export default function AdminDashboard(){
  const {members,data,reset}=useAdmin();
  const published=data.news.filter(n=>n.published).length;
  return <div className="adminPage">
    <PageTitle title="대시보드" desc="화성인사이드 운영 현황과 주요 관리 항목을 한눈에 확인합니다." actions={<button className="adminBtn" onClick={()=>confirm('관리자 임시 저장 데이터를 초기화할까요?')&&reset()}>데이터 초기화</button>}/>
    <div className="adminStats">
      <div><span>전체 회원</span><b>{members.length}</b><small>가입/노출 데이터 기준</small></div>
      <div><span>Featured 10</span><b>{data.featuredIds.length}</b><small>메인 Top10 노출</small></div>
      <div><span>게시 중인 공지</span><b>{published}</b><small>공지 & 뉴스</small></div>
      <div><span>관리 영역</span><b>7</b><small>메인부터 푸터까지</small></div>
    </div>
    <div className="adminTwoCol">
      <Card title="빠른 관리" desc="자주 수정하는 영역으로 바로 이동합니다."><div className="adminQuick">
        <a href="/admin/home"><b>메인/의장 관리</b><span>히어로, 의장 사진·영상·인사말</span></a>
        <a href="/admin/featured"><b>Top10 순서 관리</b><span>Featured 멤버와 노출 순서</span></a>
        <a href="/admin/members"><b>회원 프로필 관리</b><span>사진, 직책, 소개, 경력</span></a>
        <a href="/admin/news"><b>공지 & 뉴스 관리</b><span>등록, 수정, 공개 상태</span></a>
      </div></Card>
      <Card title="운영 원칙" desc="실제 서비스 전환 시 유지할 데이터 흐름입니다."><div className="adminRules">
        <p><Badge type="purple">회원 이미지</Badge> 가입 시 등록한 프로필 원본 하나를 메인·Top10·상세에서 공통 사용</p>
        <p><Badge type="blue">관리자 권한</Badge> 관리자에게는 모든 회원/메인/공지/사이트 설정 수정 권한 부여</p>
        <p><Badge type="green">본인 권한</Badge> 일반 회원은 자신의 프로필과 사진만 수정 가능하도록 설계</p>
        <p><Badge>DB 연결 예정</Badge> 현재 v1은 브라우저 저장 방식이며 다음 단계에서 서버 DB로 이전</p>
      </div></Card>
    </div>
    <Card title="이미지 등록 권장 규격" desc="업로드 단계부터 규격을 통일하면 메인과 모바일에서 깨짐을 크게 줄일 수 있습니다."><div className="adminMiniSpecs"><span><b>프로필</b>1200×1200</span><span><b>의장 사진</b>1200×1500</span><span><b>영상 썸네일</b>1600×900</span><span><b>뉴스</b>1200×675</span></div><a className="adminTextLink" href="/admin/media-guide">전체 이미지 규격 보기 →</a></Card>
  </div>;
}
