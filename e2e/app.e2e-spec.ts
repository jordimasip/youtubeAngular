import { YoutubeappPage } from './app.po';

describe('youtubeapp App', () => {
  let page: YoutubeappPage;

  beforeEach(() => {
    page = new YoutubeappPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
