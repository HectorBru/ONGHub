import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TagsAndODSPage } from '../tags-and-ods/tags-and-ods.page';

import { FillInformationPage } from './fill-information.page';

const routes: Routes = [
  {
    path: '',
    component: FillInformationPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FillInformationPageRoutingModule {}
