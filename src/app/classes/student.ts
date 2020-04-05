import { PersonalDetail } from './personal-detail';
export class Student {
    personalDetails: PersonalDetail;
    studentId: number;
    constructor(firstname:string, middlename:string, lastname: string){
        this.personalDetails = new PersonalDetail(firstname,middlename,lastname);
        this.studentId = null;
    }
}
