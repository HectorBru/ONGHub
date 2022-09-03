import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PantallaInicialPage } from './pantalla-inicial.page';

const routes: Routes = [
  {
    path: '',
    component: PantallaInicialPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PantallaInicialPageRoutingModule {}
