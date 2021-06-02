import { BuilderTemplate } from '../../../../core/testbuilder/builderTemplate';

import { Consulta } from '../model/consulta';

export class ConsultaBuilder extends BuilderTemplate<Consulta[]>  {

    protected initialize(): Consulta[] {
        return [
            new Consulta('NI', '891480000', 'COMFA', '1', '1', '123654987', '202001', '10000', 1),
            new Consulta('NI', '891480000', 'COMFA', '1', '2', '852147963', '202001', '10000', 1)
          ];
    }
}
