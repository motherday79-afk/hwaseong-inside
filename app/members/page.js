import Header from '../../components/Header';
import Footer from '../../components/Footer';
import MemberCard from '../../components/MemberCard';
import { members } from '../../data/members';

export default function MembersPage(){
  return <>
    <Header/>
    <main className="profile wrap" style={{paddingTop:24,paddingBottom:36}}>
      <div className="whiteCard" style={{padding:'28px 30px'}}>
        <h1 style={{margin:'0 0 8px'}}>화성인사이드 멤버</h1>
        <p style={{margin:'0 0 24px',color:'#777'}}>전체 멤버를 확인하고 프로필을 선택해 보세요.</p>
        <div className="regularGrid" style={{gridTemplateColumns:'repeat(5,1fr)',gap:14}}>
          {members.map(member=><MemberCard key={member.id} member={member} compact/>)}
        </div>
      </div>
    </main>
    <Footer/>
  </>;
}
