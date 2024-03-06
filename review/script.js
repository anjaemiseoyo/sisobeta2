// 이미지 엘리먼트를 가져옵니다.
const scalingImage = document.querySelector('.scaling-image');

// 페이지 로드 후 1초 후에 이미지를 5초마다 한 번씩 아래쪽 방향으로 3배 늘리고 다시 원래 크기로 돌아가는 함수를 호출합니다.
setTimeout(function() {
    scaleImage();
    setInterval(scaleImage, 4000); // 6초마다 실행 (5초 동작 후 1초 대기)
}, 1000); // 1초 후에 실행

// 이미지를 아래쪽 방향으로 3배 늘리고 다시 원래 크기로 돌아가는 함수를 정의합니다.
function scaleImage() {
    // 이미지를 아래쪽 방향으로 3배 늘립니다.
    scalingImage.style.transform = 'scaleY(3.5)';
    // 1.5초 후에 다시 원래 크기로 돌아갑니다.
    setTimeout(() => {
        scalingImage.style.transform = 'scaleY(1)';
    }, 1000); // 1.5초 후에 실행
}



/*방명록 기능*/
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('guestbook-form');
    const nameInput = document.getElementById('name');
    const messageInput = document.getElementById('message');
    const guestbookList = document.getElementById('guestbook-list');

    // 저장된 방명록을 불러와서 화면에 표시합니다.
    loadGuestbook();

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = nameInput.value.trim();
        const message = messageInput.value.trim();
        
        if (name !== '' && message !== '') {
            const entry = { name, message };
            addEntry(entry); // 방명록 저장
            displayEntry(entry); // 방명록 화면에 표시
            
            // 입력 필드 초기화
            nameInput.value = '';
            messageInput.value = '';
        } else {
            alert('이름과 메시지를 모두 입력하세요.');
        }
    });

    // 방명록 항목을 저장합니다.
    function addEntry(entry) {
        let entries = getEntries();
        entries.push(entry);
        localStorage.setItem('guestbookEntries', JSON.stringify(entries));
    }

    // 저장된 방명록 항목을 불러옵니다.
    function getEntries() {
        return JSON.parse(localStorage.getItem('guestbookEntries')) || [];
    }

    // 저장된 방명록을 화면에 표시합니다.
    function loadGuestbook() {
        let entries = getEntries();
        entries.forEach(entry => displayEntry(entry));
    }

    // 방명록 항목을 화면에 표시합니다.
    function displayEntry(entry) {
        const li = document.createElement('li');
        li.textContent = `${entry.name}: ${entry.message}`;

        // 기존 항목 앞에 새로운 항목을 추가하여 최신 항목이 가장 위에 오도록 합니다.
        guestbookList.insertBefore(li, guestbookList.firstChild);
    }
});