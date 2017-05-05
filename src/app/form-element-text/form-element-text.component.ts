import { Component, OnInit, Input } from '@angular/core';

import { FormElement } from '../classes/form-element';
import { FormElementText } from '../classes/form-element-text';

@Component({
  selector: 'app-form-element-text',
  templateUrl: './form-element-text.component.html',
  styleUrls: ['./form-element-text.component.css']
})
export class FormElementTextComponent implements OnInit {
  @Input() formElement: FormElementText;

  constructor() { }

  ngOnInit() {

  }
  validator() {
    
  }

}
