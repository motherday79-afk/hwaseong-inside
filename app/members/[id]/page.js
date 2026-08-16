import { notFound } from 'next/navigation';
import { createAdminClient } from '../../../lib/supabase/admin';
import YouTubeInline from '../../../components/YouTubeInline';
export const dynamic='force-dynamic';
export default async function MemberDetail({params}){
 const {id}=await params; const admin=createAdminClient();
 const {data:m}=await admin.from('members').select('*, careers(*)').eq('id',Number(id)).eq('is_published',true).maybeSingle(); if(!m)notFound();
 const careers=(m.careers||[]).sort((a,b)=>(a.sort_order||0)-(b.sort_order||0));
 const {data:related}=await admin.from('members').select('id,name,job,profile_image_url').eq('is_published',true).neq('id',m.id).limit(5);
 return <main className="memberDetailDom v6"><header className="detailTop"><a href="/">★ 화성인사이드</a><nav><a href="/members">멤버</a><a href="/notice-news">공지게시판</a><a href="/community">커뮤니티</a><a href="/login">로그인</a></nav></header>
 <div className="memberBread"><a href="/">홈</a> › <a href="/members">멤버</a> › {m.name}</div>
 <section className="memberHeroDom"><div className="memberPhotoDom">{m.profile_image_url?<img src={m.profile_image_url} alt={`${m.name} 프로필`}/>:<span>프로필 이미지</span>}</div><article><span className="memberTier">{m.tier} Member</span><h1>{m.name}</h1><h2>{m.job}</h2><p className="memberIntroLine">{m.intro?.split('\n')[0]}</p><dl><div><dt>나이</dt><dd>{m.age?`${m.age}세`:'-'}</dd></div><div><dt>성별</dt><dd>{m.gender||'-'}</dd></div><div><dt>이메일</dt><dd>{m.public_email||'-'}</dd></div><div><dt>최종학력</dt><dd>{m.school||'-'}</dd></div><div><dt>활동지역</dt><dd>{m.area||'-'}</dd></div></dl><div className="memberTags">{(m.tags||[]).map(t=><span key={t}>#{t}</span>)}</div></article></section>
 {(m.youtube_url||m.youtube_thumbnail_url)&&<section className="memberVideoSection"><div className="detailSectionTitle"><span>PROFILE MOVIE</span><h2>{m.name}의 이야기</h2><p>썸네일을 누르면 화성인사이드 안에서 바로 재생됩니다.</p></div><YouTubeInline url={m.youtube_url} thumbnail={m.youtube_thumbnail_url} title={`${m.name} 프로필 영상`} className="memberProfileVideo"/></section>}
 <section className="memberDetailCols"><article><span className="detailEyebrow">ABOUT</span><h2>개성있는 소개</h2><p>{m.intro||'소개가 아직 등록되지 않았습니다.'}</p></article><article><span className="detailEyebrow">CAREER</span><h2>믿을 수 있는 경력 · 이력</h2><div className="careerRows">{careers.length?careers.map(c=><div key={c.id}><time>{c.period}</time><section><b>{c.company}</b><span>{c.role}</span><p>{c.description}</p></section></div>):<p>등록된 경력이 없습니다.</p>}</div></article></section>
 <section className="memberRecommend"><div className="detailSectionTitle"><span>RECOMMENDED NETWORK</span><h2>{m.name}님과 연결해볼 멤버</h2></div><div>{(related||[]).map(r=><a href={`/members/${r.id}`} key={r.id}>{r.profile_image_url?<img src={r.profile_image_url} alt=""/>:<span/>}<b>{r.name}</b><small>{r.job}</small></a>)}</div></section>
 <section className="memberConnect"><div><b>함께 연결하고 싶다면?</b><span>프로필과 전문성을 확인하고 네트워크를 시작해보세요.</span></div><a href="/login">네트워크 요청하기</a></section>
 </main>
}
