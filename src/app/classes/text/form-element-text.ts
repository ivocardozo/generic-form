import { FormElement } from '../text/form-element';

export class FormElementText extends FormElement {
    label: string;
    content: string;
    regex: string;
    required: boolean;
    isValid: boolean;
  constructor (key: string, name: string, label = '') {
    super(key, name, false);
    this.label = label;
    this.content = '';
    this.regex = '.';
    this.required = false;
    this.isValid = false;
  }
}
