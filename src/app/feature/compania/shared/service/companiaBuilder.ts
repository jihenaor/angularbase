import { BuilderTemplate } from '@core/testbuilder/builderTemplate';
import { Compania } from '../../shared/model/compania';

export class CompaniaBuilder extends BuilderTemplate<Compania[]>  {

    protected initialize(): Compania[] {
        return [
            new Compania('1', 'NI', '891480000', 'Compania 1', 1),
            new Compania('2', 'NI', '816001609', 'Compania 2', 1)
          ];
    }
}
