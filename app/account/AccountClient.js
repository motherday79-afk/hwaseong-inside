'use client';
import { useEffect,useState } from 'react';
import { createClient } from '../../lib/supabase/client';

const strengthLabels=['창의','연결','통찰','공감','실행','성장'];
const defaultStrengths={창의:80,연결:80,통찰:80,공감:80,실행:80,성장:80};

export default function AccountClient({user}){
 const [m,setM]=useState(null);const [msg,setMsg]=useState('');const [uploading,setUploading]=useState(false);
 useEffect(()=>{fetch('/api/profile').then(r=>r.json()).then(d=>{const member=d.member||{};member.careers=(member.careers||[]).sort((a,b)=>(a.sort_order||0)-(b.sort_order||0));const old=member.strengths||{};member.strengths={...defaultStrengths,...old,통찰:old.통찰??old.분석??80};delete member.strengths.분석;setM(member)});},[]);
 const set=(k,v)=>setM(p=>({...p,[k]:v}));
 async function save(){setMsg('저장 중...');const r=await fetch('/api/profile',{method:'PUT',headers:{'content-type':'application/json'},body:JSON.stringify(m)});const d=await r.json();setMsg(r.ok?'저장되었습니다. 상세페이지에 바로 반영됩니다.':d.error||'저장 실패');}
 async function upload(e){const file=e.target.files?.[0];if(!file)return;setUploading(true);const fd=new FormData();fd.append('file',file);fd.append('folder','profiles');const r=await fetch('/api/upload',{method:'POST',body:fd});const d=await r.json();if(r.ok)set('profile_image_url',d.url);else setMsg(d.error);setUploading(false)}
 async function logout(){const supabase=createClient();await supabase.auth.signOut();location.href='/';}
 if(!m)return <main className="accountPage"><p>프로필을 불러오는 중...</p></main>;
 return <main className="accountPage">
  <div className="accountHead"><div><a href="/">← 화성인사이드</a><h1>내 프로필</h1><p>@{user.username||'아이디 미등록'} · {user.email} · {user.role}</p></div><div>{['admin','editor'].includes(user.role)&&<a className="accountAdminBtn" href="/admin">관리자 페이지</a>}<button onClick={logout}>로그아웃</button></div></div>
  <div className="accountGrid"><section className="accountPhoto"><div>{m.profile_image_url?<img src={m.profile_image_url} alt="프로필"/>:<span>프로필 이미지</span>}</div><label>{uploading?'업로드 중...':'프로필 이미지 변경'}<input hidden type="file" accept="image/*" onChange={upload}/></label><small>권장 1200×1200px · JPG/WEBP</small><a className="accountPreviewLink" href={m.id?`/members/${m.id}`:'/members'} target="_blank">내 상세페이지 미리보기 ↗</a></section>
  <section className="accountForm">
   <label>이름<input value={m.name||''} onChange={e=>set('name',e.target.value)}/></label><label>직업/직책<input value={m.job||''} onChange={e=>set('job',e.target.value)}/></label>
   <label className="wide">한 줄 소개 / 슬로건<input value={m.tagline||''} onChange={e=>set('tagline',e.target.value)} placeholder="예: 모두가 골고루 잘사는 성숙한 문화시민의 사회를 만듭니다."/></label>
   <label>나이<input type="number" value={m.age||''} onChange={e=>set('age',Number(e.target.value))}/></label><label>성별<input value={m.gender||''} onChange={e=>set('gender',e.target.value)}/></label><label>공개 이메일<input value={m.public_email||''} onChange={e=>set('public_email',e.target.value)}/></label><label>최종학력<input value={m.school||''} onChange={e=>set('school',e.target.value)}/></label><label>활동지역<input value={m.area||''} onChange={e=>set('area',e.target.value)}/></label>
   <label className="wide">전문분야 / 해시태그<input value={(m.tags||[]).join(', ')} onChange={e=>set('tags',e.target.value.split(',').map(v=>v.trim()).filter(Boolean))} placeholder="영화제작, 콘텐츠기획, AI콘텐츠제작"/></label>
   <label className="wide">개인정보 소개<textarea rows="8" value={m.intro||''} onChange={e=>set('intro',e.target.value)} placeholder="상세페이지의 ‘개인정보 소개’ 영역에 노출됩니다."/></label>
   <label className="wide">프로필 유튜브 URL<input value={m.youtube_url||''} onChange={e=>set('youtube_url',e.target.value)} placeholder="https://youtu.be/..."/></label><label className="wide">영상 썸네일 URL<input value={m.youtube_thumbnail_url||''} onChange={e=>set('youtube_thumbnail_url',e.target.value)} placeholder="https://..."/></label>
   <div className="wide accountStrengths"><h3>나의 강점 셀프 어필</h3><p>창의 · 연결 · 통찰 · 공감 · 실행 · 성장 항목을 각각 0~100점으로 직접 평가해 주세요. 저장하면 내 상세페이지의 6각 레이더에 즉시 반영됩니다.</p><div>{strengthLabels.map(k=><label key={k}><span>{k}</span><input type="number" min="0" max="100" value={m.strengths?.[k]??80} onChange={e=>set('strengths',{...(m.strengths||defaultStrengths),[k]:Math.max(0,Math.min(100,Number(e.target.value)||0))})}/></label>)}</div></div>
   <div className="wide accountCareers"><h3>경력 · 이력</h3>{(m.careers||[]).map((c,i)=><div key={c.id||i}><input placeholder="기간" value={c.period||''} onChange={e=>{const a=[...(m.careers||[])];a[i]={...a[i],period:e.target.value};set('careers',a)}}/><input placeholder="회사/기관" value={c.company||''} onChange={e=>{const a=[...(m.careers||[])];a[i]={...a[i],company:e.target.value};set('careers',a)}}/><input placeholder="역할" value={c.role||''} onChange={e=>{const a=[...(m.careers||[])];a[i]={...a[i],role:e.target.value};set('careers',a)}}/><input placeholder="설명" value={c.description||c.desc||''} onChange={e=>{const a=[...(m.careers||[])];a[i]={...a[i],description:e.target.value};set('careers',a)}}/><button onClick={()=>set('careers',(m.careers||[]).filter((_,j)=>j!==i))}>삭제</button></div>)}<button onClick={()=>set('careers',[...(m.careers||[]),{period:'',company:'',role:'',description:''}])}>+ 경력 추가</button></div>
   <div className="wide accountSave"><button onClick={save}>프로필 저장</button><span>{msg}</span></div>
  </section></div>
 </main>
}
