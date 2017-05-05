import { FormElement } from '../classes/form-element';

export class FormElementText extends FormElement {
    label: string;
    content: string;
    regex: string;
    required: boolean;
  constructor (key: string, name: string, label = '') {
    super(key, name);
    this.label = label;
    this.content = '';
    this.regex = '^[0-9]+$';
    this.required = true;
  }
  validator () {
    return '^\d+$';
  }
}
