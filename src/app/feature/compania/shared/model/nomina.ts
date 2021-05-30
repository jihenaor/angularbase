export class Nomina {
    id: string;
    documentoempleado: string;
    periodo: string;
    valor: string;
    companiaid: number;

    constructor(
        id: string,
        documentoempleado: string,
        periodo: string,
        valor: string,
        companiaid: number) {
        this.id = id;
        this.documentoempleado = documentoempleado;
        this.periodo = periodo;
        this.valor = valor;
        this.companiaid = companiaid;
    }
}
