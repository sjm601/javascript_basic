// 함수 리터럴 표현식
let myfunction = function (message) {
  console.log(message);
}

function doTask(fn){
  //  콜백함수 (나중에 호출됨)
fn();

}

// 함수 호출
myfunction('함수 리터럴 표현식 입니다....');

doTask(myfunction);