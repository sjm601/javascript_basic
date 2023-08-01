//여러 학생 목록 관리 객체
function StudentRepository() {
  // this = {};
  this.students = new Array();

  //기능 추가
  this.addStudent = function (student) {
    this.students.push(student);
  }

  this.getStudents = function () {
    return this.students;
  }

  // 학번으로 학생 검색
  this.findBySsn = function(ssn){
    // 구현하세요
    let array = [];
    for (const student of this.students) {
      if (student.ssn === ssn) {
        array.push(student);
      }
    }
    return array;
    
  }

  // 이름으로 학생 검색
  this.findByName = function(name){
    // 구현하세요
    let array = [];
    for (const student of this.students) {
      if (student.name === name) {
        array.push(student);
      }
    }
    return array;
  }

  // 학번으로 학생 삭제
  this.removeBySsn = function(ssn){
    //구현하세요
      for (let i = 0; i < this.students.length; i++) {
        if (this.students[i].ssn === ssn) {
          this.students.splice(i, 1);
          break;
        }
      }
    };
  

  // 평균 범위로 검색
  this.findByRange = function(start, end){
      let result = [];
      for (const student of this.students) {
        let avg = student.getAverage();
        if (avg >= start && avg <= end) {
          result.push(student);
        }
      }
      
      return result;
    }
  

  // return this;
}


// 임시 테스트 (메인 메소드)
let studentRepository = new StudentRepository();
studentRepository.addStudent(new Student(8, '외데고르', 60, 99, 80));
studentRepository.addStudent(new Student(11, '마르치넬리', 30, 65, 100));
studentRepository.addStudent(new Student(7, '부카요 사카', 70, 77, 70));
studentRepository.addStudent(new Student(9, '제주스', 90, 99, 97));
studentRepository.addStudent(new Student(35, '진첸코', 100, 60, 72));
studentRepository.addStudent(new Student(19, '제주스', 60, 35, 74));
let allList = studentRepository.getStudents();
for (const student of allList) {
  console.log(student.toString());
}

// 학번으로 학생검색
let findSsn = studentRepository.findBySsn(35);
for (const student of findSsn) {
  console.log(student.toString());
}
// 이름으로 학생 검색
let findName = studentRepository.findByName('제주스');
for (const student of findName) {
  console.log(student.toString());
}

// 학번으로 학생 삭제 
studentRepository.removeBySsn(8);



let list = studentRepository.getStudents();
for (const student of list) {
  console.log(student.toString());
}

console.dir(studentRepository);


//평균 값 범위로 학생 찾기
let range = studentRepository.findByRange(75, 99);
for (const student of range) {
  console.log(student.toString());
}