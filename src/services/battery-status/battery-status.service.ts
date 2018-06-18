import {Injectable} from '@angular/core'
import { AngularFireDatabase} from 'angularfire2/database'
import {Item} from '../../models/item'

@Injectable()
export class BatteryStatusService {
    private batteryStatusRef = this.db.list<Item>('cellStatus');

    constructor(private db : AngularFireDatabase){

    }

    getBatteryStatusList() : any  {
        return this.batteryStatusRef;
       }
   
    addItem(item : Item){
        return this.batteryStatusRef.push(item);
    }
}