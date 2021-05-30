import { NgModule } from '@angular/core';

import { CompaniaRoutingModule } from './nomina-routing.module';
import { BorrarCompaniaComponent } from './components/borrar-nomina/borrar-nomina.component';
import { ListarCompaniaComponent } from './components/listar-nomina/listar-nomina.component';
import { CrearCompaniaComponent } from './components/crear-nomina/crear-nomina.component';
import { CompaniaComponent } from './components/nomina/nomina.component';
import { SharedModule } from '@shared/shared.module';
import { CompaniaService } from './shared/service/nomina.service';

@NgModule({
  declarations: [
    CrearCompaniaComponent,
    ListarCompaniaComponent,
    BorrarCompaniaComponent,
    CompaniaComponent
  ],
  imports: [
    CompaniaRoutingModule,
    SharedModule
  ],
  providers: [CompaniaService]
})
export class CompaniaModule { }
