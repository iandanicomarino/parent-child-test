import { Component, OnInit } from '@angular/core';
import {Classroom} from './classes/classroom'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  classrooms : Classroom[]
   title = 'parent-child';

  ngOnInit(){
    if(this.isDataExisting()){
      //getdatahere
    }else{
      this.classrooms = [];
      this.addNewClassroom("coolclass")
    }  
  }

  addNewClassroom(classroomName:string){
    let newclass = new Classroom(classroomName);
    console.log(newclass)
    this.classrooms.push(newclass);
  }

  isDataExisting(){
    if(localStorage.getItem("classdata"))
      return true;
    return false;
  }

  
}
