import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IntroPage } from './intro';
import { LoginComponent } from './login/login';
import { SignupComponent } from './signup/signup';
import { ForgotComponent } from './forgot/forgot';

@NgModule({
  declarations: [
    IntroPage,
    LoginComponent,
    SignupComponent,
    ForgotComponent,
  ],
  imports: [
    IonicPageModule.forChild(IntroPage),
  ],
  entryComponents:[
    LoginComponent,
    SignupComponent,
    ForgotComponent,
  ]
})
export class IntroPageModule {}
