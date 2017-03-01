import { NpedWebPage } from './app.po';

describe('nped-web App', () => {
  let page: NpedWebPage;

  beforeEach(() => {
    page = new NpedWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
