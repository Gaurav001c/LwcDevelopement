import { LightningElement } from 'lwc';

export default class DataBinding extends LightningElement {

    ChangeHandler(evt){
        console.log('Changed Handler was called');
        console.log(evt.target.value);
        this.GreetingMsg = evt.target.value;
    }

    GreetingMsg = 'Welcome to Salesforce';
}