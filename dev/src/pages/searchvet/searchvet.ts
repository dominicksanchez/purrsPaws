import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, AlertController } from 'ionic-angular';
import { Geolocation, GeolocationOptions, Geoposition, PositionError } from '@ionic-native/geolocation'; 
import { PlaceDetailPage } from '../place-detail/place-detail';
declare var google;

@IonicPage()
@Component({
  selector: 'page-searchvet',
  templateUrl: 'searchvet.html',
})
export class SearchvetPage {
  options: GeolocationOptions;
  currentPos: Geoposition;
  places: Array<any>; 
  placesFilter: Array<any>;
  @ViewChild('map') mapElement: ElementRef;
  map: any;
  pageLoaded: boolean = false;
  completeTestService: any;
  searchFocus: number = 0;
  testCheckboxOpen: boolean;
  testCheckboxResult: any;
  allSched: any = [];

  constructor(public navCtrl: NavController, private geolocation: Geolocation, public modalCtrl: ModalController, public alertCtrl: AlertController) {
  }

  doCheckbox() {
    this.places = this.placesFilter;
    let alert = this.alertCtrl.create();
    alert.setTitle('Select by Opening Hours<br>&nbsp;');

    let sortedDay = [];
    let MonArr    = [];
    let TueArr    = [];
    let WedArr    = [];
    let ThuArr    = [];
    let FriArr    = [];
    let SatArr    = [];
    let SunArr    = [];

    this.allSched.map((sched, index) => {
      if (sched.indexOf('Monday') > -1) {
        MonArr.push(sched);
      }

      if (sched.indexOf('Tuesday') > -1) {
        TueArr.push(sched);
      }

      if (sched.indexOf('Wednesday') > -1) {
        WedArr.push(sched);
      }

      if (sched.indexOf('Thursday') > -1) {
        ThuArr.push(sched);
      }

      if (sched.indexOf('Friday') > -1) {
        FriArr.push(sched);
      }

      if (sched.indexOf('Saturday') > -1) {
        SatArr.push(sched);
      }

      if (sched.indexOf('Sunday') > -1) {
        SunArr.push(sched);
      }

    });

    this.allSched = MonArr.concat(TueArr).concat(WedArr).concat(ThuArr).concat(FriArr).concat(SatArr).concat(SunArr);

    this.allSched.map((sched, index) => {
      alert.addInput({
        type: 'radio',
        label: sched,
        value: sched,
        checked: false
      });
    });

    alert.addButton('Cancel');
    alert.addButton({
      text: 'Okay',
      handler: data => {
        console.log('Checkbox data:', data);
        this.testCheckboxOpen = false;
        this.testCheckboxResult = data;
        this.onSearch(data);
      }
    });
    alert.present();
  }

  ionViewDidEnter() {
    this.searchFocus = 0;
    setTimeout(() => {
      this.getUserPosition();
    }, 400);
  }

  getVetClinic(latLng) {
    let service = new google.maps.places.PlacesService(this.map);
    let request = {
      location: latLng,
      radius: 8047,
      types: ["veterinary_care"]
    };
   
    return new Promise((resolve, reject) => {
      service.nearbySearch(request, (results, status) => {
        console.log('results', results);
        let promises = [];
        results.map(result => {
          const promise = new Promise((resolve, reject) => {
            service.getDetails({
              placeId: result['place_id']
            }, (place01, status01) => {
              if(place01 != null) {
                resolve(place01);
              }else {
                resolve(null);
              }
            })
          });

          promises.push(promise);
        });

        Promise.all(promises).then(values => {
          console.log('values', values);
          this.pageLoaded = true;
          resolve(values);
        });
      });
    });
  }

  getUserPosition() {
    this.options = {
      enableHighAccuracy: true
    };

    this.geolocation.getCurrentPosition(this.options).then((pos: Geoposition) => {
      this.currentPos = pos;
      this.addMap(pos.coords.latitude, pos.coords.longitude);
    }, (err: PositionError) => {
      console.log("error : " + err.message);
    });
  }

