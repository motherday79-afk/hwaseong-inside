'use client';
import { useSiteAdminData } from '../SiteAdminData';
export default function ChairSection(){
 const {data}=useSiteAdminData(); const c=data.chair; const lines=c.greeting.split('\n');
 return <section className="webSection" id="network"><div className="webWrap webChairGrid">
    <a className="webVideo" href={c.videoUrl||'#network'} aria-label={`${c.name} 의장 인사 영상`} style={c.videoThumbnailUrl?{backgroundImage:`linear-gradient(rgba(10,8,20,.2),rgba(10,8,20,.5)),url(${c.videoThumbnailUrl})`,backgroundSize:'cover',backgroundPosition:'center'}:{}}><div className="webVideoScene">{!c.videoThumbnailUrl&&<><span className="webCamera">🎥</span><span className="webClapper">🎬</span></>}</div><div className="webVideoText"><small>의장 인사 영상</small><strong>{c.name}의<br/>문화와 기술,<br/><em>사람을 잇다</em></strong></div><div className="webControls">▶ <b></b><span>0:02 / 2:15</span></div></a>
    <article className="webChairCard"><div className="webChairPhoto"><img src={c.portraitUrl||'/assets/real/park-insik.jpg'} alt={`${c.name} ${c.title}`}/></div><div className="webChairCopy"><h2>의장 인사말</h2><div className="webGreetingText">{lines.map((line,i)=>line?<p key={i}>{line}</p>:<br key={i}/>)}</div><strong>{c.title}<br/>{c.name}</strong>{c.signatureUrl&&<img className="webSignature" src={c.signatureUrl} alt={`${c.name} 서명`}/>}</div></article>
  </div></section>;
}
