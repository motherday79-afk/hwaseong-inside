# 화성인사이드 DESIGN VALUE-UP v7.2

기준: TRUE CLEAN v7.1

## 이번 버전 원칙
- 메인 / 회원 상세 / 공지·커뮤니티 게시판의 **레이아웃 구조는 유지**
- DB/Auth/Admin/게시판 권한 로직 변경 없음
- 디자인 표현만 고도화

## 디자인 변경
- Noto Sans KR / Noto Serif KR / Manrope 웹 타이포그래피 계층 적용
- 화성인사이드 전용 SVG 아이콘 세트 추가 (`components/BrandIcon.js`)
- 이모지/문자 기호를 브랜드 SVG 아이콘으로 교체
- Hero, Featured 10, 40인, 공지뉴스 카드의 색/보더/그림자/호버 정교화
- 의장 영상/인사말 카드 타이포그래피와 표면 질감 개선
- 회원 상세의 기본정보/경력/추천/레이더/CTA 아이콘과 카드 톤 통일
- 메인과 상세 Footer 아이콘/브랜드 톤 강화
- 공지·커뮤니티 목록/상세에 에디토리얼 타이포그래피와 아이콘 적용

## 배포
추가 SQL 없음. GitHub 루트에 전체 덮어쓰기 후 Vercel 자동 배포.

## 파일 구조
ZIP 루트에 `app`, `components`, `data`, `lib`, `public`, `supabase`가 바로 위치합니다.
