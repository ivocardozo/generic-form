export class TemplateOptions {
  type: string;
  label: string;
  placeholder: string;
  constructor (type: 'text', placeholder: 'placeholder') {
    this.type = type;
    this.placeholder = placeholder;
  }
  getRegex() {
    return 'all';
  }
}
