'use client';
import { useSiteAdminData } from '../SiteAdminData';
import YouTubeInline from '../YouTubeInline';
export default function ChairSection(){
  const {data}=useSiteAdminData(); const c=data.chair;
  return <section className="v7Chair" id="network"><div className="v7Wrap v7ChairShell">
    <div className="v7ChairVideo">
      <YouTubeInline url={c.videoUrl} thumbnail={c.videoThumbnailUrl} title={`${c.name} 의장 인사 영상`} className="v7ChairInlineVideo"/>
      <span className="v7ChairVideoBadge">의장 인사 영상</span>
    </div>
    <article className="v7ChairGreeting">
      <div className="v7ChairIdentity">
        <h2>의장 인사말</h2>
        <div className="v7ChairPortrait"><img src={c.portraitUrl||'/assets/real/park-insik.jpg'} alt={`${c.name} ${c.title}`}/></div>
        <span>{c.title}</span><strong>{c.name}</strong>
      </div>
      <div className="v7ChairMessage">
        <div className="v7ChairGreetingText">{(c.greeting||'').split(/\n+/).filter(Boolean).map((line,i)=><p key={i}>{line}</p>)}</div>
        <div className="v7ChairSignature">{c.signatureUrl?<img src={c.signatureUrl} alt={`${c.name} 서명`}/>:<span>{c.name}</span>}</div>
      </div>
    </article>
  </div></section>;
}
