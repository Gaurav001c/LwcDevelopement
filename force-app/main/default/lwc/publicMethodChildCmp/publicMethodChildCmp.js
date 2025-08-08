import { LightningElement, track,api } from 'lwc';

export default class PublicMethodChildCmp extends LightningElement {
   @track value = ['red'];

     options =[
            { label: 'red', value: 'red' },
            { label: 'blue', value: 'blue' },
            { label: 'green', value: 'green' },
            { label: 'yellow', value: 'yellow' },
        ];
    
   @api selectedValues(checkboxValue){
        alert(checkboxValue);
       //this.value = checkboxValue;
       const selectVar =  this.options.find(function(option){
            return checkboxValue === option.value;
        });

        if(selectVar){
            this.value = checkboxValue;
            return 'Success';
        }else{
            return 'No Record found'; 
        }
    }
}