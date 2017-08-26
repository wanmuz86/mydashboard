import { MydashboardPage } from './app.po';

describe('mydashboard App', () => {
  let page: MydashboardPage;

  beforeEach(() => {
    page = new MydashboardPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
