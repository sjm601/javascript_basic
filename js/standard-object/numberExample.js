let x = 81.1324567.toFixed(2);
console.log(Number.MAX_VALUE);
console.log(x);

// x = new Number(x);
// console.log(x.toFixed(2));

let y = '350708';
// new 없이 직접 호출 시 형변환 함수로 동작한다...
let result = Number(y); //new 없을 시 문자열을 숫자열로 형변환된다. new 있으면 객체로 생성된다.  
console.log(result);