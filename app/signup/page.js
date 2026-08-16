'use client';
import { useState } from 'react';
import { createClient } from '../../lib/supabase/client';
export default function SignupPage(){
 const [form,setForm]=useState({email:'',password:'',name:'',job:''});const [msg,setMsg]=useState('');const [loading,setLoading]=useState(false);
 const set=(k,v)=>setForm(p=>({...p,[k]:v}));
 async function submit(e){e.preventDefault();setLoading(true);setMsg('');try{const supabase=createClient();const site=window.location.origin;const {error}=await supabase.auth.signUp({email:form.email,password:form.password,options:{emailRedirectTo:`${site}/auth/callback`,data:{name:form.name,job:form.job}}});if(error)throw error;setMsg('가입 요청이 완료되었습니다. 이메일 인증이 켜져 있다면 메일의 인증 링크를 눌러주세요.');}catch(e){setMsg(e.message||'회원가입에 실패했습니다.');}finally{setLoading(false)}}
 return <main className="authPage"><div className="authCard"><a href="/" className="authBrand">★ 화성인사이드</a><h1>회원가입</h1><p>가입 후 본인 프로필을 직접 관리할 수 있습니다.</p>{msg&&<div className="authAlert success">{msg}</div>}<form onSubmit={submit}><label>이름<input required value={form.name} onChange={e=>set('name',e.target.value)}/></label><label>직업 / 직책<input required value={form.job} onChange={e=>set('job',e.target.value)}/></label><label>이메일<input type="email" required value={form.email} onChange={e=>set('email',e.target.value)}/></label><label>비밀번호<input type="password" minLength={6} required value={form.password} onChange={e=>set('password',e.target.value)}/></label><button disabled={loading}>{loading?'가입 중...':'가입하기'}</button></form><div className="authLinks"><a href="/login">이미 계정이 있어요</a><a href="/">메인으로</a></div></div></main>
}
