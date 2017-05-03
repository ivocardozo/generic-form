import { Component, OnInit, Input } from '@angular/core';

import { FormElement } from '../classes/form-element';

@Component({
  selector: 'app-form-element-text',
  templateUrl: './form-element-text.component.html',
  styleUrls: ['./form-element-text.component.css']
})
export class FormElementTextComponent implements OnInit {
  @Input() formElement: FormElement;

  constructor() { }

  ngOnInit() {

  }

}
