-- 화성인사이드 v7.5 샘플 회원 데이터
-- 박인식(1), 김광선(2)은 변경하지 않고 3~50번만 업데이트합니다.
-- 이메일은 실제 연락처로 오인되지 않도록 example.com 도메인을 사용합니다.

update public.members set name='김도현', job='전략 컨설턴트', tagline='전략 컨설턴트의 경험을 지역의 새로운 기회로 연결합니다.', age=41, gender='남성', public_email='member03@example.com', school='경영학 학사', area='수원 · 화성', tier='Platinum', tags='["사업전략", "문제정의", "조직협업", "신사업"]'::jsonb, intro='안녕하세요. 김도현입니다. 복잡한 문제를 구조화하고 실행 가능한 선택지로 바꾸는 일을 강점으로 삼고 있습니다. 화성인사이드에서는 제 분야의 경험을 나누는 동시에 서로 다른 전문성을 가진 사람들과 새로운 프로젝트와 협업의 가능성을 만들고 싶습니다.', strengths='{"창의": 82, "연결": 86, "통찰": 89, "공감": 77, "실행": 89, "성장": 88}'::jsonb, profile_image_url='', is_published=true, updated_at=now() where id=3;
delete from public.careers where member_id=3;
insert into public.careers(member_id,sort_order,period,company,role,description) values
  (3,0,'2023.01 - 현재','중견기업 전략기획실','전략 컨설턴트','전략기획 프로젝트 리드'),
  (3,1,'2019.03 - 2022.12','신사업 컨설팅 프로젝트','프로젝트 리드','신사업 타당성 검토 및 실행계획 수립'),
  (3,2,'2016.07 - 2019.02','산업전략 프로젝트','실무 담당','조직 간 협업체계 설계');

update public.members set name='박지은', job='바이오 대표', tagline='전문성과 실행력을 바탕으로 함께 성장하는 연결을 만듭니다.', age=44, gender='여성', public_email='member04@example.com', school='바이오융합 석사', area='동탄 · 서울', tier='Platinum', tags='["바이오산업", "R&D 전략", "기술사업화", "헬스케어"]'::jsonb, intro='안녕하세요. 박지은입니다. 과학과 사업이 만나는 지점에서 현실적인 성장 기회를 만드는 데 관심이 많습니다. 화성인사이드에서는 제 분야의 경험을 나누는 동시에 서로 다른 전문성을 가진 사람들과 새로운 프로젝트와 협업의 가능성을 만들고 싶습니다.', strengths='{"창의": 81, "연결": 81, "통찰": 88, "공감": 77, "실행": 88, "성장": 86}'::jsonb, profile_image_url='', is_published=true, updated_at=now() where id=4;
delete from public.careers where member_id=4;
insert into public.careers(member_id,sort_order,period,company,role,description) values
  (4,0,'2026.01 - 현재','바이오 벤처 경영팀','바이오 대표','바이오 사업개발 및 파트너십 총괄'),
  (4,1,'2022.03 - 2025.12','헬스케어 사업개발팀','프로젝트 리드','연구개발 포트폴리오 기획'),
  (4,2,'2019.07 - 2022.02','R&D 사업화 프로젝트','실무 담당','기술사업화 프로젝트 운영');

update public.members set name='최우진', job='M&A 컨설턴트', tagline='M&A 컨설턴트의 시선으로 사람과 사업의 다음 가능성을 설계합니다.', age=32, gender='남성', public_email='member05@example.com', school='경영전략 MBA 과정 수료', area='화성 · 용인', tier='Platinum', tags='["사업전략", "문제정의", "조직협업", "신사업"]'::jsonb, intro='안녕하세요. 최우진입니다. 복잡한 문제를 구조화하고 실행 가능한 선택지로 바꾸는 일을 강점으로 삼고 있습니다. 화성인사이드에서는 제 분야의 경험을 나누는 동시에 서로 다른 전문성을 가진 사람들과 새로운 프로젝트와 협업의 가능성을 만들고 싶습니다.', strengths='{"창의": 84, "연결": 81, "통찰": 91, "공감": 79, "실행": 91, "성장": 83}'::jsonb, profile_image_url='', is_published=true, updated_at=now() where id=5;
delete from public.careers where member_id=5;
insert into public.careers(member_id,sort_order,period,company,role,description) values
  (5,0,'2025.01 - 현재','중견기업 전략기획실','M&A 컨설턴트','전략기획 프로젝트 리드'),
  (5,1,'2021.03 - 2024.12','신사업 컨설팅 프로젝트','프로젝트 리드','신사업 타당성 검토 및 실행계획 수립'),
  (5,2,'2018.07 - 2021.02','산업전략 프로젝트','실무 담당','조직 간 협업체계 설계');

update public.members set name='오지훈', job='변호사', tagline='변호사의 경험을 지역의 새로운 기회로 연결합니다.', age=35, gender='남성', public_email='member06@example.com', school='법학 학사 · 전문법무과정 수료', area='경기 남부', tier='Platinum', tags='["법률자문", "리스크관리", "계약", "기업법무"]'::jsonb, intro='안녕하세요. 오지훈입니다. 어려운 법률 문제를 이해하기 쉬운 언어로 풀어내고 실무적인 해결책을 제시하는 것을 중요하게 생각합니다. 화성인사이드에서는 제 분야의 경험을 나누는 동시에 서로 다른 전문성을 가진 사람들과 새로운 프로젝트와 협업의 가능성을 만들고 싶습니다.', strengths='{"창의": 77, "연결": 74, "통찰": 93, "공감": 84, "실행": 87, "성장": 79}'::jsonb, profile_image_url='', is_published=true, updated_at=now() where id=6;
delete from public.careers where member_id=6;
insert into public.careers(member_id,sort_order,period,company,role,description) values
  (6,0,'2024.01 - 현재','기업법무 자문팀','변호사','기업 자문 및 계약 검토'),
  (6,1,'2020.03 - 2023.12','법률사무 프로젝트','프로젝트 리드','분쟁 예방·리스크 관리'),
  (6,2,'2017.07 - 2020.02','스타트업 법률지원 프로그램','실무 담당','스타트업·중소기업 법률 지원');

update public.members set name='손예린', job='미디어 커뮤니티 대표', tagline='전문성과 실행력을 바탕으로 함께 성장하는 연결을 만듭니다.', age=38, gender='여성', public_email='member07@example.com', school='문화콘텐츠 학사', area='서울 · 경기', tier='Platinum', tags='["콘텐츠전략", "브랜딩", "스토리텔링", "커뮤니티"]'::jsonb, intro='안녕하세요. 손예린입니다. 사람이 기억하는 이야기와 브랜드가 지속되는 경험을 만드는 일을 좋아합니다. 화성인사이드에서는 제 분야의 경험을 나누는 동시에 서로 다른 전문성을 가진 사람들과 새로운 프로젝트와 협업의 가능성을 만들고 싶습니다.', strengths='{"창의": 91, "연결": 89, "통찰": 85, "공감": 94, "실행": 84, "성장": 88}'::jsonb, profile_image_url='', is_published=true, updated_at=now() where id=7;
delete from public.careers where member_id=7;
insert into public.careers(member_id,sort_order,period,company,role,description) values
  (7,0,'2023.01 - 현재','브랜드 콘텐츠 스튜디오','미디어 커뮤니티 대표','브랜드 콘텐츠 캠페인 기획'),
  (7,1,'2019.03 - 2022.12','디지털 미디어 프로젝트','프로젝트 리드','온·오프라인 커뮤니티 운영'),
  (7,2,'2016.07 - 2019.02','커뮤니티 콘텐츠 조직','실무 담당','콘텐츠 파트너십 프로젝트 리드');

update public.members set name='정재오', job='제품 개발담당', tagline='제품 개발담당의 시선으로 사람과 사업의 다음 가능성을 설계합니다.', age=41, gender='남성', public_email='member08@example.com', school='산업공학 학사', area='화성 · 동탄', tier='Platinum', tags='["제품기획", "고객경험", "서비스전략", "프로덕트 운영"]'::jsonb, intro='안녕하세요. 정재오입니다. 사용자의 불편을 발견하고 작은 개선을 빠르게 실행해 더 나은 제품 경험으로 연결하는 일을 해왔습니다. 화성인사이드에서는 제 분야의 경험을 나누는 동시에 서로 다른 전문성을 가진 사람들과 새로운 프로젝트와 협업의 가능성을 만들고 싶습니다.', strengths='{"창의": 86, "연결": 86, "통찰": 90, "공감": 87, "실행": 91, "성장": 91}'::jsonb, profile_image_url='', is_published=true, updated_at=now() where id=8;
delete from public.careers where member_id=8;
insert into public.careers(member_id,sort_order,period,company,role,description) values
  (8,0,'2026.01 - 현재','테크 스타트업 프로덕트팀','제품 개발담당','신규 서비스 기획 및 출시'),
  (8,1,'2022.03 - 2025.12','디지털 서비스 기획팀','프로젝트 리드','사용자 조사·제품 개선'),
  (8,2,'2019.07 - 2022.02','신규서비스 TF','실무 담당','프로덕트 로드맵 운영');

update public.members set name='서영일', job='교육 콘텐츠 크리에이터', tagline='교육 콘텐츠 크리에이터의 경험을 지역의 새로운 기회로 연결합니다.', age=44, gender='남성', public_email='member09@example.com', school='미디어커뮤니케이션 학사', area='화성 · 수원', tier='Platinum', tags='["콘텐츠전략", "브랜딩", "스토리텔링", "커뮤니티"]'::jsonb, intro='안녕하세요. 서영일입니다. 사람이 기억하는 이야기와 브랜드가 지속되는 경험을 만드는 일을 좋아합니다. 화성인사이드에서는 제 분야의 경험을 나누는 동시에 서로 다른 전문성을 가진 사람들과 새로운 프로젝트와 협업의 가능성을 만들고 싶습니다.', strengths='{"창의": 93, "연결": 91, "통찰": 87, "공감": 89, "실행": 86, "성장": 90}'::jsonb, profile_image_url='', is_published=true, updated_at=now() where id=9;
delete from public.careers where member_id=9;
insert into public.careers(member_id,sort_order,period,company,role,description) values
  (9,0,'2025.01 - 현재','브랜드 콘텐츠 스튜디오','교육 콘텐츠 크리에이터','브랜드 콘텐츠 캠페인 기획'),
  (9,1,'2021.03 - 2024.12','디지털 미디어 프로젝트','프로젝트 리드','온·오프라인 커뮤니티 운영'),
  (9,2,'2018.07 - 2021.02','커뮤니티 콘텐츠 조직','실무 담당','콘텐츠 파트너십 프로젝트 리드');

update public.members set name='송시우', job='소프트웨어 CTO', tagline='전문성과 실행력을 바탕으로 함께 성장하는 연결을 만듭니다.', age=32, gender='남성', public_email='member10@example.com', school='소프트웨어공학 석사', area='서울 · 화성', tier='Platinum', tags='["AI", "소프트웨어", "데이터", "기술전략"]'::jsonb, intro='안녕하세요. 송시우입니다. 기술을 기술로 끝내지 않고 사람이 실제로 사용할 수 있는 서비스로 구현하는 데 관심이 있습니다. 화성인사이드에서는 제 분야의 경험을 나누는 동시에 서로 다른 전문성을 가진 사람들과 새로운 프로젝트와 협업의 가능성을 만들고 싶습니다.', strengths='{"창의": 90, "연결": 79, "통찰": 91, "공감": 71, "실행": 94, "성장": 94}'::jsonb, profile_image_url='', is_published=true, updated_at=now() where id=10;
delete from public.careers where member_id=10;
insert into public.careers(member_id,sort_order,period,company,role,description) values
  (10,0,'2024.01 - 현재','AI 서비스 개발팀','소프트웨어 CTO','AI·소프트웨어 서비스 개발'),
  (10,1,'2020.03 - 2023.12','SaaS 개발조직','프로젝트 리드','데이터 기반 자동화 구축'),
  (10,2,'2017.07 - 2020.02','데이터 플랫폼 프로젝트','실무 담당','개발조직 기술 로드맵 수립');

update public.members set name='박소윤', job='IT 컨설턴트', tagline='IT 컨설턴트의 시선으로 사람과 사업의 다음 가능성을 설계합니다.', age=35, gender='여성', public_email='member11@example.com', school='경영전략 MBA 과정 수료', area='수원 · 화성', tier='Gold', tags='["사업전략", "문제정의", "조직협업", "신사업"]'::jsonb, intro='안녕하세요. 박소윤입니다. 복잡한 문제를 구조화하고 실행 가능한 선택지로 바꾸는 일을 강점으로 삼고 있습니다. 화성인사이드에서는 제 분야의 경험을 나누는 동시에 서로 다른 전문성을 가진 사람들과 새로운 프로젝트와 협업의 가능성을 만들고 싶습니다.', strengths='{"창의": 83, "연결": 87, "통찰": 90, "공감": 78, "실행": 90, "성장": 82}'::jsonb, profile_image_url='', is_published=true, updated_at=now() where id=11;
delete from public.careers where member_id=11;
insert into public.careers(member_id,sort_order,period,company,role,description) values
  (11,0,'2023.01 - 현재','중견기업 전략기획실','IT 컨설턴트','전략기획 프로젝트 리드'),
  (11,1,'2019.03 - 2022.12','신사업 컨설팅 프로젝트','프로젝트 리드','신사업 타당성 검토 및 실행계획 수립'),
  (11,2,'2016.07 - 2019.02','산업전략 프로젝트','실무 담당','조직 간 협업체계 설계');

update public.members set name='채동민', job='금융 투자 매니저', tagline='금융 투자 매니저의 경험을 지역의 새로운 기회로 연결합니다.', age=38, gender='남성', public_email='member12@example.com', school='경영학 학사 · 재무전공', area='동탄 · 서울', tier='Gold', tags='["투자", "재무분석", "자산관리", "리스크"]'::jsonb, intro='안녕하세요. 채동민입니다. 숫자 속에서 사업의 본질과 리스크를 읽고 장기적인 가치를 판단하는 일을 해왔습니다. 화성인사이드에서는 제 분야의 경험을 나누는 동시에 서로 다른 전문성을 가진 사람들과 새로운 프로젝트와 협업의 가능성을 만들고 싶습니다.', strengths='{"창의": 78, "연결": 79, "통찰": 94, "공감": 76, "실행": 94, "성장": 82}'::jsonb, profile_image_url='', is_published=true, updated_at=now() where id=12;
delete from public.careers where member_id=12;
insert into public.careers(member_id,sort_order,period,company,role,description) values
  (12,0,'2026.01 - 현재','투자운용 프로젝트','금융 투자 매니저','기업·산업 투자분석'),
  (12,1,'2022.03 - 2025.12','기업금융 분석팀','프로젝트 리드','포트폴리오 및 리스크 관리'),
  (12,2,'2019.07 - 2022.02','자산관리 전략팀','실무 담당','사업가치·재무모델 검토');

update public.members set name='전민서', job='스타트업 대표', tagline='전문성과 실행력을 바탕으로 함께 성장하는 연결을 만듭니다.', age=41, gender='여성', public_email='member13@example.com', school='창업경영 전공', area='화성 · 용인', tier='Gold', tags='["사업개발", "영업전략", "파트너십", "조직운영"]'::jsonb, intro='안녕하세요. 전민서입니다. 좋은 아이디어가 실제 매출과 지속 가능한 사업으로 이어지도록 사람과 자원을 연결하는 일을 해왔습니다. 화성인사이드에서는 제 분야의 경험을 나누는 동시에 서로 다른 전문성을 가진 사람들과 새로운 프로젝트와 협업의 가능성을 만들고 싶습니다.', strengths='{"창의": 89, "연결": 92, "통찰": 87, "공감": 84, "실행": 93, "성장": 92}'::jsonb, profile_image_url='', is_published=true, updated_at=now() where id=13;
delete from public.careers where member_id=13;
insert into public.careers(member_id,sort_order,period,company,role,description) values
  (13,0,'2025.01 - 현재','사업개발 조직','스타트업 대표','신규 사업개발 및 파트너십'),
  (13,1,'2021.03 - 2024.12','B2B 파트너십팀','프로젝트 리드','영업전략·채널 확대'),
  (13,2,'2018.07 - 2021.02','성장전략 프로젝트','실무 담당','조직 운영 및 성장 프로젝트');

update public.members set name='박태우', job='어카운트 디렉터', tagline='어카운트 디렉터의 시선으로 사람과 사업의 다음 가능성을 설계합니다.', age=44, gender='남성', public_email='member14@example.com', school='산업공학 학사', area='경기 남부', tier='Gold', tags='["기획", "커뮤니케이션", "프로젝트", "협업"]'::jsonb, intro='안녕하세요. 박태우입니다. 사람과 아이디어를 연결해 실제 결과를 만드는 프로젝트를 좋아합니다. 화성인사이드에서는 제 분야의 경험을 나누는 동시에 서로 다른 전문성을 가진 사람들과 새로운 프로젝트와 협업의 가능성을 만들고 싶습니다.', strengths='{"창의": 82, "연결": 87, "통찰": 87, "공감": 91, "실행": 86, "성장": 89}'::jsonb, profile_image_url='', is_published=true, updated_at=now() where id=14;
delete from public.careers where member_id=14;
insert into public.careers(member_id,sort_order,period,company,role,description) values
  (14,0,'2024.01 - 현재','프로젝트 운영팀','어카운트 디렉터','프로젝트 기획 및 운영'),
  (14,1,'2020.03 - 2023.12','사업기획 프로젝트','프로젝트 리드','파트너십·협업 프로젝트'),
  (14,2,'2017.07 - 2020.02','파트너십 조직','실무 담당','서비스 개선 및 고객 커뮤니케이션');

