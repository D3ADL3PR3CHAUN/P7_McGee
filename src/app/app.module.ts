import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { MyComponent } from '../components/foo';
import { MyIonicInputDirective } from '../directives/my-ionic-input';

import { RegisterPage } from '../pages/register/register';
import { ThanksPage } from '../pages/thanks/thanks';
import { HomePage } from '../pages/home/home';
import { DisplayPage } from '../pages/display/display';
import { AuthService } from '../services/auth';
import { SigninPage } from '../pages/sign-in/sign-in';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DisplayPage,
    SigninPage,
    RegisterPage,
    ThanksPage,
    MyComponent,
    MyIonicInputDirective
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DisplayPage,
    SigninPage,
    RegisterPage,
    ThanksPage,
    MyComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AuthService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}