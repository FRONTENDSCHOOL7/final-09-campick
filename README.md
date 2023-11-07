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
| <img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=black"> <img src="https://img.shields.io/badge/styledcomponents-CC6699?style=flat-square&logo=styledcomponents&logoColor=white">   <img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=flat-square&logo=JavaScript&logoColor=black"> <img src="https://img.shields.io/badge/html5-E34F26?style=flat-square&logo=html5&logoColor=white"> | 제공된 API | <img src="https://img.shields.io/badge/figma-FBCEB1?style=flat-square&logo=figma&logoColor=white"> | <img src="https://img.shields.io/badge/Git-F05032?style=flat-square&logo=Git&logoColor=white"> <img src="https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=GitHub&logoColor=white"> <img src="https://img.shields.io/badge/Notion-000000.svg?style=flat-square&logo=Notion&logoColor=white"> <img src="https://img.shields.io/badge/Discord-5865F2?style=flat-square&logo=Discord&logoColor=white"> | <img src="https://img.shields.io/badge/Prettier-F7B93E.svg?style=flat-square&logo=Prettier&logoColor=black"> <img src="https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=GitHub&logoColor=white"> | 

</div>

## 4. 프로젝트 일정

| 주차                       |                                                                                                                                                              |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **1주차**<br>(10/13 ~ 10/19)   | - 주제 선정, 기술 스택 및 협업툴 결정 (`Notion`, `Discord`, `Figma`, `Figjam`)<br>- GitProject, GitIssue 템플릿 적용, Figma 디자인 작업 및 기획, 컨벤션 설정 |
| **2주차**<br>(10/20 ~ 10/24 )  | - 초기 개발환경 세팅<br>- 공통 컴포넌트 분석 및 작업,API분석                                                                  |
| **3주차**<br>(10/25 ~ 11/1) | - 페이지별 필수 기능 구현                                                                                                                    |
| **4주차**<br>(11/1 ~ 11/8) | - 필수 기능 구현 1차 완료 및 디자인 수정<br>- 추가기능 구현 (좋아요, 이미지 여러장 업로드,댓글 등) <br>- 배포<br>- 프로젝트를 시연해보며 보이는 에러 수정<br>- README 작성                  |


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
<img src="https://file.notion.so/f/f/94e4a305-f804-42b2-b151-9faf892ffa79/15da53fb-176d-417c-8041-363c035922c8/KakaoTalk_20231106_162228762.png?id=02994811-b37d-493a-b269-a6458cddad9f&table=block&spaceId=94e4a305-f804-42b2-b151-9faf892ffa79&expirationTimestamp=1699421810058&signature=Ey693zUuuDkVic2Jcm3ke1U2ZmRvi1kDlkSdX6ddhXk&downloadName=KakaoTalk_20231106_162228762.png"/>

### 1) 홈
| 시작 화면 | 회원가입 페이지 | 프로필 설정 페이지 |
|-------|-------|-------|
| ![1.시작 화면](https://github.com/FRONTENDSCHOOL7/final-09-campick/assets/138555977/e9c963b5-4199-45c1-b372-dba50f5c8100) | ![2.회원가입 페이지](https://github.com/FRONTENDSCHOOL7/final-09-campick/assets/138555977/91ff3a81-31b9-4cda-8736-36d2bfc4c7a6) | ![3.회원가입 프로필 설정 페이지](https://github.com/FRONTENDSCHOOL7/final-09-campick/assets/138555977/7c0b478d-e360-4281-a531-1ccbad995675) |

| 로그인 페이지 | 홈 화면 | 검색 페이지 |
|-------|-------|-------|
| ![4  로그인 페이지](https://github.com/FRONTENDSCHOOL7/final-09-campick/assets/138555977/6ba2bb7c-1c30-47c6-bd83-80d9f6aec49e) |  | ![6.검색페이지](https://github.com/FRONTENDSCHOOL7/final-09-campick/assets/138555977/cfc14ccf-6e4a-40a8-8123-356a503173b6) |

### 2) 예약
| 예약 페이지 | 예약 상세보기 페이지 | 예약 채팅 페이지 |
|-------|-------|-------|
| ![7.예약 페이지](https://github.com/FRONTENDSCHOOL7/final-09-campick/assets/138555977/355510f5-b52f-4ca0-a9f3-67b5d20505b5) | ![8.예약 상세보기 페이지](https://github.com/FRONTENDSCHOOL7/final-09-campick/assets/138555977/6dac7421-fa45-4930-bd69-9499f14eef29) | ![9.예약 채팅 페이지](https://github.com/FRONTENDSCHOOL7/final-09-campick/assets/138555977/df36c172-12e0-4697-8eb9-8e83f4fddc58) |

### 3) 커뮤니티
| 커뮤니티 페이지 | 댓글 및 좋아요 기능 | 게시물 작성 페이지 |
|-------|-------|-------|
| 내용1 | ![11.커뮤니티 댓글 및 좋아요 페이지](https://github.com/FRONTENDSCHOOL7/final-09-campick/assets/138555977/cf7ae2f2-ac90-4667-9dba-65144927be6d) | 내용3 |

### 4) 프로필
| 프로필 페이지 | 프로필 수정 페이지 | 게시물 삭제 기능 |
|-------|-------|-------|
| ![13.내 프로필 및 팔로잉 팔로워 페이지](https://github.com/FRONTENDSCHOOL7/final-09-campick/assets/138555977/16c02aa7-c292-4ea3-aec0-323446f0cffa) | ![14.내 프로필 수정 페이지](https://github.com/FRONTENDSCHOOL7/final-09-campick/assets/138555977/cf8c1110-830f-4732-a65a-fdc57e34b01c) | 내용3 |

| 캠핑장 등록 페이지 | 로그아웃 기능 | 404 페이지 |
|-------|-------|-------|
| ![16.내 프로필 캠핑장 등록 페이지](https://github.com/FRONTENDSCHOOL7/final-09-campick/assets/138555977/e2d76244-cd3c-40cb-89e7-ee3d6b0481a2) | ![17.로그아웃 페이지](https://github.com/FRONTENDSCHOOL7/final-09-campick/assets/138555977/2c21270e-d158-4f74-9feb-fbd36fe70ad6) | ![18.404 페이지](https://github.com/FRONTENDSCHOOL7/final-09-campick/assets/138555977/80518390-856b-402b-8efc-af51c7fd31d3) |
## 8. 주요코드

---

## 9. 후기

---

- 김건희
- 박재웅
- 장소진
- 조효은
