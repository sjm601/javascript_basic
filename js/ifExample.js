let score = prompt('점수를 입력하세요', 0 );
console.log(typeof score);
// let score = 88;
//타입이 자유롭게 형변환이 된다. 
if (score >= 60) {
  console.log('합격');
}else{
  console.log('불합격');
}

if (score >= 90) {
  console.log('수');
}else if (score >= 80) {
  console.log('우');
}else if (score >= 70) {
  console.log('미');
}else if (score >= 60) {
  console.log('양');
}else if (score >= 50) {
  console.log('가');
}