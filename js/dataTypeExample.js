// 템플릿 스트링
let name = '김기정';
let message = `템플릿 스트링 ${name}`;
console.log(message);

// typeof 연산자
let age = 10;
console.log(typeof age);
console.log(typeof message);

// 특수 숫자 리터럴 (키워드)
console.log(10/0);
console.log('나는 김기정입니다'/10);

// 논리형
let flag = false;
let flag2 = Infinity; //문자열 or 숫자 양수 음수 값을 넣으면 무조건 true 를 출력 단 공백 , 0 은 false
if (flag2) {
  console.log('참입니다...');
}

// 자바 스크립트는 자동형변환이 엄청 많이 발생한다.
console.log(1000 * '10'); //자바 스크립트는 문자열과 숫자열 중 숫자열에 우선순위가 있다. 자바였으면 컴파일 에러날 것들이 자바스크립트에선 가능
console.log('1000' / '10');