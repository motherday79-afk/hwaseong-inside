'use client';
import { useEffect, useState } from 'react';
import { DEFAULT_ADMIN_DATA } from '../data/adminDefaults';
import { members as initialMembers } from '../data/members';
const KEY='hwaseong-inside-admin-v1';
export function useSiteAdminData(){
 const [state,setState]=useState({data:DEFAULT_ADMIN_DATA,members:initialMembers});
 useEffect(()=>{
  const load=()=>{try{const raw=localStorage.getItem(KEY);if(raw){const p=JSON.parse(raw);setState({data:p.data||DEFAULT_ADMIN_DATA,members:p.members||initialMembers});}}catch{}};
  load(); window.addEventListener('storage',load); return()=>window.removeEventListener('storage',load);
 },[]);
 return state;
}
