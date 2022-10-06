import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainScreenPage } from './main-screen.page';
import { SearchPage } from './search/search/search.page';
import { TimelinePage } from './timeline/timeline.page';

const routes: Routes = [
  {
    path: '',
    component: MainScreenPage,
    children: [
      {
        path: 'news',
        component: TimelinePage,
      },
      {
        path: 'search',
        component: SearchPage,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainScreenPageRoutingModule {}
