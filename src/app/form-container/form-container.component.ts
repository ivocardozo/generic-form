import { Component, OnInit, OnChanges } from '@angular/core';
import { FormElement } from '../classes/text/form-element';
import { FormObject } from '../classes/form-object';
import { FormElementText } from '../classes/text/form-element-text';
import { FormElementEmail } from '../classes/text/form-element-email';
import { FormElementNumber } from '../classes/text/form-element-number';

@Component({
  selector: 'app-form-container',
  templateUrl: './form-container.component.html',
  styleUrls: ['./form-container.component.css']
})
export class FormContainerComponent implements OnInit, OnChanges {
  formObject: FormObject;
  formElemen: FormElement;
  title: string;
  value: string;
  strategy: string;
  isValid: boolean;

  constructor() { }

  ngOnInit() {
    this.isValid = false;
    this.formElemen = new FormElementText('text', 'name', 'Name');
    this.formObject = new FormObject('my Form', 'Next');
    this.formObject.formElements.push(this.formElemen);
    this.formObject.formElements.push(new FormElementText('text', 'lastName', 'Last Name'));
    this.formObject.formElements.push(new FormElementText('text', 'address', 'Address'));
    this.formObject.formElements.push(new FormElementEmail('text', 'email', 'Email'));
    this.formObject.formElements.push(new FormElementNumber('text', 'phoneNumber', 'Phone number'));
    console.log('first object is ', this.formObject);
  }
  ngOnChanges() { }

  readFormJson() { }
  validateFormElements() {
    console.log('validating.........');
      let flags = true;
      for ( let _i = 0; _i < this.formObject.formElements.length; _i++) {
          flags = flags && this.formObject.formElements[_i].isValid;
       //   console.log(flags);
      }
      this.isValid = flags;
    //console.log(this.formObject);
  }

}
