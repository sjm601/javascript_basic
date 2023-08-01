  let user = {
    name : '김기정' 
  };

  // 기본 데이터 타입
  let str = 'xxx';
  // 동적 객체 변환
  let str1 = 'xxx'.charAt(0);

  console.log(user.toString());
  console.log(Object.prototype.isPrototypeOf(user));

  // Object의 static 메소드 활용
  // 깊은 복사
  let user2 ={};
  Object.assign(user2, user);
  console.dir(user2);

let prototypee=  Object.getPrototypeOf(user);
console.dir(prototypee);
