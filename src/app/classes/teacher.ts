import {PersonalDetail} from './personal-detail'
export class Teacher {
    personalDetails:PersonalDetail
    prcID: number
    constructor(){
        this.personalDetails = new PersonalDetail()
        this.prcID = null
    }
}
