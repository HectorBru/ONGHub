import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreatePostNgoPage } from './create-post-ngo.page';

const routes: Routes = [
  {
    path: '',
    component: CreatePostNgoPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreatePostNgoPageRoutingModule {}
