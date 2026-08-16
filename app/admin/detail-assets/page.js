'use client';
import { useAdmin } from '../../../components/admin/AdminStore';
import { PageTitle, Card, ImageUploader, Field, Input } from '../../../components/admin/AdminUI';
import { IMAGE_SPECS,DEFAULT_STRENGTH_COPY } from '../../../data/adminDefaults';
const ORDER=['창의','공감','연결','실행','통찰','성장'];
export default function DetailAssetsAdmin(){
 const {data,updateSection}=useAdmin();
 const a=data.detailAssets||{};
 const copy={...DEFAULT_STRENGTH_COPY,...(a.strengthDescriptions||{})};
 const updateCopy=(key,value)=>updateSection('detailAssets',{strengthDescriptions:{...copy,[key]:value}});
 return <div className="adminPage"><PageTitle title="상세 공통 영역" desc="회원별 점수와 무관하게 모든 회원 상세페이지에 공통으로 노출되는 영역을 관리합니다."/>
  <Card title="화성인사이드의 철학" desc="회원 프로필 영상 오른쪽에 전회원 공통으로 노출됩니다."><ImageUploader label="화성인사이드 철학 공통 이미지" value={a.philosophyImageUrl||''} onChange={v=>updateSection('detailAssets',{philosophyImageUrl:v})} spec={IMAGE_SPECS.philosophyImage}/></Card>
  <Card title="강점 설명 카드" desc="레이더 왼쪽의 점수는 회원마다 다르며, 아래 6개 설명문만 모든 회원에게 동일하게 노출됩니다."><div className="adminFormGrid">{ORDER.map(k=><Field key={k} label={k}><Input value={copy[k]||''} onChange={e=>updateCopy(k,e.target.value)}/></Field>)}</div><p className="adminNote">회원은 내 프로필에서 창의·연결·통찰·공감·실행·성장을 각각 0~100점으로 직접 입력합니다. 관리자는 회원 관리에서 해당 점수를 수정할 수 있습니다.</p></Card>
 </div>
}
