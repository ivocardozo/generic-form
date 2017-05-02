export class FormElement {
  type: string;
  key: string;
  label: string;
  constructor (type: string, key: string, label: string) {
    this.type = type;
    this.key = key;
    this.label = label;
  }
}
