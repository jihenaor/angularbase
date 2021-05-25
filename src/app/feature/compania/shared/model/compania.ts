export class Compania {
    id: string;
    tipodocumento: string;;
    numerodocumento: string;;
    razonsocial: string;;
    analistaid: number;

    constructor(id: string, 
        tipodocumento: string, 
        numerodocumento: string,
        razonsocial: string,
        analistaid: number) {
        this.id = id;
        this.tipodocumento = tipodocumento;
        this.numerodocumento = numerodocumento;
        this.razonsocial = razonsocial;
        this.analistaid = analistaid;
    }
}
