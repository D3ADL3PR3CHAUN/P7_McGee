import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DisplayPage } from '../display/display';


@IonicPage()
@Component({
  selector: 'page-thanks',
  templateUrl: 'thanks.html',
})
export class ThanksPage {

  name: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.name = navParams.get("data");
  }

  onOrder() {
    this.navCtrl.push(DisplayPage);
  }
}