update public.members set name='이서현', job='데이터 디렉터', tagline='데이터 디렉터의 경험을 지역의 새로운 기회로 연결합니다.', age=32, gender='여성', public_email='member15@example.com', school='통계학 학사', area='서울 · 경기', tier='Gold', tags='["데이터분석", "BI", "인사이트", "성과관리"]'::jsonb, intro='안녕하세요. 이서현입니다. 데이터를 단순한 숫자가 아니라 다음 행동을 결정하는 언어로 만드는 것을 좋아합니다. 화성인사이드에서는 제 분야의 경험을 나누는 동시에 서로 다른 전문성을 가진 사람들과 새로운 프로젝트와 협업의 가능성을 만들고 싶습니다.', strengths='{"창의": 77, "연결": 80, "통찰": 98, "공감": 73, "실행": 89, "성장": 87}'::jsonb, profile_image_url='', is_published=true, updated_at=now() where id=15;
delete from public.careers where member_id=15;
insert into public.careers(member_id,sort_order,period,company,role,description) values
  (15,0,'2023.01 - 현재','데이터 인사이트팀','데이터 디렉터','데이터 분석체계 구축'),
  (15,1,'2019.03 - 2022.12','비즈니스 분석 프로젝트','프로젝트 리드','대시보드·성과지표 설계'),
  (15,2,'2016.07 - 2019.02','성과관리 데이터팀','실무 담당','고객·사업 데이터 인사이트 도출');

update public.members set name='문준호', job='회계사', tagline='전문성과 실행력을 바탕으로 함께 성장하는 연결을 만듭니다.', age=35, gender='남성', public_email='member16@example.com', school='법학전문대학원 전문석사', area='화성 · 동탄', tier='Gold', tags='["법률자문", "리스크관리", "계약", "기업법무"]'::jsonb, intro='안녕하세요. 문준호입니다. 어려운 법률 문제를 이해하기 쉬운 언어로 풀어내고 실무적인 해결책을 제시하는 것을 중요하게 생각합니다. 화성인사이드에서는 제 분야의 경험을 나누는 동시에 서로 다른 전문성을 가진 사람들과 새로운 프로젝트와 협업의 가능성을 만들고 싶습니다.', strengths='{"창의": 73, "연결": 77, "통찰": 96, "공감": 80, "실행": 90, "성장": 82}'::jsonb, profile_image_url='', is_published=true, updated_at=now() where id=16;
delete from public.careers where member_id=16;
insert into public.careers(member_id,sort_order,period,company,role,description) values
  (16,0,'2026.01 - 현재','기업법무 자문팀','회계사','기업 자문 및 계약 검토'),
  (16,1,'2022.03 - 2025.12','법률사무 프로젝트','프로젝트 리드','분쟁 예방·리스크 관리'),
  (16,2,'2019.07 - 2022.02','스타트업 법률지원 프로그램','실무 담당','스타트업·중소기업 법률 지원');

update public.members set name='임정민', job='법무법인 변호사', tagline='법무법인 변호사의 시선으로 사람과 사업의 다음 가능성을 설계합니다.', age=38, gender='남성', public_email='member17@example.com', school='법학 학사', area='화성 · 수원', tier='Gold', tags='["법률자문", "리스크관리", "계약", "기업법무"]'::jsonb, intro='안녕하세요. 임정민입니다. 어려운 법률 문제를 이해하기 쉬운 언어로 풀어내고 실무적인 해결책을 제시하는 것을 중요하게 생각합니다. 화성인사이드에서는 제 분야의 경험을 나누는 동시에 서로 다른 전문성을 가진 사람들과 새로운 프로젝트와 협업의 가능성을 만들고 싶습니다.', strengths='{"창의": 74, "연결": 78, "통찰": 90, "공감": 81, "실행": 91, "성장": 83}'::jsonb, profile_image_url='', is_published=true, updated_at=now() where id=17;
delete from public.careers where member_id=17;
insert into public.careers(member_id,sort_order,period,company,role,description) values
  (17,0,'2025.01 - 현재','기업법무 자문팀','법무법인 변호사','기업 자문 및 계약 검토'),
  (17,1,'2021.03 - 2024.12','법률사무 프로젝트','프로젝트 리드','분쟁 예방·리스크 관리'),
  (17,2,'2018.07 - 2021.02','스타트업 법률지원 프로그램','실무 담당','스타트업·중소기업 법률 지원');

update public.members set name='이동훈', job='데이터 분석가', tagline='데이터 분석가의 경험을 지역의 새로운 기회로 연결합니다.', age=41, gender='남성', public_email='member18@example.com', school='통계학 학사', area='서울 · 화성', tier='Gold', tags='["데이터분석", "BI", "인사이트", "성과관리"]'::jsonb, intro='안녕하세요. 이동훈입니다. 데이터를 단순한 숫자가 아니라 다음 행동을 결정하는 언어로 만드는 것을 좋아합니다. 화성인사이드에서는 제 분야의 경험을 나누는 동시에 서로 다른 전문성을 가진 사람들과 새로운 프로젝트와 협업의 가능성을 만들고 싶습니다.', strengths='{"창의": 80, "연결": 83, "통찰": 94, "공감": 76, "실행": 92, "성장": 83}'::jsonb, profile_image_url='', is_published=true, updated_at=now() where id=18;
delete from public.careers where member_id=18;
insert into public.careers(member_id,sort_order,period,company,role,description) values
  (18,0,'2024.01 - 현재','데이터 인사이트팀','데이터 분석가','데이터 분석체계 구축'),
  (18,1,'2020.03 - 2023.12','비즈니스 분석 프로젝트','프로젝트 리드','대시보드·성과지표 설계'),
  (18,2,'2017.07 - 2020.02','성과관리 데이터팀','실무 담당','고객·사업 데이터 인사이트 도출');

update public.members set name='유서연', job='콘텐츠 기획자', tagline='전문성과 실행력을 바탕으로 함께 성장하는 연결을 만듭니다.', age=44, gender='여성', public_email='member19@example.com', school='문화콘텐츠 학사', area='수원 · 화성', tier='Gold', tags='["콘텐츠전략", "브랜딩", "스토리텔링", "커뮤니티"]'::jsonb, intro='안녕하세요. 유서연입니다. 사람이 기억하는 이야기와 브랜드가 지속되는 경험을 만드는 일을 좋아합니다. 화성인사이드에서는 제 분야의 경험을 나누는 동시에 서로 다른 전문성을 가진 사람들과 새로운 프로젝트와 협업의 가능성을 만들고 싶습니다.', strengths='{"창의": 96, "연결": 87, "통찰": 83, "공감": 92, "실행": 89, "성장": 86}'::jsonb, profile_image_url='', is_published=true, updated_at=now() where id=19;
delete from public.careers where member_id=19;
insert into public.careers(member_id,sort_order,period,company,role,description) values
  (19,0,'2023.01 - 현재','브랜드 콘텐츠 스튜디오','콘텐츠 기획자','브랜드 콘텐츠 캠페인 기획'),
  (19,1,'2019.03 - 2022.12','디지털 미디어 프로젝트','프로젝트 리드','온·오프라인 커뮤니티 운영'),
  (19,2,'2016.07 - 2019.02','커뮤니티 콘텐츠 조직','실무 담당','콘텐츠 파트너십 프로젝트 리드');

update public.members set name='조도현', job='투자 심사역', tagline='투자 심사역의 시선으로 사람과 사업의 다음 가능성을 설계합니다.', age=32, gender='남성', public_email='member20@example.com', school='금융공학 석사과정 수료', area='동탄 · 서울', tier='Gold', tags='["투자", "재무분석", "자산관리", "리스크"]'::jsonb, intro='안녕하세요. 조도현입니다. 숫자 속에서 사업의 본질과 리스크를 읽고 장기적인 가치를 판단하는 일을 해왔습니다. 화성인사이드에서는 제 분야의 경험을 나누는 동시에 서로 다른 전문성을 가진 사람들과 새로운 프로젝트와 협업의 가능성을 만들고 싶습니다.', strengths='{"창의": 79, "연결": 80, "통찰": 95, "공감": 77, "실행": 88, "성장": 83}'::jsonb, profile_image_url='', is_published=true, updated_at=now() where id=20;
delete from public.careers where member_id=20;
insert into public.careers(member_id,sort_order,period,company,role,description) values
  (20,0,'2026.01 - 현재','투자운용 프로젝트','투자 심사역','기업·산업 투자분석'),
  (20,1,'2022.03 - 2025.12','기업금융 분석팀','프로젝트 리드','포트폴리오 및 리스크 관리'),
  (20,2,'2019.07 - 2022.02','자산관리 전략팀','실무 담당','사업가치·재무모델 검토');

