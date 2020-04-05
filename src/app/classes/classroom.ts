import { Student } from "./student";
import {Teacher} from './teacher'
export class Classroom {
    className:string
    teacher:Teacher
    students:Student []

    constructor(className:string){
        this.className = className;
        this.teacher = new Teacher();
        this.students = [];
    }
}
