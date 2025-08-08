import { LightningElement ,api} from 'lwc';

export default class ChildCmpSlots extends LightningElement {
      @api studentInfoParent;
        //StudentInfoParent = [ {StudentName:"Sanjay",Class:"1st",DOB:"12/2/1999",Father:"Bansal"}]
    
        titleclickHandler(){
           // alert("Title Clicked");
            const selectEvent = new CustomEvent('titleclick', {
                detail: this.studentInfoParent,
                bubbles:true
            });
           this.dispatchEvent(selectEvent);
        
        }
}