update public.members set name='유가현', job='HR 매니저', tagline='HR 매니저의 경험을 지역의 새로운 기회로 연결합니다.', age=35, gender='여성', public_email='member21@example.com', school='심리학 학사 · 조직개발 전공', area='화성 · 용인', tier='Gold', tags='["조직문화", "인재육성", "채용", "리더십"]'::jsonb, intro='안녕하세요. 유가현입니다. 사람이 가진 강점이 조직과 커뮤니티 안에서 제대로 발휘되는 환경을 만드는 데 관심이 많습니다. 화성인사이드에서는 제 분야의 경험을 나누는 동시에 서로 다른 전문성을 가진 사람들과 새로운 프로젝트와 협업의 가능성을 만들고 싶습니다.', strengths='{"창의": 79, "연결": 94, "통찰": 86, "공감": 98, "실행": 81, "성장": 90}'::jsonb, profile_image_url='', is_published=true, updated_at=now() where id=21;
delete from public.careers where member_id=21;
insert into public.careers(member_id,sort_order,period,company,role,description) values
  (21,0,'2025.01 - 현재','조직문화팀','HR 매니저','조직문화·인재육성 프로그램 운영'),
  (21,1,'2021.03 - 2024.12','HR 프로젝트','프로젝트 리드','채용 및 온보딩 체계 개선'),
  (21,2,'2018.07 - 2021.02','리더십·커뮤니티 프로그램','실무 담당','리더십·커뮤니티 프로그램 기획');

update public.members set name='정규환', job='게임 프로듀서', tagline='전문성과 실행력을 바탕으로 함께 성장하는 연결을 만듭니다.', age=38, gender='남성', public_email='member22@example.com', school='미디어커뮤니케이션 학사', area='경기 남부', tier='Gold', tags='["기획", "커뮤니케이션", "프로젝트", "협업"]'::jsonb, intro='안녕하세요. 정규환입니다. 사람과 아이디어를 연결해 실제 결과를 만드는 프로젝트를 좋아합니다. 화성인사이드에서는 제 분야의 경험을 나누는 동시에 서로 다른 전문성을 가진 사람들과 새로운 프로젝트와 협업의 가능성을 만들고 싶습니다.', strengths='{"창의": 83, "연결": 88, "통찰": 88, "공감": 85, "실행": 87, "성장": 90}'::jsonb, profile_image_url='', is_published=true, updated_at=now() where id=22;
delete from public.careers where member_id=22;
insert into public.careers(member_id,sort_order,period,company,role,description) values
  (22,0,'2024.01 - 현재','프로젝트 운영팀','게임 프로듀서','프로젝트 기획 및 운영'),
  (22,1,'2020.03 - 2023.12','사업기획 프로젝트','프로젝트 리드','파트너십·협업 프로젝트'),
  (22,2,'2017.07 - 2020.02','파트너십 조직','실무 담당','서비스 개선 및 고객 커뮤니케이션');

update public.members set name='윤슬기', job='콘텐츠 마케터', tagline='콘텐츠 마케터의 시선으로 사람과 사업의 다음 가능성을 설계합니다.', age=41, gender='여성', public_email='member23@example.com', school='디지털미디어 전공', area='서울 · 경기', tier='Gold', tags='["콘텐츠전략", "브랜딩", "스토리텔링", "커뮤니티"]'::jsonb, intro='안녕하세요. 윤슬기입니다. 사람이 기억하는 이야기와 브랜드가 지속되는 경험을 만드는 일을 좋아합니다. 화성인사이드에서는 제 분야의 경험을 나누는 동시에 서로 다른 전문성을 가진 사람들과 새로운 프로젝트와 협업의 가능성을 만들고 싶습니다.', strengths='{"창의": 93, "연결": 91, "통찰": 87, "공감": 89, "실행": 86, "성장": 90}'::jsonb, profile_image_url='', is_published=true, updated_at=now() where id=23;
delete from public.careers where member_id=23;
insert into public.careers(member_id,sort_order,period,company,role,description) values
  (23,0,'2023.01 - 현재','브랜드 콘텐츠 스튜디오','콘텐츠 마케터','브랜드 콘텐츠 캠페인 기획'),
  (23,1,'2019.03 - 2022.12','디지털 미디어 프로젝트','프로젝트 리드','온·오프라인 커뮤니티 운영'),
  (23,2,'2016.07 - 2019.02','커뮤니티 콘텐츠 조직','실무 담당','콘텐츠 파트너십 프로젝트 리드');

update public.members set name='이승호', job='AI 연구원', tagline='AI 연구원의 경험을 지역의 새로운 기회로 연결합니다.', age=44, gender='남성', public_email='member24@example.com', school='컴퓨터공학 학사', area='화성 · 동탄', tier='Gold', tags='["AI", "소프트웨어", "데이터", "기술전략"]'::jsonb, intro='안녕하세요. 이승호입니다. 기술을 기술로 끝내지 않고 사람이 실제로 사용할 수 있는 서비스로 구현하는 데 관심이 있습니다. 화성인사이드에서는 제 분야의 경험을 나누는 동시에 서로 다른 전문성을 가진 사람들과 새로운 프로젝트와 협업의 가능성을 만들고 싶습니다.', strengths='{"창의": 90, "연결": 79, "통찰": 91, "공감": 71, "실행": 94, "성장": 94}'::jsonb, profile_image_url='', is_published=true, updated_at=now() where id=24;
delete from public.careers where member_id=24;
insert into public.careers(member_id,sort_order,period,company,role,description) values
  (24,0,'2026.01 - 현재','AI 서비스 개발팀','AI 연구원','AI·소프트웨어 서비스 개발'),
  (24,1,'2022.03 - 2025.12','SaaS 개발조직','프로젝트 리드','데이터 기반 자동화 구축'),
  (24,2,'2019.07 - 2022.02','데이터 플랫폼 프로젝트','실무 담당','개발조직 기술 로드맵 수립');

update public.members set name='최태원', job='바이오 연구원', tagline='전문성과 실행력을 바탕으로 함께 성장하는 연결을 만듭니다.', age=32, gender='남성', public_email='member25@example.com', school='바이오융합 석사', area='화성 · 수원', tier='Gold', tags='["바이오산업", "R&D 전략", "기술사업화", "헬스케어"]'::jsonb, intro='안녕하세요. 최태원입니다. 과학과 사업이 만나는 지점에서 현실적인 성장 기회를 만드는 데 관심이 많습니다. 화성인사이드에서는 제 분야의 경험을 나누는 동시에 서로 다른 전문성을 가진 사람들과 새로운 프로젝트와 협업의 가능성을 만들고 싶습니다.', strengths='{"창의": 81, "연결": 81, "통찰": 88, "공감": 77, "실행": 88, "성장": 86}'::jsonb, profile_image_url='', is_published=true, updated_at=now() where id=25;
delete from public.careers where member_id=25;
insert into public.careers(member_id,sort_order,period,company,role,description) values
  (25,0,'2025.01 - 현재','바이오 벤처 경영팀','바이오 연구원','바이오 사업개발 및 파트너십 총괄'),
  (25,1,'2021.03 - 2024.12','헬스케어 사업개발팀','프로젝트 리드','연구개발 포트폴리오 기획'),
  (25,2,'2018.07 - 2021.02','R&D 사업화 프로젝트','실무 담당','기술사업화 프로젝트 운영');

update public.members set name='노현우', job='브랜드 크리에이터', tagline='브랜드 크리에이터의 시선으로 사람과 사업의 다음 가능성을 설계합니다.', age=35, gender='남성', public_email='member26@example.com', school='디지털미디어 전공', area='서울 · 화성', tier='Gold', tags='["콘텐츠전략", "브랜딩", "스토리텔링", "커뮤니티"]'::jsonb, intro='안녕하세요. 노현우입니다. 사람이 기억하는 이야기와 브랜드가 지속되는 경험을 만드는 일을 좋아합니다. 화성인사이드에서는 제 분야의 경험을 나누는 동시에 서로 다른 전문성을 가진 사람들과 새로운 프로젝트와 협업의 가능성을 만들고 싶습니다.', strengths='{"창의": 96, "연결": 87, "통찰": 83, "공감": 92, "실행": 89, "성장": 86}'::jsonb, profile_image_url='', is_published=true, updated_at=now() where id=26;
delete from public.careers where member_id=26;
insert into public.careers(member_id,sort_order,period,company,role,description) values
  (26,0,'2024.01 - 현재','브랜드 콘텐츠 스튜디오','브랜드 크리에이터','브랜드 콘텐츠 캠페인 기획'),
  (26,1,'2020.03 - 2023.12','디지털 미디어 프로젝트','프로젝트 리드','온·오프라인 커뮤니티 운영'),
  (26,2,'2017.07 - 2020.02','커뮤니티 콘텐츠 조직','실무 담당','콘텐츠 파트너십 프로젝트 리드');

