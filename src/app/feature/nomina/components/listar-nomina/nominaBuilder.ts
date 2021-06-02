
import { BuilderTemplate } from '@core/testbuilder/builderTemplate';
import { Nomina } from '../../shared/model/nomina';

export class NominaBuilder extends BuilderTemplate<Nomina[]>  {

    protected initialize(): Nomina[] {
        return [
            new Nomina('1', '123456789', '202001', '1000', 1),
            new Nomina('2', '123456788', '202001', '1000', 1)
          ];
    }
}
