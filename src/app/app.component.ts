import { Component, ViewChild } from '@angular/core';
import { Platform, MenuController, NavController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import firebase from 'firebase';
import { AuthService } from '../services/auth';

import { HomePage } from '../pages/home/home';
import { DisplayPage } from '../pages/display/display';
import { SigninPage } from '../pages/sign-in/sign-in';
import { RegisterPage } from '../pages/register/register';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;
  displaypage = DisplayPage;
  signinPage = SigninPage;
  registerPage = RegisterPage;
  isAuthenticated = false;
  @ViewChild("nav") nav: NavController;

  constructor(
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    private authService: AuthService,
    private menuCtrl: MenuController) {
      firebase.initializeApp({
        apiKey: "AIzaSyCR0TNdolZx9CGIwTuxbvdaH5w308_hgFs",
      authDomain: "p6-mcgee.firebaseapp.com"
      })
      firebase.auth().onAuthStateChanged(user => {
        if(user){
          this.isAuthenticated = true;
          this.rootPage = DisplayPage;
        } else {
          this.isAuthenticated = false;
          this.rootPage = SigninPage;

        }
      });

      platform.ready().then(() => {
        statusBar.styleDefault();
        splashScreen.hide();
      });
    }

    onLoad(page: any) {
      this.nav.setRoot(page);
      this.menuCtrl.close();
    }

    onLogout() {
      this.authService.logout();
      this.menuCtrl.close();
      this.nav.setRoot(HomePage);
    }
  }