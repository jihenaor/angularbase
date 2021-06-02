//import { by, element } from 'protractor';
import { browser } from 'protractor';

export class NavbarPage {
//    linkHome = element(by.xpath("a[.='Dashboard']"));
//    linkCompania = element(by.xpath("span[.='Compañias']"));

    async clickBotonCompania() {
//        await this.linkCompania.click();
        browser.sleep(2000);
    }
}
