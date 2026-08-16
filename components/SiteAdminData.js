'use client';
import { useEffect,useState } from 'react';
import { DEFAULT_ADMIN_DATA } from '../data/adminDefaults';
import { members as initialMembers } from '../data/members';
export function useSiteAdminData(){
 const [state,setState]=useState({data:DEFAULT_ADMIN_DATA,members:initialMembers});
 useEffect(()=>{let alive=true;async function load(){try{const r=await fetch('/api/public/state',{cache:'no-store'});if(!r.ok)return;const d=await r.json();if(alive&&d.data&&d.members?.length)setState({data:{...DEFAULT_ADMIN_DATA,...d.data},members:d.members});}catch{}}load();return()=>{alive=false}},[]);
 return state;
}
