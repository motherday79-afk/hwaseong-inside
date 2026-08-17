# 화성인사이드 v7.8 — 상세페이지 UX 핫픽스

기준본: v7.7 Continuous Canvas Edition

## 이번 변경
- 상세페이지 순서: 강점 레이더 → 연결 가능성이 높은 멤버
- 상세페이지 공유 기능
  - 이미지로 저장: 상세 콘텐츠 영역을 PNG로 저장
  - 링크 공유: 모바일 Web Share API 우선, 미지원 환경은 링크 복사
- 경력 영역은 약 3개 항목 높이로 고정하고 추가 경력은 박스 내부 세로 스크롤
- 모바일 유튜브 썸네일은 16:9 전체 노출(object-fit: contain), 좌우 잘림 방지

## 배포
- 추가 Supabase SQL 없음
- GitHub 루트에 전체 덮어쓰기
- package.json에 html2canvas 의존성이 추가되어 Vercel 새 배포 시 자동 설치됨

## v7.9 연락처 · 해시태그 · 개인정보 핫픽스
- 상세페이지에 전화번호 항목 추가
- 이메일/전화번호는 **로그인한 회원에게만** 상세페이지에서 노출
- 비로그인 상태에서는 연락처 대신 회원 전용 안내 문구 표시
- 공개 `/api/public/state` 응답에서 이메일 제거
- Supabase `anon` 역할의 `members` 원본 테이블 직접 SELECT 차단
- 프로필 상단 해시태그는 `#태그` 형태의 **개별 배지**로 분리해 노출
- 회원 본인 `/account`, 관리자 회원관리, 계정&권한 관리에서 전화번호 수정 가능

### 배포 시 SQL 1회 실행
Supabase → SQL Editor에서 아래 파일을 전체 실행하세요.

`supabase/migrations/20260817_v7_9_contact_privacy.sql`
- 공개 클라이언트 fallback 회원 데이터에서는 이메일 값을 제거해 번들에 연락처가 포함되지 않도록 정리
