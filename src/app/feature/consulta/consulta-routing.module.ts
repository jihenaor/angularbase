import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarConsultaComponent } from './components/listar-consulta/listar-consulta.component';
import { ConsultaComponent } from './components/consulta/consulta.component';

const routes: Routes = [
  {
    path: '',
    component: ConsultaComponent,
    children: [
      {
        path: 'listar',
        component: ListarConsultaComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsultaRoutingModule { }
