import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display titulo de la aplicacion', () => {
    page.navigateTo('/');
    expect(page.getText('app-root h1')).toEqual('Cartera');
    browser.sleep(2000);
  });

  it('should navegate compania', () => {
    page.navigateTo('/compania');
    expect(page.getText('app-root h1')).toEqual('Cartera');
    browser.sleep(2000);
  });


  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
