import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import {HttpModule} from '@angular/http';
import { MyApp } from './app.component';
import { FavorisPage } from '../pages/favoris/favoris';
import { LoginPage } from '../pages/login/login';
import { TrailersPage } from '../pages/trailers/trailers';
import { PreferencesPage } from '../pages/preferences/preferences';
import { TrailerPage } from '../pages/trailer/trailer';
import { LoginFormComponent } from '../components/login-form/login-form';
import {ApiService} from './api.service';

@NgModule({
  declarations: [
    MyApp,
    FavorisPage,
    LoginPage,
    TrailersPage,
    PreferencesPage,
    TrailerPage,
    LoginFormComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    FavorisPage,
    LoginPage,
    TrailersPage,
    PreferencesPage,
    TrailerPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ApiService
  ]
})
export class AppModule {}
