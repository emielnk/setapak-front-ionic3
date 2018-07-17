import { Component,ViewChild } from '@angular/core';
import { Platform, Nav,NavController, App} from 'ionic-angular';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { UserData } from '../providers/user-data';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  // rootPage:any = TabsPage;
  pages: Array<{title: string, component: any}>;
  rootPage:any
  @ViewChild(Nav) navChild:Nav;
  constructor(
    public platform: Platform, 
    public statusBar: StatusBar, 
    public splashScreen: SplashScreen,
    public app: App,
    public userData: UserData) {
    
      // this.pages = [
      //   { title: 'New Home Stay', component: PemanduhomePage /*ganti homestay*/ },
      //   { title: 'New Tour Guiding', component: PemandumenuPage /*ganti product*/},
      //   { title: 'New Product', component: PemandumenuPage /*ganti Product*/},
      //   { title: 'Transaction History', component: PemandumenuPage /*halaman pemandu*/},
      //   { title: 'Registration', component: PemanduregisPage /*daftar sebagai pemandu*/}
      // ];
    // platform.ready().then(() => {
    //   // Okay, so the platform is ready and our plugins are available.
    //   // Here you can do any higher level native things you might need.
    //   statusBar.styleDefault();
    //   splashScreen.hide();
    // });
      this.initializeApp();

      this.userData.hasLoggedIn().then((hasLoggedIn) => {
        if(hasLoggedIn) {
          console.log('status',hasLoggedIn)
          this.navChild.setRoot(TabsPage)
        } else {
          console.log('status',hasLoggedIn)
          this.navChild.setRoot(TabsPage)
        }
      });
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
    this.navChild.setRoot(page.component);
  }

  navRegis() {
    this.navChild.push("PemanduregisPage");
  }

  navNewHomestay () {
    this.navChild.push("PemanduhomestayPage")
  }

  navNewTourService() {
    this.navChild.push("PemandujasaPage")
  }

  navNewProduct() {
    this.navChild.push("PemanduprodukPage")
  }

  navHistoryTransaksi() {
    this.navChild.push("PemanduhistoryallPage");
  }

  navMyProdukAll() {
    this.navChild.push("PemandumyproductsPage");
  }
  
}
