import { browser } from 'protractor';
import { AppPage } from '../app.po';
import { NominaPage } from '../page/nomina/nomina.po';

describe('workspace-project compania', () => {
    let page: AppPage;
//    let navBar: NavbarPage;
    let compania: NominaPage;

    beforeEach(() => {
        page = new AppPage();
//        navBar = new NavbarPage();
        compania = new NominaPage();
    });

    it('Deberia crear compania', () => {
        let documentoempleado = '';
        const PERIODO = '202001';
        const VALOR = '1000';
        const COMPANIAID = '1';

        const chars = '0123456789';
        for (let i = 0; i < 9; i++){
            documentoempleado += chars.charAt(Math.floor(Math.random() * chars.length));
        }

        page.navigateTo('nomina/crear');
//        navBar.clickBotonCompania();
//        compania.clickBotonCrearCompanias();
        compania.ingresarDocumentoempleado(documentoempleado);
        compania.ingresarPeriodo(PERIODO);
        compania.ingresarValor(VALOR);
        compania.ingresarCompaniaid(COMPANIAID);
        compania.clickBotonGuardarNomina();

        expect(page.getTextClassName('msg-nomina')).toBe('Registro exitoso');

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
