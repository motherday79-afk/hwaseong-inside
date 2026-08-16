import { notFound } from 'next/navigation';
import { createAdminClient } from '../../../lib/supabase/admin';
import SiteHeader from '../../../components/home/SiteHeader';
import SiteFooter from '../../../components/home/SiteFooter';
import YouTubeInline from '../../../components/YouTubeInline';
import Radar from '../../../components/Radar';
import { DEFAULT_STRENGTH_COPY } from '../../../data/adminDefaults';
export const dynamic='force-dynamic';

const defaultStrengths={창의:80,연결:80,통찰:80,공감:80,실행:80,성장:80};
const cardOrder=['창의','공감','연결','실행','통찰','성장'];
const icons={창의:'✦',공감:'♡',연결:'⌘',실행:'▤',통찰:'◎',성장:'↗'};
const cleanLegacy=(u='')=>String(u||'').startsWith('/assets/members/')?'':String(u||'');

export default async function MemberDetail({params}){
 const {id}=await params; const admin=createAdminClient();
 const [{data:siteState},{data:m}]=await Promise.all([
   admin.from('site_state').select('payload').eq('id','main').maybeSingle(),
   admin.from('members').select('*, careers(*)').eq('id',Number(id)).eq('is_published',true).maybeSingle()
 ]);
 if(!m)notFound();
 const detailAssets=siteState?.payload?.detailAssets||{};
 const strengthCopy={...DEFAULT_STRENGTH_COPY,...(detailAssets.strengthDescriptions||{})};
 const careers=(m.careers||[]).sort((a,b)=>(a.sort_order||0)-(b.sort_order||0));
 const raw=m.strengths||{}; const strengths={...defaultStrengths,...raw,통찰:raw.통찰??raw.분석??80}; delete strengths.분석;
 const {data:related}=await admin.from('members').select('id,name,job,profile_image_url,tags').eq('is_published',true).neq('id',m.id).limit(5);
 const profile=cleanLegacy(m.profile_image_url) || (Number(m.id)===1?'/assets/real/park-insik.jpg':Number(m.id)===2?'/assets/real/kim-gwangsun.jpg':'');
 return <div className="v7DetailPage">
   <SiteHeader/>
   <main className="v7DetailWrap">
    <div className="v7Breadcrumb"><a href="/">Home</a><span>›</span><a href="/members">Members</a><span>›</span><b>{m.name}</b></div>
    <section className="v7ProfileHero">
      <div className="v7ProfilePhoto">{profile?<img src={profile} alt={`${m.name} 프로필`}/>:<div className="v7ProfileFallback">{(m.name||'?').slice(0,1)}</div>}</div>
      <article className="v7ProfileInfo">
        <span className="v7Tier">◇ {m.tier||'Gold'} Member</span><h1>{m.name}</h1><h2>{m.job}</h2>
        <p className="v7Tagline">{m.tagline||m.intro?.split('\n')[0]||'화성인사이드와 함께 성장하는 멤버입니다.'}</p>
        <dl><div><dt>나이</dt><dd>{m.age?`${m.age}세`:'-'}</dd></div><div><dt>직무 / 부문</dt><dd>{m.job||'-'}</dd></div><div><dt>성별</dt><dd>{m.gender||'-'}</dd></div><div><dt>이메일</dt><dd>{m.public_email||'-'}</dd></div><div><dt>최종학력</dt><dd>{m.school||'-'}</dd></div><div><dt>활동 지역</dt><dd>{m.area||'-'}</dd></div></dl>
        <div className="v7Tags">{(m.tags||[]).map(t=><span key={t}>{t}</span>)}</div>
      </article>
    </section>
    <section className="v7StoryGrid">
      <div className="v7VideoPanel">{(m.youtube_url||m.youtube_thumbnail_url)?<YouTubeInline url={m.youtube_url} thumbnail={m.youtube_thumbnail_url} title={`${m.name} 프로필 영상`} className="v7ProfileVideo"/>:<div className="v7VideoEmpty"><b>PROFILE MOVIE</b><strong>{m.name}의 이야기</strong><span>내 프로필에서 영상 URL과 썸네일 파일을 등록할 수 있습니다.</span></div>}</div>
      <article className="v7Philosophy">{detailAssets.philosophyImageUrl?<img src={detailAssets.philosophyImageUrl} alt="화성인사이드의 철학"/>:<div className="v7PhilosophyFallback"><b>★ 화성인사이드</b><h2>화성인사이드의 철학</h2><p>좋은 연결은 더 좋은 세상을 만듭니다.</p><p>문화와 기술, 사람과 사람이 만나는 가치를 추구합니다.</p><p>실력 기반의 네트워크로 새로운 기회를 만듭니다.</p></div>}</article>
    </section>
    <section className="v7InfoGrid">
      <article className="v7Panel"><h2><span>◎</span> 개인정보 소개</h2><p>{m.intro||'소개가 아직 등록되지 않았습니다.'}</p></article>
      <article className="v7Panel"><h2><span>▣</span> 믿을 수 있는 경력 · 이력</h2><div className="v7Careers">{careers.length?careers.map(c=><div key={c.id}><time>{c.period}</time><section><b>{c.company}</b><em>{c.role}</em><p>{c.description}</p></section></div>):<p>등록된 경력이 없습니다.</p>}</div></article>
    </section>
    <section className="v7Recommend v7Panel"><h2>♡ {m.name}님과 연결 가능성이 높은 화성인사이드 멤버</h2><div className="v7RecommendGrid">{(related||[]).map(r=>{const rp=cleanLegacy(r.profile_image_url);return <a href={`/members/${r.id}`} key={r.id}><div className="v7RecPhoto">{rp?<img src={rp} alt={`${r.name} 프로필`}/>:<span>{(r.name||'?').slice(0,1)}</span>}</div><b>{r.name}</b><small>{r.job}</small><em>{(r.tags||[]).slice(0,2).join(' · ')}</em></a>})}</div></section>
    <section className="v7Strength v7Panel">
      <article className="v7RadarPanel"><h2>☆ 인사이더 강점 레이더</h2><p>회원이 직접 평가한 0~100점 셀프 어필 지표입니다.</p><div className="v7RadarWrap"><Radar values={strengths}/></div></article>
      <div className="v7StrengthCards">{cardOrder.map(k=><article key={k}><span>{icons[k]}</span><div><b>{k}</b><p>{strengthCopy[k]}</p></div></article>)}</div>
    </section>
    <section className="v7Connect">
      <div className="v7ConnectLead"><span className="v7ConnectRound" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none"><path d="M21 3 10.6 13.4"/><path d="m21 3-6.7 18-3.7-7.6L3 9.7 21 3Z"/></svg></span><div><b>함께 연결하고 싶다면?</b><p>새로운 인연을 배우고, 함께 성장하며 더 큰 가치를 만들어보세요.</p></div></div>
      <div className="v7ConnectBtns"><a href="/login"><svg viewBox="0 0 24 24" fill="none"><circle cx="9" cy="8" r="3"/><path d="M3.5 19c.5-4 2.4-6 5.5-6s5 2 5.5 6M18 7v6M15 10h6"/></svg>네트워크 요청하기</a><a className="ghost" href="/community"><svg viewBox="0 0 24 24" fill="none"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 7 8 6 8-6"/></svg>메시지 보내기</a></div>
    </section>
   </main>
   <SiteFooter className="v7DetailFooter"/>
 </div>;
}
