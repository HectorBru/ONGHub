import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageModule } from '../start-screen/login/login.module';
import { LoginPage } from '../start-screen/login/login.page';
import { StartScreenPageModule } from '../start-screen/start-screen.module';

import { LoadingScreenPage } from './loading-screen.page';

const routes: Routes = [
  {
    path: 'start-screen',
    loadChildren: () =>
      import('../start-screen/start-screen.module').then(
        (m) => m.StartScreenPageModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoadingScreenPageRoutingModule {}
