import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PemanduhomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pemanduhome',
  templateUrl: 'pemanduhome.html',
})
export class PemanduhomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PemanduhomePage');
  }

  navMyHomestay() {
    this.navCtrl.push("PemandulisthomestayPage");
  }

  navMyProduct() {
    this.navCtrl.push("PemandulistproductPage");
  }

  navMyService() {
    this.navCtrl.push("PemandulistservicePage");
  }

  navPemanduEditProfile() {
    this.navCtrl.push("PemandueditPage");
  }

}
