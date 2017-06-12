import { Craigslist2Page } from './app.po';

describe('craigslist2 App', function() {
  let page: Craigslist2Page;

  beforeEach(() => {
    page = new Craigslist2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
