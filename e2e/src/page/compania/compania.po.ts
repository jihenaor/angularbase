import { by, element } from 'protractor';

export class CompaniaPage {
    private linkCrearCompania = element(by.id('linkCrearCompania'));
    private linkListarCompanias = element(by.id('linkListarCompania'));
    private botonGuardarcompania = element(by.id('guardarcompania'));
    private inputIdCompania = element(by.id('idCompania'));
    private inputTipodocumentoCompania = element(by.id('tipodocumentoCompania'));
    private inputNumerodocumentoCompania = element(by.id('numerodocumentoCompania'));
    private inputRazonsocialCompania = element(by.id('razonsocialCompania'));
    private inputAsesoridCompania = element(by.id('analistaidCompania'));

//    private listaCompanias = element.all(by.css('ul.companias li'));

    async clickBotonCrearCompanias() {
        await this.linkCrearCompania.click();
    }

    async clickBotonListarCompanias() {
        await this.linkListarCompanias.click();
    }

    async clickBotonGuardarcompania() {
        await this.botonGuardarcompania.click();
    }

    async ingresarId(idCompania) {
        await this.inputIdCompania.sendKeys(idCompania);
    }

    async ingresarTipodocumento(tipodocumentoCompania) {
        await this.inputTipodocumentoCompania.sendKeys(tipodocumentoCompania);
    }

    async ingresarNumerodocumento(numerodocumentoCompania) {
        await this.inputNumerodocumentoCompania.sendKeys(numerodocumentoCompania);
    }

    async ingresarRazonsocial(razonsocialCompania) {
        await this.inputRazonsocialCompania.sendKeys(razonsocialCompania);
    }

    async ingresarAnalistaid(analistaidCompania) {
        await this.inputAsesoridCompania.sendKeys(analistaidCompania);
    }
/*
    async contarCompanias() {
        return this.listaCompanias.count();
    }
    */
}
