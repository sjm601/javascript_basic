// DOM 구조
console.dir(document.firstChild);
console.dir(document.firstElementChild);
console.dir(document.firstElementChild.constructor);

// 돔 트리 계층 구조로 검색
// Node의 공통 속성 3개
console.log(document.firstElementChild.nodeType === Node.ELEMENT_NODE);
console.log(document.firstElementChild.nodeName);
console.log(document.firstElementChild.nodeValue);

// body 엘리먼트 접근 
console.log(document.firstElementChild.lastElementChild.nodeName);

// #2. get메소드로 특정 요소 접근
//자바스크립트는 순차적으로 실행되기 때문에 바디 태그 맨 밑에 두어야 실행된다.
let pArray = document.getElementsByTagName('p');
// 리턴 타입은 배열이 아니고 유사 배열이다..
console.log(pArray.constructor);
for (const element of pArray) {
  console.log(element.nodeName);
}
// pArray.array.forEach(element => {
//   console.log(pArray.nodeName);
// });

let pElement = document.getElementById('myP');
console.dir(pElement);

let htmlCollection = document.getElementsByClassName('container');
console.dir(htmlCollection);
console.clear();
// #3. CSS 선택자를 이용한 검색
// console.dir(document.querySelector('p'));
// console.dir(document.querySelectorAll('p'));
let nodeList = document.querySelectorAll('p')
nodeList.forEach(element => {
  console.log(element.nodeName);
});

let pE = document.querySelector('#myP');
console.log(pE.nodeName);

let textNode = pE.firstChild
console.log(textNode.nodeName)  ;
console.log(textNode.nodeValue);
// alert(textNode.nodeValue);

console.log(document.querySelector('.container').firstChild.nodeValue);

console.log(document.querySelector('li:first-child').firstChild.data);
console.log(document.querySelector('li:last-child').firstChild.data);

let list = document.querySelectorAll('li:nth-child(2n+1)');
list.forEach(element => {
  console.log(element.firstChild.nodeValue);
});