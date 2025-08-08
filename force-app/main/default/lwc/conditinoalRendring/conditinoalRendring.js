import { LightningElement , track} from 'lwc';

export default class ConditinoalRendring extends LightningElement {
    displayDetails = false;
    handlerchexbox(evt){
        console.log('Changed Handler was called');
        console.log(evt.target.checked);
        this.displayDetails = evt.target.checked;
    }

   @track status = "AfterNoon"

    chnageHandler(evt){
        this.status = evt.target.value;
    }
   get  isMorning(){
       return  this.status == "Morning"
    }
   get  isAfterNoon(){
       return  this.status == "AfterNoon"

    }
}