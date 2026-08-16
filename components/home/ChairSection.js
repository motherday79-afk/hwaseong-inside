'use client';
import { useSiteAdminData } from '../SiteAdminData';
import YouTubeInline from '../YouTubeInline';

export default function ChairSection(){
  const {data}=useSiteAdminData();
  const c=data.chair;
  return <section className="webSection chairSectionFinal" id="network"><div className="webWrap chairGridFinal">
    <div className="chairVideoFinal">
      <YouTubeInline url={c.videoUrl} thumbnail={c.videoThumbnailUrl} title={`${c.name} 의장 인사 영상`} className="chairInlineVideo"/>
      <span className="chairVideoBadge">의장 인사 영상</span>
    </div>
    <article className="chairGreetingFinal">
      <div className="chairGreetingIdentity">
        <h2>의장 인사말</h2>
        <div className="chairGreetingPortrait"><img src={c.portraitUrl||'/assets/real/park-insik.jpg'} alt={`${c.name} ${c.title}`}/></div>
        <span>{c.title}</span>
        <strong>{c.name}</strong>
      </div>
      <div className="chairGreetingCopy">
        <div className="chairGreetingText">{(c.greeting||'').split(/\n+/).filter(Boolean).map((line,i)=><p key={i}>{line}</p>)}</div>
        {c.signatureUrl?<img className="chairGreetingSignature" src={c.signatureUrl} alt={`${c.name} 서명`}/>:<div className="chairGreetingSignatureText">{c.name}</div>}
      </div>
    </article>
  </div></section>;
}
