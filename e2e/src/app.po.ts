import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo(s: string) {
    console.log(browser.baseUrl + s);
    return browser.get(browser.baseUrl + s) as Promise<any>;
  }

  getText(s: string) {
    return element(by.css(s)).getText() as Promise<string>;
  }

  getTextId(s: string) {
    return element(by.id(s)).getText() as Promise<string>;
  }
}
