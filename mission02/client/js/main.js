
/* 

1. 클릭 이벤트 활성화
2. nav 클릭시 배경 색상 변경
3. 이미지 변경
4. 텍스트 변경
5. 함수 분리

*/

const visual = document.querySelector('.visual img');
const nameText = document.querySelector('.nickName');
const nav = document.querySelector('.nav ul');

nav.addEventListener('click', (event) => {
  const li = event.target.closest('li');
    
  if (li) {
    const index = parseInt(li.getAttribute('data-index')) - 1;
    const item = data[index];

    const [colorA, colorB] = item.color; 
        
    setImage(visual, item.name);
    
    setBgColor(colorA, colorB); 
    
    setNameText(nameText, item.name);
        
    const activeItem = nav.querySelector('.is-active');
    if (activeItem) activeItem.classList.remove('is-active');
    li.classList.add('is-active');
  }
});

// 배경 색상 설정 함수
function setBgColor(colorA, colorB) {
  // console.log(`Setting background to: linear-gradient(to bottom, ${colorA}, ${colorB})`); // undefined
  // console.log(`colorA: ${item.colorA}, colorB: ${item.colorB}`); // Uncaught ReferenceError: item is not defined

  document.body.style.background = `linear-gradient(to bottom, ${colorA}, ${colorB})`;
}

// 이미지 설정 함수
function setImage(target, name) {
  target.src = `./assets/${name.toLowerCase()}.jpeg`;
  target.alt = `${name} 포스터`;
}

// 이름 텍스트 설정 함수
function setNameText(target, name) {
  target.textContent = name;
}


// const [colorA, colorB] = item.color; 
// setBgColor(colorA, colorB); 로 변경하면
// console.log(`Setting background to: linear-gradient(to bottom, ${colorA}, ${colorB})`);
// => Setting background to: linear-gradient(to bottom, #1ca9f8, #000054) 


// 색상이 제대로 찍히긴 하는데 변경은 안 되고..............는 성공!





