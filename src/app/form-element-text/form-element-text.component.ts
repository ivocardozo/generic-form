import { Component, OnInit, Input } from '@angular/core';

import { FormElement } from '../classes/text/form-element';
import { FormElementText } from '../classes/text/form-element-text';

@Component({
  selector: 'app-form-element-text',
  templateUrl: './form-element-text.component.html',
  styleUrls: ['./form-element-text.component.css']
})
export class FormElementTextComponent implements OnInit {
  @Input() formElement: FormElementText;
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
  }


