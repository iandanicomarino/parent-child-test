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
      this.classrooms = JSON.parse(localStorage.getItem("classdata"))
    }else{
      this.classrooms = [];
    }  
  }

 

  addNewClassroom(classroomName:string){
    let newclass = new Classroom(classroomName);
    console.log(newclass)
    this.classrooms.push(newclass);    
    this.saveAllData();
  }

  saveAllData(){
    localStorage.setItem("classdata",JSON.stringify(this.classrooms));
  }

  isDataExisting(){
    if(localStorage.getItem("classdata"))
      return true;
    return false;
  }

  
}
