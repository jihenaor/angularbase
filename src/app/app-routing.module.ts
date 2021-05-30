import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '@home/home.component';

import { DefaultComponent } from './feature/default/default.component';


const routes: Routes = [{ path: '', component: DefaultComponent,
      children: [
        {
          path: 'home',
          component: HomeComponent
        },
        {
          path: 'compania',
          loadChildren: () => import('@compania/compania.module').then(mod => mod.CompaniaModule)
        },
        {
          path: 'nomina',
          loadChildren: () => import('@nomina/nomina.module').then(mod => mod.NominaModule)
        }
      ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
