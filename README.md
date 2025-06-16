# Netflix 🎬

Netflix 클론 프로젝트입니다. 

## 🛠 기술 스택
- React
- TypeScript
- Styled-components / TailwindCSS
 
 ## 파일 구조
 src/
├── assets/             # 이미지, 폰트, 로고 등 정적 파일
├── components/         # 재사용 가능한 UI 컴포넌트들
│   ├── Navbar/
│   ├── Banner/
│   ├── Row/
│   ├── MovieCard/
│   └── Loader/
├── features/           # 페이지별 기능 단위로 구성
│   ├── auth/           # 로그인, 회원가입
│   │   ├── Login.tsx
│   │   ├── Register.tsx
│   │   └── authSlice.ts (if using redux)
│   ├── home/           # 홈 화면
│   │   └── Home.tsx
│   ├── movie/          # 영화 상세
│   │   ├── MovieDetail.tsx
│   │   └── movieAPI.ts
│   └── search/         # 검색 결과
│       └── Search.tsx
├── hooks/              # 커스텀 훅 (예: useMovies, useAuth 등)
├── pages/              # 라우팅용 최상위 페이지
│   ├── index.tsx       # 홈
│   ├── login.tsx
│   ├── register.tsx
│   ├── movie/[id].tsx  # 영화 상세 동적 라우트
│   └── search.tsx
├── services/           # API 연동 (axios 인스턴스, API 함수 등)
│   ├── api.ts
│   └── movieAPI.ts
├── store/              # 전역 상태 관리 (redux, context 등)
│   ├── index.ts
│   └── slices/
├── styles/             # 전역 스타일 또는 테마 (Tailwind, Emotion 등)
│   └── global.css
├── types/              # 타입 정의 (Movie, User 등)
│   └── movie.d.ts
├── utils/              # 유틸 함수 (날짜 포맷, 파서 등)
│   └── helpers.ts
├── App.tsx
└── main.tsx            # 진입점 (Vite 기준)

## 🚀 실행 방법

```bash
npm install
npm start