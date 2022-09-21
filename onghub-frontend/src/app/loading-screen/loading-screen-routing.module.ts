import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPage } from '../start-screen/login/login.page';

import { LoadingScreenPage } from './loading-screen.page';

const routes: Routes = [
  {
    path: 'login',
    component: LoginPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoadingScreenPageRoutingModule {}
