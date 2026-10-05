// 회차 목록 — 새 회차는 여기 한 줄만 추가하면 홈 목록과 시청 페이지에 자동 반영됩니다.
// 영상: youtube = 쿡킹캠린이 채널 영상 ID
// webtoon: 같은 회차 웹툰 id (webtoon.bargo2023.co.kr/viewer.html?ep=<id>), 없으면 생략
window.EPISODES = [
  {
    id: 'pilot', label: '파일럿', series: '불꽃 속의 여유', title: '불꽃 속의 여유',
    desc: '서울의 바쁜 일상에 지친 세 사람이 우연한 기회에 함께 캠핑을 떠난다. 숯불을 피우고, 고기를 굽고, 별빛 아래 이야기를 나누며 잃어버렸던 것들을 하나씩 되찾아가는 치유의 여정.',
    tags: ['캠핑힐링드라마', '첫불의맛', '관계와회복'],
    youtube: '9FIXDKkK9AM', thumb: 'https://i.ytimg.com/vi/9FIXDKkK9AM/hqdefault.jpg',
    runtime: '22분', date: '2025', webtoon: 'pilot'
  },
  {
    id: '1', label: '1화', series: '인생은 고기서 고기까지', title: '불 피우는 법',
    desc: '웹툰 회사에서 AI에 밀려 번아웃으로 퇴사한 이고기. 동생의 무심한 한마디에 폭발한 그녀는 퇴직금으로 당근마켓 캠핑장비를 풀세팅하고 경남의 한 캠핑장으로 무작정 떠난다. 첫날 밤, 불 하나 제대로 못 피워 웃음이 터지는데 — "근데... 고기는 왜 이리 맛있냐고."',
    tags: ['번아웃퇴사', '당근마켓캠핑', '무작정출발'],
    youtube: 'zf8CBYpB6CU', thumb: 'https://i.ytimg.com/vi/zf8CBYpB6CU/hqdefault.jpg',
    runtime: '20분', date: '2026.07', webtoon: '1'
  },
  {
    id: '2', label: '2화', series: '인생은 고기서 고기까지', title: '성공한 사람도 몰래 운다',
    desc: '투자 100억 스타트업 대표 강민준. 텐트 하나 못 치는 그가 이고기의 불 앞에 앉아, 숫자 뒤에 숨겨 두었던 얼굴을 처음으로 꺼내 놓는다.',
    tags: ['스타트업대표', '숫자뒤의얼굴', '불앞의고백'],
    youtube: '', /* TODO: 유튜브 업로드 후 영상 ID */ thumb: 'assets/thumbs/ep2.jpg',
    runtime: '20분', date: '2026.10', webtoon: '2'
  },
  {
    id: '3', label: '3화', series: '인생은 고기서 고기까지', title: '빛나지 않아도 괜찮을까',
    desc: '가사 한 줄을 쓰지 못하던 싱어송라이터 박해원. 고기 냄새를 따라온 밤, 불 앞에서 처음으로 소리 내어 노래한다.',
    tags: ['싱어송라이터', '모닥불노래', '빛나지않아도'],
    youtube: '', /* TODO: 유튜브 업로드 후 영상 ID */ thumb: 'assets/thumbs/ep3.jpg',
    runtime: '20분', date: '2026.10', webtoon: '3'
  },
];
