import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable} from 'rxjs/Observable'
import { Item} from '../../models/item'

import { BatteryStatusService} from '../../services/battery-status/battery-status.service'
/**
 * Generated class for the HistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-history',
  templateUrl: 'history.html',
})
export class HistoryPage {
  batteryStatusList$ : Observable<Item[]>;


  constructor(public navCtrl: NavController, public navParams: NavParams,
  public batteryService : BatteryStatusService) {
    this.batteryStatusList$ = this.batteryService
    .getBatteryStatusList()
    .snapshotChanges()

    console.log("asdasd", this.batteryStatusList$)
  }
}
