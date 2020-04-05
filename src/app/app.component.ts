import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import {Classroom} from './classes/classroom'
import { Student } from './classes/student';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  classrooms : Classroom[];
  selectedClass: Classroom;
  selectedClassIndex: number;
  selectedStudent: Student
  toggles : {
    editClass:boolean
    editTeacher:boolean
    editStudents:boolean
  }

  title = 'parent-child';
  

  ngOnInit(){
    if(this.isDataExisting()){
      this.classrooms = JSON.parse(localStorage.getItem("classdata"))
    }else{
      this.classrooms = [];
    }
    this.toggles = {      
      editClass:false,
      editTeacher:false,
      editStudents:false
    };
  }
  addNewClassroom(classroomName:string){
    let newclass = new Classroom(classroomName);
    console.log(newclass)
    this.classrooms.push(newclass);    
    this.saveAllData();
  }

  addNewStudent(firstname:string,middlename:string,lastname:string, id:number){
    let newStudent = new Student(firstname,middlename,lastname)    
    newStudent.studentId = id;
    this.selectedClass.students.push(newStudent);    
    this.saveAllData();
  }

  removeClassroom(index:number){
    this.classrooms.splice(index,1);
    this.saveAllData()
  }

  viewClassroom(classroom:Classroom, index:number){
    this.selectedClass = classroom;
    this.selectedClassIndex = index;
  }

  editStudent(student:Student, index:number){
    this.selectedStudent = student;
    
  }


  saveAllData(){
    localStorage.setItem("classdata",JSON.stringify(this.classrooms));
  }

  isDataExisting(){
    if(localStorage.getItem("classdata"))
      return true;
    return false;
  }

  toggle(property:string){
    console.log(property)
    console.log(this.toggles[property])
    this.toggles[property] = !this.toggles[property] 
  }
  
  removeStudent(index:number){
    this.selectedClass.students.splice(index,1)
  }

}
