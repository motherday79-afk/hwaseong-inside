'use client';
import { useSiteAdminData } from '../SiteAdminData';
export default function Hero({user=null}){
  const {data}=useSiteAdminData(); const s=data.site;
  const primaryLabel=user?`${user.tier||'Gold'} Member`:s.primaryButton;
  const primaryHref=user?'/account':'/login';
  return <section className="webHero" id="about"><div className="webWrap webHeroGrid">
    <div><h1><span>{s.heroTitle1}</span><br/>{s.heroTitle2}</h1><p>{s.heroDescription}</p><div className="webActions"><a className={`webBtn webPrimary${user?' webTierButton':''}`} href={primaryHref}>{primaryLabel}</a><a className="webBtn" href="/notice-news">{s.secondaryButton} →</a></div></div>
    <div className={`webHeroArt${s.heroVisualUrl?' hasCustomHero':''}`}>{s.heroVisualUrl?<img src={s.heroVisualUrl} alt="화성인사이드 메인 비주얼"/>:<><div className="webSkyline">HWASEONG<br/><small>NETWORK</small></div><i></i><i></i><i></i></>}</div>
  </div></section>;
}
