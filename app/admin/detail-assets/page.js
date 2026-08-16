'use client';
import { useAdmin } from '../../../components/admin/AdminStore';
import { PageTitle, Card, ImageUploader } from '../../../components/admin/AdminUI';
import { IMAGE_SPECS } from '../../../data/adminDefaults';
export default function DetailAssetsAdmin(){
 const {data,updateSection}=useAdmin();
 const a=data.detailAssets||{philosophyImageUrl:'',strengthImageUrl:''};
 return <div className="adminPage"><PageTitle title="상세 공통 이미지" desc="회원별 정보와 무관하게 모든 회원 상세페이지에 동일하게 노출되는 공통 이미지를 관리합니다. 한 번 변경하면 전회원에게 동시에 적용됩니다."/>
  <Card title="화성인사이드의 철학" desc="회원 프로필 영상 오른쪽 영역에 공통 노출됩니다."><ImageUploader label="화성인사이드 철학 공통 이미지" value={a.philosophyImageUrl||''} onChange={v=>updateSection('detailAssets',{philosophyImageUrl:v})} spec={IMAGE_SPECS.philosophyImage}/></Card>
  <Card title="인사이더 강점 레이더" desc="상세페이지 하단 강점 영역에 공통 노출됩니다."><ImageUploader label="강점 레이더 공통 이미지" value={a.strengthImageUrl||''} onChange={v=>updateSection('detailAssets',{strengthImageUrl:v})} spec={IMAGE_SPECS.strengthImage}/></Card>
 </div>
}
