import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { DisplayPage } from '../display/display';
import { AuthService } from '../../services/auth';
import { NgForm } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-signin',
  templateUrl: 'sign-in.html',
})
export class SigninPage {
  
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private authService: AuthService,
    private alertController: AlertController,
    public loadingController: LoadingController) {
  }

  onOrder(form: NgForm, username) {
    const loading = this.loadingController.create({
      content: 'Signing you in...'
    });

    loading.present();
    
    this.authService.signin(form.value.email, form.value.password)
      .then(data => {
        console.log(data)
        loading.dismiss();
        username = username || ""
        this.navCtrl.push(DisplayPage, { data: username })
      })
      .catch(error => {
        console.log(error)
        loading.dismiss();
        const alert = this.alertController.create({
          title: 'Signin failed!',
          message: error.message,
          buttons: ['OK']
        })

        alert.present()
      });
  }
}