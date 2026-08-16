-- 초기 데이터. schema.sql 실행 후 실행하세요.

insert into public.members(id,name,job,age,gender,public_email,school,area,tier,profile_image_url,featured_rank,is_published) values
(1,'박인식','영화감독',56,'남성','parkmovie@gmail.com','한양대학교 대학원 석사','경기도 · 화성특례시','Platinum','/assets/real/park-insik.jpg',1,true),
(2,'김광선','기획/마케팅',40,'남성','motherday79@gmail.com','단국대 뮤지컬과 학사','서울 · 경기','Platinum','/assets/real/kim-gwangsun.jpg',2,true),
(3,'김도현','전략 컨설턴트',30,'남성','member3@inside.kr','한양대학교 산업공학과','화성 · 동탄','Platinum','/assets/members/member-03.png',3,true),
(4,'박지은','바이오 대표',31,'여성','member4@inside.kr','한양대학교 산업공학과','화성 · 동탄','Platinum','/assets/members/member-04.png',4,true),
(5,'최우진','M&A 컨설턴트',32,'남성','member5@inside.kr','한양대학교 산업공학과','화성 · 동탄','Platinum','/assets/members/member-05.png',5,true),
(6,'오지훈','변호사',33,'여성','member6@inside.kr','한양대학교 산업공학과','화성 · 동탄','Platinum','/assets/members/member-06.png',6,true),
(7,'손예린','미디어 커뮤니티 대표',34,'남성','member7@inside.kr','한양대학교 산업공학과','화성 · 동탄','Platinum','/assets/members/member-07.png',7,true),
(8,'정재오','제품 개발담당',35,'여성','member8@inside.kr','한양대학교 산업공학과','화성 · 동탄','Platinum','/assets/members/member-08.png',8,true),
(9,'서영일','교육 콘텐츠 크리에이터',36,'남성','member9@inside.kr','한양대학교 산업공학과','화성 · 동탄','Platinum','/assets/members/member-09.png',9,true),
(10,'송시우','소프트웨어 CTO',37,'여성','member10@inside.kr','한양대학교 산업공학과','화성 · 동탄','Platinum','/assets/members/member-10.png',10,true),
(11,'박소윤','IT 컨설턴트',38,'남성','member11@inside.kr','한양대학교 산업공학과','화성 · 동탄','Gold','/assets/members/member-11.png',null,true),
(12,'채동민','금융 투자 매니저',39,'여성','member12@inside.kr','한양대학교 산업공학과','화성 · 동탄','Gold','/assets/members/member-12.png',null,true),
(13,'전민서','스타트업 대표',40,'남성','member13@inside.kr','한양대학교 산업공학과','화성 · 동탄','Gold','/assets/members/member-13.png',null,true),
(14,'박태우','어카운트 디렉터',28,'여성','member14@inside.kr','한양대학교 산업공학과','화성 · 동탄','Gold','/assets/members/member-14.png',null,true),
(15,'이서현','데이터 디렉터',29,'남성','member15@inside.kr','한양대학교 산업공학과','화성 · 동탄','Gold','/assets/members/member-15.png',null,true),
(16,'문준호','회계사',30,'여성','member16@inside.kr','한양대학교 산업공학과','화성 · 동탄','Gold','/assets/members/member-16.png',null,true),
(17,'임정민','법무법인 변호사',31,'남성','member17@inside.kr','한양대학교 산업공학과','화성 · 동탄','Gold','/assets/members/member-17.png',null,true),
(18,'이동훈','데이터 분석가',32,'여성','member18@inside.kr','한양대학교 산업공학과','화성 · 동탄','Gold','/assets/members/member-18.png',null,true),
(19,'유서연','콘텐츠 기획자',33,'남성','member19@inside.kr','한양대학교 산업공학과','화성 · 동탄','Gold','/assets/members/member-19.png',null,true),
(20,'조도현','투자 심사역',34,'여성','member20@inside.kr','한양대학교 산업공학과','화성 · 동탄','Gold','/assets/members/member-20.png',null,true),
(21,'유가현','HR 매니저',35,'남성','member21@inside.kr','한양대학교 산업공학과','화성 · 동탄','Gold','/assets/members/member-21.png',null,true),
(22,'정규환','게임 프로듀서',36,'여성','member22@inside.kr','한양대학교 산업공학과','화성 · 동탄','Gold','/assets/members/member-22.png',null,true),
(23,'윤슬기','콘텐츠 마케터',37,'남성','member23@inside.kr','한양대학교 산업공학과','화성 · 동탄','Gold','/assets/members/member-23.png',null,true),
(24,'이승호','AI 연구원',38,'여성','member24@inside.kr','한양대학교 산업공학과','화성 · 동탄','Gold','/assets/members/member-24.png',null,true),
(25,'최태원','바이오 연구원',39,'남성','member25@inside.kr','한양대학교 산업공학과','화성 · 동탄','Gold','/assets/members/member-25.png',null,true),
(26,'노현우','브랜드 크리에이터',40,'여성','member26@inside.kr','한양대학교 산업공학과','화성 · 동탄','Gold','/assets/members/member-26.png',null,true),
(27,'김민지','교육 콘텐츠',28,'남성','member27@inside.kr','한양대학교 산업공학과','화성 · 동탄','Gold','/assets/members/member-27.png',null,true),
(28,'오혜림','스타트업 PM',29,'여성','member28@inside.kr','한양대학교 산업공학과','화성 · 동탄','Gold','/assets/members/member-28.png',null,true),
(29,'박규훈','세무 컨설턴트',30,'남성','member29@inside.kr','한양대학교 산업공학과','화성 · 동탄','Gold','/assets/members/member-29.png',null,true),
(30,'이예린','UX 디자이너',31,'여성','member30@inside.kr','한양대학교 산업공학과','화성 · 동탄','Gold','/assets/members/member-30.png',null,true),
(31,'한서윤','변리사',32,'남성','member31@inside.kr','한양대학교 산업공학과','화성 · 동탄','Gold','/assets/members/member-01.png',null,true),
(32,'오준명','AI 전문가',33,'여성','member32@inside.kr','한양대학교 산업공학과','화성 · 동탄','Gold','/assets/members/member-02.png',null,true),
(33,'강나영','콘텐츠 크리에이터',34,'남성','member33@inside.kr','한양대학교 산업공학과','화성 · 동탄','Gold','/assets/members/member-03.png',null,true),
(34,'장현우','금융 전문가',35,'여성','member34@inside.kr','한양대학교 산업공학과','화성 · 동탄','Gold','/assets/members/member-04.png',null,true),
(35,'인이리','HR 컨설턴트',36,'남성','member35@inside.kr','한양대학교 산업공학과','화성 · 동탄','Gold','/assets/members/member-05.png',null,true),
(36,'장서우','사업가',37,'여성','member36@inside.kr','한양대학교 산업공학과','화성 · 동탄','Gold','/assets/members/member-06.png',null,true),
(37,'김태희','브랜드 디렉터',38,'남성','member37@inside.kr','한양대학교 산업공학과','화성 · 동탄','Gold','/assets/members/member-07.png',null,true),
(38,'최영준','영업전략 대표',39,'여성','member38@inside.kr','한양대학교 산업공학과','화성 · 동탄','Gold','/assets/members/member-08.png',null,true),
(39,'이보람','웰니스 대표',40,'남성','member39@inside.kr','한양대학교 산업공학과','화성 · 동탄','Gold','/assets/members/member-09.png',null,true),
(40,'박민혁','전략기획 이사',28,'여성','member40@inside.kr','한양대학교 산업공학과','화성 · 동탄','Gold','/assets/members/member-10.png',null,true),
(41,'조민혁','임팩트 비즈니스 대표',29,'남성','member41@inside.kr','한양대학교 산업공학과','화성 · 동탄','Gold','/assets/members/member-11.png',null,true),
(42,'임기영','기업교육 대표',30,'여성','member42@inside.kr','한양대학교 산업공학과','화성 · 동탄','Gold','/assets/members/member-12.png',null,true),
(43,'황지혜','커뮤니티 리더',31,'남성','member43@inside.kr','한양대학교 산업공학과','화성 · 동탄','Gold','/assets/members/member-13.png',null,true),
(44,'김도윤','전문 투자자',32,'여성','member44@inside.kr','한양대학교 산업공학과','화성 · 동탄','Gold','/assets/members/member-14.png',null,true),
(45,'송민지','브랜드 매니저',33,'남성','member45@inside.kr','한양대학교 산업공학과','화성 · 동탄','Gold','/assets/members/member-15.png',null,true),
(46,'이재현','AI 엔지니어',34,'여성','member46@inside.kr','한양대학교 산업공학과','화성 · 동탄','Gold','/assets/members/member-16.png',null,true),
(47,'최유진','서비스 기획자',35,'남성','member47@inside.kr','한양대학교 산업공학과','화성 · 동탄','Gold','/assets/members/member-17.png',null,true),
(48,'강연우','금융 상품 매니저',36,'여성','member48@inside.kr','한양대학교 산업공학과','화성 · 동탄','Gold','/assets/members/member-18.png',null,true),
(49,'엄서영','교육 콘텐츠',37,'남성','member49@inside.kr','한양대학교 산업공학과','화성 · 동탄','Gold','/assets/members/member-19.png',null,true),
(50,'김채현','스타트업 PM',38,'여성','member50@inside.kr','한양대학교 산업공학과','화성 · 동탄','Gold','/assets/members/member-20.png',null,true)
on conflict(id) do update set name=excluded.name,job=excluded.job,age=excluded.age,gender=excluded.gender,public_email=excluded.public_email,school=excluded.school,area=excluded.area,tier=excluded.tier,profile_image_url=excluded.profile_image_url,featured_rank=excluded.featured_rank,is_published=excluded.is_published;

