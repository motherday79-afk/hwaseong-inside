'use client';
import { useAdmin } from '../../../components/admin/AdminStore';
import { PageTitle, Card, Field, Input, Textarea, ImageUploader } from '../../../components/admin/AdminUI';
import { IMAGE_SPECS } from '../../../data/adminDefaults';
export default function HomeAdmin(){
 const {data,updateSection}=useAdmin(); const s=data.site,c=data.chair;
 return <div className="adminPage"><PageTitle title="메인 관리" desc="메인페이지에 노출되는 문구, 의장 정보, 이미지와 영상 자산을 관리합니다."/>
  <Card title="히어로 영역" desc="메인 최상단 타이틀과 버튼 문구를 수정합니다."><div className="adminFormGrid">
   <Field label="강조 타이틀"><Input value={s.heroTitle1} onChange={e=>updateSection('site',{heroTitle1:e.target.value})}/></Field>
   <Field label="메인 타이틀"><Input value={s.heroTitle2} onChange={e=>updateSection('site',{heroTitle2:e.target.value})}/></Field>
   <Field label="소개 문구"><Textarea rows={4} value={s.heroDescription} onChange={e=>updateSection('site',{heroDescription:e.target.value})}/></Field>
   <Field label="첫 번째 버튼"><Input value={s.primaryButton} onChange={e=>updateSection('site',{primaryButton:e.target.value})}/></Field>
   <Field label="두 번째 버튼"><Input value={s.secondaryButton} onChange={e=>updateSection('site',{secondaryButton:e.target.value})}/></Field>
  </div><ImageUploader label="히어로 비주얼" value={s.heroVisualUrl} onChange={v=>updateSection('site',{heroVisualUrl:v})} spec={IMAGE_SPECS.heroVisual}/></Card>
  <Card title="의장 영역" desc="의장/영화감독 표기, 인사말, 사진, 영상 썸네일과 서명을 한 곳에서 관리합니다."><div className="adminFormGrid">
   <Field label="이름"><Input value={c.name} onChange={e=>updateSection('chair',{name:e.target.value})}/></Field>
   <Field label="직책"><Input value={c.title} onChange={e=>updateSection('chair',{title:e.target.value})}/></Field>
   <Field label="인사말"><Textarea rows={11} value={c.greeting} onChange={e=>updateSection('chair',{greeting:e.target.value})}/></Field>
   <Field label="영상 URL" hint="유튜브 또는 최종 영상 주소"><Input value={c.videoUrl} onChange={e=>updateSection('chair',{videoUrl:e.target.value})} placeholder="https://..."/></Field>
  </div>
  <div className="adminUploadStack"><ImageUploader label="의장 인사말 사진" value={c.portraitUrl} onChange={v=>updateSection('chair',{portraitUrl:v})} spec={IMAGE_SPECS.chairPortrait}/><ImageUploader label="의장 영상 썸네일" value={c.videoThumbnailUrl} onChange={v=>updateSection('chair',{videoThumbnailUrl:v})} spec={IMAGE_SPECS.chairVideo}/><ImageUploader label="의장 서명" value={c.signatureUrl} onChange={v=>updateSection('chair',{signatureUrl:v})} spec={IMAGE_SPECS.signature}/></div></Card>
 </div>
}
