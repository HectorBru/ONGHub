import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoadingScreenPageModule } from './loading-screen/loading-screen.module';
import { LoadingScreenPage } from './loading-screen/loading-screen.page';
import { LoginPage } from './start-screen/login/login.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: localStorage.getItem('token') ? 'main-screen' : 'loader',
    pathMatch: 'full',
  },
  {
    path: 'loader',
    component: LoadingScreenPage,
  },
  {
    path: 'start-screen',
    loadChildren: () =>
      import('./start-screen/start-screen.module').then(
        (m) => m.StartScreenPageModule
      ),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./start-screen/login/login.module').then(
        (m) => m.LoginPageModule
      ),
  },
  {
    path: 'recover-password',
    loadChildren: () =>
      import(
        './start-screen/login/password-recover/password-recover.module'
      ).then((m) => m.PasswordRecoverPageModule),
  },
  {
    path: 'ngo-register',
    loadChildren: () =>
      import('./start-screen/ngo-register/ngo-register.module').then(
        (m) => m.NgoRegisterPageModule
      ),
  },
  {
    path: 'user-register',
    loadChildren: () =>
      import('./start-screen/user-register/user-register.module').then(
        (m) => m.UserRegisterPageModule
      ),
  },
  {
    path: 'timeline',
    loadChildren: () =>
      import('./main-screen/timeline/timeline.module').then(
        (m) => m.TimelinePageModule
      ),
  },
  {
    path: 'main-screen',
    loadChildren: () =>
      import('./main-screen/main-screen.module').then(
        (m) => m.MainScreenPageModule
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
