import { Component, OnInit, Input } from '@angular/core';

import { FormElement } from '../classes/form-element';

@Component({
  selector: 'app-form-element',
  templateUrl: './form-element.component.html',
  styleUrls: ['./form-element.component.css']
})
export class FormElementComponent implements OnInit {
title: string;
value: string;
strategy: string;
formElement: FormElement;

  //@Input() formElement: FormElement;
  constructor() { }

  ngOnInit() {
    this.formElement = new FormElement ('text', '', 'element');
    this.title = 'my form';
    this.value = 'my value';
    this.strategy  = 'my strategy';
  }

}
