import { notFound } from 'next/navigation';
import { createAdminClient } from '../../../lib/supabase/admin';
import YouTubeInline from '../../../components/YouTubeInline';
import Radar from '../../../components/Radar';
import { DEFAULT_STRENGTH_COPY } from '../../../data/adminDefaults';
export const dynamic='force-dynamic';

const defaultStrengths={창의:80,연결:80,통찰:80,공감:80,실행:80,성장:80};
const cardOrder=['창의','공감','연결','실행','통찰','성장'];
const icons={창의:'💡',공감:'♡',연결:'⌘',실행:'▤',통찰:'◉',성장:'↗'};

export default async function MemberDetail({params}){
 const {id}=await params; const admin=createAdminClient();
 const {data:siteState}=await admin.from('site_state').select('payload').eq('id','main').maybeSingle();
 const detailAssets=siteState?.payload?.detailAssets||{};
 const strengthCopy={...DEFAULT_STRENGTH_COPY,...(detailAssets.strengthDescriptions||{})};
 const {data:m}=await admin.from('members').select('*, careers(*)').eq('id',Number(id)).eq('is_published',true).maybeSingle(); if(!m)notFound();
 const careers=(m.careers||[]).sort((a,b)=>(a.sort_order||0)-(b.sort_order||0));
 const raw=m.strengths||{}; const strengths={...defaultStrengths,...raw,통찰:raw.통찰??raw.분석??80}; delete strengths.분석;
 const {data:related}=await admin.from('members').select('id,name,job,profile_image_url,tags').eq('is_published',true).neq('id',m.id).limit(5);
 return <main className="memberDetailDom v64">
  <header className="detailTop"><a href="/">★ 화성인사이드</a><nav><a href="/members">멤버</a><a href="/notice-news">공지게시판</a><a href="/community">커뮤니티</a><a href="/login">로그인</a></nav></header>
  <div className="memberBread"><a href="/">홈</a> › <a href="/members">멤버</a> › {m.name}</div>
  <section className="memberHeroDom memberHeroV64"><div className="memberPhotoDom">{m.profile_image_url?<img src={m.profile_image_url} alt={`${m.name} 프로필`}/>:<span>프로필 이미지</span>}</div><article><span className="memberTier">◇ {m.tier||'Gold'} Member</span><h1>{m.name}</h1><h2>{m.job}</h2><p className="memberIntroLine">{m.tagline||m.intro?.split('\n')[0]||'화성인사이드와 함께 성장하는 멤버입니다.'}</p><dl><div><dt>나이</dt><dd>{m.age?`${m.age}세`:'-'}</dd></div><div><dt>직무 / 부문</dt><dd>{m.job||'-'}</dd></div><div><dt>성별</dt><dd>{m.gender||'-'}</dd></div><div><dt>이메일</dt><dd>{m.public_email||'-'}</dd></div><div><dt>최종학력</dt><dd>{m.school||'-'}</dd></div><div><dt>활동 지역</dt><dd>{m.area||'-'}</dd></div></dl><div className="memberTags">{(m.tags||[]).map(t=><span key={t}>{t}</span>)}</div></article></section>
  <section className="memberStoryGrid"><div className="memberVideoCard">{(m.youtube_url||m.youtube_thumbnail_url)?<YouTubeInline url={m.youtube_url} thumbnail={m.youtube_thumbnail_url} title={`${m.name} 프로필 영상`} className="memberProfileVideo"/>:<div className="memberVideoPlaceholder"><span>PROFILE MOVIE</span><strong>{m.name}의 이야기</strong><small>프로필 영상 URL을 등록하면 이 영역에서 바로 재생됩니다.</small></div>}</div><article className="memberPhilosophy memberCommonVisual">{detailAssets.philosophyImageUrl?<img src={detailAssets.philosophyImageUrl} alt="화성인사이드의 철학"/>:<div className="memberCommonFallback philosophyFallback"><b>★ 화성인사이드</b><h2>화성인사이드의 철학</h2><p>좋은 연결은 더 좋은 세상을 만듭니다.</p><p>문화와 기술, 사람과 사람이 만나는 가치를 추구합니다.</p><p>실력 기반의 네트워크로 새로운 기회를 만듭니다.</p></div>}</article></section>
  <section className="memberDetailCols memberDetailColsV64"><article><h2>◎ 개인정보 소개</h2><p>{m.intro||'소개가 아직 등록되지 않았습니다.'}</p></article><article><h2>▣ 믿을 수 있는 경력 · 이력</h2><div className="careerRows">{careers.length?careers.map(c=><div key={c.id}><time>{c.period}</time><section><b>{c.company}</b><span>{c.role}</span><p>{c.description}</p></section></div>):<p>등록된 경력이 없습니다.</p>}</div></article></section>
  <section className="memberRecommend"><div className="detailSectionTitle"><h2>♡ {m.name}님과 해당 콘텐츠가 높은 화성인사이드 멤버 추천</h2></div><div>{(related||[]).map(r=><a href={`/members/${r.id}`} key={r.id}>{r.profile_image_url?<img src={r.profile_image_url} alt=""/>:<span/>}<b>{r.name}</b><small>{r.job}</small><em>{(r.tags||[]).slice(0,2).join(' · ')}</em></a>)}</div></section>
  <section className="memberStrengthSection memberStrengthSelf"><article className="memberRadarCard"><h2>☆ 인사이더 강점 레이더</h2><p className="memberRadarCaption">회원이 직접 평가한 0~100점 셀프 어필 지표입니다.</p><Radar values={strengths}/></article><div className="memberStrengthCards commonStrengthCopy">{cardOrder.map(k=><article key={k}><div className="strengthCopyIcon">{icons[k]}</div><div><b>{k}</b><p>{strengthCopy[k]}</p></div></article>)}</div></section>
  <section className="memberConnect"><div><b>함께 연결하고 싶다면?</b><span>새로운 인연을 배우고, 함께 성장하며 더 큰 가치를 만들어보세요.</span></div><div className="memberConnectActions"><a href="/login">네트워크 요청하기</a><a className="ghost" href="/community">메시지 보내기</a></div></section>
 </main>
}
