import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { FormElement } from '../classes/text/form-element';
import { FormElementText } from '../classes/text/form-element-text';

@Component({
  selector: 'app-form-element-text',
  templateUrl: './form-element-text.component.html',
  styleUrls: ['./form-element-text.component.css']
})
export class FormElementTextComponent implements OnInit {
  formElementCorrect = false;
  formElementHasChanged = false;
  @Input() formElement: FormElementText;
  @Output() formValid = new EventEmitter<boolean>();

  regex: RegExp;

  constructor() { }

  ngOnInit() {
    this.regex = new RegExp(this.formElement.regex);
  }
  validator(): boolean {
    return this.regex.test(this.formElement.content);
  }
  isRequired(): boolean {
    if (this.formElement.required && this.formElement.content === '') {
      return false;
    }
    return true;
  }
  checkError(): void {
      if ( this.validator() && this.isRequired() ) {
        console.log('validator is', this.validator(), ' required is ', this.isRequired());
        this.formElement.isValid = true;
        this.formValid.emit(true);
      } else {
      console.log('validator isdsfsfsdfsdf', this.validator(), ' required is ', this.isRequired());
      this.formElement.isValid = false;
      this.formValid.emit(false);
      }
    }
  }


