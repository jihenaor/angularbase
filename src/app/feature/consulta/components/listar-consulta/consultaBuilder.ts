
import { BuilderTemplate } from '@core/testbuilder/builderTemplate';
import { Consulta } from '../../shared/model/consulta';

export class ConsultaBuilder extends BuilderTemplate<Consulta[]>  {

    protected initialize(): Consulta[] {
        return [
            new Consulta('NI', '891480000', 'COMFA', '1', '1', '123456789', '202001', '1000', 1),
            new Consulta('NI', '891480000', 'COMFA', '1', '2', '123456788', '202001', '1000', 1)
          ];
    }
}