update public.members set name='김민지', job='교육 콘텐츠', tagline='교육 콘텐츠의 경험을 지역의 새로운 기회로 연결합니다.', age=38, gender='여성', public_email='member27@example.com', school='미디어커뮤니케이션 학사', area='수원 · 화성', tier='Gold', tags='["콘텐츠전략", "브랜딩", "스토리텔링", "커뮤니티"]'::jsonb, intro='안녕하세요. 김민지입니다. 사람이 기억하는 이야기와 브랜드가 지속되는 경험을 만드는 일을 좋아합니다. 화성인사이드에서는 제 분야의 경험을 나누는 동시에 서로 다른 전문성을 가진 사람들과 새로운 프로젝트와 협업의 가능성을 만들고 싶습니다.', strengths='{"창의": 97, "연결": 88, "통찰": 84, "공감": 93, "실행": 83, "성장": 87}'::jsonb, profile_image_url='', is_published=true, updated_at=now() where id=27;
delete from public.careers where member_id=27;
insert into public.careers(member_id,sort_order,period,company,role,description) values
  (27,0,'2023.01 - 현재','브랜드 콘텐츠 스튜디오','교육 콘텐츠','브랜드 콘텐츠 캠페인 기획'),
  (27,1,'2019.03 - 2022.12','디지털 미디어 프로젝트','프로젝트 리드','온·오프라인 커뮤니티 운영'),
  (27,2,'2016.07 - 2019.02','커뮤니티 콘텐츠 조직','실무 담당','콘텐츠 파트너십 프로젝트 리드');

update public.members set name='오혜림', job='스타트업 PM', tagline='전문성과 실행력을 바탕으로 함께 성장하는 연결을 만듭니다.', age=41, gender='여성', public_email='member28@example.com', school='컴퓨터공학 학사', area='동탄 · 서울', tier='Gold', tags='["제품기획", "고객경험", "서비스전략", "프로덕트 운영"]'::jsonb, intro='안녕하세요. 오혜림입니다. 사용자의 불편을 발견하고 작은 개선을 빠르게 실행해 더 나은 제품 경험으로 연결하는 일을 해왔습니다. 화성인사이드에서는 제 분야의 경험을 나누는 동시에 서로 다른 전문성을 가진 사람들과 새로운 프로젝트와 협업의 가능성을 만들고 싶습니다.', strengths='{"창의": 85, "연결": 85, "통찰": 89, "공감": 93, "실행": 90, "성장": 90}'::jsonb, profile_image_url='', is_published=true, updated_at=now() where id=28;
delete from public.careers where member_id=28;
insert into public.careers(member_id,sort_order,period,company,role,description) values
  (28,0,'2026.01 - 현재','테크 스타트업 프로덕트팀','스타트업 PM','신규 서비스 기획 및 출시'),
  (28,1,'2022.03 - 2025.12','디지털 서비스 기획팀','프로젝트 리드','사용자 조사·제품 개선'),
  (28,2,'2019.07 - 2022.02','신규서비스 TF','실무 담당','프로덕트 로드맵 운영');

update public.members set name='박규훈', job='세무 컨설턴트', tagline='세무 컨설턴트의 시선으로 사람과 사업의 다음 가능성을 설계합니다.', age=44, gender='남성', public_email='member29@example.com', school='경영전략 MBA 과정 수료', area='화성 · 용인', tier='Gold', tags='["사업전략", "문제정의", "조직협업", "신사업"]'::jsonb, intro='안녕하세요. 박규훈입니다. 복잡한 문제를 구조화하고 실행 가능한 선택지로 바꾸는 일을 강점으로 삼고 있습니다. 화성인사이드에서는 제 분야의 경험을 나누는 동시에 서로 다른 전문성을 가진 사람들과 새로운 프로젝트와 협업의 가능성을 만들고 싶습니다.', strengths='{"창의": 80, "연결": 84, "통찰": 94, "공감": 75, "실행": 87, "성장": 86}'::jsonb, profile_image_url='', is_published=true, updated_at=now() where id=29;
delete from public.careers where member_id=29;
insert into public.careers(member_id,sort_order,period,company,role,description) values
  (29,0,'2025.01 - 현재','중견기업 전략기획실','세무 컨설턴트','전략기획 프로젝트 리드'),
  (29,1,'2021.03 - 2024.12','신사업 컨설팅 프로젝트','프로젝트 리드','신사업 타당성 검토 및 실행계획 수립'),
  (29,2,'2018.07 - 2021.02','산업전략 프로젝트','실무 담당','조직 간 협업체계 설계');

update public.members set name='이예린', job='UX 디자이너', tagline='UX 디자이너의 경험을 지역의 새로운 기회로 연결합니다.', age=32, gender='여성', public_email='member30@example.com', school='시각디자인 학사', area='경기 남부', tier='Gold', tags='["UX", "서비스디자인", "사용자조사", "프로토타이핑"]'::jsonb, intro='안녕하세요. 이예린입니다. 보기 좋은 화면보다 사용자가 자연스럽게 이해하고 행동할 수 있는 경험을 만드는 것을 중요하게 생각합니다. 화성인사이드에서는 제 분야의 경험을 나누는 동시에 서로 다른 전문성을 가진 사람들과 새로운 프로젝트와 협업의 가능성을 만들고 싶습니다.', strengths='{"창의": 96, "연결": 85, "통찰": 93, "공감": 92, "실행": 86, "성장": 93}'::jsonb, profile_image_url='', is_published=true, updated_at=now() where id=30;
delete from public.careers where member_id=30;
insert into public.careers(member_id,sort_order,period,company,role,description) values
  (30,0,'2024.01 - 현재','디지털 제품 디자인팀','UX 디자이너','UX 리서치 및 서비스 설계'),
  (30,1,'2020.03 - 2023.12','서비스디자인 프로젝트','프로젝트 리드','디자인 시스템 구축'),
  (30,2,'2017.07 - 2020.02','UX 리서치 조직','실무 담당','프로토타입 검증 및 개선');

update public.members set name='한서윤', job='변리사', tagline='전문성과 실행력을 바탕으로 함께 성장하는 연결을 만듭니다.', age=35, gender='여성', public_email='member31@example.com', school='법학전문대학원 전문석사', area='서울 · 경기', tier='Gold', tags='["법률자문", "리스크관리", "계약", "기업법무"]'::jsonb, intro='안녕하세요. 한서윤입니다. 어려운 법률 문제를 이해하기 쉬운 언어로 풀어내고 실무적인 해결책을 제시하는 것을 중요하게 생각합니다. 화성인사이드에서는 제 분야의 경험을 나누는 동시에 서로 다른 전문성을 가진 사람들과 새로운 프로젝트와 협업의 가능성을 만들고 싶습니다.', strengths='{"창의": 74, "연결": 78, "통찰": 90, "공감": 81, "실행": 91, "성장": 83}'::jsonb, profile_image_url='', is_published=true, updated_at=now() where id=31;
delete from public.careers where member_id=31;
insert into public.careers(member_id,sort_order,period,company,role,description) values
  (31,0,'2023.01 - 현재','기업법무 자문팀','변리사','기업 자문 및 계약 검토'),
  (31,1,'2019.03 - 2022.12','법률사무 프로젝트','프로젝트 리드','분쟁 예방·리스크 관리'),
  (31,2,'2016.07 - 2019.02','스타트업 법률지원 프로그램','실무 담당','스타트업·중소기업 법률 지원');

update public.members set name='오준명', job='AI 전문가', tagline='AI 전문가의 시선으로 사람과 사업의 다음 가능성을 설계합니다.', age=38, gender='남성', public_email='member32@example.com', school='AI·데이터공학 전공', area='화성 · 동탄', tier='Gold', tags='["AI", "소프트웨어", "데이터", "기술전략"]'::jsonb, intro='안녕하세요. 오준명입니다. 기술을 기술로 끝내지 않고 사람이 실제로 사용할 수 있는 서비스로 구현하는 데 관심이 있습니다. 화성인사이드에서는 제 분야의 경험을 나누는 동시에 서로 다른 전문성을 가진 사람들과 새로운 프로젝트와 협업의 가능성을 만들고 싶습니다.', strengths='{"창의": 91, "연결": 80, "통찰": 92, "공감": 72, "실행": 95, "성장": 88}'::jsonb, profile_image_url='', is_published=true, updated_at=now() where id=32;
delete from public.careers where member_id=32;
insert into public.careers(member_id,sort_order,period,company,role,description) values
  (32,0,'2026.01 - 현재','AI 서비스 개발팀','AI 전문가','AI·소프트웨어 서비스 개발'),
  (32,1,'2022.03 - 2025.12','SaaS 개발조직','프로젝트 리드','데이터 기반 자동화 구축'),
  (32,2,'2019.07 - 2022.02','데이터 플랫폼 프로젝트','실무 담당','개발조직 기술 로드맵 수립');

