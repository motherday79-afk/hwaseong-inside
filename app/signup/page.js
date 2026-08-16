'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
export default function SignupPage(){
 const router=useRouter();
 const [form,setForm]=useState({username:'',email:'',password:'',name:'',job:''});
 const [msg,setMsg]=useState('');const [loading,setLoading]=useState(false);
 const set=(k,v)=>setForm(p=>({...p,[k]:v}));
 async function submit(e){
   e.preventDefault();setLoading(true);setMsg('');
   try{
     const username=form.username.trim().toLowerCase();
     const r=await fetch('/api/auth/signup',{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify({...form,username})});
     const d=await r.json(); if(!r.ok)throw new Error(d.error||'회원가입에 실패했습니다.');
     setMsg('가입이 완료되었습니다. 아이디로 바로 로그인할 수 있습니다.');
     setTimeout(()=>router.push('/login'),700);
   }catch(e){setMsg(e.message||'회원가입에 실패했습니다.');}
   finally{setLoading(false)}
 }
 return <main className="authPage"><div className="authCard"><a href="/" className="authBrand">★ 화성인사이드</a><h1>회원가입</h1><p>로그인은 아이디로, 이메일은 연락·계정복구 정보로 사용합니다.</p>{msg&&<div className="authAlert success">{msg}</div>}<form onSubmit={submit}><label>아이디<input autoCapitalize="none" autoCorrect="off" autoComplete="username" required minLength={4} maxLength={20} value={form.username} onChange={e=>set('username',e.target.value.toLowerCase().replace(/[^a-z0-9_]/g,''))} placeholder="영문 소문자·숫자·_ 4~20자"/></label><label>비밀번호<input type="password" autoComplete="new-password" minLength={6} required value={form.password} onChange={e=>set('password',e.target.value)}/></label><label>이름<input required value={form.name} onChange={e=>set('name',e.target.value)}/></label><label>직업 / 직책<input required value={form.job} onChange={e=>set('job',e.target.value)}/></label><label>이메일 <small style={{fontWeight:400}}>· 연락 및 계정복구용</small><input type="email" autoComplete="email" required value={form.email} onChange={e=>set('email',e.target.value)}/></label><button disabled={loading}>{loading?'가입 중...':'가입하기'}</button></form><div className="authLinks"><a href="/login">이미 계정이 있어요</a><a href="/">메인으로</a></div></div></main>
}
