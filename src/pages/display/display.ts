
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { AuthService } from '../../services/auth';

@IonicPage()
@Component({
  selector: 'page-display',
  templateUrl: 'display.html'
})
export class DisplayPage {

  username: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private authService: AuthService) {
    this.username = navParams.get("data");
  }

}