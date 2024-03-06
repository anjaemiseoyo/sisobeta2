function submitText(button) {
    // 입력된 텍스트 가져오기
    var textInput = button.previousElementSibling;
    var text = textInput.value;
  
    // 텍스트 앞에 '@' 추가
    text = '@' + text;
  
    // 새로운 사각형과 버튼 생성
    var rectangle = document.createElement("div");
    rectangle.className = "rectangle";
    rectangle.innerText = text;
    
    // 무작위 위치 계산 (상단에서 최소한 100px 이상 떨어지도록)
    var randomTop = Math.random() * (window.innerHeight - 300) + 100; // 랜덤한 top 위치
    var randomLeft = Math.random() * (window.innerWidth - 200); // 랜덤한 left 위치
    rectangle.style.top = randomTop + "px";
    rectangle.style.left = randomLeft + "px";
  
    // 사각형을 컨테이너에 추가
    var container = document.getElementById("container");
    container.appendChild(rectangle);
  
    // 텍스트 입력칸 초기화
    textInput.value = "";

    // 로컬 스토리지에 사각형 정보 저장
    var savedRectangles = localStorage.getItem('rectangles');
    var rectangles = savedRectangles ? JSON.parse(savedRectangles) : [];
    rectangles.push({ text: text, left: randomLeft, top: randomTop });
    localStorage.setItem('rectangles', JSON.stringify(rectangles));

    // 사운드 재생
    var audio = new Audio('new.mp3');
    audio.play();
}


// 페이지가 로드될 때 사각형의 위치와 텍스트를 복원
document.addEventListener('DOMContentLoaded', function() {
    var savedRectangles = localStorage.getItem('rectangles');
    if (savedRectangles) {
        var rectangles = JSON.parse(savedRectangles);
        rectangles.forEach(function(rect) {
            var rectangle = createRectangle(rect.text, rect.left, rect.top);
            document.getElementById('container').appendChild(rectangle);
        });
    }
});

function createRectangle(text, left, top) {
    var rectangle = document.createElement("div");
    rectangle.className = "rectangle";
    rectangle.innerText = text;
    rectangle.style.position = "absolute";
    rectangle.style.left = left + "px";
    rectangle.style.top = top + "px";
    return rectangle;
}



// 페이지가 로드될 때 사각형의 위치와 텍스트를 복원
document.addEventListener('DOMContentLoaded', function() {
    var savedRectangles = localStorage.getItem('rectangles');
    if (savedRectangles) {
        var rectangles = JSON.parse(savedRectangles);
        rectangles.forEach(function(rect) {
            var rectangle = createRectangle(rect.text, rect.left, rect.top);
            document.getElementById('container').appendChild(rectangle);
        });
    }
});


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
