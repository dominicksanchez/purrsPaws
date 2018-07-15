import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-place-detail',
  templateUrl: 'place-detail.html',
})
export class PlaceDetailPage {
  name: any;
  address: any;
  phoneNumber: any;
  isClinicOpen: any = false;
  scheds: any = false;
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
    
  }

  ionViewDidLoad() {
    console.log('navParams', this.navParams);
    this.name = this.navParams.get('name');
    this.address = this.navParams.get('vicinity');
    this.phoneNumber = this.navParams.get('formatted_phone_number');

    // if ('open_now' in this.navParams.get('opening_hours')) {
    //   this.isClinicOpen = this.navParams.get('opening_hours')['open_now'];
    // }else {
    //   this.isClinicOpen = true;
    // }

    // if (this.navParams.get('opening_hours')['open_now'] !== undefined) {
    //   this.isClinicOpen = this.navParams.get('opening_hours')['open_now'];
    // }

    if (this.navParams.get('opening_hours') !== undefined) {
      this.isClinicOpen = this.navParams.get('opening_hours')['open_now'];
      this.scheds = this.navParams.get('opening_hours')['weekday_text'];
    }   

    console.log('this.scheds', this.scheds);

    //this.scheds = this.navParams.get('opening_hours')['weekday_text'];
    console.log('this.isClinicOpen', this.scheds);
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
