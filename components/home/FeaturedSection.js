import { members } from '../../data/members';

export default function FeaturedSection(){
  const featured=members.slice(0,10);
  return <section className="domSection domFeatured" aria-labelledby="featured-title">
    <div className="domWrap">
      <div className="domSectionTitle center"><span>❧</span><div><b>LEADERS' CIRCLE</b><h2 id="featured-title">Featured 10</h2><p>각각의 분야를 빛내는 화성인 리더 10명</p></div><span>❧</span></div>
      <div className="domFeaturedGrid">
        {featured.map((m,i)=><a className="domLeaderCard" href={`/members/${m.id}`} key={m.id}>
          <span className="domRank">{i+1}</span>
          <div className="domLeaderPhoto"><img src={m.profileImage || m.image} alt={`${m.name} 프로필`}/></div>
          <strong>{m.name}</strong><small>{m.job}</small>
        </a>)}
      </div>
    </div>
  </section>;
}
