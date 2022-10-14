import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExternalProfileNgoPage } from './external-profile-ngo.page';

const routes: Routes = [
  {
    path: '',
    component: ExternalProfileNgoPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExternalProfileNgoPageRoutingModule {}
