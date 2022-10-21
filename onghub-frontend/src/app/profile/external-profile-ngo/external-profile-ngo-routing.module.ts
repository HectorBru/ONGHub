import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostsComponent } from './posts/posts.component';
import { UserInformationComponent } from './user-information/user-information.component';

import { ExternalProfileNgoPage } from './external-profile-ngo.page';

const routes: Routes = [
  {
    path: '',
    component: ExternalProfileNgoPage,
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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExternalProfileNgoPageRoutingModule {}
