import { browser } from 'protractor';
import { AppPage } from '../app.po';
import { CompaniaPage } from '../page/compania/compania.po';

describe('workspace-project compania', () => {
    let page: AppPage;
//    let navBar: NavbarPage;
    let compania: CompaniaPage;

    beforeEach(() => {
        page = new AppPage();
//        navBar = new NavbarPage();
        compania = new CompaniaPage();
    });

    it('Deberia crear compania', () => {
        const TIPODOCUMENTO_COMPANIA = 'NI';
        let numerodocumentoCompania = '';
        const RAZONSOCIAL_COMPANIA = 'COMFA';
        const ANALISTAID_COMPANIA = '1';

        const chars = '0123456789';
        for (let i = 0; i < 9; i++) {
            numerodocumentoCompania += chars.charAt(Math.floor(Math.random() * chars.length));
        }

        page.navigateTo('compania/crear');
//        navBar.clickBotonCompania();
//        compania.clickBotonCrearCompanias();
        compania.ingresarTipodocumento(TIPODOCUMENTO_COMPANIA);
        compania.ingresarNumerodocumento(numerodocumentoCompania);
        compania.ingresarRazonsocial(RAZONSOCIAL_COMPANIA);
        compania.ingresarAnalistaid(ANALISTAID_COMPANIA);
        compania.clickBotonGuardarcompania();

        expect(page.getTextClassName('msg-compania')).toBe('Registro exitoso');

        browser.sleep(1000);
    });
/*
    it('Deberia listar companias con navegacion', () => {

        page.navigateTo('compania/listar');
//        navBar.clickBotonCompania();
//        compania.clickBotonListarCompanias();
        expect(4).toBe(4);
//        expect(4).toBe(compania.contarCompanias());
        browser.sleep(2000);
    });

    it('Deberia listar companias haciendo click en el link', () => {
        navBar.clickBotonCompania();
        compania.clickBotonListarCompanias();
        expect(4).toBe(4);
//        expect(4).toBe(compania.contarCompanias());
        browser.sleep(2000);
    });
    */
});
