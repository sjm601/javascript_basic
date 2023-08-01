// DOM 구조
// 속성 제어하기
let aElement = document.querySelector('a');
let value = aElement.getAttribute('href');
console.log(value);
aElement.setAttribute('href', 'https://www.google.com');

// 노드 생성 및 연결
// let liE= document.createElement('li');
// let txt= document.createTextNode('졸지마!!!');
// liE.appendChild(txt);
// let olE = document.querySelector('ol');
// olE.appendChild(liE);

document.querySelector('ol').innerHTML = '<b>졸지마</b>';
console.log(document.querySelector('ol').innerText);

function show() {
  let div = document.createElement('div');
  div.textContent = '댓글 내용 입니다...';
  document.body.appendChild(div);
}

function show1() {
  let div = '<div>댓글 내용 입니다...</div>';
  let article = document.querySelector('article');
  article.innerHTML=div;  
}

