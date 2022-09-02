import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsuarioPagePage } from './usuario-page.page';

const routes: Routes = [
  {
    path: '',
    component: UsuarioPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsuarioPagePageRoutingModule {}
