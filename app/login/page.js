'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage(){
  const router=useRouter();
  const [username,setUsername]=useState('');
  const [password,setPassword]=useState('');
  const [loading,setLoading]=useState(false);
  const [msg,setMsg]=useState('');
  const [urlError,setUrlError]=useState('');

  useEffect(()=>{
    const params=new URLSearchParams(window.location.search);
    setUrlError(params.get('error')||'');
  },[]);

  async function submit(e){
    e.preventDefault();setLoading(true);setMsg('');
    try{
      const r=await fetch('/api/auth/login',{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify({username,password})});
      const d=await r.json();
      if(!r.ok) throw new Error(d.error||'로그인에 실패했습니다.');
      const params=new URLSearchParams(window.location.search);
      const next=params.get('next');
      router.replace(next || '/');
      router.refresh();
    }catch(e){setMsg(e?.message||'로그인에 실패했습니다.');}
    finally{setLoading(false);}
  }

  return <main className="authPage"><div className="authCard"><a href="/" className="authBrand">★ 화성인사이드</a><h1>로그인</h1><p>아이디와 비밀번호로 간편하게 로그인하세요.</p>{urlError==='suspended'&&<div className="authAlert">정지된 계정입니다. 관리자에게 문의하세요.</div>}{urlError==='forbidden'&&<div className="authAlert">접근 권한이 없습니다.</div>}{msg&&<div className="authAlert">{msg}</div>}<form onSubmit={submit}><label>아이디<input autoCapitalize="none" autoCorrect="off" autoComplete="username" required value={username} onChange={e=>setUsername(e.target.value.toLowerCase())} placeholder="아이디"/></label><label>비밀번호<input type="password" autoComplete="current-password" required minLength={6} value={password} onChange={e=>setPassword(e.target.value)}/></label><button disabled={loading}>{loading?'로그인 중...':'로그인'}</button></form><div className="authLinks"><a href="/signup">회원가입</a><a href="/">메인으로</a></div></div></main>;
}
