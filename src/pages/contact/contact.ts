import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Device } from '@ionic-native/device';


@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  cordova;
  model;
  platform;
  uuid;
  version;
  manufacturer;
  isVirtual;
  serial;
  constructor(public device : Device) {
    this.cordova = this.device.cordova;
    this.model = this.device.model;
    this.platform = this.device.platform;
    this.uuid = this.device.uuid;
    this.version = this.device.version;
    this.manufacturer = this.device.manufacturer;
    this.isVirtual = this.isVirtual;
    this.serial = this.serial;
  }

}
