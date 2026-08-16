# 화성인사이드 v6 운영형 업그레이드

## 이번 버전
- 메인/회원 상세 모두 마스터 이미지 미사용 DOM 구조
- PC + 모바일 반응형 최적화
- 관리자/운영관리자 로그인 성공 시 `/admin` 자동 이동
- 관리자 계정&권한: 아이디, 이메일, 권한, 상태, 회원 프로필 전체 수정 + 비밀번호 재설정
- 공지게시판 `/notice-news`
- 커뮤니티게시판 `/community`
- 로그인 회원 글쓰기, 작성자 본인 수정/삭제, 관리자/운영관리자 전체 수정/삭제
- 게시글 YouTube URL 입력 및 사이트 내부 16:9 인라인 재생
- 메인 의장 영상 썸네일 클릭 시 동일 영역에서 YouTube 재생
- 회원 상세페이지 프로필 영상도 동일 방식으로 내부 재생

## 배포 전/후 1회 SQL
현재 v5.2 DB를 사용 중이라면 Supabase SQL Editor에서 아래 파일 전체를 1회 실행하세요.

`supabase/migrations/20260816_v6_operating_upgrade.sql`

이 SQL은:
1. members에 `youtube_url`, `youtube_thumbnail_url` 추가
2. `board_posts` 생성
3. 기존 `news_posts` 데이터를 공지게시판으로 1회 이관

## 관리자 비밀번호 관리 원칙
Supabase Auth는 기존 비밀번호 원문을 저장/조회할 수 없습니다. 따라서 관리자 화면은 현재 비밀번호를 보여주지 않고, 관리자가 **새 비밀번호로 재설정**하는 방식입니다. 이는 정상적인 보안 구조입니다.

## 이미지/영상 권장 규격
- 회원 프로필: 1200×1200px (1:1)
- 의장 인사 사진: 1200×1500px (4:5)
- 의장/회원/게시글 YouTube 썸네일: 1600×900px (16:9)
- 공지/커뮤니티 대표 이미지: 1200×675px (16:9)

## GitHub 웹 업로드
이 패키지는 `node_modules` 제외 총 99개 파일로 구성되어 GitHub 웹 업로드 100개 미만 제한에 맞췄습니다.
압축 해제 후 프로젝트 루트의 파일/폴더를 기존 GitHub 저장소 루트에 전체 덮어쓰기 업로드하세요.

## 환경변수
기존 v5.2와 동일합니다.
- NEXT_PUBLIC_SUPABASE_URL
- NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY
- SUPABASE_SERVICE_ROLE_KEY
- NEXT_PUBLIC_SITE_URL
