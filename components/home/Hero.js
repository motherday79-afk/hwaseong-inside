'use client';
import { useSiteAdminData } from '../SiteAdminData';
export default function Hero({user=null}){
  const {data}=useSiteAdminData(); const s=data.site;
  const primaryLabel=user?`${user.tier||'Gold'} Member`:s.primaryButton;
  const primaryHref=user?'/account':'/login';
  return <section className="v7Hero" id="about"><div className="v7Wrap v7HeroGrid">
    <div className="v7HeroCopy"><h1><span>{s.heroTitle1}</span><br/>{s.heroTitle2}</h1><p>{s.heroDescription}</p><div className="v7HeroActions"><a className="v7Btn v7BtnPrimary" href={primaryHref}>{primaryLabel}</a><a className="v7Btn" href="/notice-news">{s.secondaryButton} <b>›</b></a></div></div>
    <div className={`v7HeroVisual ${s.heroVisualUrl?'isCustom':'isDefault'}`}>
      {s.heroVisualUrl?<img src={s.heroVisualUrl} alt="화성인사이드 히어로 비주얼"/>:<div className="v7HeroPlaceholder" aria-label="히어로 비주얼 미등록"><span>화성인사이드</span><small>관리자에서 히어로 이미지를 등록해 주세요.</small></div>}
    </div>
  </div></section>;
}
