import { AppPage } from './app.po';
import { browser, by, element, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display titulo de la aplicacion', () => {
    page.navigateTo('/');
    expect(element(by.css('app-root app-default app-sidebar h2')).getText()).toEqual('S. Integrales');
    browser.sleep(2000);
  });

  it('should navegate compania', () => {
    page.navigateTo('/compania/listar');
    const c = page.getTextClassName('page-title');
    c.then(r => {
      expect(r).toEqual('Listado de compañias');
    });

    browser.sleep(2000);
  });

  it('should navegate nomina', () => {

    page.navigateTo('/nomina/listar');
    const c = page.getTextClassName('page-title');
    c.then(r => {
      expect(r).toEqual('Listado de nomina');
    });

    browser.sleep(2000);
  });

  it('should navegate consulta', () => {
    page.navigateTo('/consulta/listar');
    const c = page.getTextClassName('page-title');
    c.then(r => {
      expect(r).toEqual('Consulta de nómina por compañia');
    });

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
