import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { LoginFormComponent } from './login-form';

@NgModule({
  declarations: [
    LoginFormComponent,
  ],
  imports: [
    IonicModule,
  ],
  exports: [
    LoginFormComponent
  ]
})
export class LoginFormComponentModule {}
