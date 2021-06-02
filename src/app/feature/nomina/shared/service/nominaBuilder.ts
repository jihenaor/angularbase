import { BuilderTemplate } from '../../../../core/testbuilder/builderTemplate';

import { Nomina } from '../../shared/model/nomina';

export class NominaBuilder extends BuilderTemplate<Nomina[]>  {

    protected initialize(): Nomina[] {
        return [
            new Nomina('1', '123654987', '202001', '10000', 1),
            new Nomina('2', '852147963', '202001', '10000', 1)
          ];
    }
}
