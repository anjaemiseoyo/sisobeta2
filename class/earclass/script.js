const example2Left = document.getElementById('example2Left');
  const example2Right = document.getElementById('example2Right');
    const exampleMiddle = document.getElementById('example2Middle');

  new Sortable(example2Left, {
    group: 'shared', // set both lists to same group
    animation: 150
  });

  new Sortable(example2Right, {
    group: 'shared',
    animation: 150
  });

  new Sortable(example2Middle, {
    group: 'shared',
    animation: 150
  });
  
  new Sortable(example2Middle1, {
    group: 'shared',
    animation: 150
  });
  new Sortable(example2Middle2, {
    group: 'shared',
    animation: 150
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