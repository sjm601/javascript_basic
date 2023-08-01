//  강아지 객체 즉시 생성 (틀 없이)
// 객체 리터럴 표현식
let dog = {
  name: '앙리',
  age: 45,
  kind: '포메라니안',
  eat: function () {
    console.log(`${this.name}가 무척 잘 먹습니다...`);
  },
toString : function () {
  return '헐';
}
}

// 객체의 속성 검색
console.log(dog.name);
console.log(dog['name']);
console.log(dog.age);
console.log(dog.kind);
dog.eat();

// 속성 변경
dog.name = '로니';
console.log(dog.name);
dog.eat();
// 속성 제거 
delete dog.age;
console.log(dog.age);

// 기능 추가
dog.walk = function () {
  console.log(`${this.name}가 잘 걷습니다~~`);
}

dog.walk();

// In 연산자 
if ('age' in dog) {
  console.log(dog.age);
} else {
  console.log('age 속성이 존재하지 않습니다...');
};

//for ~ in 문
for (const key in dog) {
  console.log(key, dog[key]);
}

// for ~ of 문
let array = [5,3,9,1];
for (const value of array) {
  console.log(value);
}

console.clear();
console.log(dog);
console.dir(dog);


