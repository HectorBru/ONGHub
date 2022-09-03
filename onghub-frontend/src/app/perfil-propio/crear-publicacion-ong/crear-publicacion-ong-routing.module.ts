import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrearPublicacionOngPage } from './crear-publicacion-ong.page';

const routes: Routes = [
  {
    path: '',
    component: CrearPublicacionOngPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrearPublicacionOngPageRoutingModule {}
