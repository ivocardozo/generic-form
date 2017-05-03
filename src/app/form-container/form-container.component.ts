import { Component, OnInit, OnChanges } from '@angular/core';
import { FormElement } from '../classes/form-element';
import { FormObject } from '../classes/form-object';

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

  constructor() { }

  ngOnInit() {
    this.formElemen = new FormElement('text', 'name', 'Name');
    this.formObject = new FormObject('my Form', 'Next');
    this.formObject.formElements.push(this.formElemen);
    this.formObject.formElements.push(new FormElement('text', 'lastName', 'Last Name'));
    this.formObject.formElements.push(new FormElement('text', 'address', 'Address'));
    console.log('first object is ', this.formObject);
  }
  ngOnChanges() { }

}
