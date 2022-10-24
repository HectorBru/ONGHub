import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreatePostNgoPage } from './create-post-ngo.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'fill-information',
    pathMatch: 'full',
  },
  {
    path: 'fill-information',
    loadChildren: () =>
      import('./fill-information/fill-information.module').then(
        (m) => m.FillInformationPageModule
      ),
  },
  {
    path: 'tags-and-ods',
    loadChildren: () =>
      import('./tags-and-ods/tags-and-ods.module').then(
        (m) => m.TagsAndODSPageModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreatePostNgoPageRoutingModule {}
