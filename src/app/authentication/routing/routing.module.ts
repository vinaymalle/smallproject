import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { ForgotpasswordComponent } from '../forgotpassword/forgotpassword.component';
import { CheckInputsGuard } from '../check-inputs.guard';

const routes: Routes = [
 
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'forgotpassword',
    canDeactivate: [CheckInputsGuard],
    component: ForgotpasswordComponent
  },
  // {
  //   path: '**',
  //   redirectTo: '/login'
  // }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class RoutingModule { }
