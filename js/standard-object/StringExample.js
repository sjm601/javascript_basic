let ssn = prompt('주민번호를 입력하세요');
// 000823-3011111
if (ssn) {
  const c = ssn.charAt(ssn.indexOf('-') + 1);
  switch (c) {
    case '3':
    case '1': alert('남자'); break;
    case '2':
    case '4': alert('여자'); break;
    default: alert('우리나라 사람이 아닙니다.'); break;

  }
} else {
  alert('주민번호를 입력하세요..');

}