update public.members set name='강나영', job='콘텐츠 크리에이터', tagline='콘텐츠 크리에이터의 경험을 지역의 새로운 기회로 연결합니다.', age=41, gender='여성', public_email='member33@example.com', school='미디어커뮤니케이션 학사', area='화성 · 수원', tier='Gold', tags='["콘텐츠전략", "브랜딩", "스토리텔링", "커뮤니티"]'::jsonb, intro='안녕하세요. 강나영입니다. 사람이 기억하는 이야기와 브랜드가 지속되는 경험을 만드는 일을 좋아합니다. 화성인사이드에서는 제 분야의 경험을 나누는 동시에 서로 다른 전문성을 가진 사람들과 새로운 프로젝트와 협업의 가능성을 만들고 싶습니다.', strengths='{"창의": 96, "연결": 87, "통찰": 83, "공감": 92, "실행": 89, "성장": 86}'::jsonb, profile_image_url='', is_published=true, updated_at=now() where id=33;
delete from public.careers where member_id=33;
insert into public.careers(member_id,sort_order,period,company,role,description) values
  (33,0,'2025.01 - 현재','브랜드 콘텐츠 스튜디오','콘텐츠 크리에이터','브랜드 콘텐츠 캠페인 기획'),
  (33,1,'2021.03 - 2024.12','디지털 미디어 프로젝트','프로젝트 리드','온·오프라인 커뮤니티 운영'),
  (33,2,'2018.07 - 2021.02','커뮤니티 콘텐츠 조직','실무 담당','콘텐츠 파트너십 프로젝트 리드');

update public.members set name='장현우', job='금융 전문가', tagline='전문성과 실행력을 바탕으로 함께 성장하는 연결을 만듭니다.', age=44, gender='남성', public_email='member34@example.com', school='경제학 학사', area='서울 · 화성', tier='Gold', tags='["투자", "재무분석", "자산관리", "리스크"]'::jsonb, intro='안녕하세요. 장현우입니다. 숫자 속에서 사업의 본질과 리스크를 읽고 장기적인 가치를 판단하는 일을 해왔습니다. 화성인사이드에서는 제 분야의 경험을 나누는 동시에 서로 다른 전문성을 가진 사람들과 새로운 프로젝트와 협업의 가능성을 만들고 싶습니다.', strengths='{"창의": 79, "연결": 80, "통찰": 95, "공감": 77, "실행": 88, "성장": 83}'::jsonb, profile_image_url='', is_published=true, updated_at=now() where id=34;
delete from public.careers where member_id=34;
insert into public.careers(member_id,sort_order,period,company,role,description) values
  (34,0,'2024.01 - 현재','투자운용 프로젝트','금융 전문가','기업·산업 투자분석'),
  (34,1,'2020.03 - 2023.12','기업금융 분석팀','프로젝트 리드','포트폴리오 및 리스크 관리'),
  (34,2,'2017.07 - 2020.02','자산관리 전략팀','실무 담당','사업가치·재무모델 검토');

update public.members set name='인이리', job='HR 컨설턴트', tagline='HR 컨설턴트의 시선으로 사람과 사업의 다음 가능성을 설계합니다.', age=32, gender='여성', public_email='member35@example.com', school='경영전략 MBA 과정 수료', area='수원 · 화성', tier='Gold', tags='["사업전략", "문제정의", "조직협업", "신사업"]'::jsonb, intro='안녕하세요. 인이리입니다. 복잡한 문제를 구조화하고 실행 가능한 선택지로 바꾸는 일을 강점으로 삼고 있습니다. 화성인사이드에서는 제 분야의 경험을 나누는 동시에 서로 다른 전문성을 가진 사람들과 새로운 프로젝트와 협업의 가능성을 만들고 싶습니다.', strengths='{"창의": 79, "연결": 83, "통찰": 93, "공감": 81, "실행": 86, "성장": 85}'::jsonb, profile_image_url='', is_published=true, updated_at=now() where id=35;
delete from public.careers where member_id=35;
insert into public.careers(member_id,sort_order,period,company,role,description) values
  (35,0,'2023.01 - 현재','중견기업 전략기획실','HR 컨설턴트','전략기획 프로젝트 리드'),
  (35,1,'2019.03 - 2022.12','신사업 컨설팅 프로젝트','프로젝트 리드','신사업 타당성 검토 및 실행계획 수립'),
  (35,2,'2016.07 - 2019.02','산업전략 프로젝트','실무 담당','조직 간 협업체계 설계');

update public.members set name='장서우', job='사업가', tagline='사업가의 경험을 지역의 새로운 기회로 연결합니다.', age=35, gender='남성', public_email='member36@example.com', school='경영학 학사', area='동탄 · 서울', tier='Gold', tags='["사업개발", "영업전략", "파트너십", "조직운영"]'::jsonb, intro='안녕하세요. 장서우입니다. 좋은 아이디어가 실제 매출과 지속 가능한 사업으로 이어지도록 사람과 자원을 연결하는 일을 해왔습니다. 화성인사이드에서는 제 분야의 경험을 나누는 동시에 서로 다른 전문성을 가진 사람들과 새로운 프로젝트와 협업의 가능성을 만들고 싶습니다.', strengths='{"창의": 84, "연결": 94, "통찰": 89, "공감": 79, "실행": 95, "성장": 94}'::jsonb, profile_image_url='', is_published=true, updated_at=now() where id=36;
delete from public.careers where member_id=36;
insert into public.careers(member_id,sort_order,period,company,role,description) values
  (36,0,'2026.01 - 현재','사업개발 조직','사업가','신규 사업개발 및 파트너십'),
  (36,1,'2022.03 - 2025.12','B2B 파트너십팀','프로젝트 리드','영업전략·채널 확대'),
  (36,2,'2019.07 - 2022.02','성장전략 프로젝트','실무 담당','조직 운영 및 성장 프로젝트');

update public.members set name='김태희', job='브랜드 디렉터', tagline='전문성과 실행력을 바탕으로 함께 성장하는 연결을 만듭니다.', age=38, gender='여성', public_email='member37@example.com', school='문화콘텐츠 학사', area='화성 · 용인', tier='Gold', tags='["콘텐츠전략", "브랜딩", "스토리텔링", "커뮤니티"]'::jsonb, intro='안녕하세요. 김태희입니다. 사람이 기억하는 이야기와 브랜드가 지속되는 경험을 만드는 일을 좋아합니다. 화성인사이드에서는 제 분야의 경험을 나누는 동시에 서로 다른 전문성을 가진 사람들과 새로운 프로젝트와 협업의 가능성을 만들고 싶습니다.', strengths='{"창의": 93, "연결": 91, "통찰": 87, "공감": 89, "실행": 86, "성장": 90}'::jsonb, profile_image_url='', is_published=true, updated_at=now() where id=37;
delete from public.careers where member_id=37;
insert into public.careers(member_id,sort_order,period,company,role,description) values
  (37,0,'2025.01 - 현재','브랜드 콘텐츠 스튜디오','브랜드 디렉터','브랜드 콘텐츠 캠페인 기획'),
  (37,1,'2021.03 - 2024.12','디지털 미디어 프로젝트','프로젝트 리드','온·오프라인 커뮤니티 운영'),
  (37,2,'2018.07 - 2021.02','커뮤니티 콘텐츠 조직','실무 담당','콘텐츠 파트너십 프로젝트 리드');

update public.members set name='최영준', job='영업전략 대표', tagline='영업전략 대표의 시선으로 사람과 사업의 다음 가능성을 설계합니다.', age=41, gender='남성', public_email='member38@example.com', school='경영전략 MBA 과정 수료', area='경기 남부', tier='Gold', tags='["사업전략", "문제정의", "조직협업", "신사업"]'::jsonb, intro='안녕하세요. 최영준입니다. 복잡한 문제를 구조화하고 실행 가능한 선택지로 바꾸는 일을 강점으로 삼고 있습니다. 화성인사이드에서는 제 분야의 경험을 나누는 동시에 서로 다른 전문성을 가진 사람들과 새로운 프로젝트와 협업의 가능성을 만들고 싶습니다.', strengths='{"창의": 82, "연결": 86, "통찰": 89, "공감": 77, "실행": 89, "성장": 88}'::jsonb, profile_image_url='', is_published=true, updated_at=now() where id=38;
delete from public.careers where member_id=38;
insert into public.careers(member_id,sort_order,period,company,role,description) values
  (38,0,'2024.01 - 현재','중견기업 전략기획실','영업전략 대표','전략기획 프로젝트 리드'),
  (38,1,'2020.03 - 2023.12','신사업 컨설팅 프로젝트','프로젝트 리드','신사업 타당성 검토 및 실행계획 수립'),
  (38,2,'2017.07 - 2020.02','산업전략 프로젝트','실무 담당','조직 간 협업체계 설계');

