import { Student } from "./student";
import {Teacher} from './teacher'
export class Classroom {
    className:string
    teacher:Teacher
    student:Student []

    constructor(className:string){
        this.className = className;
    }
}
