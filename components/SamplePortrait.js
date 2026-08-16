const SKINS=['#f1c9ad','#e9b997','#dba47e','#c98e68','#b97955'];
const HAIRS=['#241d25','#35242a','#17151b','#4a3028','#29242a'];
const SUITS=['#2f426f','#51427a','#3e5c63','#6a4b62','#3b4c68','#695760','#385b72','#574871'];
const BACKS=[['#eee7ff','#ffe7f0'],['#e4edff','#fae8ff'],['#f4e8ff','#ffe9dd'],['#e7f4ff','#f9e8f0'],['#eeeaff','#e9f7f5'],['#f7e7ef','#ebe7ff']];
function num(v){return Number(String(v||'0').replace(/\D/g,''))||3}
export default function SamplePortrait({id,gender='남성',className=''}){
 const n=num(id), female=String(gender).includes('여');
 const skin=SKINS[n%SKINS.length],hair=HAIRS[(n*3)%HAIRS.length],suit=SUITS[(n*5)%SUITS.length],bg=BACKS[n%BACKS.length];
 const hairStyle=n%4, shirt=n%3===0?'#fff7f8':'#fff';
 return <svg className={`v76SamplePortrait ${className}`.trim()} viewBox="0 0 540 760" role="img" aria-label="샘플 프로필 이미지" xmlns="http://www.w3.org/2000/svg">
  <defs>
   <linearGradient id={`bg${n}`} x1="0" y1="0" x2="1" y2="1"><stop stopColor={bg[0]}/><stop offset="1" stopColor={bg[1]}/></linearGradient>
   <linearGradient id={`j${n}`} x1="0" y1="0" x2="0" y2="1"><stop stopColor={suit}/><stop offset="1" stopColor="#25283a"/></linearGradient>
   <radialGradient id={`light${n}`} cx="42%" cy="26%" r="68%"><stop stopColor="#fff" stopOpacity=".9"/><stop offset="1" stopColor="#fff" stopOpacity="0"/></radialGradient>
   <filter id={`shadow${n}`} x="-20%" y="-20%" width="140%" height="150%"><feDropShadow dx="0" dy="14" stdDeviation="16" floodColor="#5f4b79" floodOpacity=".16"/></filter>
  </defs>
  <rect width="540" height="760" rx="38" fill={`url(#bg${n})`}/>
  <circle cx="92" cy="124" r="58" fill="#fff" opacity=".24"/><circle cx="464" cy="188" r="42" fill="#fff" opacity=".3"/><circle cx="455" cy="598" r="80" fill="#fff" opacity=".16"/>
  <path d="M54 204c36-74 104-120 184-129" stroke="#fff" strokeWidth="2" opacity=".45" fill="none"/><path d="M414 98l5 12 12 5-12 5-5 12-5-12-12-5 12-5z" fill="#fff" opacity=".72"/>
  <g filter={`url(#shadow${n})`}>
   <path d="M95 760c10-139 68-231 175-231s164 92 175 231z" fill={`url(#j${n})`}/>
   <path d="M220 522l50 58 52-58 38 238H178z" fill={shirt}/>
   <path d="M201 537l69 61-49 162H121c9-99 36-177 80-223zM339 537l-69 61 49 162h100c-9-99-36-177-80-223z" fill={suit}/>
   <path d="M231 480h78v83c-21 24-58 24-78 0z" fill={skin}/>
   <ellipse cx="270" cy="335" rx="111" ry="145" fill={skin}/>
   <ellipse cx="160" cy="351" rx="19" ry="32" fill={skin}/><ellipse cx="380" cy="351" rx="19" ry="32" fill={skin}/>
   {female ? <>
    <path d={hairStyle%2===0?'M159 362c-7-112 31-194 113-194 91 0 123 86 109 202-18-41-29-67-35-117-36 31-99 38-155 20-3 34-11 61-32 89z':'M154 387c-20-115 31-220 116-220 94 0 134 99 116 226-22-49-31-92-31-139-55 37-112 42-167 13-1 55-12 88-34 120z'} fill={hair}/>
    <path d="M168 347c-17 86-7 158 33 203l-48 21c-29-72-25-161 15-224zM372 347c17 86 7 158-33 203l48 21c29-72 25-161-15-224z" fill={hair}/>
   </> : <>
    <path d={hairStyle===0?'M166 296c5-91 53-139 111-139 69 0 106 49 102 137-33-38-66-57-111-57-40 0-73 19-102 59z':hairStyle===1?'M164 306c0-100 51-151 118-151 71 0 106 59 96 147-27-53-63-72-108-66-42 5-72 27-106 70z':hairStyle===2?'M168 292c18-95 72-141 137-128 56 11 84 61 70 137-35-44-73-61-114-58-36 3-67 18-93 49z':'M161 304c10-102 61-151 126-148 69 3 102 61 89 145-32-47-66-67-108-64-39 2-73 22-107 67z'} fill={hair}/>
    <path d="M169 286c13-71 50-116 104-129" stroke="#fff" strokeOpacity=".10" strokeWidth="12" fill="none"/>
   </>}
   <path d="M210 331c19-10 40-10 57 0" stroke="#674b3f" strokeWidth="6" strokeLinecap="round" fill="none" opacity=".7"/><path d="M289 331c18-10 39-10 57 0" stroke="#674b3f" strokeWidth="6" strokeLinecap="round" fill="none" opacity=".7"/>
   <ellipse cx="239" cy="350" rx="8" ry="7" fill="#34292a"/><ellipse cx="320" cy="350" rx="8" ry="7" fill="#34292a"/>
   <path d="M270 356c-4 23-7 38 3 44" stroke="#b97863" strokeWidth="5" strokeLinecap="round" fill="none" opacity=".65"/>
   <path d="M228 430c25 22 61 22 86 0" stroke="#9c554f" strokeWidth="7" strokeLinecap="round" fill="none"/>
   <path d="M223 428c31 13 65 13 94 0" stroke="#fff" strokeWidth="4" strokeLinecap="round" fill="none" opacity=".9"/>
   <ellipse cx="196" cy="397" rx="25" ry="14" fill="#ed9b94" opacity=".18"/><ellipse cx="344" cy="397" rx="25" ry="14" fill="#ed9b94" opacity=".18"/>
  </g>
  <rect width="540" height="760" rx="38" fill={`url(#light${n})`} opacity=".18"/>
 </svg>
}