update public.members set name='이보람', job='웰니스 대표', tagline='웰니스 대표의 경험을 지역의 새로운 기회로 연결합니다.', age=44, gender='여성', public_email='member39@example.com', school='경영학 학사', area='서울 · 경기', tier='Gold', tags='["사업개발", "영업전략", "파트너십", "조직운영"]'::jsonb, intro='안녕하세요. 이보람입니다. 좋은 아이디어가 실제 매출과 지속 가능한 사업으로 이어지도록 사람과 자원을 연결하는 일을 해왔습니다. 화성인사이드에서는 제 분야의 경험을 나누는 동시에 서로 다른 전문성을 가진 사람들과 새로운 프로젝트와 협업의 가능성을 만들고 싶습니다.', strengths='{"창의": 87, "연결": 97, "통찰": 85, "공감": 82, "실행": 98, "성장": 90}'::jsonb, profile_image_url='', is_published=true, updated_at=now() where id=39;
delete from public.careers where member_id=39;
insert into public.careers(member_id,sort_order,period,company,role,description) values
  (39,0,'2023.01 - 현재','사업개발 조직','웰니스 대표','신규 사업개발 및 파트너십'),
  (39,1,'2019.03 - 2022.12','B2B 파트너십팀','프로젝트 리드','영업전략·채널 확대'),
  (39,2,'2016.07 - 2019.02','성장전략 프로젝트','실무 담당','조직 운영 및 성장 프로젝트');

update public.members set name='박민혁', job='전략기획 이사', tagline='전문성과 실행력을 바탕으로 함께 성장하는 연결을 만듭니다.', age=32, gender='남성', public_email='member40@example.com', school='산업공학 학사', area='화성 · 동탄', tier='Gold', tags='["사업전략", "문제정의", "조직협업", "신사업"]'::jsonb, intro='안녕하세요. 박민혁입니다. 복잡한 문제를 구조화하고 실행 가능한 선택지로 바꾸는 일을 강점으로 삼고 있습니다. 화성인사이드에서는 제 분야의 경험을 나누는 동시에 서로 다른 전문성을 가진 사람들과 새로운 프로젝트와 협업의 가능성을 만들고 싶습니다.', strengths='{"창의": 84, "연결": 81, "통찰": 91, "공감": 79, "실행": 91, "성장": 83}'::jsonb, profile_image_url='', is_published=true, updated_at=now() where id=40;
delete from public.careers where member_id=40;
insert into public.careers(member_id,sort_order,period,company,role,description) values
  (40,0,'2026.01 - 현재','중견기업 전략기획실','전략기획 이사','전략기획 프로젝트 리드'),
  (40,1,'2022.03 - 2025.12','신사업 컨설팅 프로젝트','프로젝트 리드','신사업 타당성 검토 및 실행계획 수립'),
  (40,2,'2019.07 - 2022.02','산업전략 프로젝트','실무 담당','조직 간 협업체계 설계');

update public.members set name='조민혁', job='임팩트 비즈니스 대표', tagline='임팩트 비즈니스 대표의 시선으로 사람과 사업의 다음 가능성을 설계합니다.', age=35, gender='남성', public_email='member41@example.com', school='국제통상 학사', area='화성 · 수원', tier='Gold', tags='["사업개발", "영업전략", "파트너십", "조직운영"]'::jsonb, intro='안녕하세요. 조민혁입니다. 좋은 아이디어가 실제 매출과 지속 가능한 사업으로 이어지도록 사람과 자원을 연결하는 일을 해왔습니다. 화성인사이드에서는 제 분야의 경험을 나누는 동시에 서로 다른 전문성을 가진 사람들과 새로운 프로젝트와 협업의 가능성을 만들고 싶습니다.', strengths='{"창의": 89, "연결": 92, "통찰": 87, "공감": 84, "실행": 93, "성장": 92}'::jsonb, profile_image_url='', is_published=true, updated_at=now() where id=41;
delete from public.careers where member_id=41;
insert into public.careers(member_id,sort_order,period,company,role,description) values
  (41,0,'2025.01 - 현재','사업개발 조직','임팩트 비즈니스 대표','신규 사업개발 및 파트너십'),
  (41,1,'2021.03 - 2024.12','B2B 파트너십팀','프로젝트 리드','영업전략·채널 확대'),
  (41,2,'2018.07 - 2021.02','성장전략 프로젝트','실무 담당','조직 운영 및 성장 프로젝트');

update public.members set name='임기영', job='기업교육 대표', tagline='기업교육 대표의 경험을 지역의 새로운 기회로 연결합니다.', age=38, gender='남성', public_email='member42@example.com', school='교육공학 학사', area='서울 · 화성', tier='Gold', tags='["교육콘텐츠", "커리큘럼", "강의기획", "에듀테크"]'::jsonb, intro='안녕하세요. 임기영입니다. 배움이 실제 변화로 이어지도록 이해하기 쉽고 계속 참여하고 싶은 학습 경험을 설계합니다. 화성인사이드에서는 제 분야의 경험을 나누는 동시에 서로 다른 전문성을 가진 사람들과 새로운 프로젝트와 협업의 가능성을 만들고 싶습니다.', strengths='{"창의": 84, "연결": 87, "통찰": 85, "공감": 97, "실행": 83, "성장": 92}'::jsonb, profile_image_url='', is_published=true, updated_at=now() where id=42;
delete from public.careers where member_id=42;
insert into public.careers(member_id,sort_order,period,company,role,description) values
  (42,0,'2024.01 - 현재','교육콘텐츠 스튜디오','기업교육 대표','교육 프로그램 및 커리큘럼 개발'),
  (42,1,'2020.03 - 2023.12','기업교육 프로젝트','프로젝트 리드','기업·성인 대상 콘텐츠 제작'),
  (42,2,'2017.07 - 2020.02','온라인 러닝 서비스팀','실무 담당','온라인 학습 경험 개선');

update public.members set name='황지혜', job='커뮤니티 리더', tagline='전문성과 실행력을 바탕으로 함께 성장하는 연결을 만듭니다.', age=41, gender='여성', public_email='member43@example.com', school='경영학 학사 · HRM 전공', area='수원 · 화성', tier='Gold', tags='["조직문화", "인재육성", "채용", "리더십"]'::jsonb, intro='안녕하세요. 황지혜입니다. 사람이 가진 강점이 조직과 커뮤니티 안에서 제대로 발휘되는 환경을 만드는 데 관심이 많습니다. 화성인사이드에서는 제 분야의 경험을 나누는 동시에 서로 다른 전문성을 가진 사람들과 새로운 프로젝트와 협업의 가능성을 만들고 싶습니다.', strengths='{"창의": 80, "연결": 95, "통찰": 87, "공감": 94, "실행": 82, "성장": 91}'::jsonb, profile_image_url='', is_published=true, updated_at=now() where id=43;
delete from public.careers where member_id=43;
insert into public.careers(member_id,sort_order,period,company,role,description) values
  (43,0,'2023.01 - 현재','조직문화팀','커뮤니티 리더','조직문화·인재육성 프로그램 운영'),
  (43,1,'2019.03 - 2022.12','HR 프로젝트','프로젝트 리드','채용 및 온보딩 체계 개선'),
  (43,2,'2016.07 - 2019.02','리더십·커뮤니티 프로그램','실무 담당','리더십·커뮤니티 프로그램 기획');

update public.members set name='김도윤', job='전문 투자자', tagline='전문 투자자의 시선으로 사람과 사업의 다음 가능성을 설계합니다.', age=44, gender='남성', public_email='member44@example.com', school='금융공학 석사과정 수료', area='동탄 · 서울', tier='Gold', tags='["투자", "재무분석", "자산관리", "리스크"]'::jsonb, intro='안녕하세요. 김도윤입니다. 숫자 속에서 사업의 본질과 리스크를 읽고 장기적인 가치를 판단하는 일을 해왔습니다. 화성인사이드에서는 제 분야의 경험을 나누는 동시에 서로 다른 전문성을 가진 사람들과 새로운 프로젝트와 협업의 가능성을 만들고 싶습니다.', strengths='{"창의": 75, "연결": 83, "통찰": 98, "공감": 73, "실행": 91, "성장": 86}'::jsonb, profile_image_url='', is_published=true, updated_at=now() where id=44;
delete from public.careers where member_id=44;
insert into public.careers(member_id,sort_order,period,company,role,description) values
  (44,0,'2026.01 - 현재','투자운용 프로젝트','전문 투자자','기업·산업 투자분석'),
  (44,1,'2022.03 - 2025.12','기업금융 분석팀','프로젝트 리드','포트폴리오 및 리스크 관리'),
  (44,2,'2019.07 - 2022.02','자산관리 전략팀','실무 담당','사업가치·재무모델 검토');

