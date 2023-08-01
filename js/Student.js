//학생 정보 틀
function Student(ssn, name, kor, english, math) {
  // this = {};
  this.ssn = ssn;
  this.name = name;
  this.kor = kor;
  this.english = english;
  this.math = math
 
 this.getSum = function(){
  return this.kor + this.english +this.math;
 }


 this.getAverage = function(){
  return this.getSum()/3;
 }

 this.toString = function(){
  return `${this.ssn}\t ${this.name}\t${this.kor}\t${this.english}\t${this.math}\t${this.getSum()}\t${this.getAverage()}`;
 }

  //return this;

 
}

// let student = new Student(8, '외데고르', 60, 99, 80);
// console.log(student.toString());