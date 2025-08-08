import { LightningElement,track } from 'lwc';

export default class ParentCmpSlots extends LightningElement {
     @track StudentArryOFPrent = [
            { StudentName: "Sanjay", Class: "1st", DOB: "12/2/1999", Father: "Bansal" },
            { StudentName: "Rajesh", Class: "2nd", DOB: "12/2/1999", Father: "Kumar" },
            { StudentName: "Mahi", Class: "3rd", DOB: "12/2/1999", Father: "Kakade" }
        ];
         @track selectedStudentInfo;
    
    
         constructor() {
            super();   
            this.template.addEventListener('titleclick', this.handleCustomEvent.bind(this));
        }
    
    
        handleCustomEvent(event) {
            alert('mycustomevent');
            this.selectedStudentInfo = `StudentName : ${event.detail.StudentName} | Class: ${event.detail.Class} | DOB: ${event.detail.DOB} | Father: ${event.detail.Father}`;
            console.log('mycustomevent', event.detail);
        }
}