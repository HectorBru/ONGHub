import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostsComponent } from '../external-profile-ngo/posts/posts.component';

import { OwnProfileUserPage } from './own-profile-user.page';
import { SavedPostsUserComponent } from './saved-posts-user/saved-posts-user.component';

const routes: Routes = [
  {
    path: '',
    component: OwnProfileUserPage,
    children: [
      {
        path: 'app-saved-posts-user',
        component: SavedPostsUserComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OwnProfileUserPageRoutingModule {}
