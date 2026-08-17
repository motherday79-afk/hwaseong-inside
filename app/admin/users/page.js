'use client';
import { useEffect,useMemo,useState } from 'react';
import { PageTitle,Card,Field,Input,Textarea,Badge } from '../../../components/admin/AdminUI';
const parseTags=v=>[...new Set(String(v||'').split(/[\n,]+|\s+(?=#)/g).map(x=>x.trim().replace(/^#+/,'')).filter(Boolean))];
export default function UsersAdmin(){
 const [users,setUsers]=useState([]),[selected,setSelected]=useState(''),[msg,setMsg]=useState(''),[password,setPassword]=useState(''),[q,setQ]=useState('');
 async function load(){const r=await fetch('/api/admin/users',{cache:'no-store'});const d=await r.json();if(r.ok){setUsers(d.users||[]);setSelected(s=>s||(d.users?.[0]?.user_id||''));}else setMsg(d.error||'불러오기 실패')}
 useEffect(()=>{load()},[]);
 const list=useMemo(()=>users.filter(u=>(u.name+u.username+u.email).toLowerCase().includes(q.toLowerCase())),[users,q]); const u=users.find(x=>x.user_id===selected)||users[0];
 function set(k,v){setUsers(p=>p.map(x=>x.user_id===u.user_id?{...x,[k]:v}:x))}
 async function save(extra={}){setMsg('저장 중...');const payload={...u,...extra,password:extra.password||undefined};const r=await fetch('/api/admin/users',{method:'PUT',headers:{'content-type':'application/json'},body:JSON.stringify(payload)});const d=await r.json();setMsg(r.ok?'저장되었습니다.':d.error||'실패');if(r.ok){setPassword('');load();}}
 return <div className="adminPage"><PageTitle title="계정 & 권한 관리" desc="아이디·이메일·회원정보·권한을 한 곳에서 수정하고 비밀번호는 새 값으로 재설정할 수 있습니다."/>
 <div className="adminMemberLayout"><Card title="회원 계정"><Input placeholder="이름·아이디·이메일 검색" value={q} onChange={e=>setQ(e.target.value)}/><div className="adminNewsList">{list.map(x=><button key={x.user_id} className={x.user_id===u?.user_id?'active':''} onClick={()=>setSelected(x.user_id)}><span><b>{x.name||'이름 미등록'}</b><small>@{x.username} · {x.email}</small></span><Badge type={x.role==='admin'?'purple':x.status==='active'?'green':''}>{x.role} / {x.status}</Badge></button>)}</div></Card>
 {u&&<Card title={`${u.name||u.username} 계정 수정`} desc={msg||'현재 비밀번호는 보안상 조회할 수 없으며, 관리자는 새 비밀번호로 재설정할 수 있습니다.'}><div className="adminFormGrid">
  <Field label="아이디"><Input value={u.username||''} onChange={e=>set('username',e.target.value.toLowerCase())}/></Field><Field label="로그인 이메일"><Input type="email" value={u.email||''} onChange={e=>set('email',e.target.value)}/></Field>
  <Field label="새 비밀번호" hint="입력한 경우에만 비밀번호가 변경됩니다."><Input type="password" minLength="6" value={password} onChange={e=>setPassword(e.target.value)} placeholder="6자 이상 새 비밀번호"/></Field>
  <Field label="권한"><select className="adminInput" value={u.role} onChange={e=>set('role',e.target.value)}><option value="admin">최고 관리자</option><option value="editor">운영 관리자</option><option value="member">일반 회원</option></select></Field>
  <Field label="계정 상태"><select className="adminInput" value={u.status} onChange={e=>set('status',e.target.value)}><option value="active">활성</option><option value="suspended">정지</option></select></Field><Field label="이름"><Input value={u.name||''} onChange={e=>set('name',e.target.value)}/></Field>
  <Field label="직업 / 직책"><Input value={u.job||''} onChange={e=>set('job',e.target.value)}/></Field><Field label="나이"><Input type="number" value={u.age||''} onChange={e=>set('age',e.target.value?Number(e.target.value):null)}/></Field>
  <Field label="성별"><Input value={u.gender||''} onChange={e=>set('gender',e.target.value)}/></Field><Field label="공개 이메일"><Input value={u.public_email||''} onChange={e=>set('public_email',e.target.value)}/></Field><Field label="전화번호"><Input type="tel" value={u.phone||''} onChange={e=>set('phone',e.target.value)} placeholder="010-0000-0000"/></Field>
  <Field label="최종학력"><Input value={u.school||''} onChange={e=>set('school',e.target.value)}/></Field><Field label="활동지역"><Input value={u.area||''} onChange={e=>set('area',e.target.value)}/></Field>
  <Field label="등급"><select className="adminInput" value={u.tier||'Gold'} onChange={e=>set('tier',e.target.value)}><option>Gold</option><option>Platinum</option></select></Field><Field label="프로필 공개"><select className="adminInput" value={u.is_published?'public':'private'} onChange={e=>set('is_published',e.target.value==='public')}><option value="public">공개</option><option value="private">비공개</option></select></Field>
  <Field label="프로필 이미지 URL"><Input value={u.profile_image_url||''} onChange={e=>set('profile_image_url',e.target.value)}/></Field><Field label="유튜브 URL"><Input value={u.youtube_url||''} onChange={e=>set('youtube_url',e.target.value)} placeholder="https://youtu.be/..."/></Field>
  <Field label="유튜브 썸네일 URL"><Input value={u.youtube_thumbnail_url||''} onChange={e=>set('youtube_thumbnail_url',e.target.value)}/></Field><Field label="해시태그"><Input value={(u.tags||[]).join(', ')} onChange={e=>set('tags',parseTags(e.target.value))}/></Field>
  <Field label="소개"><Textarea rows={7} value={u.intro||''} onChange={e=>set('intro',e.target.value)}/></Field>
 </div><div className="adminActionRow"><button className="adminBtn primary" onClick={()=>save(password?{password}: {})}>전체 정보 저장</button></div></Card>}</div></div>
}
