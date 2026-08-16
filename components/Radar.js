const ORDER=['통찰','공감','연결','창의','성장','실행'];
export default function Radar({values={}}){
  const nums=ORDER.map(k=>Math.max(0,Math.min(100,Number(values?.[k] ?? (k==='통찰'?values?.분석:undefined) ?? 80))));
  const c=130,r=84;
  const point=(i,rr)=>{const a=(-90+i*60)*Math.PI/180;return [c+Math.cos(a)*rr,c+Math.sin(a)*rr]};
  const poly=(scale)=>ORDER.map((_,i)=>point(i,r*scale).join(',')).join(' ');
  const pts=nums.map((v,i)=>point(i,r*(v/100)).join(',')).join(' ');
  return <div className="radarWrap"><svg viewBox="0 0 260 250" className="radarSvg" role="img" aria-label="회원 셀프 어필 강점 레이더">
    {[1,.75,.5,.25].map(s=><polygon key={s} points={poly(s)} fill="none" stroke="#d8ccff" strokeWidth="1"/>)}
    {ORDER.map((_,i)=>{const [x,y]=point(i,r);return <line key={i} x1={c} y1={c} x2={x} y2={y} stroke="#e4dcff"/>})}
    <polygon points={pts} fill="rgba(122,92,255,.34)" stroke="#7657ff" strokeWidth="2.5"/>
    {nums.map((v,i)=>{const [x,y]=point(i,r*(v/100));return <circle key={i} cx={x} cy={y} r="3.2" fill="#7657ff"/>})}
    {ORDER.map((label,i)=>{const [x,y]=point(i,108);return <text key={label} x={x} y={y+4} textAnchor="middle" fontSize="11" fontWeight="700" fill="#333">{label}</text>})}
  </svg></div>
}
