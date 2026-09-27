# EMPIRE ACADEMY 홈페이지

정적 HTML/CSS/JS로 제작된 제국학원 세계관·학생부 홈페이지입니다.

## 실행
1. ZIP 압축을 풉니다.
2. `index.html`을 Chrome/Edge에서 엽니다.
3. 인터넷 연결이 있으면 Google Fonts가 적용되고, 인터넷이 없어도 기본 글꼴로 사이트가 작동합니다.

## 구성
- `index.html` : 홈페이지 구조
- `style.css` : 전체 디자인
- `script.js` : 학생부 필터/검색/모바일 메뉴
- `characters.js` : 39명 캐릭터 데이터
- `assets/hero-campus.svg` : 메인 화면용 학교 이미지
- `assets/portraits/` : 캐릭터별 이미지 영역

## 캐릭터 이미지 교체
`assets/portraits/` 안의 SVG를 같은 파일명으로 교체하면 됩니다.
권장 비율: 세로 3:4.

현재 제공된 캐릭터 이미지는 홈페이지에 바로 표시되도록 만든 학생부용 플레이스홀더입니다.
실제 캐릭터 일러스트를 준비하면 해당 파일만 교체할 수 있습니다.

## 수정 포인트
- 학생 추가/삭제: `characters.js`
- 색상/레이아웃: `style.css`
- 세계관 문구/시설: `index.html`
