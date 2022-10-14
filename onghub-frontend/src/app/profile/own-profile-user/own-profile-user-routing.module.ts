import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OwnProfileUserPage } from './own-profile-user.page';

const routes: Routes = [
  {
    path: '',
    component: OwnProfileUserPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OwnProfileUserPageRoutingModule {}
