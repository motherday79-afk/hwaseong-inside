'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '../../lib/supabase/client';

export default function LoginPage(){
  const router=useRouter();
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [loading,setLoading]=useState(false);
  const [msg,setMsg]=useState('');
  const [urlError,setUrlError]=useState('');

  useEffect(()=>{
    const params=new URLSearchParams(window.location.search);
    setUrlError(params.get('error')||'');
  },[]);

  async function submit(e){
    e.preventDefault();
    setLoading(true);
    setMsg('');
    try{
      const supabase=createClient();
      const {error}=await supabase.auth.signInWithPassword({email,password});
      if(error) throw error;
      const params=new URLSearchParams(window.location.search);
      router.replace(params.get('next')||'/account');
      router.refresh();
    }catch(e){
      setMsg(e?.message||'로그인에 실패했습니다.');
    }finally{
      setLoading(false);
    }
  }

  return <main className="authPage"><div className="authCard"><a href="/" className="authBrand">★ 화성인사이드</a><h1>로그인</h1><p>회원 프로필과 관리자 기능을 이용하려면 로그인하세요.</p>{urlError==='suspended'&&<div className="authAlert">정지된 계정입니다. 관리자에게 문의하세요.</div>}{urlError==='forbidden'&&<div className="authAlert">접근 권한이 없습니다.</div>}{msg&&<div className="authAlert">{msg}</div>}<form onSubmit={submit}><label>이메일<input type="email" required value={email} onChange={e=>setEmail(e.target.value)}/></label><label>비밀번호<input type="password" required minLength={6} value={password} onChange={e=>setPassword(e.target.value)}/></label><button disabled={loading}>{loading?'로그인 중...':'로그인'}</button></form><div className="authLinks"><a href="/signup">회원가입</a><a href="/">메인으로</a></div></div></main>;
}
