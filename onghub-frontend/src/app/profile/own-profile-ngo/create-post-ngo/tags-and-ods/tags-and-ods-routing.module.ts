import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TagsAndODSPage } from './tags-and-ods.page';

const routes: Routes = [
  {
    path: '',
    component: TagsAndODSPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TagsAndODSPageRoutingModule {}
