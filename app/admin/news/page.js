'use client';
import { useState } from 'react';
import { useAdmin } from '../../../components/admin/AdminStore';
import { PageTitle, Card, Field, Input, Textarea, ImageUploader, Badge } from '../../../components/admin/AdminUI';
import { IMAGE_SPECS } from '../../../data/adminDefaults';
export default function NewsAdmin(){
 const {data,setData}=useAdmin(); const [selected,setSelected]=useState(data.news[0]?.id);
 const current=data.news.find(n=>String(n.id)===String(selected))||data.news[0];
 const update=(patch)=>setData(p=>({...p,news:p.news.map(n=>String(n.id)===String(current.id)?{...n,...patch}:n)}));
 const add=()=>{const id=String(Date.now());setData(p=>({...p,news:[...p.news,{id,category:'공지',title:'새 게시물',excerpt:'',date:new Date().toISOString().slice(0,10).replaceAll('-','.'),coverUrl:'',published:false}]}));setSelected(id)};
 const del=()=>{if(!current||!confirm('이 게시물을 삭제할까요?'))return;setData(p=>({...p,news:p.news.filter(n=>String(n.id)!==String(current.id))}));setSelected(data.news.find(n=>String(n.id)!==String(current.id))?.id)};
 return <div className="adminPage"><PageTitle title="공지 & 뉴스 관리" desc="메인 카드와 게시판에 노출되는 게시물을 등록·수정·공개할 수 있습니다." actions={<button className="adminBtn primary" onClick={add}>+ 새 게시물</button>}/>
  <div className="adminMemberLayout"><Card title="게시물 목록"><div className="adminNewsList">{data.news.map(n=><button key={n.id} className={String(n.id)===String(current?.id)?'active':''} onClick={()=>setSelected(n.id)}><span><b>{n.title}</b><small>{n.date}</small></span><Badge type={n.published?'green':''}>{n.published?'공개':'비공개'}</Badge></button>)}</div></Card>
  {current&&<Card title="게시물 수정" desc="대표이미지는 메인과 게시판에서 같은 원본을 사용합니다."><ImageUploader label="대표 이미지" value={current.coverUrl} onChange={v=>update({coverUrl:v})} spec={IMAGE_SPECS.newsCover}/><div className="adminFormGrid"><Field label="카테고리"><Input value={current.category} onChange={e=>update({category:e.target.value})}/></Field><Field label="게시일"><Input value={current.date} onChange={e=>update({date:e.target.value})}/></Field><Field label="제목"><Input value={current.title} onChange={e=>update({title:e.target.value})}/></Field><Field label="요약"><Textarea rows={5} value={current.excerpt} onChange={e=>update({excerpt:e.target.value})}/></Field><Field label="공개 상태"><select className="adminInput" value={current.published?'public':'private'} onChange={e=>update({published:e.target.value==='public'})}><option value="public">공개</option><option value="private">비공개</option></select></Field></div><button className="adminBtn danger" onClick={del}>게시물 삭제</button></Card>}</div>
 </div>
}
