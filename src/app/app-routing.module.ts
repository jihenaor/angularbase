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
        }
      ]
  },
/*
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, canActivate: [SecurityGuard]},
  { path: 'compania', component: CompaniaComponent, canActivate: [SecurityGuard]},
  */
  /*
  { path: 'home', component: HomeComponent, canActivate: [SecurityGuard]},
  */
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
