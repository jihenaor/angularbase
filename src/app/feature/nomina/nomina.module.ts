import { NgModule } from '@angular/core';

import { NominaRoutingModule } from './nomina-routing.module';
import { ListarNominaComponent } from './components/listar-nomina/listar-nomina.component';
import { CrearNominaComponent } from './components/crear-nomina/crear-nomina.component';
import { NominaComponent } from './components/nomina/nomina.component';
import { SharedModule } from '@shared/shared.module';
import { NominaService } from './shared/service/nomina.service';

@NgModule({
  declarations: [
    CrearNominaComponent,
    ListarNominaComponent,
    NominaComponent
  ],
  imports: [
    NominaRoutingModule,
    SharedModule
  ],
  providers: [NominaService]
})
export class NominaModule { }
