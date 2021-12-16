import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignupComponent } from './signup/signup.component';



@NgModule({
  declarations: [
    SignInComponent,
    SignupComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
     SignInComponent
  ]
})
export class UserAuthModule { }
