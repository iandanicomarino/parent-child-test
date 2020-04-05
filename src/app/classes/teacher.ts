import {PersonalDetail} from './personal-detail'
export class Teacher {
    personalDetails:PersonalDetail
    prcID: number
    constructor(){
        this.personalDetails = new PersonalDetail(null,null,null)
        this.prcID = null
    }
}
