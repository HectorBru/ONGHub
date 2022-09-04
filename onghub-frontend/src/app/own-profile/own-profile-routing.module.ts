import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OwnProfilePage } from './own-profile.page';

const routes: Routes = [
  {
    path: '',
    component: OwnProfilePage,
  },
  {
    path: 'create-post-ngo',
    loadChildren: () =>
      import('./create-post-ngo/create-post-ngo.module').then(
        (m) => m.CreatePostNgoPageModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OwnProfilePageRoutingModule {}
