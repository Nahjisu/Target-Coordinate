
// 수평
const horizontality = document.querySelector('.horizontality');
// 수직
const verticality = document.querySelector('.verticality');
// 좌표
const tag = document.querySelector('.tag');
// 이미지
const target = document.querySelector('.target');

// 함수 실행
document.addEventListener('mousemove', (e) => {
    
    // 좌표 X 좌표 Y
    let x = e.clientX;
    let y = e.clientY;
    
    // 수평
    horizontality.style.top = `${y}px`;

    // 수직
    verticality.style.left = `${x}px`;

    // 이미지
    target.style.top = `${y}px`;
    target.style.left = `${x}px`;
    
    // 좌표
    tag.style.top = `${y}px`;
    tag.style.left = `${x}px`;
    tag.innerHTML = `${x}, ${y}`;

});