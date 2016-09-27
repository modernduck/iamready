import { IAmReadyPage } from './app.po';

describe('i-am-ready App', function() {
  let page: IAmReadyPage;

  beforeEach(() => {
    page = new IAmReadyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
