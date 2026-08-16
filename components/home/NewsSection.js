const news=[
 {id:1,type:'공지',icon:'📣',title:'5월 정기 네트워킹 행사 안내',desc:'화성인사이드 멤버들과 함께하는 네트워킹 행사 소식을 확인하세요.',date:'2025.05.23'},
 {id:2,type:'뉴스',icon:'🏆',title:'2025 화성 어워즈 후보 공모',desc:'화성을 빛낸 인재를 추천하고 함께 축하해주세요.',date:'2025.05.16'},
 {id:3,type:'공지',icon:'📅',title:'신규 그룹별 운영 안내',desc:'새로운 그룹 운영 방식과 참여 정보를 안내합니다.',date:'2025.05.01'}
];
export default function NewsSection(){return <section className="webSection webNews"><div className="webWrap"><div className="webTitleRow"><h2>공지 & 뉴스</h2><a href="/notice-news">전체보기 →</a></div><div className="webNewsGrid">{news.map((n,i)=><a className="webNewsCard" href={`/notice-news/${n.id}`} key={n.id}><div className={`webNewsVisual tone${i+1}`}><span>{n.icon}</span><small>{n.type}</small></div><div className="webNewsBody"><strong>{n.title}</strong><p>{n.desc}</p><time>{n.date}</time></div></a>)}</div></div></section>}
