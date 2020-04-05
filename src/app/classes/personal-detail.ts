export class PersonalDetail {
    title: string;
    firstName: string
    middleName: string
    lastName: string
    age: number  
 
    constructor(fname,mname,lname){
        this.firstName = fname;
        this.middleName = mname;
        this.lastName = lname
    }
}
