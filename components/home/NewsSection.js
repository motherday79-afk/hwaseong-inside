const news=[
  {id:1,title:'5월 정기 네트워킹 행사 안내',desc:'화성인사이드 멤버들과 함께하는 네트워킹 행사 소식을 확인하세요.',date:'2025.05.23',image:'/assets/ui/news-1.png'},
  {id:2,title:'2025 화성 어워즈 후보 공모',desc:'화성을 빛낸 인재를 추천하고 함께 축하해주세요.',date:'2025.05.16',image:'/assets/ui/news-2.png'},
  {id:3,title:'신규 그룹별 운영 안내',desc:'새로운 그룹 운영 방식과 참여 정보를 안내합니다.',date:'2025.05.01',image:'/assets/ui/news-3.png'}
];
export default function NewsSection(){
 return <section className="domSection" id="news"><div className="domWrap">
  <div className="domSimpleTitle"><h2>📣 공지 &amp; 뉴스</h2><a href="/notice-news">전체보기 ›</a></div>
  <div className="domNewsGrid">{news.map(n=><a href={`/notice-news/${n.id}`} className="domNewsCard" key={n.id}>
    <img src={n.image} alt=""/><div><div className="domNewsHeadline"><strong>{n.title}</strong><span>NEW</span></div><p>{n.desc}</p><small>{n.date}</small></div>
  </a>)}</div>
 </div></section>
}
