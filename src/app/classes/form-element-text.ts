import { FormElement } from '../classes/form-element';

export class FormElementText extends FormElement {
    label: string;
    content: string;
    regex: string;
  constructor (key: string, name: string, label = '') {
    super(key, name);
    this.label = label;
    this.content = '';
    this.regex = '^\d+$';
  }
  validator () {
    return '^\d+$';
  }
}
