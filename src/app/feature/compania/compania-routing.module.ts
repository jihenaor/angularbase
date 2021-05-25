import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrearCompaniaComponent } from './components/crear-compania/crear-compania.component';
import { ListarCompaniaComponent } from './components/listar-compania/listar-compania.component';
import { BorrarCompaniaComponent } from './components/borrar-compania/borrar-compania.component';
import { CompaniaComponent } from './components/compania/compania.component';


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
