const names = [
  ['박인식','영화감독'],['김광선','기획/마케팅'],['김도현','전략 컨설턴트'],['박지은','바이오 대표'],['최우진','M&A 컨설턴트'],
  ['오지훈','변호사'],['손예린','미디어 커뮤니티 대표'],['정재오','제품 개발담당'],['서영일','교육 콘텐츠 크리에이터'],['송시우','소프트웨어 CTO'],
  ['박소윤','IT 컨설턴트'],['채동민','금융 투자 매니저'],['전민서','스타트업 대표'],['박태우','어카운트 디렉터'],['이서현','데이터 디렉터'],
  ['문준호','회계사'],['임정민','법무법인 변호사'],['이동훈','데이터 분석가'],['유서연','콘텐츠 기획자'],['조도현','투자 심사역'],
  ['유가현','HR 매니저'],['정규환','게임 프로듀서'],['윤슬기','콘텐츠 마케터'],['이승호','AI 연구원'],['최태원','바이오 연구원'],
  ['노현우','브랜드 크리에이터'],['김민지','교육 콘텐츠'],['오혜림','스타트업 PM'],['박규훈','세무 컨설턴트'],['이예린','UX 디자이너'],
  ['한서윤','변리사'],['오준명','AI 전문가'],['강나영','콘텐츠 크리에이터'],['장현우','금융 전문가'],['인이리','HR 컨설턴트'],
  ['장서우','사업가'],['김태희','브랜드 디렉터'],['최영준','영업전략 대표'],['이보람','웰니스 대표'],['박민혁','전략기획 이사'],
  ['조민혁','임팩트 비즈니스 대표'],['임기영','기업교육 대표'],['황지혜','커뮤니티 리더'],['김도윤','전문 투자자'],['송민지','브랜드 매니저'],
  ['이재현','AI 엔지니어'],['최유진','서비스 기획자'],['강연우','금융 상품 매니저'],['엄서영','교육 콘텐츠'],['김채현','스타트업 PM']
];

const colors = [
  ['#ffd9e7','#d8ccff'], ['#d8e6ff','#ffd8c7'], ['#ffe7bf','#d7d2ff'], ['#dff8ef','#d8ccff'], ['#ffe0ef','#cbe8ff']
];

export const members = names.map(([name, job], index) => {
  const base = {
    id: String(index + 1),
    name,
    job,
    age: 28 + (index % 13),
    gender: index % 2 ? '여성' : '남성',
    email: `${name.toLowerCase().replace(/\s/g,'')}@inside.kr`,
    school: index % 3 === 0 ? '연세대학교 경영학과' : index % 3 === 1 ? '성균관대학교 미디어커뮤니케이션' : '한양대학교 산업공학과',
    area: index % 2 ? '서울 · 수원 · 화성' : '화성 · 동탄',
    tier: index < 10 ? 'Platinum' : 'Gold',
    featured: index < 10,
    tags: ['브랜딩','커뮤니케이션','콘텐츠 기획','소셜 임팩트','팀 리더십'].slice(0, 3 + (index % 3)),
    intro: `${name}입니다. 사람과 사람의 연결에서 새로운 기회를 발견하고, 제가 가진 경험을 통해 지역 안에서 좋은 변화를 만드는 일을 좋아합니다. 화성인사이드에서 서로의 전문성을 나누고 함께 성장하는 관계를 만들고 싶습니다.`,
    careers: [
      { period: '2022.03 - 현재', company: index % 2 ? '브랜드 웨이브' : '인사이드 파트너스', role: job, desc: '전략 수립, 프로젝트 운영, 고객 경험 개선 및 조직 협업 총괄' },
      { period: '2019.07 - 2022.02', company: 'Growth Lab', role: '프로젝트 매니저', desc: '신규 사업 기획, 콘텐츠 및 파트너십 프로젝트 리드' },
      { period: '2016.03 - 2019.06', company: 'Dear Media', role: '기획자', desc: '브랜드 기획, SNS 콘텐츠, 오프라인 협업 프로젝트 진행' }
    ],
    strengths: {
      '센스': 78 + (index % 16),
      '끈기': 70 + ((index * 3) % 20),
      '열정': 76 + ((index * 5) % 18),
      '꿈': 80 + ((index * 7) % 15),
      '재능': 72 + ((index * 2) % 20),
      '협업': 75 + ((index * 4) % 18)
    },
    colors: colors[index % colors.length],
    image: `/assets/members/member-${String((index % 30)+1).padStart(2,'0')}.png`,
    profileImage: index === 1 ? '/assets/members/profile-02.png' : `/assets/members/member-${String((index % 30)+1).padStart(2,'0')}.png`
  };

  if (index === 0) {
    return {
      ...base,
      age: 56,
      gender: '남성',
      email: 'parkmovie@gmail.com',
      school: '한양대학교 대학원 석사',
      area: '경기도 · 화성특례시',
      tags: ['영화제작','AI콘텐츠 제작','문화예술기획','디지털미디어 컨설팅'],
      image: '/assets/real/park-insik.jpg',
      profileImage: '/assets/real/park-insik.jpg',
      intro: '안녕하십니까. 영화와 문화와 기술이 함께하는 세상을 만들어가는 박인식입니다. 사람과 사람이 문화와 기술과 스토리로 연결되는 아름다운 세상을 함께 만들어갈 동료시민들을 만나는 것이 가장 큰 기쁨입니다.',
      careers: [
        { period: '현재', company: '화성인사이드', role: '의장 / 영화감독', desc: '영화·문화·기술이 연결되는 프리미엄 네트워크를 기획하고 운영합니다.' },
        { period: '2023', company: '한국AI콘텐츠학회', role: '설립', desc: 'AI 인문학과 영화 인문학을 연결하는 콘텐츠 기반을 구축했습니다.' },
        { period: '주요 경력', company: '빵셔틀 / 58년 개띠', role: '제작연출', desc: '청소년 뮤지컬영화와 디지털 단편영화 제작·연출 및 문화예술 기획을 진행했습니다.' }
      ]
    };
  }

  if (index === 1) {
    return {
      ...base,
      age: 40,
      gender: '남성',
      email: 'motherday79@gmail.com',
      school: '단국대 뮤지컬과 학사',
      area: '서울 · 경기',
      tags: ['브랜드 전략','콘텐츠 기획','디지털 마케팅','커뮤니케이션','프로젝트 리드'],
      image: '/assets/real/kim-gwangsun.jpg',
      profileImage: '/assets/real/kim-gwangsun.jpg',
      intro: '안녕하세요, 김광선입니다. 저는 사람과 콘텐츠, 그리고 기획을 연결하는 기획과 마케팅의 힘을 믿습니다. 브랜드가 가진 이야기를 더 많은 사람에게 닿게 만들고, 실행 가능한 전략으로 성과를 만드는 일을 해왔습니다.'
    };
  }

  return base;
});

export const getMember = (id) => members.find(m => m.id === String(id)) || members[0];
