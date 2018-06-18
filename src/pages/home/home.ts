import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BatteryStatus } from '@ionic-native/battery-status';
import { AlertController, LoadingController } from 'ionic-angular';
import {Item} from '../../models/item'
import {BatteryStatusService} from '../../services/battery-status/battery-status.service'
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public stat;
  public myDate: String = new Date().toISOString();
  
  item : Item = {
    readingDate : '',
    level : 0,
    isPlugged : false
  }

  constructor(public batteryStatus : BatteryStatus, public alertCtrl : AlertController,
    private batteryStatusService : BatteryStatusService, public loadingCtrl: LoadingController,
    private navCtrl : NavController
  ) {
  }


  public setStatus() : any {
    this.batteryStatus.onChange().subscribe(status => {
      this.stat = status;

      this.item.level = status.level;
      this.item.isPlugged = status.isPlugged;
      this.item.readingDate = new Date().toISOString();   

      this.addItem(this.item);
      this.removeItemValues();
    })
  }

  removeItemValues(){
    this.item.level = undefined;
    this.item.isPlugged = undefined;
    this.item.readingDate = undefined;   
  }

  getStatus(){
    this.batteryStatus.onChange().subscribe(status => {
      this.stat = status;

      this.item.level = status.level;
      this.item.isPlugged = status.isPlugged;
      this.item.readingDate = new Date().toISOString();   
      this.addItem(this.item);

    })
  }

  presentAlert(key) {
    let alert = this.alertCtrl.create({
      title: 'Battery Status',
      subTitle: key,
      buttons: ['Dismiss']
    });
    alert.present();
  }
  

  async addItem(item : Item){
     await this.batteryStatusService.addItem(this.item).then(ref => {
       this.presentAlert(ref.key);
     })
  }


  refreshPage() {
    this.navCtrl.setRoot(this.navCtrl.getActive().component);
 }
}
