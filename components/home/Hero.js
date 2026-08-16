'use client';
import { useSiteAdminData } from '../SiteAdminData';
export default function Hero(){
  const {data}=useSiteAdminData(); const s=data.site;
  return <section className="webHero" id="about"><div className="webWrap webHeroGrid">
    <div><h1><span>{s.heroTitle1}</span><br/>{s.heroTitle2}</h1><p>{s.heroDescription}</p><div className="webActions"><a className="webBtn webPrimary" href="#join">{s.primaryButton}</a><a className="webBtn" href="#network">{s.secondaryButton} →</a></div></div>
    <div className="webHeroArt">{s.heroVisualUrl?<img src={s.heroVisualUrl} alt="화성인사이드 메인 비주얼"/>:<><div className="webSkyline">HWASEONG<br/><small>NETWORK</small></div><i></i><i></i><i></i></>}</div>
  </div></section>;
}
