import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { FavorisPage } from '../pages/favoris/favoris';
import { LoginPage } from '../pages/login/login';
import { TrailersPage } from '../pages/trailers/trailers';
import { PreferencesPage } from '../pages/preferences/preferences';
import { TrailerPage } from '../pages/trailer/trailer';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = TrailersPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Favoris', component: FavorisPage },
      { title: 'Login', component: LoginPage },
      { title: 'Trailers', component: TrailersPage },
      { title: 'Preferences', component: PreferencesPage },
      { title: 'Trailer', component: TrailerPage },
    ];

  }

  initializeApp() {
      this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}