update public.members set name='송민지', job='브랜드 매니저', tagline='브랜드 매니저의 경험을 지역의 새로운 기회로 연결합니다.', age=32, gender='여성', public_email='member45@example.com', school='미디어커뮤니케이션 학사', area='화성 · 용인', tier='Gold', tags='["콘텐츠전략", "브랜딩", "스토리텔링", "커뮤니티"]'::jsonb, intro='안녕하세요. 송민지입니다. 사람이 기억하는 이야기와 브랜드가 지속되는 경험을 만드는 일을 좋아합니다. 화성인사이드에서는 제 분야의 경험을 나누는 동시에 서로 다른 전문성을 가진 사람들과 새로운 프로젝트와 협업의 가능성을 만들고 싶습니다.', strengths='{"창의": 94, "연결": 92, "통찰": 81, "공감": 90, "실행": 87, "성장": 91}'::jsonb, profile_image_url='', is_published=true, updated_at=now() where id=45;
delete from public.careers where member_id=45;
insert into public.careers(member_id,sort_order,period,company,role,description) values
  (45,0,'2025.01 - 현재','브랜드 콘텐츠 스튜디오','브랜드 매니저','브랜드 콘텐츠 캠페인 기획'),
  (45,1,'2021.03 - 2024.12','디지털 미디어 프로젝트','프로젝트 리드','온·오프라인 커뮤니티 운영'),
  (45,2,'2018.07 - 2021.02','커뮤니티 콘텐츠 조직','실무 담당','콘텐츠 파트너십 프로젝트 리드');

update public.members set name='이재현', job='AI 엔지니어', tagline='전문성과 실행력을 바탕으로 함께 성장하는 연결을 만듭니다.', age=35, gender='남성', public_email='member46@example.com', school='소프트웨어공학 석사', area='경기 남부', tier='Gold', tags='["AI", "소프트웨어", "데이터", "기술전략"]'::jsonb, intro='안녕하세요. 이재현입니다. 기술을 기술로 끝내지 않고 사람이 실제로 사용할 수 있는 서비스로 구현하는 데 관심이 있습니다. 화성인사이드에서는 제 분야의 경험을 나누는 동시에 서로 다른 전문성을 가진 사람들과 새로운 프로젝트와 협업의 가능성을 만들고 싶습니다.', strengths='{"창의": 91, "연결": 80, "통찰": 92, "공감": 72, "실행": 95, "성장": 88}'::jsonb, profile_image_url='', is_published=true, updated_at=now() where id=46;
delete from public.careers where member_id=46;
insert into public.careers(member_id,sort_order,period,company,role,description) values
  (46,0,'2024.01 - 현재','AI 서비스 개발팀','AI 엔지니어','AI·소프트웨어 서비스 개발'),
  (46,1,'2020.03 - 2023.12','SaaS 개발조직','프로젝트 리드','데이터 기반 자동화 구축'),
  (46,2,'2017.07 - 2020.02','데이터 플랫폼 프로젝트','실무 담당','개발조직 기술 로드맵 수립');

update public.members set name='최유진', job='서비스 기획자', tagline='서비스 기획자의 시선으로 사람과 사업의 다음 가능성을 설계합니다.', age=38, gender='여성', public_email='member47@example.com', school='산업공학 학사', area='서울 · 경기', tier='Gold', tags='["제품기획", "고객경험", "서비스전략", "프로덕트 운영"]'::jsonb, intro='안녕하세요. 최유진입니다. 사용자의 불편을 발견하고 작은 개선을 빠르게 실행해 더 나은 제품 경험으로 연결하는 일을 해왔습니다. 화성인사이드에서는 제 분야의 경험을 나누는 동시에 서로 다른 전문성을 가진 사람들과 새로운 프로젝트와 협업의 가능성을 만들고 싶습니다.', strengths='{"창의": 90, "연결": 83, "통찰": 87, "공감": 91, "실행": 95, "성장": 88}'::jsonb, profile_image_url='', is_published=true, updated_at=now() where id=47;
delete from public.careers where member_id=47;
insert into public.careers(member_id,sort_order,period,company,role,description) values
  (47,0,'2023.01 - 현재','테크 스타트업 프로덕트팀','서비스 기획자','신규 서비스 기획 및 출시'),
  (47,1,'2019.03 - 2022.12','디지털 서비스 기획팀','프로젝트 리드','사용자 조사·제품 개선'),
  (47,2,'2016.07 - 2019.02','신규서비스 TF','실무 담당','프로덕트 로드맵 운영');

update public.members set name='강연우', job='금융 상품 매니저', tagline='금융 상품 매니저의 경험을 지역의 새로운 기회로 연결합니다.', age=41, gender='여성', public_email='member48@example.com', school='경영학 학사 · 재무전공', area='화성 · 동탄', tier='Gold', tags='["투자", "재무분석", "자산관리", "리스크"]'::jsonb, intro='안녕하세요. 강연우입니다. 숫자 속에서 사업의 본질과 리스크를 읽고 장기적인 가치를 판단하는 일을 해왔습니다. 화성인사이드에서는 제 분야의 경험을 나누는 동시에 서로 다른 전문성을 가진 사람들과 새로운 프로젝트와 협업의 가능성을 만들고 싶습니다.', strengths='{"창의": 79, "연결": 80, "통찰": 95, "공감": 77, "실행": 88, "성장": 83}'::jsonb, profile_image_url='', is_published=true, updated_at=now() where id=48;
delete from public.careers where member_id=48;
insert into public.careers(member_id,sort_order,period,company,role,description) values
  (48,0,'2026.01 - 현재','투자운용 프로젝트','금융 상품 매니저','기업·산업 투자분석'),
  (48,1,'2022.03 - 2025.12','기업금융 분석팀','프로젝트 리드','포트폴리오 및 리스크 관리'),
  (48,2,'2019.07 - 2022.02','자산관리 전략팀','실무 담당','사업가치·재무모델 검토');

update public.members set name='엄서영', job='교육 콘텐츠', tagline='전문성과 실행력을 바탕으로 함께 성장하는 연결을 만듭니다.', age=44, gender='여성', public_email='member49@example.com', school='문화콘텐츠 학사', area='화성 · 수원', tier='Gold', tags='["콘텐츠전략", "브랜딩", "스토리텔링", "커뮤니티"]'::jsonb, intro='안녕하세요. 엄서영입니다. 사람이 기억하는 이야기와 브랜드가 지속되는 경험을 만드는 일을 좋아합니다. 화성인사이드에서는 제 분야의 경험을 나누는 동시에 서로 다른 전문성을 가진 사람들과 새로운 프로젝트와 협업의 가능성을 만들고 싶습니다.', strengths='{"창의": 91, "연결": 89, "통찰": 85, "공감": 94, "실행": 84, "성장": 88}'::jsonb, profile_image_url='', is_published=true, updated_at=now() where id=49;
delete from public.careers where member_id=49;
insert into public.careers(member_id,sort_order,period,company,role,description) values
  (49,0,'2025.01 - 현재','브랜드 콘텐츠 스튜디오','교육 콘텐츠','브랜드 콘텐츠 캠페인 기획'),
  (49,1,'2021.03 - 2024.12','디지털 미디어 프로젝트','프로젝트 리드','온·오프라인 커뮤니티 운영'),
  (49,2,'2018.07 - 2021.02','커뮤니티 콘텐츠 조직','실무 담당','콘텐츠 파트너십 프로젝트 리드');

update public.members set name='김채현', job='스타트업 PM', tagline='스타트업 PM의 시선으로 사람과 사업의 다음 가능성을 설계합니다.', age=32, gender='여성', public_email='member50@example.com', school='산업공학 학사', area='서울 · 화성', tier='Gold', tags='["제품기획", "고객경험", "서비스전략", "프로덕트 운영"]'::jsonb, intro='안녕하세요. 김채현입니다. 사용자의 불편을 발견하고 작은 개선을 빠르게 실행해 더 나은 제품 경험으로 연결하는 일을 해왔습니다. 화성인사이드에서는 제 분야의 경험을 나누는 동시에 서로 다른 전문성을 가진 사람들과 새로운 프로젝트와 협업의 가능성을 만들고 싶습니다.', strengths='{"창의": 86, "연결": 86, "통찰": 90, "공감": 87, "실행": 91, "성장": 91}'::jsonb, profile_image_url='', is_published=true, updated_at=now() where id=50;
delete from public.careers where member_id=50;
insert into public.careers(member_id,sort_order,period,company,role,description) values
  (50,0,'2024.01 - 현재','테크 스타트업 프로덕트팀','스타트업 PM','신규 서비스 기획 및 출시'),
  (50,1,'2020.03 - 2023.12','디지털 서비스 기획팀','프로젝트 리드','사용자 조사·제품 개선'),
  (50,2,'2017.07 - 2020.02','신규서비스 TF','실무 담당','프로덕트 로드맵 운영');
