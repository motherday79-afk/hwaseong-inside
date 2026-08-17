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
