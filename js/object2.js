// 생성자 함수를 이용한 객체 틀
function Dog(name, age,kind) {
  // this = {};
  // 속성 추가
  this.name = name;
  this.age = age;
  this.kind = kind;
  // return this; 객체 반환 자동 
  // 기능 (메소드) 추가
  this.cry = function () {
    console.log(`${this.name} 강아지가 웁니다..`);
  }
}

let dog = new Dog('루니', 8, '비숑');
console.log(dog);
dog.cry();
let dog2 = new Dog('꼬미', 8, '길고양이'); //new는 this = {}; return this 를 실행하는 코드이고 new  를 넣지 않으면 안에 코드들만 실행하여 undefined가 뜬다.
console.log(dog2);
dog2.cry();

// 자바 스크립트 표준 객체 (생성자 함수)를 사용
let string = new String('김기정입니다...');
const count = string.length;
console.log(count);

let ssn = '000823-100000'; //묵시적 생성 , 명시적 생성문 
 let ch =ssn.charAt(7);
 switch (ch) {
  case '1': console.log('남자'); break; 
  case '2': console.log('여자');break;
 }

let number = new Number(10);
console.log(number);
let bool = new Boolean(true);
console.log(bool);
let date = new Date();
console.log(date.toLocaleString());


// 자바의 List, Set, Queue, Stack 기능이 들어있는 배열  
let array = new Array();


