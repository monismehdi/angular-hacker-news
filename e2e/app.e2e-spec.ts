import { Angular2HNPage } from './app.po';

describe('angular2-hn App', function() {
  let page: Angular2HNPage;

  beforeEach(() => {
    page = new Angular2HNPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