insert into public.site_state(id,payload) values('main','{"site": {"siteName": "화성인사이드", "heroTitle1": "화성인 가치를,", "heroTitle2": "사람의 네트워크로 잇다", "heroDescription": "화성인사이드는 화성 출신 인재들이 함께 성장하고 연결할 수 있는 프리미엄 네트워크 플랫폼입니다.", "primaryButton": "지금 가입하기", "secondaryButton": "더 알아보기", "logoUrl": "", "heroVisualUrl": ""}, "chair": {"name": "박인식", "title": "의장/영화감독", "greeting": "안녕하세요.\n화성인사이드의 의장/영화감독 박인식 입니다.\n한사람, 한사람을 깊이보고 공감하며 전문성 있는 네트워크의 연결을 구현하고 싶었습니다.\n\n결국 어떠한 일의 성공은 누가 하느냐, 누구와 하느냐에 달려있는 문제로 귀결된다고 확언해도 좋을만큼 연결은 중요합니다.\n\n화성인사이드를 통해 더넓은 세상으로의 도약을 응원합니다.", "portraitUrl": "/assets/real/park-insik.jpg", "videoThumbnailUrl": "", "videoUrl": "", "signatureUrl": ""}, "featuredIds": ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"], "footer": {"company": "(주)화성인사이드", "address": "경기도 화성특례시", "phone": "070-1234-5678", "email": "hello@hwaseonginside.com", "hours": "평일 09:00 - 18:00"}}'::jsonb) on conflict(id) do update set payload=excluded.payload,updated_at=now();

