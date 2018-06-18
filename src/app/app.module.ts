import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HistoryPage } from '../pages/history/history';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { BatteryStatus } from '@ionic-native/battery-status';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AngularFireModule} from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { BatteryStatusService} from '../services/battery-status/battery-status.service'
import { Device } from '@ionic-native/device';


import { FIREBASE_CONFIG } from './firebase.credentials';
@NgModule({
  declarations: [
    MyApp,
    HistoryPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyC0YDNZqpdICbzCdV8qAhvP-L9Rys0Vle4",
      authDomain: "cellstatus-7b693.firebaseapp.com",
      databaseURL: "https://cellstatus-7b693.firebaseio.com",
      projectId: "cellstatus-7b693",
      storageBucket: "cellstatus-7b693.appspot.com",
      messagingSenderId: "733815710527"
    }),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HistoryPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    BatteryStatus,
    BatteryStatusService,
    Device,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
