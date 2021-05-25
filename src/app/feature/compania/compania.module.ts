import { NgModule } from '@angular/core';

import { CompaniaRoutingModule } from './compania-routing.module';
import { BorrarCompaniaComponent } from './components/borrar-compania/borrar-compania.component';
import { ListarCompaniaComponent } from './components/listar-compania/listar-compania.component';
import { CrearCompaniaComponent } from './components/crear-compania/crear-compania.component';
import { CompaniaComponent } from './components/compania/compania.component';
import { SharedModule } from '@shared/shared.module';
import { CompaniaService } from './shared/service/compania.service';


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
