'use client';
import { useSiteAdminData } from '../SiteAdminData';
import YouTubeInline from '../YouTubeInline';

export default function ChairSection(){
  const {data}=useSiteAdminData();
  const c=data.chair;
  const lines=(c.greeting||'').split('\n').filter((line,i,arr)=>line.trim() || (i>0 && arr[i-1]?.trim()));
  return <section className="webSection" id="network"><div className="webWrap webChairGrid">
    <div className="webVideo">
      <YouTubeInline url={c.videoUrl} thumbnail={c.videoThumbnailUrl} title={`${c.name} 의장 인사 영상`} className="chairInlineVideo"/>
      <div className="webVideoText"><small>의장 인사 영상</small></div>
    </div>

    <article className="webChairCard chairCardV64">
      <div className="webChairMedia">
        <div className="webChairPhoto"><img src={c.portraitUrl||'/assets/real/park-insik.jpg'} alt={`${c.name} ${c.title}`}/></div>
        <div className="webChairIdentity"><span>{c.title}</span><strong>{c.name}</strong></div>
      </div>
      <div className="webChairCopy">
        <h2>의장 인사말</h2>
        <div className="webGreetingText">{lines.map((line,i)=>line.trim()?<p key={i}>{line}</p>:<div className="chairGreetingGap" key={i}/>)}</div>
        {c.signatureUrl&&<img className="webSignature" src={c.signatureUrl} alt={`${c.name} 서명`}/>}      
      </div>
    </article>
  </div></section>;
}
