export default function Radar({values}){
  const labels = Object.keys(values); const nums = Object.values(values);
  const c=120, r=84;
  const pts = nums.map((v,i)=>{const a=(-90+i*60)*Math.PI/180; const rr=r*(v/100); return `${c+Math.cos(a)*rr},${c+Math.sin(a)*rr}`}).join(' ');
  const ring=(scale)=>Array.from({length:6},(_,i)=>{const a=(-90+i*60)*Math.PI/180; return `${c+Math.cos(a)*r*scale},${c+Math.sin(a)*r*scale}`}).join(' ');
  return <div className="radarWrap"><svg viewBox="0 0 240 240" className="radarSvg">
    {[1,.75,.5,.25].map(s=><polygon key={s} points={ring(s)} fill="none" stroke="#d8ccff" strokeWidth="1"/>)}
    {Array.from({length:6},(_,i)=>{const a=(-90+i*60)*Math.PI/180; return <line key={i} x1={c} y1={c} x2={c+Math.cos(a)*r} y2={c+Math.sin(a)*r} stroke="#e4dcff"/>})}
    <polygon points={pts} fill="rgba(122,92,255,.34)" stroke="#7657ff" strokeWidth="2"/>
    {labels.map((l,i)=>{const a=(-90+i*60)*Math.PI/180; return <text key={l} x={c+Math.cos(a)*106} y={c+Math.sin(a)*106+4} textAnchor="middle" fontSize="11" fill="#333">{l}</text>})}
  </svg></div>
}
