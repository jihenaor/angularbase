import { by, element } from 'protractor';

export class NominaPage {
    private linkCrearNomina = element(by.id('linkCrearNomina'));
    private linkListarNomina = element(by.id('linkListarNomina'));
    private botonGuardarNomina = element(by.id('guardarnomina'));
    private inputIdNomina = element(by.id('idNomina'));
    private inputDocumentoempleadoNomina = element(by.id('documentoempleadoNomina'));
    private inputPeriodoNomina = element(by.id('periodoNomina'));
    private inputValorNomina = element(by.id('valorNomina'));
    private inputCompaniaid = element(by.id('companiaid'));

//    private listaCompanias = element.all(by.css('ul.companias li'));

    async clickBotonCrearNomina() {
        await this.linkCrearNomina.click();
    }

    async clickBotonListarCompanias() {
        await this.linkListarNomina.click();
    }

    async clickBotonGuardarNomina() {
        await this.botonGuardarNomina.click();
    }

    async ingresarId(idNomina) {
        await this.inputIdNomina.sendKeys(idNomina);
    }

    async ingresarDocumentoempleado(documentoempleadoNomina) {
        await this.inputDocumentoempleadoNomina.sendKeys(documentoempleadoNomina);
    }

    async ingresarPeriodo(periodoNomina) {
        await this.inputPeriodoNomina.sendKeys(periodoNomina);
    }

    async ingresarValor(valorNomina) {
        await this.inputValorNomina.sendKeys(valorNomina);
    }

    async ingresarCompaniaid(companiaidNomina) {
        console.log(companiaidNomina);
        await this.inputCompaniaid.then(function(options) {
            options[0].click();
        });
    }
}
