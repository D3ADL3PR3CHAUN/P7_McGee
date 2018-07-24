import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { ThanksPage } from '../thanks/thanks';
import { AuthService } from '../../services/auth';


@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private authService: AuthService,
    private alertController: AlertController,
    public loadingController: LoadingController) {
  }

  onRegister(form: NgForm, name) {
    const loading = this.loadingController.create({
      content: 'Registering...'
    })

    loading.present();

    this.authService.register(form.value.email, form.value.password)
    .then(data => {
      console.log(data)
      loading.dismiss();
      name = name || ""
      this.navCtrl.push(ThanksPage, {data: name})
    })
    .catch(error => {
      console.log(error)
      loading.dismiss();
      
      const alert = this.alertController.create({
        title: 'Failed to register!',
        message: error.message,
        buttons: ['OK']
      })

      alert.present()
    });
  }
}