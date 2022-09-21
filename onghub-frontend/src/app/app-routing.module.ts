import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoadingScreenPage } from './loading-screen/loading-screen.page';
import { LoginPage } from './start-screen/login/login.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'loader',
    pathMatch: 'full',
  },
  {
    path: 'loader',
    component: LoadingScreenPage,
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./start-screen/login/login.module').then(
        (m) => m.LoginPageModule
      ),
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
