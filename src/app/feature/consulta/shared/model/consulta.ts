export class Consulta {
    tipodocumento: string;
    numerodocumento: string;
    razonsocial: string;
    analistaid: string;
    id: string;
    documentoempleado: string;
    periodo: string;
    valor: string;
    companiaid: number;

    constructor(
        tipodocumento: string,
        numerodocumento: string,
        razonsocial: string,
        analistaid: string,   
        id: string,
        documentoempleado: string,
        periodo: string,
        valor: string,
        companiaid: number) {
        this.tipodocumento = tipodocumento;
        this.numerodocumento = numerodocumento;
        this.razonsocial = razonsocial;
        this.analistaid = analistaid;
        this.id = id;
        this.documentoempleado = documentoempleado;
        this.periodo = periodo;
        this.valor = valor;
        this.companiaid = companiaid;
    }
}
