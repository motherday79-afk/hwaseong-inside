const newsItems = [
  {
    title: '5월 정기 네트워킹 행사 안내',
    desc: '화성인사이드 5월 멤버들과 함께 새로운 연결을 만들어보세요.',
    date: '2025.05.23',
    image: '/assets/ui/news-1.png'
  },
  {
    title: '2025 화성 어워즈 후보 공모',
    desc: '올해를 빛낸 화성의 인재를 추천해주세요.',
    date: '2025.05.15',
    image: '/assets/ui/news-2.png'
  },
  {
    title: '신규 그룹장 모집 안내',
    desc: '새로운 네트워크 그룹을 함께 이끌어갈 리더를 기다립니다.',
    date: '2025.05.01',
    image: '/assets/ui/news-3.png'
  }
];

const featuredHotspots = [
  { id: '1', left: 14.8, top: 21.5 },
  { id: '2', left: 29.2, top: 21.5 },
  { id: '3', left: 43.6, top: 21.5 },
  { id: '4', left: 58.0, top: 21.5 },
  { id: '5', left: 72.4, top: 21.5 },
  { id: '6', left: 14.8, top: 60.5 },
  { id: '7', left: 29.2, top: 60.5 },
  { id: '8', left: 43.6, top: 60.5 },
  { id: '9', left: 58.0, top: 60.5 },
  { id: '10', left: 72.4, top: 60.5 }
];

const regularHotspots = Array.from({ length: 20 }, (_, i) => {
  const col = i % 10;
  const row = Math.floor(i / 10);
  const cols = [7.8, 15.2, 22.7, 30.1, 37.5, 45.0, 52.4, 59.8, 67.3, 74.7];
  const tops = [18.8, 58.0];
  return {
    id: String(i + 11),
    left: cols[col],
    top: tops[row]
  };
});

function Hotspot({ href, left, top, width, height, label }) {
  return (
    <a
      href={href}
      className="hotspot"
      aria-label={label}
      style={{ left: `${left}%`, top: `${top}%`, width: `${width}%`, height: `${height}%` }}
    />
  );
}

export default function Home() {
  return (
    <main className="mainImageLock">
      <div className="artboard">
        <img className="sectionImage" src="/assets/mockup/top-lockup.png" alt="화성인사이드 메인 상단 시안" />

        <img className="sectionImage" src="/assets/mockup/chair-lockup.png" alt="의장 인사 영상과 인사말" />

        <section className="interactiveImageSection featureSection">
          <img className="sectionImage" src="/assets/mockup/featured-lockup.png" alt="Featured 10 멤버 섹션" />
          {featuredHotspots.map((spot) => (
            <Hotspot
              key={spot.id}
              href={`/members/${spot.id}`}
              left={spot.left}
              top={spot.top}
              width={11.2}
              height={28}
              label={`Featured member ${spot.id}`}
            />
          ))}
        </section>

        <section className="newsReplica" aria-label="공지와 뉴스">
          <div className="newsHeaderRow">
            <h2>📣 공지 & 뉴스</h2>
            <a href="#">전체보기 ›</a>
          </div>
          <div className="newsReplicaGrid">
            {newsItems.map((item) => (
              <article key={item.title}>
                <img src={item.image} alt="" />
                <div>
                  <h3>
                    {item.title} <em>NEW</em>
                  </h3>
                  <p>{item.desc}</p>
                  <small>{item.date}</small>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="interactiveImageSection regularSectionLockup">
          <img className="sectionImage" src="/assets/mockup/regular-lockup.png" alt="40인 멤버 섹션" />
          {regularHotspots.map((spot) => (
            <Hotspot
              key={spot.id}
              href={`/members/${spot.id}`}
              left={spot.left}
              top={spot.top}
              width={6.7}
              height={24.5}
              label={`Regular member ${spot.id}`}
            />
          ))}
        </section>

        <img className="sectionImage" src="/assets/mockup/footer-lockup.png" alt="화성인사이드 푸터" />
      </div>
    </main>
  );
}
