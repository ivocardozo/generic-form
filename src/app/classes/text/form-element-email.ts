import { FormElement } from '../text/form-element';

export class FormElementEmail extends FormElement {
    label: string;
    content: string;
    regex: string;
    required: boolean;
  constructor (key: string, name: string, label = '') {
    super(key, name);
    this.label = label;
    this.content = '';
    this.regex = '^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$';
    this.required = true;
  }
}
