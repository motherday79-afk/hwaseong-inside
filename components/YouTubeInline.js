'use client';
import { useMemo,useState } from 'react';

function getYouTubeId(url=''){
 const value=String(url||'').trim();
 if(!value)return '';
 try{
  const u=new URL(value);
  if(u.hostname.includes('youtu.be')) return u.pathname.split('/').filter(Boolean)[0]||'';
  if(u.hostname.includes('youtube.com')){
   if(u.pathname==='/watch') return u.searchParams.get('v')||'';
   const parts=u.pathname.split('/').filter(Boolean);
   const i=parts.findIndex(x=>['embed','shorts','live'].includes(x));
   if(i>=0) return parts[i+1]||'';
  }
 }catch{}
 return /^[a-zA-Z0-9_-]{6,20}$/.test(value)?value:'';
}

export default function YouTubeInline({url,thumbnail='',title='영상 재생',className=''}){
 const [playing,setPlaying]=useState(false);
 const id=useMemo(()=>getYouTubeId(url),[url]);
 const poster=thumbnail || (id?`https://i.ytimg.com/vi/${id}/hqdefault.jpg`:'');
 if(!id) return <div className={`inlineVideo empty ${className}`}><div className="inlineVideoEmpty">영상 URL을 등록하면 이 영역에서 바로 재생됩니다.</div></div>;
 if(playing) return <div className={`inlineVideo playing ${className}`}><iframe src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&modestbranding=1&playsinline=1`} title={title} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen/></div>;
 return <button type="button" className={`inlineVideo ${className}`} onClick={()=>setPlaying(true)} aria-label={`${title} 재생`}>
  {poster?<img src={poster} alt=""/>:<span className="inlineVideoBackdrop"/>}
  <span className="inlinePlay youtubeStyle" aria-hidden="true"><span className="inlinePlayTriangle"/></span>
 </button>;
}
