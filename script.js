// 이미지 요소 가져오기
const background = document.querySelector('.background');

// 이미지 초기 위치 설정
let posY = 0;

// 이미지 이동 함수
function moveBackground() {
  // 이미지의 y 위치 변경
  posY -= 1;
  // 이미지 위치 업데이트
  background.style.backgroundPositionY = posY + 'px';
}

// 일정 시간마다 moveBackground 함수 호출하여 이미지 이동
setInterval(moveBackground, 50); // 50ms마다 이미지를 움직이도록 설정
