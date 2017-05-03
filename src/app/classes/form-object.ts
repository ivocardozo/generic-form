import { FormElement } from './form-element';
export class FormObject {
  title: string;
  formElements: FormElement[];
  submit: string;
  constructor (title: string, submit = 'submit') {
    this.title = title;
    this.submit = submit;
    this.formElements = [];
  }
}
