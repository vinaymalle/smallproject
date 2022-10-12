import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckstatusGuard } from './Guards/checkstatus.guard';
import { IsLogedInGuard } from './Guards/is-loged-in.guard';

const routes: Routes = [
  {
    path: '',
    canActivate: [IsLogedInGuard],
    loadChildren: () => import('./authentication/authentication.module').then(m => m.AuthenticationModule)
  },{
    path: 'home',
    canActivate: [CheckstatusGuard],
    loadChildren: () => import('./home/home.module').then((res) => {
      return res.HomeModule
    })
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
