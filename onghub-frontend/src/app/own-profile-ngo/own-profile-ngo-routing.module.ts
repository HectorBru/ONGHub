import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OwnProfileNgoPage } from './own-profile-ngo.page';

const routes: Routes = [
  {
    path: '',
    component: OwnProfileNgoPage,
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
export class OwnProfileNgoPageRoutingModule {}
