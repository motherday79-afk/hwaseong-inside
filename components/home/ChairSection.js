'use client';
import { useSiteAdminData } from '../SiteAdminData';
import YouTubeInline from '../YouTubeInline';
export default function ChairSection(){
 const {data}=useSiteAdminData(); const c=data.chair; const lines=(c.greeting||'').split('\n');
 return <section className="webSection" id="network"><div className="webWrap webChairGrid">
    <div className="webVideo"><YouTubeInline url={c.videoUrl} thumbnail={c.videoThumbnailUrl} title={`${c.name} 의장 인사 영상`} className="chairInlineVideo"/><div className="webVideoText"><small>의장 인사 영상</small><strong>{c.name}의 문화와 기술, <em>사람을 잇다</em></strong></div></div>
    <article className="webChairCard"><div className="webChairPhoto"><img src={c.portraitUrl||'/assets/real/park-insik.jpg'} alt={`${c.name} ${c.title}`}/></div><div className="webChairCopy"><h2>의장 인사말</h2><div className="webGreetingText">{lines.map((line,i)=>line?<p key={i}>{line}</p>:<br key={i}/>)}</div><strong>{c.title}<br/>{c.name}</strong>{c.signatureUrl&&<img className="webSignature" src={c.signatureUrl} alt={`${c.name} 서명`}/>}</div></article>
  </div></section>;
}
