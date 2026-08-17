'use client';

import { useState } from 'react';
import BrandIcon from './BrandIcon';

function safeFileName(name='profile'){
  return String(name).replace(/[\\/:*?"<>|]/g,'').trim() || 'profile';
}

export default function ProfileShareActions({memberName='회원'}){
  const [busy,setBusy]=useState(false);
  const [message,setMessage]=useState('');

  async function shareLink(){
    const url=window.location.href;
    const data={title:`${memberName} | 화성인사이드`,text:`${memberName}님의 화성인사이드 프로필`,url};
    try{
      if(navigator.share){
        await navigator.share(data);
        setMessage('공유 창을 열었습니다.');
      }else{
        await navigator.clipboard.writeText(url);
        setMessage('프로필 링크를 복사했습니다.');
      }
    }catch(err){
      if(err?.name!=='AbortError'){
        try{await navigator.clipboard.writeText(url);setMessage('프로필 링크를 복사했습니다.');}
        catch{setMessage('링크 복사에 실패했습니다.');}
      }
    }
    window.setTimeout(()=>setMessage(''),2200);
  }

  async function saveImage(){
    if(busy)return;
    const target=document.getElementById('profile-share-root');
    if(!target)return;
    setBusy(true); setMessage('프로필 이미지를 만드는 중입니다.');
    try{
      const {default:html2canvas}=await import('html2canvas');
      const canvas=await html2canvas(target,{
        backgroundColor:'#fbf9ff',
        useCORS:true,
        allowTaint:false,
        logging:false,
        scale:Math.min(window.devicePixelRatio||1,2),
        windowWidth:Math.max(document.documentElement.clientWidth,target.scrollWidth),
        windowHeight:target.scrollHeight,
        scrollX:0,
        scrollY:-window.scrollY
      });
      const blob=await new Promise(resolve=>canvas.toBlob(resolve,'image/png',0.96));
      if(!blob)throw new Error('image export failed');
      const a=document.createElement('a');
      const objectUrl=URL.createObjectURL(blob);
      a.href=objectUrl;
      a.download=`화성인사이드_${safeFileName(memberName)}_프로필.png`;
      document.body.appendChild(a);a.click();a.remove();
      URL.revokeObjectURL(objectUrl);
      setMessage('프로필 이미지를 저장했습니다.');
    }catch(err){
      console.error(err);
      setMessage('이미지 저장에 실패했습니다. 잠시 후 다시 시도해 주세요.');
    }finally{
      setBusy(false);
      window.setTimeout(()=>setMessage(''),2600);
    }
  }

  return <div className="v78ShareActions" data-html2canvas-ignore="true">
    <button type="button" onClick={saveImage} disabled={busy}>
      <BrandIcon name="download" size={16}/>{busy?'이미지 생성 중':'이미지로 저장'}
    </button>
    <button type="button" className="ghost" onClick={shareLink}>
      <BrandIcon name="share" size={16}/>링크 공유
    </button>
    {message&&<span className="v78ShareToast">{message}</span>}
  </div>;
}
