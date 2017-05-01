import { GenericFormPage } from './app.po';

describe('generic-form App', () => {
  let page: GenericFormPage;

  beforeEach(() => {
    page = new GenericFormPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
