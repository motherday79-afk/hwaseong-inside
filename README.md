# 화성인사이드 v5 — Supabase DB / 로그인 / 권한 / Storage

이번 버전은 기존 관리자 v1의 localStorage 임시 저장을 제거하고 **실제 운영형 DB/Auth/Storage 구조**로 전환한 버전입니다.

## 구현된 기능

- 이메일/비밀번호 회원가입, 로그인, 로그아웃
- Supabase SSR 세션 유지
- 역할 3단계
  - `admin` 최고 관리자
  - `editor` 운영 관리자
  - `member` 일반 회원
- `/admin` 서버 권한 보호
- 최고 관리자 전용 `/admin/users` 계정/권한 관리
- 일반회원 `/account` 본인 프로필 수정
- 가입 이메일과 기존 회원 이메일이 일치하면 기존 회원 DB와 자동 연결
- 관리자: 전체 회원 / Top10 / 메인 / 의장 / 뉴스 / 푸터 수정
- 일반회원: 자기 프로필, 사진, 소개, 경력만 수정
- Supabase Storage 이미지 업로드
- 업로드 전 이미지 최소 해상도/비율 검사
- 관리자 변경사항 DB 자동 저장(약 0.8초 디바운스)
- 공개 메인페이지가 DB 데이터를 조회
- 감사 로그(audit_logs) 저장
- RLS 기본 정책 + 서버 API 권한 재검증

---

# 1. GitHub 업로드

이 ZIP의 내용물을 기존 `hwaseong-inside` 저장소 루트에 전체 덮어쓰기 후 Commit 합니다.
Vercel 자동배포는 환경변수 설정 전에는 로그인/관리자 기능이 정상동작하지 않을 수 있습니다.

---

# 2. Supabase 프로젝트 만들기

Supabase에서 새 프로젝트를 하나 생성합니다.

프로젝트가 생성되면 **SQL Editor**에서 아래 순서대로 실행합니다.

### 첫 번째
`supabase/schema.sql` 전체 실행

생성되는 주요 테이블:
- `app_users`
- `members`
- `careers`
- `site_state`
- `news_posts`
- `audit_logs`

그리고 `hwaseong-media` Storage bucket이 생성됩니다.

### 두 번째
`supabase/seed.sql` 전체 실행

초기 50명 회원, Top10 순서, 메인 기본 설정, 공지 3건이 입력됩니다.

---

# 3. Supabase Auth 설정

Supabase → Authentication → URL Configuration

- Site URL: `https://hwaseong-inside.vercel.app`
- Redirect URL에 아래 주소 추가
  - `https://hwaseong-inside.vercel.app/auth/callback`

개발 시에는 필요하면 `http://localhost:3000/auth/callback`도 추가할 수 있습니다.

이메일 인증은 초반 테스트 단계에서는 Supabase에서 끄고 테스트해도 되고, 실제 오픈 전에는 켜는 것을 권장합니다.

---

# 4. Vercel 환경변수

Supabase 프로젝트의 Connect/API 화면에서 값을 확인한 뒤 Vercel Project → Settings → Environment Variables에 등록합니다.

```env
NEXT_PUBLIC_SUPABASE_URL=https://YOUR_PROJECT.supabase.co
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=YOUR_PUBLISHABLE_KEY
SUPABASE_SERVICE_ROLE_KEY=YOUR_SERVICE_ROLE_KEY
NEXT_PUBLIC_SITE_URL=https://hwaseong-inside.vercel.app
```

`SUPABASE_SERVICE_ROLE_KEY`는 절대로 `NEXT_PUBLIC_`을 붙이지 않습니다. 브라우저에 노출되면 안 되는 서버 전용 키입니다.

환경변수를 저장한 뒤 Vercel에서 Redeploy 합니다.

---

# 5. 첫 최고 관리자 만들기

1. 배포된 사이트의 `/signup`에서 관리자에 사용할 이메일로 회원가입합니다.
2. Supabase SQL Editor에서 아래 SQL의 이메일만 실제 이메일로 바꿔 실행합니다.

```sql
update public.app_users
set role = 'admin', updated_at = now()
where user_id = (
  select id from auth.users where email = 'YOUR_ADMIN_EMAIL'
);
```

3. 로그아웃 후 다시 로그인합니다.
4. `/admin` 접속

이후 다른 사용자의 권한은 `/admin/users`에서 웹으로 변경할 수 있습니다.

---

# 주요 주소

- `/signup` 회원가입
- `/login` 로그인
- `/account` 내 프로필 관리
- `/admin` 관리자 대시보드
- `/admin/users` 계정/권한 관리
- `/admin/members` 전체 회원 관리
- `/admin/featured` Top10 관리
- `/admin/home` 메인/의장 관리
- `/admin/news` 공지 & 뉴스 관리
- `/admin/media-guide` 이미지 규격
- `/admin/settings` 사이트 공통 설정

---

# 이미지 업로드 규격

관리자 화면에도 동일 규격이 표시됩니다.

- 회원 프로필: **1200×1200px 이상 / 1:1**
- 의장 인사말 사진: **1200×1500px 이상 / 4:5**
- 의장 영상 썸네일: **1600×900px 이상 / 16:9**
- 공지뉴스 대표 이미지: **1200×675px 이상 / 16:9**
- 히어로 비주얼: **1600×1200px 이상 / 4:3**
- 의장 서명: **1200×400px 이상 / 3:1 투명 PNG 권장**
- 로고: **1200×300px 이상 또는 SVG**

웹에서 보이는 크기가 아니라 **업로드 원본 최소 규격**입니다.

---

# 권한 구조

## 최고 관리자 (admin)
사이트 전체 수정, 모든 회원 수정, Top10, 메인, 공지, 설정, 계정 권한/정지 관리

## 운영 관리자 (editor)
관리자 페이지 접근, 콘텐츠/회원/Top10/공지/설정 관리. 단, 다른 계정의 역할 변경은 불가

## 일반 회원 (member)
`/account`에서 본인의 프로필 이미지, 기본정보, 해시태그, 소개, 경력만 수정

일반 회원이 Top10 순위나 다른 회원 정보 등을 수정하는 API는 제공하지 않습니다.

---

# 데이터 흐름

회원가입 → Supabase Auth → `app_users` 자동생성 → 이메일이 기존 `members.public_email`과 같으면 자동 연결 → 본인 프로필 수정 → 동일 프로필 원본이 메인/Top10/상세에 사용

관리자 수정 → 서버 권한 검사 → DB/Storage 저장 → 공개 API → 메인페이지 반영

---

# 보안 메모

- 관리자 라우트 진입 시 서버에서 역할 확인
- 관리자 API 호출 시 다시 역할 확인
- 회원 본인 수정 API는 로그인 사용자 `user_id`에 연결된 자기 member row만 수정
- service-role key는 서버 API에서만 사용
- DB 테이블은 RLS 활성화
- Storage 쓰기는 서버 업로드 API를 통해서만 수행
- 주요 관리자/회원 수정은 `audit_logs`에 기록


## v5.2 아이디 로그인 전환
기존 DB를 사용 중이면 `supabase/migrations/20260816_username_login.sql`을 Supabase SQL Editor에서 1회 실행하세요.
기존 이메일 계정은 이메일 앞부분을 기준으로 기본 아이디가 자동 부여됩니다. `motherday79@gmail.com`은 `motherday79`가 됩니다.
신규 회원가입은 아이디/비밀번호/이름/직책/이메일을 받고, 실제 로그인 화면에서는 아이디+비밀번호만 사용합니다.
