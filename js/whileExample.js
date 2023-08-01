let i = 1;
let result = 0;
while (i < 100) {
  result += i;
  i++
}
console.log(result);

// for문
result = 0;
for (let i = 1; i < 100; i++) {
  result += i;
}
console.log(result);

// 동격 구구단 화면 출력
document.write('<h2>for 문을 이요한 구구단</h2>');
document.write('<table border=1>');
for (let i = 2; i <= 9; i++) {
  document.write('<tr>');
  for (let j = 1; j <= 9; j++) {
    document.write(`<td>${i} * ${j} = ${i * j}</td>`);
  }
  document.write('</tr>');
}
document.write('</table>');

