import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrearCompaniaComponent } from './components/crear-nomina/crear-nomina.component';
import { ListarCompaniaComponent } from './components/listar-nomina/listar-nomina.component';
import { BorrarCompaniaComponent } from './components/borrar-nomina/borrar-nomina.component';
import { CompaniaComponent } from './components/nomina/nomina.component';


const routes: Routes = [
  {
    path: '',
    component: CompaniaComponent,
    children: [
      {
        path: 'crear',
        component: CrearCompaniaComponent
      },
      {
        path: 'listar',
        component: ListarCompaniaComponent
      },
      {
        path: 'borrar',
        component: BorrarCompaniaComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompaniaRoutingModule { }
