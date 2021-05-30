import { BuilderTemplate } from './builderTemplate';

import { Nomina } from '../../shared/model/nomina';

export class CompaniaBuilder extends BuilderTemplate<Nomina[]>  {

    protected initialize(): Nomina[] {
        return [
            new Nomina('1', 'NI', '891480000', 'Nomina 1', 1),
            new Nomina('2', 'NI', '816001609', 'Nomina 2', 1)
          ];
    }
}
