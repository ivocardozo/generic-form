export class FormElement {
  key: string;
  name: string;
  isValid: boolean;
  constructor (key: string, name: string, isValid =true) {
    this.key = key;
    this.name = name;
    this.isValid = isValid;
  }
}
