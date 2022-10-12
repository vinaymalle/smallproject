import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RoutingModule } from './routing/routing.module';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LoginComponent,
    ForgotpasswordComponent
  ],
  imports: [
    CommonModule,
    RoutingModule,
    ReactiveFormsModule
  ]
})
export class AuthenticationModule { }
