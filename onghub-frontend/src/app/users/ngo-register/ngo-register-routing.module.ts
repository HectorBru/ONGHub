import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NgoRegisterPage } from './ngo-register.page';

const routes: Routes = [
  {
    path: '',
    component: NgoRegisterPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NgoRegisterPageRoutingModule {}
