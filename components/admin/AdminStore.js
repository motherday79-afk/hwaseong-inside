'use client';
import { createContext,useContext,useEffect,useMemo,useRef,useState } from 'react';
import { DEFAULT_ADMIN_DATA } from '../../data/adminDefaults';
import { members as initialMembers } from '../../data/members';
const AdminContext=createContext(null);
const clone=v=>JSON.parse(JSON.stringify(v));
const same=(a,b)=>JSON.stringify(a)===JSON.stringify(b);
export function AdminProvider({children}){
 const [data,setData]=useState(clone(DEFAULT_ADMIN_DATA));const [members,setMembers]=useState(clone(initialMembers));const [ready,setReady]=useState(false);const [status,setStatus]=useState('불러오는 중');const lastSaved=useRef(null);
 useEffect(()=>{(async()=>{try{const r=await fetch('/api/admin/state',{cache:'no-store'});const d=await r.json();if(!r.ok)throw new Error(d.error||'데이터 로드 실패');const nextData=d.data||clone(DEFAULT_ADMIN_DATA);const nextMembers=d.members?.length?d.members:clone(initialMembers);setData(nextData);setMembers(nextMembers);lastSaved.current=clone({data:nextData,members:nextMembers});setStatus('저장됨');}catch(e){console.error(e);setStatus('DB 연결 필요');lastSaved.current=clone({data:DEFAULT_ADMIN_DATA,members:initialMembers});}finally{setReady(true)}})()},[]);
 useEffect(()=>{if(!ready||!lastSaved.current)return;const current={data,members};if(same(current,lastSaved.current))return;setStatus('저장 대기');const t=setTimeout(async()=>{const before=lastSaved.current;const dataPatch={};['site','chair','footer'].forEach(k=>{if(!same(data[k],before.data[k]))dataPatch[k]=data[k]});const featuredChanged=!same(data.featuredIds,before.data.featuredIds);const beforeMembers=new Map((before.members||[]).map(m=>[String(m.id),m]));const changedMembers=(members||[]).filter(m=>!same(m,beforeMembers.get(String(m.id))));const beforeNews=new Map((before.data.news||[]).map(n=>[String(n.id),n]));const nowNews=new Map((data.news||[]).map(n=>[String(n.id),n]));const changedNews=(data.news||[]).filter(n=>!same(n,beforeNews.get(String(n.id))));const deletedNewsIds=[...beforeNews.keys()].filter(id=>!nowNews.has(id));setStatus('저장 중...');try{const payload={dataPatch,changedMembers,changedNews,deletedNewsIds};if(featuredChanged)payload.featuredIds=data.featuredIds||[];const r=await fetch('/api/admin/state',{method:'PUT',headers:{'content-type':'application/json'},body:JSON.stringify(payload)});const d=await r.json();if(!r.ok)throw new Error(d.error||'저장 실패');lastSaved.current=clone(current);setStatus('저장됨');}catch(e){console.error(e);setStatus('저장 실패');}},850);return()=>clearTimeout(t)},[data,members,ready]);
 const updateSection=(section,patch)=>setData(p=>({...p,[section]:{...p[section],...patch}}));
 const updateMember=(id,patch)=>setMembers(p=>p.map(m=>String(m.id)===String(id)?{...m,...patch}:m));
 const reset=()=>{setData(clone(DEFAULT_ADMIN_DATA));setMembers(clone(initialMembers));};
 const value=useMemo(()=>({data,setData,members,setMembers,updateSection,updateMember,reset,ready,status}),[data,members,ready,status]);
 return <AdminContext.Provider value={value}>{children}</AdminContext.Provider>
}
export function useAdmin(){return useContext(AdminContext)}
