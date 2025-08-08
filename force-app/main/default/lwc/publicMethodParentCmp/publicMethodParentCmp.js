import { LightningElement } from 'lwc';

export default class PublicMethodParentCmp extends LightningElement {
    inputVar;
    handleInputChange(evt){
        this.inputVar = evt.target.value;
    }

    handleClick(){
      var childCmp =  this.template.querySelector('c-public-method-child-cmp');
     const returnMesg =  childCmp.selectedValues(this.inputVar);
     alert(returnMesg);

    }
}