insert into public.news_posts(id,category,title,excerpt,is_published,published_at) values
(1,'공지','5월 정기 네트워킹 행사 안내','정기 네트워킹 행사에 여러분을 초대합니다.',true,'2026-05-23T00:00:00+09:00'),
(2,'뉴스','2025 화성 어워즈 후보 공모','올해 빛낸 화성의 후보를 추천해 주세요.',true,'2026-05-16T00:00:00+09:00'),
(3,'공지','신규 그룹별 운영 안내','회원들의 연결을 위한 신규 그룹을 개설합니다.',true,'2026-05-01T00:00:00+09:00')
on conflict(id) do update set category=excluded.category,title=excluded.title,excerpt=excluded.excerpt,is_published=excluded.is_published,published_at=excluded.published_at;

-- 첫 관리자 계정을 만든 뒤 아래 이메일을 실제 관리자 이메일로 바꿔 1회 실행하세요.
-- update public.app_users set role='admin' where user_id=(select id from auth.users where email='YOUR_ADMIN_EMAIL');

-- 명시적 ID 시드 후 identity sequence를 현재 최대값으로 맞춥니다.
select setval(pg_get_serial_sequence('public.members','id'), (select max(id) from public.members), true);
select setval(pg_get_serial_sequence('public.news_posts','id'), (select max(id) from public.news_posts), true);

-- CLEAN v7: 과거 로컬 placeholder 얼굴 재사용을 제거합니다.
-- 실제 회원 사진은 가입/프로필 수정에서 Storage 업로드 후 다시 채워집니다.
update public.members
set profile_image_url = null
where id > 2 and profile_image_url like '/assets/members/%';
