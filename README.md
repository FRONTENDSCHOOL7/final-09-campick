## **🏕 CAMPICK**

---

배포 URL :

## 테스트 계정

- ID :
- PW :

## 0. 목차

---

## 1. 프로젝트 소개

---

- 프로젝트 기간 : 2023.10.12 ~ 2023.11.7
-

## 2. 팀원 소개

---

박재웅 9조 프로젝트팀을 소개합니다!

안녕하세요. 저희는 4명의 Front-end 개발자로 구성된 박재웅 9조 프로젝트팀입니다.

<div align="center">

|                                                                                          |                                                                                          |                                                                                          |                                                                                       |
| :--------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------: |
| <img src="https://avatars.githubusercontent.com/u/127311862?v=4" width="120px;" alt=""/> | <img src="https://avatars.githubusercontent.com/u/122030243?v=4" width="120px;" alt=""/> | <img src="https://avatars.githubusercontent.com/u/138555977?v=4" width="120px;" alt=""/> | <img src="https://avatars.githubusercontent.com/u/89963228?v=4" width="120" alt="" /> |
|                          [김건희](https://github.com/gunhee98)                           |                         [박재웅](https://github.com/donguramee)                          |                         [장소진](https://github.com/sojinkorea)                          |                        [조효은](https://github.com/chohe3212)                         |

</div>

## 3. 기술 및 개발 환경
 <div align="center">

| FrontEnd | BackEnd | Design | 협업방식 | 컨벤션 |
| :----: | :----: | :----: | :----: | :----: |
| <img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=black"> <img src="https://img.shields.io/badge/styledcomponents-CC6699?style=flat-square&logo=styledcomponents&logoColor=white">   <img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=flat-square&logo=JavaScript&logoColor=black"> <img src="https://img.shields.io/badge/html5-E34F26?style=flat-square&logo=html5&logoColor=white"> | 제공된 API | <img src="https://img.shields.io/badge/figma-FBCEB1?style=flat-square&logo=figma&logoColor=white"> | <img src="https://img.shields.io/badge/Git-F05032?style=flat-square&logo=Git&logoColor=white"> <img src="https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=GitHub&logoColor=white"> <img src="https://img.shields.io/badge/Notion-000000.svg?style=flat-square&logo=Notion&logoColor=white"> <img src="https://img.shields.io/badge/Discord-5865F2?style=flat-square&logo=Discord&logoColor=white"> | <img src="https://img.shields.io/badge/Prettier-F7B93E.svg?style=flat-square&logo=Prettier&logoColor=black">  |

</div>

## 4. 프로젝트 일정

| 주차                       |                                                                                                                                                              |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **1주차**<br>(10/13 ~ 10/19)   | - 주제 선정, 기술 스택 및 협업툴 결정 (`Notion`, `Discord`, `Figma`, `Figjam`)<br>- GitProject, GitIssue 템플릿 적용, Figma 디자인 작업 및 기획, 컨벤션 설정 |
| **2주차**<br>(10/20 ~ 10/24 )  | - 초기 개발환경 세팅<br>- 공통 컴포넌트 분석 및 작업,API분석                                                                  |
| **3주차**<br>(10/25 ~ 11/1) | - 페이지별 필수 기능 구현                                                                                                                    |
| **4주차**<br>(11/1 ~ 11/8) | - 필수 기능 구현 1차 완료 및 오류 수정<br>- 추가기능 구현 (좋아요, 이미지 여러장 업로드,댓글 등) <br>- 배포<br>- 프로젝트를 시연해보며 보이는 에러 수정<br>- README 작성                  |


## 5. 폴더 구조

---

```
🏠 campic
├─ .github
│  ├─ ISSUE_TEMPLATE  ─────────────── 📜 이슈 템플릿
│  └─ PULL_REQUEST_TEMPLATE.md ────── 📜 PR 템플릿
│─ .gitignore
│─ .prettierrc   ──────────────────── ⚙️ prettier 설정 파일
├─ public
│  ├─ favicon.ico
│  └─ index.html
└─ 📂 src
  ├─ 📂 api     ───────────────────── 📲 
  ├─ 📂 assets  ───────────────────── 🧸 
  ├─ 📂 components
  │  ├─ 📂 campsiteFeed ───────────── 📦 
  │  ├─ 📂 comment ────────────────── 📦 
  │  ├─ 📂 community  ─────────────── 📦 
  │  ├─ 📂 follow   ───────────────── 📦 
  │  ├─ 📂 form   ─────────────────── 📦 
  │  ├─ 📂 header   ───────────────── 📦 
  │  ├─ 📂 kakaomap   ─────────────── 📦 
  │  ├─ 📂 login   ────────────────── 📦 
  │  ├─ 📂 modal   ────────────────── 📦 
  │  ├─ 📂 navbar   ───────────────── 📦 
  │  ├─ 📂 post   ─────────────────── 📦 
  │  ├─ 📂 slider   ───────────────── 📦 
  │  ├─ 📂 toast   ────────────────── 📦 
  │  └─ 📂 userProfile   ──────────── 📦 
  ├─ 📂 hooks ─────────────────────── ♻️ 커스텀 훅 폴더
  │  └─ useImagesUpload.js
  ├─ App.js
  ├─ index.js
  ├─ 📂 pages   ───────────────────── 📲 라우팅이 적용된 주로 API를 요청하는 페이지 폴더
  ├─ 📂 styles   ──────────────────── 💄 전역으로 적용할 css 파일들이 포함된 폴더
  │  ├─ Wrapper.jsx
  │  └─ GlobalStyle.js  
  └─ 📂 routes    ─────────────────── 🧸
    
```

## 6. 구현 기능

---

- 🙂 Account
  - 로그인/로그아웃
  - 로그인/ 회원가입/프로필 유효성 검사
  - 회원가입 진행
  - 프로필 정보 설정
- ✍️ Post
  - 게시글 등록/삭제/신고
  - 캠핑 위치 정보 등록
  - 이미지 최대 3장 업로드
  - 유저 게시글 목록
  - 팔로잉 게시글 목록
- 💬 Coment
  - 댓글 등록
  - 댓글 삭제
- 👤 Profile
  - 개인 프로필
  - 프로필 수정
  - 팔로우/언팔로우
  - 팔로우/팔로잉 리스트
  - 로그아웃
- 🔎 Search
  - 유저 검색
- ❤️ Like
  - 게시물 좋아요 및 취소
- 🏕️ Campsite
  - 캠핑장 등록/예약
  - 캠핑장 리스트
  - 캠핑장 상세
  - 캠핑장 문의하기
  - 캠핑장 예약하기
- ## Calendar
  -

## 7. 기능 UI

---

순서도 & 와이어 프레임

## 8. 주요코드

---

## 9. 후기

---

- 김건희
- 박재웅
- 장소진
- 조효은
