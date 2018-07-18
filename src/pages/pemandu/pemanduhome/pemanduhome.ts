import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http,Headers,RequestOptions } from '@angular/http';
import { UserData } from '../../../providers/user-data';

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

  headers = new Headers({ 
    'Content-Type': 'application/json'});
  options = new RequestOptions({ headers: this.headers});
  datadiambil: any
  constructor(public navCtrl: NavController, public navParams: NavParams, private http: Http, private userData: UserData) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PemanduhomePage');
    this.getPemanduInformation();
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

  navSuccessTrans() {
    this.navCtrl.push("PemanadusuksesPage");
  }

  navFailedTrans() {
    this.navCtrl.push("PemanadufailedPage");
  }

  navProgressTrans() {
    this.navCtrl.push("PemanaduprogressPage");
  }

  navPemanduDiskusi() {
    this.navCtrl.push("PemandudiskusiallPage");
  }

  navPemanduPesanan() {
    this.navCtrl.push("PemandupesananPage");
  }

  getPemanduInformation() {
    console.log("masuk controller")
    // console.log(this.userData.BASE_URL+"api/pemandu/profile")
    console.log(this.options)
    this.http.get(this.userData.getBaseURL()+'api/pemandu/currentprofile', this.options).subscribe(data => {
      let response = data.json()
      console.log(response)
      if(response.status == 200) {
        console.log("asik berhasil")
      }
    })
  }
}
