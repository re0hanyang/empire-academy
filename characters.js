const characters = [
  {
    "name": "서아린",
    "country": "한국",
    "grade": "3학년",
    "rank": "루비",
    "type": "heroine",
    "image": "assets/portraits/서아린.svg"
  },
  {
    "name": "윤세아",
    "country": "한국",
    "grade": "2학년",
    "rank": "루비",
    "type": "heroine",
    "image": "assets/portraits/윤세아.svg"
  },
  {
    "name": "강수아",
    "country": "한국",
    "grade": "2학년",
    "rank": "에메랄드",
    "type": "heroine",
    "image": "assets/portraits/강수아.svg"
  },
  {
    "name": "린웨이",
    "country": "중국",
    "grade": "2학년",
    "rank": "루비",
    "type": "heroine",
    "image": "assets/portraits/린웨이.svg"
  },
  {
    "name": "사쿠라기 레이",
    "country": "일본",
    "grade": "3학년",
    "rank": "사파이어",
    "type": "heroine",
    "image": "assets/portraits/사쿠라기 레이.svg"
  },
  {
    "name": "아나스타샤 오를로바",
    "country": "러시아",
    "grade": "2학년",
    "rank": "사파이어",
    "type": "heroine",
    "image": "assets/portraits/아나스타샤 오를로바.svg"
  },
  {
    "name": "스칼렛 밀러",
    "country": "미국",
    "grade": "2학년",
    "rank": "에메랄드",
    "type": "heroine",
    "image": "assets/portraits/스칼렛 밀러.svg"
  },
  {
    "name": "엘로디 드 발루아",
    "country": "프랑스",
    "grade": "3학년",
    "rank": "오닉스",
    "type": "heroine",
    "image": "assets/portraits/엘로디 드 발루아.svg"
  },
  {
    "name": "이도현",
    "country": "한국",
    "grade": "3학년",
    "rank": "루비",
    "type": "main",
    "image": "assets/portraits/이도현.svg"
  },
  {
    "name": "드미트리 오를로프",
    "country": "러시아",
    "grade": "2학년",
    "rank": "루비",
    "type": "main",
    "image": "assets/portraits/드미트리 오를로프.svg"
  },
  {
    "name": "최건우",
    "country": "한국",
    "grade": "2학년",
    "rank": "사파이어",
    "type": "main",
    "image": "assets/portraits/최건우.svg"
  },
  {
    "name": "김태성",
    "country": "한국",
    "grade": "3학년",
    "rank": "루비",
    "type": "npc",
    "image": "assets/portraits/김태성.svg"
  },
  {
    "name": "오지훈",
    "country": "한국",
    "grade": "2학년",
    "rank": "루비",
    "type": "npc",
    "image": "assets/portraits/오지훈.svg"
  },
  {
    "name": "권민재",
    "country": "한국",
    "grade": "1학년",
    "rank": "루비",
    "type": "npc",
    "image": "assets/portraits/권민재.svg"
  },
  {
    "name": "송예린",
    "country": "한국",
    "grade": "3학년",
    "rank": "루비",
    "type": "npc",
    "image": "assets/portraits/송예린.svg"
  },
  {
    "name": "장미소",
    "country": "한국",
    "grade": "2학년",
    "rank": "루비",
    "type": "npc",
    "image": "assets/portraits/장미소.svg"
  },
  {
    "name": "나탈리아 첸",
    "country": "중국",
    "grade": "1학년",
    "rank": "루비",
    "type": "npc",
    "image": "assets/portraits/나탈리아 첸.svg"
  },
  {
    "name": "김현우",
    "country": "한국",
    "grade": "3학년",
    "rank": "사파이어",
    "type": "npc",
    "image": "assets/portraits/김현우.svg"
  },
  {
    "name": "정태윤",
    "country": "한국",
    "grade": "2학년",
    "rank": "사파이어",
    "type": "npc",
    "image": "assets/portraits/정태윤.svg"
  },
  {
    "name": "사토 카이",
    "country": "일본",
    "grade": "1학년",
    "rank": "사파이어",
    "type": "npc",
    "image": "assets/portraits/사토 카이.svg"
  },
  {
    "name": "이채원",
    "country": "한국",
    "grade": "3학년",
    "rank": "사파이어",
    "type": "npc",
    "image": "assets/portraits/이채원.svg"
  },
  {
    "name": "조예원",
    "country": "한국",
    "grade": "2학년",
    "rank": "사파이어",
    "type": "npc",
    "image": "assets/portraits/조예원.svg"
  },
  {
    "name": "문가영",
    "country": "한국",
    "grade": "2학년",
    "rank": "사파이어",
    "type": "npc",
    "image": "assets/portraits/문가영.svg"
  },
  {
    "name": "클라라 슈미트",
    "country": "독일",
    "grade": "1학년",
    "rank": "사파이어",
    "type": "npc",
    "image": "assets/portraits/클라라 슈미트.svg"
  },
  {
    "name": "서준호",
    "country": "한국",
    "grade": "3학년",
    "rank": "에메랄드",
    "type": "npc",
    "image": "assets/portraits/서준호.svg"
  },
  {
    "name": "윤태오",
    "country": "한국",
    "grade": "2학년",
    "rank": "에메랄드",
    "type": "npc",
    "image": "assets/portraits/윤태오.svg"
  },
  {
    "name": "루카스 밀러",
    "country": "미국",
    "grade": "1학년",
    "rank": "에메랄드",
    "type": "npc",
    "image": "assets/portraits/루카스 밀러.svg"
  },
  {
    "name": "김재현",
    "country": "한국",
    "grade": "2학년",
    "rank": "에메랄드",
    "type": "npc",
    "image": "assets/portraits/김재현.svg"
  },
  {
    "name": "박유나",
    "country": "한국",
    "grade": "3학년",
    "rank": "에메랄드",
    "type": "npc",
    "image": "assets/portraits/박유나.svg"
  },
  {
    "name": "정다은",
    "country": "한국",
    "grade": "2학년",
    "rank": "에메랄드",
    "type": "npc",
    "image": "assets/portraits/정다은.svg"
  },
  {
    "name": "윤하영",
    "country": "한국",
    "grade": "1학년",
    "rank": "에메랄드",
    "type": "npc",
    "image": "assets/portraits/윤하영.svg"
  },
  {
    "name": "소피아 로시",
    "country": "이탈리아",
    "grade": "1학년",
    "rank": "에메랄드",
    "type": "npc",
    "image": "assets/portraits/소피아 로시.svg"
  },
  {
    "name": "임재혁",
    "country": "한국",
    "grade": "3학년",
    "rank": "오닉스",
    "type": "npc",
    "image": "assets/portraits/임재혁.svg"
  },
  {
    "name": "에단 박",
    "country": "미국",
    "grade": "2학년",
    "rank": "오닉스",
    "type": "npc",
    "image": "assets/portraits/에단 박.svg"
  },
  {
    "name": "이현준",
    "country": "한국",
    "grade": "1학년",
    "rank": "오닉스",
    "type": "npc",
    "image": "assets/portraits/이현준.svg"
  },
  {
    "name": "김도윤",
    "country": "한국",
    "grade": "2학년",
    "rank": "오닉스",
    "type": "npc",
    "image": "assets/portraits/김도윤.svg"
  },
  {
    "name": "박소희",
    "country": "한국",
    "grade": "3학년",
    "rank": "오닉스",
    "type": "npc",
    "image": "assets/portraits/박소희.svg"
  },
  {
    "name": "유채영",
    "country": "한국",
    "grade": "2학년",
    "rank": "오닉스",
    "type": "npc",
    "image": "assets/portraits/유채영.svg"
  },
  {
    "name": "마리나 페트로바",
    "country": "러시아",
    "grade": "1학년",
    "rank": "오닉스",
    "type": "npc",
    "image": "assets/portraits/마리나 페트로바.svg"
  }
];
