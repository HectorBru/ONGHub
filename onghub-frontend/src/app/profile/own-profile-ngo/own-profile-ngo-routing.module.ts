import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OwnProfileNgoPage } from './own-profile-ngo.page';
import { PostsComponent } from '../external-profile-ngo/posts/posts.component';
import { UserInformationComponent } from './user-information/user-information.component';

const routes: Routes = [
  {
    path: '',
    component: OwnProfileNgoPage,
    children: [
      {
        path: 'app-user-information',
        component: UserInformationComponent,
      },
      {
        path: 'app-posts',
        component: PostsComponent,
      },
    ],
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
