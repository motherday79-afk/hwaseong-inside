export const IMAGE_SPECS = {
  chairVideo: { label: '의장 영상 썸네일', width: 1600, height: 900, ratio: '16:9', format: 'JPG / WEBP', note: '텍스트 없는 원본 권장. 영상 위 문구는 웹에서 별도 노출합니다.' },
  chairPortrait: { label: '의장 인사말 사진', width: 1200, height: 1500, ratio: '4:5', format: 'JPG / WEBP', note: '허리 위 상반신, 얼굴 중앙. 최소 1200px 폭 권장.' },
  memberProfile: { label: '회원 프로필 원본', width: 1200, height: 1200, ratio: '1:1', format: 'JPG / WEBP', note: '가입 시 한 번 등록. Top10·40인·상세페이지에서 동일 원본을 자동 사용합니다.' },
  newsCover: { label: '공지 & 뉴스 대표 이미지', width: 1200, height: 675, ratio: '16:9', format: 'JPG / WEBP', note: '목록/메인 카드에서 자동 크롭됩니다. 중요한 피사체는 중앙 배치.' },
  heroVisual: { label: '메인 히어로 비주얼', width: 1600, height: 1200, ratio: '4:3', format: 'PNG / WEBP / SVG', note: '장식 그래픽은 투명 PNG 또는 SVG 권장.' },
  signature: { label: '의장 서명', width: 1200, height: 400, ratio: '3:1', format: '투명 PNG', note: '배경 투명, 검정 또는 짙은 남색 잉크 권장.' },
  logo: { label: '사이트 로고', width: 1200, height: 300, ratio: '4:1', format: 'SVG 우선 / PNG', note: '가능하면 SVG 사용. PNG는 2배 이상 고해상도로 등록.' },
};

export const DEFAULT_ADMIN_DATA = {
  site: {
    siteName: '화성인사이드',
    heroTitle1: '화성인 가치를,',
    heroTitle2: '사람의 네트워크로 잇다',
    heroDescription: '화성인사이드는 화성 출신 인재들이 함께 성장하고 연결할 수 있는 프리미엄 네트워크 플랫폼입니다.',
    primaryButton: '지금 가입하기',
    secondaryButton: '더 알아보기',
    logoUrl: '',
    heroVisualUrl: '',
  },
  chair: {
    name: '박인식',
    title: '의장/영화감독',
    greeting: '안녕하세요.\n화성인사이드의 의장/영화감독 박인식 입니다.\n한사람, 한사람을 깊이보고 공감하며 전문성 있는 네트워크의 연결을 구현하고 싶었습니다.\n\n결국 어떠한 일의 성공은 누가 하느냐, 누구와 하느냐에 달려있는 문제로 귀결된다고 확언해도 좋을만큼 연결은 중요합니다.\n\n화성인사이드를 통해 더넓은 세상으로의 도약을 응원합니다.',
    portraitUrl: '/assets/real/park-insik.jpg',
    videoThumbnailUrl: '',
    videoUrl: '',
    signatureUrl: '',
  },
  featuredIds: ['1','2','3','4','5','6','7','8','9','10'],
  news: [
    { id: '1', category: '공지', title: '5월 정기 네트워킹 행사 안내', excerpt: '정기 네트워킹 행사에 여러분을 초대합니다.', date: '2025.05.23', coverUrl: '', published: true },
    { id: '2', category: '뉴스', title: '2025 화성 어워즈 후보 공모', excerpt: '올해 빛낸 화성의 후보를 추천해 주세요.', date: '2025.05.16', coverUrl: '', published: true },
    { id: '3', category: '공지', title: '신규 그룹별 운영 안내', excerpt: '회원들의 연결을 위한 신규 그룹을 개설합니다.', date: '2025.05.01', coverUrl: '', published: true },
  ],
  footer: {
    company: '(주)화성인사이드',
    address: '경기도 화성특례시',
    phone: '070-1234-5678',
    email: 'hello@hwaseonginside.com',
    hours: '평일 09:00 - 18:00',
  },
};
