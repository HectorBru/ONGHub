import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerfilPropioPage } from './perfil-propio.page';

const routes: Routes = [
  {
    path: '',
    component: PerfilPropioPage
  },
  {
    path: 'crear-publicacion-ong',
    loadChildren: () => import('./crear-publicacion-ong/crear-publicacion-ong.module').then( m => m.CrearPublicacionOngPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerfilPropioPageRoutingModule {}
