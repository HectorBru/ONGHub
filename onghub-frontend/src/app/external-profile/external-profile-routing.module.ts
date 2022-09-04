import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExternalProfilePage } from './external-profile.page';

const routes: Routes = [
  {
    path: '',
    component: ExternalProfilePage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExternalProfilePageRoutingModule {}
