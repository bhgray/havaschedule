import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Prefs page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-prefs',
  templateUrl: 'prefs.html'
})
export class PrefsPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello PrefsPage Page');
  }

}