  addMap(lat, long) {
    let latLng = new google.maps.LatLng(lat, long);

    let mapOptions = {
      center: latLng,
      zoom: 12,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

    this.getVetClinic(latLng).then((results: Array<any>) => {
      let resultsArr = [];
      results.map(result => {
        if(result != null ) {
          resultsArr.push(result);
        }
      });

      resultsArr = resultsArr.filter(res => {
        if ('opening_hours' in res) {
          this.createMarker(res);
          return res;
        }
      });


      this.places = resultsArr;
      this.placesFilter = resultsArr;

      console.log('resultsArr', resultsArr);
      console.log('this.places', this.places);
      
      this.places.map(place => {
        if ('opening_hours' in place) {
          place.opening_hours.weekday_text.map(sched => {
            if (this.allSched.indexOf(sched) == -1) {
              this.allSched.push(sched);
            }
          });
        }
      });

      //console.log('this.allSched', this.allSched.sort());

    }, (status) => console.log(status));

    this.addMarker();
  }

  createMarker(place) {
    let marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: place.geometry.location
    });
    let placeName = place.name;
    let vicinity = place.vicinity;
    let isOpen = '';
    if ('opening_hours' in place) {
      isOpen = (place.opening_hours.open_now === true ? 'Open' : 'Close') + ' now';
    }
    
    let content = `<img style="position: relative; top: 3px;" src="data:image/png;base64,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" width="16px" height="16px"> ${placeName}
                  <br> 
                  <img style="position: relative; top: 3px;" src="https://image.flaticon.com/icons/svg/67/67347.svg" width="16px" height="16px"> ${vicinity}
                  <br>`;
    if(isOpen != '') {
      content += `<img style="position: relative; top: 3px;" src="data:image/png;base64,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" width="16px" height="16px"> ${isOpen}`;
    }
    let infoWindow = new google.maps.InfoWindow({
      content: content
    });

    google.maps.event.addListener(marker, 'click', () => {
      infoWindow.close();
      infoWindow.open(this.map, marker);
    });
  } 

  addMarker() {
    let marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: this.map.getCenter()
    });

    let content = "<p>This is your current position !</p>";
    let infoWindow = new google.maps.InfoWindow({
      content: content
    });

    google.maps.event.addListener(marker, 'click', () => {
      infoWindow.open(this.map, marker);
    });
  }

  placeDetail(place) {
    let modal = this.modalCtrl.create(PlaceDetailPage, place);

    modal.onDidDismiss(data => {
      if (data) {
        // this.loadProfile();
      }
    });

    modal.present();
  }

  // checkFocus() {
  //   if (this.searchFocus == 0) {
  //     let subTitle = '';
  //     subTitle += `<p class="subTitle">You can search by opening hours using this date time format pattern<br>
  //     dddd: h:mm tt - h:mm tt<br> E.g. Monday: 7:00 AM – 5:00 PM</p>`;
  //     let alert = this.alertCtrl.create({
  //       title: 'Search Filtering Tips',
  //       subTitle: subTitle,
  //       buttons: ['OK']
  //     });
  //     alert.present();
  //   }

  //   this.searchFocus = 1;
  // }

  onSearch(val) {
    if (val && val.trim() != '') {
      this.pageLoaded = false;
      
      console.log('places', this.places);



      const object2 = Object.assign({}, this.placesFilter);
      let placeArr = Object.keys(object2).map(key => { return object2[key]; });
      let filterIndex: any = [];
      placeArr = placeArr.filter((place, index) => {
        console.log('index', index);
        if ('opening_hours' in place) {
          let openingHours = place.opening_hours;
          let obj = openingHours['weekday_text'];

          var schedArr = [];
          Object.keys(obj).map(key => {
            schedArr.push(obj[key]);
          });

          //console.log('schedArr', schedArr);

          return schedArr.filter((item, index02) => {
            //console.log('item', item);
            if (item.toLowerCase().indexOf(val.toLowerCase()) > -1) {
              filterIndex.push(index);
            }            
          });
        }
      });
      console.log('filterIndex', filterIndex);
      // console.log('filterIndex', filterIndex);
      // placeArr.map(place => {
      //   console.log('place', place.opening_hours.weekday_text);
      // });

      this.places = placeArr;
      console.log('this.places', this.places);
      let newPlaceArr = [];
      this.places.map((newPlace, index02) => {
        if (filterIndex.indexOf(index02) > -1) {
          newPlaceArr.push(newPlace);
        }
      });

      this.places = newPlaceArr;
      console.log('newPlaceArr', newPlaceArr);

      this.pageLoaded = true;
    }else {
      this.places = this.placesFilter;
    }
  }

  onCancel(ev: any) {
    this.places = this.placesFilter;
  }
}
