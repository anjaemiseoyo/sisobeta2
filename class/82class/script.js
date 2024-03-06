// 팝업 열기 버튼
const popupButton = document.getElementById('popup-button');
// 팝업 닫기 버튼
const closeButton = document.querySelector('.close');
// 팝업 요소
const popup = document.getElementById('popup');

// "how to" 버튼 클릭 시 팝업 열기
popupButton.addEventListener('click', () => {
    popup.style.display = 'block';
});

// 팝업 닫기 버튼 클릭 시 팝업 닫기
closeButton.addEventListener('click', () => {
    popup.style.display = 'none';
});



/*스톱워치 관련*/
let timer; // 타이머 변수
let milliseconds = 0;
let seconds = 0;
let minutes = 0;

// 시간을 표시하는 함수
function displayTime() {
    milliseconds++;
    if (milliseconds === 100) {
        milliseconds = 0;
        seconds++;
    }
    if (seconds === 60) {
        seconds = 0;
        minutes++;
    }
    // 시간을 2자리 숫자로 표시
    const displayMilliseconds = String(milliseconds).padStart(2, '0');
    const displaySeconds = String(seconds).padStart(2, '0');
    const displayMinutes = String(minutes).padStart(2, '0');
    document.getElementById('display').innerText = `${displayMinutes}:${displaySeconds}:${displayMilliseconds}`;
}

// 페이지를 열면 스톱워치가 자동으로 시작되도록 설정
timer = setInterval(displayTime, 10);

// 정지 버튼을 클릭했을 때 호출되는 함수
function stop() {
    clearInterval(timer);
    timer = null;
}

// 초기화 버튼을 클릭했을 때 호출되는 함수
// function reset() {
//     clearInterval(timer);
//     timer = null;
//     milliseconds = 0;
//     seconds = 0;
//     minutes = 0;
//     document.getElementById('display').innerText = '00:00:00';
// }



//텍스트 입력창//

    function displayText() {
        // 입력된 텍스트 가져오기
        var userInput = document.getElementById("userInput").value;

        // 가져온 텍스트를 표시하는 div 엘리먼트를 가져옴
        var displayText = document.getElementById("displayText");

        // 텍스트를 표시하는 div 엘리먼트에 입력된 텍스트 추가
        displayText.innerHTML = userInput;
    }

