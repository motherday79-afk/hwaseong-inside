'use client';
import { useRef } from 'react';

export function PageTitle({title,desc,actions}){return <div className="adminPageTitle"><div><h1>{title}</h1><p>{desc}</p></div>{actions&&<div>{actions}</div>}</div>}
export function Card({title,desc,children,className=''}){return <section className={`adminCard ${className}`}><div className="adminCardHead"><div><h2>{title}</h2>{desc&&<p>{desc}</p>}</div></div>{children}</section>}
export function Field({label,hint,children}){return <label className="adminField"><span>{label}</span>{children}{hint&&<small>{hint}</small>}</label>}
export function Input(props){return <input className="adminInput" {...props}/>}
export function Textarea(props){return <textarea className="adminTextarea" {...props}/>}
export function Badge({children,type=''}){return <span className={`adminBadge ${type}`}>{children}</span>}
export function Spec({spec}){return <div className="adminSpec"><b>{spec.width} × {spec.height}px</b><span>{spec.ratio} · {spec.format}</span><small>{spec.note}</small></div>}
export function ImageUploader({label,value,onChange,spec}){
  const ref=useRef();
  const handle=(e)=>{
    const file=e.target.files?.[0]; if(!file)return;
    const reader=new FileReader(); reader.onload=()=>onChange(reader.result); reader.readAsDataURL(file);
  };
  return <div className="adminUpload">
    <div className="adminUploadPreview">{value?<img src={value} alt="업로드 미리보기"/>:<span>이미지 미리보기</span>}</div>
    <div className="adminUploadBody"><b>{label}</b>{spec&&<Spec spec={spec}/>}<div className="adminUploadBtns"><button type="button" className="adminBtn primary" onClick={()=>ref.current?.click()}>이미지 선택</button>{value&&<button type="button" className="adminBtn" onClick={()=>onChange('')}>삭제</button>}</div><input ref={ref} type="file" accept="image/*" hidden onChange={handle}/></div>
  </div>;
}
