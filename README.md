# Hwaseong Inside - News master web v1

이번 버전은 기존 메인/상세 마스터 방식 그대로,
공지 & 뉴스 섹션을 **웹마스터 이미지 + 완전 투명 클릭맵** 구조로 추가한 풀파일입니다.

## 추가된 화면
- `/notice-news` : 공지 & 뉴스 포털/목록 페이지
- `/notice-news/[id]` : 공지 & 뉴스 상세 페이지

## 반영 사항
- 메인페이지 공지 카드 3개 → 각각 공지 상세로 이동
- 메인페이지 `전체보기` → `/notice-news`
- 멤버 상세 상단 `클래스 & 뉴스`, `공지사항` → `/notice-news`
- 공지 목록/상세는 모두 승인용 마스터 이미지 기반
- 클릭영역은 모두 투명 (hover 박스 없음)

## 적용 방법
1. 압축 해제
2. GitHub `hwaseong-inside` 저장소 루트에 전체 덮어쓰기
3. Commit changes
4. Vercel 자동 배포 확인
