import { Student } from "./Student.js";
import { HighSchoolStudent } from "./HighSchoolStudent.js";

let  student = new Student(10, '박상훈', 90, 100, 60);
console.log(student.toString());


let highStudent = new HighSchoolStudent(10, '김기정', 90, 80, 50, 30);
console.log(highStudent.toString());