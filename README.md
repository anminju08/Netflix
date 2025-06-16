# Netflix 🎬

Netflix 클론 프로젝트입니다. 

## 🛠 기술 스택
- React
- TypeScript
- Styled-components / TailwindCSS
 
 ## 파일 구조
 src/
├── assets/            
├── components/        
│   ├── Navbar/
│   ├── Banner/
│   ├── Row/
│   ├── MovieCard/
│   └── Loader/
├── features/          
│   ├── auth/           
│   │   ├── Login.tsx
│   │   ├── Register.tsx
│   │   └── authSlice.ts (if using redux)
│   ├── home/         
│   │   └── Home.tsx
│   ├── movie/        
│   │   ├── MovieDetail.tsx
│   │   └── movieAPI.ts
│   └── search/       
│       └── Search.tsx
├── hooks/            
├── pages/            
│   ├── index.tsx     
│   ├── login.tsx
│   ├── register.tsx
│   ├── movie/[id].tsx
│   └── search.tsx
├── services/        
│   ├── api.ts
│   └── movieAPI.ts
├── store/           
│   ├── index.ts
│   └── slices/
├── styles/          
│   └── global.css
├── types/          
│   └── movie.d.ts
├── utils/          
│   └── helpers.ts
├── App.tsx
└── main.tsx        

## 🚀 실행 방법

```bash
npm install
npm start
