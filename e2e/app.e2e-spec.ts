import { CatClicker2Page } from './app.po';

describe('cat-clicker2 App', () => {
  let page: CatClicker2Page;

  beforeEach(() => {
    page = new CatClicker2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
