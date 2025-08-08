import { LightningElement, track } from 'lwc';

export default class StudentForm extends LightningElement {
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
    s
    /*
    *****************DECELATIVE APPROCH ****************
    *****************@track  StudentArryOFPrent=[
        {StudentName:"Sanjay",Class:
    @track selectedStudentInfo;
    @track newStudent = {
        StudentName: '',
        Class: '',
        DOB: '',
        Father: ''
    };

    handleInputChange(event) {
        const field = event.target.dataset.id; 
        this.newStudent[field] = event.target.value;
    }

    handleClick() {
       
        this.StudentArryOFPrent = [
            ...this.StudentArryOFPrent,
            { ...this.newStudent } 
        ];

        
       
        alert('Student Added');
    }

      titleSelectHandler(event){
                //alert("Title Clicked");
               // alert(JSON.stringify(event.detail));
                const student = event.detail;
                this.selectedStudentInfo = `StudentName : ${student.StudentName} | Class: ${student.Class} | DOB: ${student.DOB} | Father: ${student.Father}`;
                // this.selectedStudentInfo = JSON.stringify(event.detail);
                // this is other way to print 
            
            
            }*/
}
