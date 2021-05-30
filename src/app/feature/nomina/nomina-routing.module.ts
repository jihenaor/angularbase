import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrearNominaComponent } from './components/crear-nomina/crear-nomina.component';
import { ListarNominaComponent } from './components/listar-nomina/listar-nomina.component';
import { BorrarNominaComponent } from './components/borrar-nomina/borrar-nomina.component';
import { NominaComponent } from './components/nomina/nomina.component';


const routes: Routes = [
  {
    path: '',
    component: NominaComponent,
    children: [
      {
        path: 'crear',
        component: CrearNominaComponent
      },
      {
        path: 'listar',
        component: ListarNominaComponent
      },
      {
        path: 'borrar',
        component: BorrarNominaComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NominaRoutingModule { }
