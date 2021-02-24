import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '@zup-academy/guards-routes';

const routes: Routes = [
  {
    path: 'login',
    pathMatch: 'full',
          loadChildren: () =>
            import('@zup-academy/login').then((module) => module.LoginModule),
  },
  {
    path: '',
    loadChildren: './cursos/cursos.module#CursosModule',
    canActivate: [AuthGuard]
  },
  {
    path: '**',
    redirectTo: 'login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
