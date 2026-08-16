'use client';
import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { DEFAULT_ADMIN_DATA } from '../../data/adminDefaults';
import { members as initialMembers } from '../../data/members';

const KEY = 'hwaseong-inside-admin-v1';
const AdminContext = createContext(null);

function clone(v){ return JSON.parse(JSON.stringify(v)); }

export function AdminProvider({children}){
  const [data,setData] = useState(DEFAULT_ADMIN_DATA);
  const [members,setMembers] = useState(initialMembers);
  const [ready,setReady] = useState(false);

  useEffect(()=>{
    try{
      const saved = localStorage.getItem(KEY);
      if(saved){
        const parsed = JSON.parse(saved);
        if(parsed.data) setData(parsed.data);
        if(parsed.members) setMembers(parsed.members);
      }
    }catch(e){ console.warn('admin storage read failed',e); }
    setReady(true);
  },[]);

  useEffect(()=>{
    if(!ready) return;
    try{ localStorage.setItem(KEY, JSON.stringify({data,members})); }catch(e){ console.warn('admin storage write failed',e); }
  },[data,members,ready]);

  const updateSection=(section,patch)=>setData(prev=>({...prev,[section]:{...prev[section],...patch}}));
  const updateMember=(id,patch)=>setMembers(prev=>prev.map(m=>String(m.id)===String(id)?{...m,...patch}:m));
  const reset=()=>{ setData(clone(DEFAULT_ADMIN_DATA)); setMembers(clone(initialMembers)); };

  const value=useMemo(()=>({data,setData,members,setMembers,updateSection,updateMember,reset,ready}),[data,members,ready]);
  return <AdminContext.Provider value={value}>{children}</AdminContext.Provider>;
}
export function useAdmin(){ return useContext(AdminContext); }
