import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler, IonicPageModule } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IonicStorageModule } from '@ionic/storage';
import { Transfer } from '@ionic-native/transfer';
import { FileChooser } from '@ionic-native/file-chooser';
import { FileOpener } from '@ionic-native/file-opener';
import { Http } from '@angular/http';
import { AuthHttp, AuthConfig } from 'angular2-jwt';
import { NavController } from 'ionic-angular';

import { MyApp } from './app.component';

//page
import { MybookingPage } from '../pages/mybooking/mybooking';
import { NotificationPage } from '../pages/notification/notification';
import { HomePage } from '../pages/home/home';
import { MyaccountPage } from '../pages/myaccount/myaccount';
import { TabsPage } from '../pages/tabs/tabs';
import { ProfileAccountPage } from '../pages/profileaccount/profileaccount';

//page pemandu
import { PemanduhistoryPage } from '../pages/pemandu/pemanduhistory/pemanduhistory';
import { PemandumenuPage } from '../pages/pemandu/pemandumenu/pemandumenu';
import { PemanduhomePage } from '../pages/pemandu/pemanduhome/pemanduhome';
import { PemanduregisPage } from '../pages/pemandu/pemanduregis/pemanduregis';

//provider
import { UserData } from '../providers/user-data';
import { AlertService } from '../providers/util/alert.service';
import { Storage } from '@ionic/storage';
import { File } from '@ionic-native/file';
import { HomestayData } from '../providers/homestay-data/homestay-data';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '../../node_modules/@ionic-native/file-transfer';
import { Camera } from '@ionic-native/camera';
import { ImagePicker } from '@ionic-native/image-picker';
import { Base64 } from '@ionic-native/base64';
import { SuperTabsModule } from 'ionic2-super-tabs';


import { PemanadufailedPage } from '../pages/pemandu/pemanadufailed/pemanadufailed';
import { PemanadusuksesPage } from '../pages/pemandu/pemanadusukses/pemanadusukses';
import { PemanaduprogressPage } from '../pages/pemandu/pemanaduprogress/pemanaduprogress';
//component module

//set the auth http for API
export function getAuthHttp(http, Storage) {
  return new AuthHttp(new AuthConfig({
    headerPrefix: "",
    noJwtError: true,
    globalHeaders: [{'Content-Type': 'application/json'}],
    tokenGetter: (() => {return Storage.get('token')}),
  }), http);
}
@NgModule({
  declarations: [
    MyApp,
    MybookingPage,
    NotificationPage,
    HomePage,
    MyaccountPage,    
    TabsPage,
    ProfileAccountPage,
    // PemanduhistoryPage,
    PemandumenuPage,
    PemanduhomePage,
    // PemanadufailedPage,
    // PemanadusuksesPage,
    // PemanaduprogressPage
    // PemanduregisPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    BrowserAnimationsModule,
    IonicModule.forRoot(MyApp),    
    IonicStorageModule.forRoot(),  
    FormsModule,
    SuperTabsModule,
  ],

  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MybookingPage,
    NotificationPage,
    HomePage,
    MyaccountPage,
    TabsPage,
    ProfileAccountPage,
    // PemanduhistoryPage,
    PemandumenuPage,
    PemanduhomePage,
    // PemanadufailedPage,
    // PemanadusuksesPage,
    // PemanaduprogressPage
    // PemanduregisPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserData,
    AlertService,
    Transfer,  
    FileChooser,
    FileOpener,  
    File,
    FileTransfer,
    FileTransferObject,
    Camera,
    ImagePicker,
    Base64,
    {
      provide: AuthHttp,
      useFactory: getAuthHttp,
      deps: [Http, Storage]
    },
    HomestayData,
  ]
})
export class AppModule {}
