import { NgModule } from '@angular/core';

import { ConsultaRoutingModule } from './consulta-routing.module';
import { ListarConsultaComponent } from './components/listar-consulta/listar-consulta.component';
import { ConsultaComponent } from './components/consulta/consulta.component';
import { SharedModule } from '@shared/shared.module';
import { ConsultaService } from './shared/service/consulta.service';

@NgModule({
  declarations: [
    ListarConsultaComponent,
    ConsultaComponent
  ],
  imports: [
    ConsultaRoutingModule,
    SharedModule
  ],
  providers: [ConsultaService]
})
export class ConsultaModule { }
