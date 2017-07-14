import { TreeMentalPage } from './app.po';

describe('tree-mental App', () => {
  let page: TreeMentalPage;

  beforeEach(() => {
    page = new TreeMentalPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
