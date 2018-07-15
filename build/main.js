webpackJsonp([48],{

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPetProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_firestore__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase_firestore__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




let RegisterPetProvider = class RegisterPetProvider {
    constructor(http) {
        this.http = http;
        this.db = __WEBPACK_IMPORTED_MODULE_2_firebase__["firestore"]();
        this.basePath = '/uploads';
        this.userId = localStorage.getItem('userId');
        console.log('Hello RegisterPetProvider Provider');
    }
    randomCharacters() {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (var i = 0; i < 20; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        return text;
    }
    uploadPhoto(upload) {
        let uploadName = upload['name'] + '-' + this.randomCharacters(); // create a random name for the upload name
        Object.defineProperty(upload, 'name', {
            writable: true,
            value: uploadName
        });
        const promise = new Promise((resolve, reject) => {
            let storageRef = __WEBPACK_IMPORTED_MODULE_2_firebase__["storage"]().ref();
            let uploadTask = storageRef.child(`${this.basePath}/${upload.name}`).put(upload);
            uploadTask.on(__WEBPACK_IMPORTED_MODULE_2_firebase__["storage"].TaskEvent.STATE_CHANGED, (snapshot) => {
                upload.progress = (uploadTask.snapshot.bytesTransferred / uploadTask.snapshot.totalBytes) * 100;
            }, (error) => {
                reject(error);
            }, () => {
                resolve(uploadTask.snapshot.downloadURL);
            });
        });
        return promise;
    }
    saveLostPet(pet) {
        const promise = new Promise((resolve, reject) => {
            pet['uid'] = this.userId;
            pet['datePosted'] = __WEBPACK_IMPORTED_MODULE_2_firebase__["firestore"].FieldValue.serverTimestamp();
            pet['isvisible'] = true;
            this.db.collection('registerpets').doc().set(pet).then((res) => {
                resolve(1);
            }).catch(err => {
                reject(err);
            });
        });
        return promise;
    }
    saveUpdates(pet, petId) {
        const promise = new Promise((resolve, reject) => {
            this.db.collection('registerpets').doc(petId).update(pet).then((res) => {
                resolve(1);
            }).catch(err => {
                reject(err);
            });
        });
        return promise;
    }
    ownerInfo(uid) {
        const promise = new Promise((resolve, reject) => {
            this.db.collection('users').doc(uid).get().then(snapshots => {
                resolve(snapshots.data());
            }).catch(err => {
                reject(err);
            });
        });
        return promise;
    }
    getRegisterPetInfo(petId) {
        const promise = new Promise((resolve, reject) => {
            this.db.collection('registerpets').doc(petId).get().then(pet => {
                resolve(pet.data());
            }).catch(err => {
                reject(err);
            });
        });
        return promise;
    }
};
RegisterPetProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
], RegisterPetProvider);

//# sourceMappingURL=register-pet.js.map

/***/ }),

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VaccineProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_firestore__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase_firestore__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




let VaccineProvider = class VaccineProvider {
    constructor(http) {
        this.http = http;
        this.db = __WEBPACK_IMPORTED_MODULE_2_firebase__["firestore"]();
        this.basePath = '/uploads';
        this.userId = localStorage.getItem('userId');
        console.log('Hello VaccineProvider Provider');
    }
    addVaccineSched(vaccineData) {
        const promise = new Promise((resolve, reject) => {
            vaccineData['uid'] = this.userId;
            vaccineData['datePosted'] = __WEBPACK_IMPORTED_MODULE_2_firebase__["firestore"].FieldValue.serverTimestamp();
            vaccineData['isvisible'] = true;
            this.db.collection('vaccineschedules').doc().set(vaccineData).then((res) => {
                this.db.collection('users').get().then(user => {
                    user.docs.map(user => {
                        let email = user.data().email.toLowerCase();
                        if (email != localStorage.getItem('email')) {
                            let userName = email.split('@')[0].replace('.', '');
                            __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref(`notif/vaccinesched/${userName}/`).once('value', snapshot => {
                                console.log('firing');
                                if (snapshot.hasChild('unread')) {
                                    let unread = snapshot.val().unread + 1;
                                    __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref(`notif/vaccinesched/${userName}/`).set({
                                        unread: unread
                                    });
                                }
                                else {
                                    __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref(`notif/vaccinesched/${userName}/`).set({
                                        unread: 1
                                    });
                                }
                            });
                        }
                    });
                    resolve(1);
                });
            }).catch(err => {
                reject(err);
            });
        });
        return promise;
    }
    randomCharacters() {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (var i = 0; i < 20; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        return text;
    }
    uploadPhoto(upload) {
        let uploadName = upload['name'] + '-' + this.randomCharacters(); // create a random name for the upload name
        Object.defineProperty(upload, 'name', {
            writable: true,
            value: uploadName
        });
        const promise = new Promise((resolve, reject) => {
            let storageRef = __WEBPACK_IMPORTED_MODULE_2_firebase__["storage"]().ref();
            let uploadTask = storageRef.child(`${this.basePath}/${upload.name}`).put(upload);
            uploadTask.on(__WEBPACK_IMPORTED_MODULE_2_firebase__["storage"].TaskEvent.STATE_CHANGED, (snapshot) => {
                upload.progress = (uploadTask.snapshot.bytesTransferred / uploadTask.snapshot.totalBytes) * 100;
            }, (error) => {
                reject(error);
            }, () => {
                resolve(uploadTask.snapshot.downloadURL);
            });
        });
        return promise;
    }
    getPostInfo(postId) {
        const promise = new Promise((resolve, reject) => {
            this.db.collection('vaccineschedules').doc(postId).get().then(post => {
                resolve(post.data());
            }).catch(err => {
                reject(err);
            });
        });
        return promise;
    }
    editVaccineSched(vaccineData, postId) {
        const promise = new Promise((resolve, reject) => {
            this.db.collection('vaccineschedules').doc(postId).update(vaccineData).then(res => {
                resolve(1);
            }).catch(err => {
                reject(err);
            });
        });
        return promise;
    }
};
VaccineProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
], VaccineProvider);

//# sourceMappingURL=vaccine.js.map

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisteredPetDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_register_pet_register_pet__ = __webpack_require__(117);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let RegisteredPetDetailsPage = class RegisteredPetDetailsPage {
    constructor(navCtrl, navParams, viewCtrl, registerPetProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.registerPetProvider = registerPetProvider;
    }
    ionViewDidLoad() {
        console.log('navParams', this.navParams);
        this.name = this.navParams.get('name');
        this.breed = this.navParams.get('breed');
        this.color = this.navParams.get('color');
        this.gender = this.navParams.get('gender');
        this.vaccineDate = this.navParams.get('vaccineDate');
        this.remarks = this.navParams.get('remarks');
        this.ownerUid = this.navParams.get('uid');
        this.type = this.navParams.get('petType');
        this.getOwnerInfo();
    }
    getOwnerInfo() {
        this.registerPetProvider.ownerInfo(this.ownerUid).then(owner => {
            this.ownerName = owner['name'];
            this.ownerEmail = owner['email'];
            this.ownerPhone = owner['phone'];
            this.ownerAddress = owner['address'];
        });
    }
    dismiss() {
        this.viewCtrl.dismiss();
    }
};
RegisteredPetDetailsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-registered-pet-details',template:/*ion-inline-start:"C:\Users\Sanchez\Dropbox\petApp\src\pages\registered-pet-details\registered-pet-details.html"*/'<ion-header>\n\n  <ion-toolbar>\n\n    <ion-title>\n\n      Pet Details\n\n    </ion-title>\n\n    <ion-buttons start>\n\n      <button ion-button (click)="dismiss()">\n\n        <span ion-text color="primary" showWhen="ios">Cancel</span>\n\n        <ion-icon name="md-close" showWhen="android, windows"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n<table class="profileTbl">\n\n  <tr>\n\n    <td>\n\n      <ion-icon name="paw"></ion-icon>\n\n    </td>\n\n    <td>\n\n      <strong>Name</strong>\n\n      <p>{{name}}</p>\n\n    </td>\n\n  </tr>\n\n  <tr>\n\n    <td>\n\n      <ion-icon name="checkbox-outline"></ion-icon>\n\n    </td>\n\n    <td>\n\n      <strong>Type</strong>\n\n      <p *ngIf="type == \'\' || type == undefined">N/A</p>\n\n      <p *ngIf="type">{{type}}</p>\n\n    </td>\n\n  </tr>\n\n  <tr>\n\n    <td>\n\n      <ion-icon name="bookmark"></ion-icon>\n\n    </td>\n\n    <td>\n\n      <strong>Breed</strong>\n\n      <p *ngIf="breed == \'\' || breed == null">N/A</p>\n\n      <p *ngIf="breed">{{breed}}</p>\n\n    </td>\n\n  </tr>\n\n  <tr>\n\n    <td>\n\n      <ion-icon name="color-fill"></ion-icon>\n\n    </td>\n\n    <td>\n\n      <strong>Color</strong>\n\n      <p *ngIf="color == \'\' || color == null">N/A</p>\n\n      <p *ngIf="color">{{color}}</p>\n\n    </td>\n\n  </tr>\n\n  <tr>\n\n    <td>\n\n      <ion-icon name="heart"></ion-icon>\n\n    </td>\n\n    <td>\n\n      <strong>Gender</strong>\n\n      <p *ngIf="gender == \'\' || gender == null">N/A</p>\n\n      <p *ngIf="gender">{{gender}}</p>\n\n    </td>\n\n  </tr>\n\n  <tr>\n\n    <td>\n\n      <ion-icon name="calendar"></ion-icon>\n\n    </td>\n\n    <td>\n\n      <strong>Last Vaccine Date</strong>\n\n      <p *ngIf="vaccineDate == \'\' || vaccineDate == null">N/A</p>\n\n      <p *ngIf="vaccineDate">{{vaccineDate | date:\'mediumDate\'}}</p>\n\n    </td>\n\n  </tr>\n\n  <tr>\n\n    <td>\n\n      <ion-icon name="md-contact"></ion-icon>\n\n    </td>\n\n    <td>\n\n      <strong>Owner Name</strong>\n\n      <p *ngIf="ownerName == \'\' || ownerName == null">N/A</p>\n\n      <p *ngIf="ownerName">{{ownerName}}</p>\n\n    </td>\n\n  </tr>\n\n  <tr>\n\n    <td>\n\n      <ion-icon name="mail"></ion-icon>\n\n    </td>\n\n    <td>\n\n      <strong>Email Address</strong>\n\n      <p *ngIf="ownerEmail == \'\' || ownerEmail == null">N/A</p>\n\n      <p *ngIf="ownerEmail">{{ownerEmail}}</p>\n\n    </td>\n\n  </tr>\n\n  <tr>\n\n    <td>\n\n      <ion-icon name="call"></ion-icon>\n\n    </td>\n\n    <td>\n\n      <strong>Phone Number</strong>\n\n      <p *ngIf="ownerPhone == \'\' || ownerPhone == null">N/A</p>\n\n      <p *ngIf="ownerPhone">{{ownerPhone}}</p>\n\n    </td>\n\n  </tr>\n\n  <tr>\n\n    <td>\n\n      <ion-icon name="locate"></ion-icon>\n\n    </td>\n\n    <td>\n\n      <strong>Address</strong>\n\n      <p *ngIf="ownerAddress == \'\' || ownerAddress == null">N/A</p>\n\n      <p *ngIf="ownerAddress">{{ownerAddress}}</p>\n\n    </td>\n\n  </tr>\n\n  <tr>\n\n    <td>\n\n      <ion-icon name="information-circle"></ion-icon>\n\n    </td>\n\n    <td>\n\n      <strong>Remarks</strong>\n\n      <p *ngIf="remarks == \'\' || remarks == null">N/A</p>\n\n      <p *ngIf="remarks">{{remarks}}</p>\n\n    </td>\n\n  </tr>\n\n</table>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Sanchez\Dropbox\petApp\src\pages\registered-pet-details\registered-pet-details.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_register_pet_register_pet__["a" /* RegisterPetProvider */]])
], RegisteredPetDetailsPage);

//# sourceMappingURL=registered-pet-details.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminViewUserRegisteredPetsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_firestore__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase_firestore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__registered_pet_details_registered_pet_details__ = __webpack_require__(194);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





let AdminViewUserRegisteredPetsPage = class AdminViewUserRegisteredPetsPage {
    constructor(navCtrl, navParams, viewCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.modalCtrl = modalCtrl;
        this.petsCount = 0;
        this.db = __WEBPACK_IMPORTED_MODULE_2_firebase__["firestore"]();
        this.pageLoaded = false;
    }
    ionViewDidLoad() {
        this.userId = this.navParams.get('userId');
        this.getRegisteredPets();
    }
    dismiss() {
        this.viewCtrl.dismiss();
    }
    onSearch(ev) {
        this.pageLoaded = false;
        let val = ev.target.value;
        this.db.collection('registerpets').where("isvisible", "==", true).onSnapshot(snapshots => {
            let pets = [];
            snapshots.forEach(doc => {
                let docData = doc.data();
                docData['regPetId'] = doc.id;
                if (docData['uid'] == this.userId) {
                    pets.push(docData);
                }
            });
            this.pets = pets;
            this.petsCount = Object.keys(pets).length;
            if (val && val.trim() != '') {
                this.pets = this.pets.filter((el) => {
                    return (el.name.toLowerCase().indexOf(val.toLowerCase()) > -1) ||
                        (el.breed.toLowerCase().indexOf(val.toLowerCase()) > -1);
                });
            }
            setTimeout(() => {
                this.pageLoaded = true;
            }, 700);
        }), (err => {
            console.log('err', err);
        });
    }
    onCancel(ev) {
        this.getRegisteredPets();
    }
    getRegisteredPets() {
        this.db.collection('registerpets').where("isvisible", "==", true).onSnapshot(snapshots => {
            console.log('snapshots', snapshots);
            let pets = [];
            snapshots.forEach(doc => {
                let docData = doc.data();
                docData['regPetId'] = doc.id;
                if (docData['uid'] == this.userId) {
                    pets.push(docData);
                }
            });
            this.pets = pets;
            console.log('this.pets', this.pets);
            this.petsCount = Object.keys(pets).length;
            this.pageLoaded = true;
        }), (err => {
            console.log('err', err);
        });
    }
    registeredPetDetails(pet) {
        console.log('pet', pet);
        let modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__registered_pet_details_registered_pet_details__["a" /* RegisteredPetDetailsPage */], pet);
        modal.onDidDismiss(data => {
            if (data) {
                // this.loadProfile();
            }
        });
        modal.present();
    }
};
AdminViewUserRegisteredPetsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-admin-view-user-registered-pets',template:/*ion-inline-start:"C:\Users\Sanchez\Dropbox\petApp\src\pages\admin-view-user-registered-pets\admin-view-user-registered-pets.html"*/'<ion-header>\n\n    <ion-toolbar>\n\n      <ion-title>\n\n        Registered Pets\n\n      </ion-title>\n\n      <ion-buttons start>\n\n        <button ion-button (click)="dismiss()">\n\n          <span ion-text color="primary" showWhen="ios">Cancel</span>\n\n          <ion-icon name="md-close" showWhen="android, windows"></ion-icon>\n\n        </button>\n\n      </ion-buttons>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n\n\n  <ion-content>\n\n    <form action="" class="searchBar">\n\n        <ion-searchbar\n\n            [showCancelButton]="shouldShowCancel"\n\n            (ionInput)="onSearch($event)"\n\n            (ionCancel)="onCancel($event)"\n\n            [debounce]="700"\n\n            placeholder="Search Name or Breed"\n\n        >\n\n        </ion-searchbar>\n\n    </form>\n\n    <ion-spinner name="crescent" class="pageLoader" *ngIf="pageLoaded == false"></ion-spinner>\n\n    <div *ngIf="pageLoaded">\n\n        <p *ngIf="pets?.length == 0" class="noPetResult">No registered pet yet.</p>\n\n        <div *ngIf="pets?.length">\n\n            <ion-card *ngFor="let pet of pets">\n\n                <img [src]="pet?.image != \'\' && pet?.image != null ? pet?.image : \'assets/images/icon.png\'" [class.noImage]="pet?.image == \'\' || pet?.image == null"/>\n\n                <ion-card-content>\n\n                    <ion-card-title>{{pet.name}}</ion-card-title>\n\n                    <div>\n\n                        <span class="bold">Breed:</span>\n\n                        <span>{{pet.breed}}</span>\n\n                    </div>\n\n                    <div>\n\n                        <span class="bold">Age:</span>\n\n                        <span>{{pet.age}}</span>\n\n                    </div>\n\n                    <button ion-button type="submit" class="btnDetails" (click)="registeredPetDetails(pet)">More Details</button>\n\n                    <span class="datePosted">Date added: {{pet.datePosted | date:\'mediumDate\'}}</span>\n\n                </ion-card-content>\n\n            </ion-card>\n\n        </div>\n\n    </div>\n\n  </ion-content>\n\n  \n\n  '/*ion-inline-end:"C:\Users\Sanchez\Dropbox\petApp\src\pages\admin-view-user-registered-pets\admin-view-user-registered-pets.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */]])
], AdminViewUserRegisteredPetsPage);

//# sourceMappingURL=admin-view-user-registered-pets.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_firestore__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase_firestore__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




let ProfileProvider = class ProfileProvider {
    constructor(http) {
        this.http = http;
        this.db = __WEBPACK_IMPORTED_MODULE_2_firebase__["firestore"]();
        this.basePath = '/uploads';
        this.userId = localStorage.getItem('userId');
        console.log('Hello ProfileProvider Provider', this.userId);
    }
    loadProfile(userId) {
        const promise = new Promise((resolve, reject) => {
            this.db.collection('users').doc(userId).get().then(doc => {
                resolve(doc.data());
            }).catch(err => {
                reject(err);
            });
        });
        return promise;
    }
    editProfile(userData) {
        const promise = new Promise((resolve, reject) => {
            this.db.collection('users').doc(userData['uid']).update(userData).then(() => {
                resolve(1);
            }).catch(err => {
                reject(err);
            });
        });
        return promise;
    }
    randomCharacters() {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (var i = 0; i < 20; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        return text;
    }
    uploadPhoto(upload) {
        let uploadName = upload['name'] + '-' + this.randomCharacters(); // create a random name for the upload name
        Object.defineProperty(upload, 'name', {
            writable: true,
            value: uploadName
        });
        const promise = new Promise((resolve, reject) => {
            let storageRef = __WEBPACK_IMPORTED_MODULE_2_firebase__["storage"]().ref();
            let uploadTask = storageRef.child(`${this.basePath}/${upload.name}`).put(upload);
            uploadTask.on(__WEBPACK_IMPORTED_MODULE_2_firebase__["storage"].TaskEvent.STATE_CHANGED, (snapshot) => {
                upload.progress = (uploadTask.snapshot.bytesTransferred / uploadTask.snapshot.totalBytes) * 100;
            }, (error) => {
                reject(error);
            }, () => {
                resolve(uploadTask.snapshot.downloadURL);
            });
        });
        return promise;
    }
    saveFileData(uploadedFilePath) {
        const promise = new Promise((resolve, reject) => {
            this.db.collection('users').doc(this.userId).update({
                photo: uploadedFilePath
            }).then(() => {
                resolve(1);
            }).catch(err => {
                reject(err);
            });
        });
        return promise;
    }
};
ProfileProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
], ProfileProvider);

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 208:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 208;

/***/ }),

/***/ 250:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/add-adopt-pet/add-adopt-pet.module": [
		599,
		47
	],
	"../pages/add-for-sale-pet/add-for-sale-pet.module": [
		601,
		46
	],
	"../pages/add-lost-pet-form/add-lost-pet-form.module": [
		600,
		45
	],
	"../pages/add-vaccination-schedule-form/add-vaccination-schedule-form.module": [
		602,
		44
	],
	"../pages/admin-add-groom-pet/admin-add-groom-pet.module": [
		603,
		43
	],
	"../pages/admin-add-train-pet/admin-add-train-pet.module": [
		624,
		42
	],
	"../pages/admin-buy-and-sell/admin-buy-and-sell.module": [
		604,
		8
	],
	"../pages/admin-groom-pet/admin-groom-pet.module": [
		605,
		25
	],
	"../pages/admin-home/admin-home.module": [
		606,
		7
	],
	"../pages/admin-lost-pets/admin-lost-pets.module": [
		607,
		6
	],
	"../pages/admin-registered-user/admin-registered-user.module": [
		608,
		5
	],
	"../pages/admin-train-pet/admin-train-pet.module": [
		609,
		24
	],
	"../pages/admin-view-profile/admin-view-profile.module": [
		610,
		41
	],
	"../pages/admin-view-user-registered-pets/admin-view-user-registered-pets.module": [
		611,
		40
	],
	"../pages/adopt-pet-details/adopt-pet-details.module": [
		612,
		39
	],
	"../pages/adoption/adoption.module": [
		613,
		4
	],
	"../pages/buy-pet-details/buy-pet-details.module": [
		614,
		38
	],
	"../pages/chat-list/chat-list.module": [
		615,
		23
	],
	"../pages/chat-notif-fab/chat-notif-fab.module": [
		598,
		22
	],
	"../pages/chat-single/chat-single.module": [
		616,
		21
	],
	"../pages/edit-adopt-pet/edit-adopt-pet.module": [
		617,
		37
	],
	"../pages/edit-for-sale-pet/edit-for-sale-pet.module": [
		618,
		36
	],
	"../pages/edit-groom-pet/edit-groom-pet.module": [
		619,
		35
	],
	"../pages/edit-lost-pet/edit-lost-pet.module": [
		620,
		34
	],
	"../pages/edit-registered-pet/edit-registered-pet.module": [
		621,
		33
	],
	"../pages/edit-train-pet/edit-train-pet.module": [
		622,
		32
	],
	"../pages/edit-vaccination-sched/edit-vaccination-sched.module": [
		623,
		31
	],
	"../pages/editprofile/editprofile.module": [
		634,
		30
	],
	"../pages/forgot-pass/forgot-pass.module": [
		625,
		20
	],
	"../pages/groompet/groompet.module": [
		626,
		19
	],
	"../pages/home/home.module": [
		627,
		18
	],
	"../pages/login/login.module": [
		628,
		17
	],
	"../pages/lost-pet-details/lost-pet-details.module": [
		629,
		29
	],
	"../pages/lostpets/lostpets.module": [
		630,
		3
	],
	"../pages/notif-fab/notif-fab.module": [
		631,
		16
	],
	"../pages/other/other.module": [
		633,
		2
	],
	"../pages/pet/pet.module": [
		632,
		1
	],
	"../pages/place-detail/place-detail.module": [
		644,
		28
	],
	"../pages/profile/profile.module": [
		635,
		15
	],
	"../pages/register-pet-form/register-pet-form.module": [
		636,
		27
	],
	"../pages/register/register.module": [
		637,
		14
	],
	"../pages/registered-pet-details/registered-pet-details.module": [
		638,
		26
	],
	"../pages/registerpet-single/registerpet-single.module": [
		639,
		13
	],
	"../pages/registerpets/registerpets.module": [
		640,
		0
	],
	"../pages/searchvet/searchvet.module": [
		641,
		12
	],
	"../pages/tabs/tabs.module": [
		642,
		11
	],
	"../pages/trainpets/trainpets.module": [
		643,
		10
	],
	"../pages/vaccination-schedule/vaccination-schedule.module": [
		645,
		9
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 250;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 344:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_firestore__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase_firestore__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




let AuthProvider = class AuthProvider {
    constructor(http) {
        this.http = http;
        this.db = __WEBPACK_IMPORTED_MODULE_2_firebase__["firestore"]();
        console.log('Hello AuthProvider Provider', this.db);
    }
    login(email, password) {
        const promise = new Promise((resolve, reject) => {
            __WEBPACK_IMPORTED_MODULE_2_firebase__["auth"]().signInWithEmailAndPassword(email, password).then(res => {
                resolve(res);
            }).catch(err => {
                reject(err);
            });
        });
        return promise;
    }
    capitalize(str) {
        var wordCount = str.split(' ');
        var upperStr = '';
        for (let x = 0; x <= wordCount.length - 1; x++) {
            if (x > 0) {
                upperStr += ' ';
            }
            upperStr += wordCount[x].charAt(0).toUpperCase() + wordCount[x].slice(1).toLowerCase();
        }
        return upperStr;
    }
    register(userData) {
        const promise = new Promise((resolve, reject) => {
            __WEBPACK_IMPORTED_MODULE_2_firebase__["auth"]().createUserWithEmailAndPassword(userData['email'], userData['password']).then(user => {
                resolve(user['uid']);
            }).catch((err) => {
                reject(err);
            });
        });
        return promise;
    }
    saveRegisteredUser(userId, userData) {
        const promise = new Promise((resolve, reject) => {
            userData['phone'] = '';
            userData['address'] = '';
            userData['photo'] = '';
            userData['isAdmin'] = 0;
            userData['adminSwitchUser'] = 0;
            userData['uid'] = userId;
            userData['dateAdded'] = __WEBPACK_IMPORTED_MODULE_2_firebase__["firestore"].FieldValue.serverTimestamp();
            this.db.collection('users').doc(userId).set(userData).then(() => {
                resolve(1);
            }).catch((err) => {
                reject(err);
            });
        });
        return promise;
    }
    sendEmailVerification() {
        const promise = new Promise((resolve, reject) => {
            __WEBPACK_IMPORTED_MODULE_2_firebase__["auth"]().onAuthStateChanged((user) => {
                user.sendEmailVerification().then(data => {
                    resolve(data);
                }).catch(err => {
                    resolve(err);
                });
            });
        });
        return promise;
    }
    isAuthenticated() {
        const promise = new Promise((resolve, reject) => {
            __WEBPACK_IMPORTED_MODULE_2_firebase__["auth"]().onAuthStateChanged(user => {
                if (user) {
                    if (user['emailVerified']) {
                        resolve(1);
                    }
                    else {
                        resolve(0);
                    }
                }
                else {
                    resolve(0);
                }
            });
        });
        return promise;
    }
    logout() {
        const promise = new Promise((resolve, reject) => {
            __WEBPACK_IMPORTED_MODULE_2_firebase__["auth"]().signOut().then(res => {
                resolve(res);
            }).catch(err => {
                reject(err);
            });
        });
        return promise;
    }
    switchRole(userId, role) {
        const promise = new Promise((resolve, reject) => {
            this.db.collection('users').doc(userId).update({
                adminSwitchUser: role
            }).then(res => {
                resolve(1);
            }).catch(err => {
                reject(err);
            });
        });
        return promise;
    }
    loadProfile(userId) {
        const promise = new Promise((resolve, reject) => {
            this.db.collection('users').doc(userId).get().then(doc => {
                resolve(doc.data());
            }).catch(err => {
                reject(err);
            });
        });
        return promise;
    }
    forgotPass(email) {
        const promise = new Promise((resolve, reject) => {
            __WEBPACK_IMPORTED_MODULE_2_firebase__["auth"]().sendPasswordResetEmail(email).then(res => {
                resolve(1);
            }).catch(err => {
                reject(err);
            });
        });
        return promise;
    }
};
AuthProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
], AuthProvider);

//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 345:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BuyPetDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_buypet_buypet__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let BuyPetDetailsPage = class BuyPetDetailsPage {
    constructor(navCtrl, navParams, viewCtrl, buypetProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.buypetProvider = buypetProvider;
    }
    ionViewDidLoad() {
        console.log('navParams', this.navParams);
        this.name = this.navParams.get('name');
        this.breed = this.navParams.get('breed');
        this.color = this.navParams.get('color');
        this.gender = this.navParams.get('gender');
        this.vaccineDate = this.navParams.get('vaccineDate');
        this.remarks = this.navParams.get('remarks');
        this.ownerUid = this.navParams.get('uid');
        this.type = this.navParams.get('petType');
        this.getOwnerInfo();
    }
    getOwnerInfo() {
        this.buypetProvider.ownerInfo(this.ownerUid).then(owner => {
            this.ownerName = owner['name'];
            this.ownerEmail = owner['email'];
            this.ownerPhone = owner['phone'];
            this.ownerAddress = owner['address'];
        });
    }
    dismiss() {
        this.viewCtrl.dismiss();
    }
};
BuyPetDetailsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-buy-pet-details',template:/*ion-inline-start:"C:\Users\Sanchez\Dropbox\petApp\src\pages\buy-pet-details\buy-pet-details.html"*/'<ion-header>\n\n  <ion-toolbar>\n\n    <ion-title>\n\n      Pet Details\n\n    </ion-title>\n\n    <ion-buttons start>\n\n      <button ion-button (click)="dismiss()">\n\n        <span ion-text color="primary" showWhen="ios">Cancel</span>\n\n        <ion-icon name="md-close" showWhen="android, windows"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n<table class="profileTbl">\n\n  <tr>\n\n    <td>\n\n      <ion-icon name="paw"></ion-icon>\n\n    </td>\n\n    <td>\n\n      <strong>Name</strong>\n\n      <p>{{name}}</p>\n\n    </td>\n\n  </tr>\n\n  <tr>\n\n    <td>\n\n      <ion-icon name="checkbox-outline"></ion-icon>\n\n    </td>\n\n    <td>\n\n      <strong>Type</strong>\n\n      <p *ngIf="type == \'\' || type == undefined">N/A</p>\n\n      <p *ngIf="type">{{type}}</p>\n\n    </td>\n\n  </tr>\n\n  <tr>\n\n    <td>\n\n      <ion-icon name="bookmark"></ion-icon>\n\n    </td>\n\n    <td>\n\n      <strong>Breed</strong>\n\n      <p *ngIf="breed == \'\' || breed == null">N/A</p>\n\n      <p *ngIf="breed">{{breed}}</p>\n\n    </td>\n\n  </tr>\n\n  <tr>\n\n    <td>\n\n      <ion-icon name="color-fill"></ion-icon>\n\n    </td>\n\n    <td>\n\n      <strong>Color</strong>\n\n      <p *ngIf="color == \'\' || color == null">N/A</p>\n\n      <p *ngIf="color">{{color}}</p>\n\n    </td>\n\n  </tr>\n\n  <tr>\n\n    <td>\n\n      <ion-icon name="heart"></ion-icon>\n\n    </td>\n\n    <td>\n\n      <strong>Gender</strong>\n\n      <p *ngIf="gender == \'\' || gender == null">N/A</p>\n\n      <p *ngIf="gender">{{gender}}</p>\n\n    </td>\n\n  </tr>\n\n  <tr>\n\n    <td>\n\n      <ion-icon name="md-contact"></ion-icon>\n\n    </td>\n\n    <td>\n\n      <strong>Owner Name</strong>\n\n      <p *ngIf="ownerName == \'\' || ownerName == null">N/A</p>\n\n      <p *ngIf="ownerName">{{ownerName}}</p>\n\n    </td>\n\n  </tr>\n\n  <tr>\n\n    <td>\n\n      <ion-icon name="mail"></ion-icon>\n\n    </td>\n\n    <td>\n\n      <strong>Email Address</strong>\n\n      <p *ngIf="ownerEmail == \'\' || ownerEmail == null">N/A</p>\n\n      <p *ngIf="ownerEmail">{{ownerEmail}}</p>\n\n    </td>\n\n  </tr>\n\n  <tr>\n\n    <td>\n\n      <ion-icon name="call"></ion-icon>\n\n    </td>\n\n    <td>\n\n      <strong>Phone Number</strong>\n\n      <p *ngIf="ownerPhone == \'\' || ownerPhone == null">N/A</p>\n\n      <p *ngIf="ownerPhone">{{ownerPhone}}</p>\n\n    </td>\n\n  </tr>\n\n  <tr>\n\n    <td>\n\n      <ion-icon name="locate"></ion-icon>\n\n    </td>\n\n    <td>\n\n      <strong>Address</strong>\n\n      <p *ngIf="ownerAddress == \'\' || ownerAddress == null">N/A</p>\n\n      <p *ngIf="ownerAddress">{{ownerAddress}}</p>\n\n    </td>\n\n  </tr>\n\n  <tr>\n\n    <td>\n\n      <ion-icon name="information-circle"></ion-icon>\n\n    </td>\n\n    <td>\n\n      <strong>Remarks</strong>\n\n      <p *ngIf="remarks == \'\' || remarks == null">N/A</p>\n\n      <p *ngIf="remarks">{{remarks}}</p>\n\n    </td>\n\n  </tr>\n\n</table>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Sanchez\Dropbox\petApp\src\pages\buy-pet-details\buy-pet-details.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__providers_buypet_buypet__["a" /* BuypetProvider */]])
], BuyPetDetailsPage);

//# sourceMappingURL=buy-pet-details.js.map

/***/ }),

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddLostPetFormPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_lostpet_lostpet__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_clarifai__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_clarifai___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_clarifai__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






const app = new __WEBPACK_IMPORTED_MODULE_4_clarifai__["App"]({
    apiKey: 'b1c9abe51ae7422a8cf6f0977081d9aa'
});
let AddLostPetFormPage = class AddLostPetFormPage {
    constructor(navCtrl, navParams, viewCtrl, loadingCtrl, toastCtrl, lostpetProvider, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.lostpetProvider = lostpetProvider;
        this.alertCtrl = alertCtrl;
        this.image = '';
        this.name = '';
        this.petType = '';
        this.breed = '';
        this.color = '';
        this.age = '';
        this.gender = '';
        this.placeLost = '';
        this.lostDate = '';
        this.remarks = '';
        this.isSubmitting = false;
        this.imageCtrl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('');
        this.nameCtrl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required);
        this.breedCtrl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required);
        this.colorCtrl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required);
        this.ageCtrl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required);
        this.genderCtrl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required);
        this.placeLostCtrl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required);
        this.petTypeCtrl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required);
        this.lostDateCtrl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('');
        this.remarksCtrl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('');
        this.addLostPetForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormGroup */]({
            image: this.imageCtrl,
            name: this.nameCtrl,
            petType: this.petTypeCtrl,
            breed: this.breedCtrl,
            color: this.colorCtrl,
            age: this.ageCtrl,
            gender: this.genderCtrl,
            placeLost: this.placeLostCtrl,
            lostDate: this.lostDateCtrl,
            remarks: this.remarksCtrl
        });
    }
    dismiss() {
        this.viewCtrl.dismiss();
    }
    capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    }
    petPicUploadEvent(event) {
        let loading = this.loadingCtrl.create({
            content: 'Uploading your pet photo...'
        });
        loading.present();
        let imageType = ['image/gif', 'image/png', 'image/jpeg', 'image/bmp', 'image/webp'];
        if (imageType.indexOf(event.target.files.item(0)['type']) != -1) {
            this.lostpetProvider.uploadPhoto(event.target.files.item(0)).then(photo => {
                app.models.predict(__WEBPACK_IMPORTED_MODULE_4_clarifai__["GENERAL_MODEL"], photo).then(res => {
                    let tagArray = res.rawData.outputs[0].data.concepts;
                    let isValid = 0;
                    for (var other = 0; other < tagArray.length; other++) {
                        if (tagArray[other].name == 'dog' || tagArray[other].name == 'cat') {
                            isValid = 1;
                            let name = tagArray[other].name;
                            this.petType = this.capitalizeFirstLetter(name);
                        }
                    }
                    if (isValid) {
                        console.log('tagArray', tagArray);
                        let html = "We have analyzed your uploaded image, to help you describe the pet photo that you have uploaded, here’s our prediction.";
                        html += '<ul class="predictUl">';
                        html += '<li><span class="title01">PREDICTED CONCEPT</span><span class="title02">PROBABILITY</span></li>';
                        for (var other = 0; other < tagArray.length; other++) {
                            if (other < 10) {
                                html += '<li><span class="name">' + tagArray[other].name + '</span> <span class="value">' + tagArray[other].value + '</span></li>';
                            }
                        }
                        html += '</ul>';
                        let alert = this.alertCtrl.create({
                            title: '',
                            subTitle: html,
                            buttons: ['OK']
                        });
                        alert.present();
                        this.image = photo;
                        loading.dismiss();
                        let toast = this.toastCtrl.create({
                            message: 'Photo was uploaded',
                            duration: 5000,
                            position: 'bottom'
                        });
                    }
                    else {
                        loading.dismiss();
                        let toast = this.toastCtrl.create({
                            message: 'Upload failed, pet photo must be a cat or dog',
                            duration: 5000,
                            position: 'bottom'
                        });
                        toast.present();
                    }
                }, err => {
                    loading.dismiss();
                    let toast = this.toastCtrl.create({
                        message: err.message,
                        duration: 5000,
                        position: 'bottom'
                    });
                    toast.present();
                });
            }).catch(err => {
                loading.dismiss();
                let toast = this.toastCtrl.create({
                    message: err.message,
                    duration: 5000,
                    position: 'bottom'
                });
                toast.present();
            });
        }
        else {
            loading.dismiss();
            let toast = this.toastCtrl.create({
                message: 'Invalid file type, only allowed file types are gif, png, jpeg, bmp, webp',
                duration: 5000,
                position: 'bottom'
            });
            toast.present();
        }
    }
    petLostSubmit() {
        this.isSubmitting = true;
        if (this.addLostPetForm.valid) {
            console.log('valid');
            let petInfo = {
                name: this.name,
                petType: this.petType,
                image: this.image,
                breed: this.breed,
                color: this.color,
                age: this.age,
                gender: this.gender,
                placeLost: this.placeLost,
                lostDate: this.lostDate,
                remarks: this.remarks,
            };
            this.lostpetProvider.saveLostPet(petInfo).then(res => {
                this.isSubmitting = false;
                this.viewCtrl.dismiss();
                let toast = this.toastCtrl.create({
                    message: 'Lost pet was posted',
                    duration: 4000,
                    position: 'bottom'
                });
                toast.present();
            }).catch(err => {
                console.log('err', err);
                this.isSubmitting = false;
                let toast = this.toastCtrl.create({
                    message: err.message,
                    duration: 4000,
                    position: 'bottom'
                });
                toast.present();
            });
        }
        else {
            this.isSubmitting = false;
            let toast = this.toastCtrl.create({
                message: 'Post failed, please fill up all required fields',
                duration: 4000,
                position: 'bottom'
            });
            toast.present();
        }
    }
};
AddLostPetFormPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-add-lost-pet-form',template:/*ion-inline-start:"C:\Users\Sanchez\Dropbox\petApp\src\pages\add-lost-pet-form\add-lost-pet-form.html"*/'<ion-header>\n\n  <ion-toolbar>\n\n    <ion-title>\n\n      Add Lost Pet\n\n    </ion-title>\n\n    <ion-buttons start>\n\n      <button ion-button (click)="dismiss()">\n\n        <span ion-text color="primary" showWhen="ios">Cancel</span>\n\n        <ion-icon name="md-close" showWhen="android, windows"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <div class="profileBlock">\n\n    <input type="file" hidden #petPicUpload name="petPicUpload" (change)="petPicUploadEvent($event)">\n\n    <img [src]="image != \'\' && image != null ? image : \'assets/images/icon.png\' " width="124" height="124"\n\n      alt="" (click)="petPicUpload.click()">\n\n    <ion-icon name="camera" class="camera" (click)="petPicUpload.click()"></ion-icon>\n\n  </div>\n\n\n\n  <form [formGroup]="addLostPetForm" (ngSubmit)="petLostSubmit()">\n\n    <ion-item hidden>\n\n      <ion-label floating>Image</ion-label>\n\n      <ion-input type="text" formControlName="image" [(ngModel)]="image" name="image"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label floating>Name</ion-label>\n\n      <ion-input type="text" formControlName="name" [(ngModel)]="name" name="name"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label floating>Pet Type</ion-label>\n\n      <ion-select formControlName="petType" [(ngModel)]="petType" name="gender">\n\n        <ion-option value="Dog">Dog</ion-option>\n\n        <ion-option value="Cat">Cat</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n  \n\n    <ion-item>\n\n      <ion-label floating>Breed</ion-label>\n\n      <ion-input type="text" formControlName="breed" [(ngModel)]="breed" name="breed"></ion-input>\n\n    </ion-item>\n\n  \n\n    <ion-item>\n\n      <ion-label floating>Color</ion-label>\n\n      <ion-input type="text" formControlName="color" [(ngModel)]="color" name="color"></ion-input>\n\n    </ion-item>\n\n  \n\n    <ion-item>\n\n      <ion-label floating>Age</ion-label>\n\n      <ion-input type="text" formControlName="age" [(ngModel)]="age" name="age"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label floating>Gender</ion-label>\n\n      <ion-select formControlName="gender" [(ngModel)]="gender" name="gender">\n\n        <ion-option value="Female">Female</ion-option>\n\n        <ion-option value="Male">Male</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label floating>Place of lost</ion-label>\n\n      <ion-input type="text" formControlName="placeLost" [(ngModel)]="placeLost" name="placeLost"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label floating>Lost Date</ion-label>\n\n      <ion-datetime displayFormat="MM/DD/YYYY" formControlName="lostDate" [(ngModel)]="lostDate" name="lostDate"></ion-datetime>\n\n    </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label floating>Remarks</ion-label>\n\n        <ion-textarea type="text" formControlName="remarks" [(ngModel)]="remarks" name="remarks"></ion-textarea>\n\n      </ion-item>\n\n  \n\n    <button ion-button type="submit" class="btnSave" [disabled]="isSubmitting">\n\n      <ion-spinner name="crescent" *ngIf="isSubmitting"></ion-spinner>\n\n      <ion-icon name="cloud-download" *ngIf="isSubmitting == false"></ion-icon> &nbsp; Save</button>\n\n  </form>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Sanchez\Dropbox\petApp\src\pages\add-lost-pet-form\add-lost-pet-form.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_lostpet_lostpet__["a" /* LostpetProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
], AddLostPetFormPage);

//# sourceMappingURL=add-lost-pet-form.js.map

/***/ }),

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddForSalePetPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_buypet_buypet__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_clarifai__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_clarifai___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_clarifai__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





const app = new __WEBPACK_IMPORTED_MODULE_4_clarifai__["App"]({
    apiKey: 'b1c9abe51ae7422a8cf6f0977081d9aa'
});
let AddForSalePetPage = class AddForSalePetPage {
    constructor(navCtrl, navParams, viewCtrl, loadingCtrl, buypetProvider, toastCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.loadingCtrl = loadingCtrl;
        this.buypetProvider = buypetProvider;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.image = '';
        this.name = '';
        this.price = '';
        this.petType = '';
        this.breed = '';
        this.color = '';
        this.age = '';
        this.gender = '';
        this.vaccineDate = '';
        this.remarks = '';
        this.isSubmitting = false;
        this.nameCtrl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required);
        this.priceCtrl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required);
        this.petTypeCtrl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required);
        this.breedCtrl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required);
        this.colorCtrl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required);
        this.ageCtrl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required);
        this.genderCtrl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required);
        this.vaccineDateCtrl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('');
        this.remarksCtrl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('');
        this.imageCtrl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('');
        this.addForSalePet = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormGroup */]({
            image: this.imageCtrl,
            name: this.nameCtrl,
            price: this.priceCtrl,
            petType: this.petTypeCtrl,
            breed: this.breedCtrl,
            color: this.colorCtrl,
            age: this.ageCtrl,
            gender: this.genderCtrl,
            vaccineDate: this.vaccineDateCtrl,
            remarks: this.remarksCtrl
        });
    }
    addForSalePetSubmit() {
        this.isSubmitting = true;
        if (this.addForSalePet.valid) {
            let petInfo = {
                name: this.name,
                image: this.image,
                price: this.price,
                petType: this.petType,
                breed: this.breed,
                color: this.color,
                age: this.age,
                gender: this.gender,
                vaccineDate: this.vaccineDate,
                remarks: this.remarks,
                isactive: true,
                interestedCount: 0,
                interestedUsers: []
            };
            this.buypetProvider.saveLostPet(petInfo).then(res => {
                this.isSubmitting = false;
                this.viewCtrl.dismiss();
                let toast = this.toastCtrl.create({
                    message: 'Pet was posted',
                    duration: 4000,
                    position: 'bottom'
                });
                toast.present();
            }).catch(err => {
                console.log('err', err);
                this.isSubmitting = false;
                let toast = this.toastCtrl.create({
                    message: err.message,
                    duration: 4000,
                    position: 'bottom'
                });
                toast.present();
            });
        }
        else {
            this.isSubmitting = false;
            let toast = this.toastCtrl.create({
                message: 'Post failed, please fill up all required fields',
                duration: 4000,
                position: 'bottom'
            });
            toast.present();
        }
    }
    dismiss() {
        this.viewCtrl.dismiss();
    }
    capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    }
    petPicUploadEvent(event) {
        let loading = this.loadingCtrl.create({
            content: 'Uploading your pet photo...'
        });
        loading.present();
        let imageType = ['image/gif', 'image/png', 'image/jpeg', 'image/bmp', 'image/webp'];
        if (imageType.indexOf(event.target.files.item(0)['type']) != -1) {
            this.buypetProvider.uploadPhoto(event.target.files.item(0)).then(photo => {
                console.log('photo', photo);
                app.models.predict(__WEBPACK_IMPORTED_MODULE_4_clarifai__["GENERAL_MODEL"], photo).then(res => {
                    let tagArray = res.rawData.outputs[0].data.concepts;
                    let isValid = 0;
                    for (var other = 0; other < tagArray.length; other++) {
                        if (tagArray[other].name == 'dog' || tagArray[other].name == 'cat') {
                            isValid = 1;
                            let name = tagArray[other].name;
                            this.petType = this.capitalizeFirstLetter(name);
                        }
                    }
                    if (isValid) {
                        console.log('tagArray', tagArray);
                        let html = "We have analyzed your uploaded image, to help you describe the pet photo that you have uploaded, here’s our prediction.";
                        html += '<ul class="predictUl">';
                        html += '<li><span class="title01">PREDICTED CONCEPT</span><span class="title02">PROBABILITY</span></li>';
                        for (var other = 0; other < tagArray.length; other++) {
                            if (other < 10) {
                                html += '<li><span class="name">' + tagArray[other].name + '</span> <span class="value">' + tagArray[other].value + '</span></li>';
                            }
                        }
                        html += '</ul>';
                        let alert = this.alertCtrl.create({
                            title: '',
                            subTitle: html,
                            buttons: ['OK']
                        });
                        alert.present();
                        this.image = photo;
                        loading.dismiss();
                        let toast = this.toastCtrl.create({
                            message: 'Photo was uploaded',
                            duration: 5000,
                            position: 'bottom'
                        });
                    }
                    else {
                        loading.dismiss();
                        let toast = this.toastCtrl.create({
                            message: 'Upload failed, pet photo must be a cat or dog',
                            duration: 5000,
                            position: 'bottom'
                        });
                        toast.present();
                    }
                }, err => {
                    loading.dismiss();
                    let toast = this.toastCtrl.create({
                        message: err.message,
                        duration: 5000,
                        position: 'bottom'
                    });
                    toast.present();
                });
            }).catch(err => {
                loading.dismiss();
                let toast = this.toastCtrl.create({
                    message: err.message,
                    duration: 5000,
                    position: 'bottom'
                });
                toast.present();
            });
        }
        else {
            loading.dismiss();
            let toast = this.toastCtrl.create({
                message: 'Invalid file type, only allowed file types are gif, png, jpeg, bmp, webp',
                duration: 5000,
                position: 'bottom'
            });
            toast.present();
        }
    }
};
AddForSalePetPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-add-for-sale-pet',template:/*ion-inline-start:"C:\Users\Sanchez\Dropbox\petApp\src\pages\add-for-sale-pet\add-for-sale-pet.html"*/'<ion-header>\n\n  <ion-toolbar>\n\n    <ion-title>\n\n      Post your pet\n\n    </ion-title>\n\n    <ion-buttons start>\n\n      <button ion-button (click)="dismiss()">\n\n        <span ion-text color="primary" showWhen="ios">Cancel</span>\n\n        <ion-icon name="md-close" showWhen="android, windows"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <div class="profileBlock">\n\n    <input type="file" hidden #petPicUpload name="petPicUpload" (change)="petPicUploadEvent($event)">\n\n    <img [src]="image != \'\' && image != null ? image : \'assets/images/icon.png\' " width="124" height="124"\n\n      alt="" (click)="petPicUpload.click()">\n\n    <ion-icon name="camera" class="camera" (click)="petPicUpload.click()"></ion-icon>\n\n  </div>\n\n\n\n  <form [formGroup]="addForSalePet" (ngSubmit)="addForSalePetSubmit()">\n\n    <ion-item hidden>\n\n      <ion-label floating>Image</ion-label>\n\n      <ion-input type="text" formControlName="image" [(ngModel)]="image" name="image"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label floating>What are you selling</ion-label>\n\n      <ion-input type="text" formControlName="name" [(ngModel)]="name" name="name"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label floating>Price in Peso</ion-label>\n\n      <ion-input type="number" formControlName="price" [(ngModel)]="price" name="price"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label floating>Pet Type</ion-label>\n\n      <ion-select formControlName="petType" [(ngModel)]="petType" name="petType">\n\n        <ion-option value="Dog">Dog</ion-option>\n\n        <ion-option value="Cat">Cat</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n  \n\n    <ion-item>\n\n      <ion-label floating>Breed</ion-label>\n\n      <ion-input type="text" formControlName="breed" [(ngModel)]="breed" name="breed"></ion-input>\n\n    </ion-item>\n\n  \n\n    <ion-item>\n\n      <ion-label floating>Color</ion-label>\n\n      <ion-input type="text" formControlName="color" [(ngModel)]="color" name="color"></ion-input>\n\n    </ion-item>\n\n  \n\n    <ion-item>\n\n      <ion-label floating>Age</ion-label>\n\n      <ion-input type="text" formControlName="age" [(ngModel)]="age" name="age"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label floating>Gender</ion-label>\n\n      <ion-select formControlName="gender" [(ngModel)]="gender" name="gender">\n\n        <ion-option value="Female">Female</ion-option>\n\n        <ion-option value="Male">Male</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label floating>Date of last vaccine</ion-label>\n\n      <ion-datetime displayFormat="MM/DD/YYYY" formControlName="vaccineDate" [(ngModel)]="vaccineDate" name="vaccineDate"></ion-datetime>\n\n    </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label floating>Remarks</ion-label>\n\n        <ion-textarea type="text" formControlName="remarks" [(ngModel)]="remarks" name="remarks"></ion-textarea>\n\n      </ion-item>\n\n  \n\n    <button ion-button type="submit" class="btnSave" [disabled]="isSubmitting">\n\n      <ion-spinner name="crescent" *ngIf="isSubmitting"></ion-spinner>\n\n      <ion-icon name="cloud-download" *ngIf="isSubmitting == false"></ion-icon> &nbsp; Save</button>\n\n  </form>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Sanchez\Dropbox\petApp\src\pages\add-for-sale-pet\add-for-sale-pet.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_buypet_buypet__["a" /* BuypetProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
], AddForSalePetPage);

//# sourceMappingURL=add-for-sale-pet.js.map

/***/ }),

/***/ 348:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditForSalePetPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_buypet_buypet__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_clarifai__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_clarifai___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_clarifai__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





const app = new __WEBPACK_IMPORTED_MODULE_4_clarifai__["App"]({
    apiKey: 'b1c9abe51ae7422a8cf6f0977081d9aa'
});
let EditForSalePetPage = class EditForSalePetPage {
    constructor(navCtrl, navParams, viewCtrl, loadingCtrl, buypetProvider, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.loadingCtrl = loadingCtrl;
        this.buypetProvider = buypetProvider;
        this.toastCtrl = toastCtrl;
        this.image = '';
        this.name = '';
        this.price = '';
        this.petType = '';
        this.breed = '';
        this.color = '';
        this.age = '';
        this.gender = '';
        this.vaccineDate = '';
        this.remarks = '';
        this.isSubmitting = false;
        this.nameCtrl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required);
        this.priceCtrl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required);
        this.petTypeCtrl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required);
        this.breedCtrl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required);
        this.colorCtrl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required);
        this.ageCtrl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required);
        this.genderCtrl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required);
        this.vaccineDateCtrl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('');
        this.remarksCtrl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('');
        this.imageCtrl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('');
        this.addForSalePet = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormGroup */]({
            image: this.imageCtrl,
            name: this.nameCtrl,
            price: this.priceCtrl,
            petType: this.petTypeCtrl,
            breed: this.breedCtrl,
            color: this.colorCtrl,
            age: this.ageCtrl,
            gender: this.genderCtrl,
            vaccineDate: this.vaccineDateCtrl,
            remarks: this.remarksCtrl
        });
        this.petId = this.navParams.get('petId');
        this.getPetInfo();
    }
    getPetInfo() {
        this.buypetProvider.getPetInfo(this.petId).then(pet => {
            this.image = pet['image'];
            this.name = pet['name'];
            this.price = pet['price'];
            this.petType = pet['petType'];
            this.breed = pet['breed'];
            this.color = pet['color'];
            this.age = pet['age'];
            this.gender = pet['gender'];
            this.vaccineDate = pet['vaccineDate'];
            this.remarks = pet['remarks'];
        }).catch(err => {
            console.log('err', err);
        });
    }
    addForSalePetSubmit() {
        this.isSubmitting = true;
        if (this.addForSalePet.valid) {
            let petInfo = {
                name: this.name,
                image: this.image,
                price: this.price,
                petType: this.petType,
                breed: this.breed,
                color: this.color,
                age: this.age,
                gender: this.gender,
                vaccineDate: this.vaccineDate,
                remarks: this.remarks,
                isactive: true,
            };
            this.buypetProvider.saveUpdatedPetInfo(petInfo, this.petId).then(res => {
                this.isSubmitting = false;
                this.viewCtrl.dismiss();
                let toast = this.toastCtrl.create({
                    message: 'Updates was posted',
                    duration: 4000,
                    position: 'bottom'
                });
                toast.present();
            }).catch(err => {
                console.log('err', err);
                this.isSubmitting = false;
                let toast = this.toastCtrl.create({
                    message: err.message,
                    duration: 4000,
                    position: 'bottom'
                });
                toast.present();
            });
        }
        else {
            this.isSubmitting = false;
            let toast = this.toastCtrl.create({
                message: 'Post failed, please fill up all required fields',
                duration: 4000,
                position: 'bottom'
            });
            toast.present();
        }
    }
    dismiss() {
        this.viewCtrl.dismiss();
    }
    capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    }
    petPicUploadEvent(event) {
        let loading = this.loadingCtrl.create({
            content: 'Uploading your pet photo...'
        });
        loading.present();
        this.buypetProvider.uploadPhoto(event.target.files.item(0)).then(photo => {
            app.models.predict(__WEBPACK_IMPORTED_MODULE_4_clarifai__["GENERAL_MODEL"], photo).then(res => {
                let tagArray = res.rawData.outputs[0].data.concepts;
                let isValid = 0;
                for (var other = 0; other < tagArray.length; other++) {
                    if (tagArray[other].name == 'dog' || tagArray[other].name == 'cat') {
                        isValid = 1;
                        let name = tagArray[other].name;
                        this.petType = this.capitalizeFirstLetter(name);
                    }
                }
                if (isValid) {
                    app.models.predict(__WEBPACK_IMPORTED_MODULE_4_clarifai__["COLOR_MODEL"], photo).then(res => {
                        let tagArray = res.rawData.outputs[0].data.colors;
                        this.color = tagArray[0].w3c.name;
                        this.image = photo;
                        loading.dismiss();
                        let toast = this.toastCtrl.create({
                            message: 'Photo was uploaded',
                            duration: 5000,
                            position: 'bottom'
                        });
                    }, err => {
                        loading.dismiss();
                        let toast = this.toastCtrl.create({
                            message: err.message,
                            duration: 5000,
                            position: 'bottom'
                        });
                        toast.present();
                    });
                }
                else {
                    loading.dismiss();
                    let toast = this.toastCtrl.create({
                        message: 'Upload failed, pet photo must be a cat or dog',
                        duration: 5000,
                        position: 'bottom'
                    });
                    toast.present();
                }
            }, err => {
                loading.dismiss();
                let toast = this.toastCtrl.create({
                    message: err.message,
                    duration: 5000,
                    position: 'bottom'
                });
                toast.present();
            });
        }).catch(err => {
            loading.dismiss();
            let toast = this.toastCtrl.create({
                message: err.message,
                duration: 5000,
                position: 'bottom'
            });
            toast.present();
        });
    }
};
EditForSalePetPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-edit-for-sale-pet',template:/*ion-inline-start:"C:\Users\Sanchez\Dropbox\petApp\src\pages\edit-for-sale-pet\edit-for-sale-pet.html"*/'<ion-header>\n\n    <ion-toolbar>\n\n      <ion-title>\n\n        Edit Pet Details\n\n      </ion-title>\n\n      <ion-buttons start>\n\n        <button ion-button (click)="dismiss()">\n\n          <span ion-text color="primary" showWhen="ios">Cancel</span>\n\n          <ion-icon name="md-close" showWhen="android, windows"></ion-icon>\n\n        </button>\n\n      </ion-buttons>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n  \n\n  <ion-content padding>\n\n    <div class="profileBlock">\n\n      <input type="file" hidden #petPicUpload name="petPicUpload" (change)="petPicUploadEvent($event)">\n\n      <img [src]="image != \'\' && image != null ? image : \'assets/images/icon.png\' " width="124" height="124"\n\n        alt="" (click)="petPicUpload.click()">\n\n      <ion-icon name="camera" class="camera" (click)="petPicUpload.click()"></ion-icon>\n\n    </div>\n\n  \n\n    <form [formGroup]="addForSalePet" (ngSubmit)="addForSalePetSubmit()">\n\n      <ion-item hidden>\n\n        <ion-label floating>Image</ion-label>\n\n        <ion-input type="text" formControlName="image" [(ngModel)]="image" name="image"></ion-input>\n\n      </ion-item>\n\n  \n\n      <ion-item>\n\n        <ion-label floating>Name</ion-label>\n\n        <ion-input type="text" formControlName="name" [(ngModel)]="name" name="name"></ion-input>\n\n      </ion-item>\n\n  \n\n      <ion-item>\n\n        <ion-label floating>Price in Peso</ion-label>\n\n        <ion-input type="number" formControlName="price" [(ngModel)]="price" name="price"></ion-input>\n\n      </ion-item>\n\n  \n\n      <ion-item>\n\n        <ion-label floating>Pet Type</ion-label>\n\n        <ion-select formControlName="petType" [(ngModel)]="petType" name="petType">\n\n          <ion-option value="Dog">Dog</ion-option>\n\n          <ion-option value="Cat">Cat</ion-option>\n\n        </ion-select>\n\n      </ion-item>\n\n    \n\n      <ion-item>\n\n        <ion-label floating>Breed</ion-label>\n\n        <ion-input type="text" formControlName="breed" [(ngModel)]="breed" name="breed"></ion-input>\n\n      </ion-item>\n\n    \n\n      <ion-item>\n\n        <ion-label floating>Color</ion-label>\n\n        <ion-input type="text" formControlName="color" [(ngModel)]="color" name="color"></ion-input>\n\n      </ion-item>\n\n    \n\n      <ion-item>\n\n        <ion-label floating>Age</ion-label>\n\n        <ion-input type="text" formControlName="age" [(ngModel)]="age" name="age"></ion-input>\n\n      </ion-item>\n\n  \n\n      <ion-item>\n\n        <ion-label floating>Gender</ion-label>\n\n        <ion-select formControlName="gender" [(ngModel)]="gender" name="gender">\n\n          <ion-option value="Female">Female</ion-option>\n\n          <ion-option value="Male">Male</ion-option>\n\n        </ion-select>\n\n      </ion-item>\n\n  \n\n      <ion-item>\n\n        <ion-label floating>Date of last vaccine</ion-label>\n\n        <ion-datetime displayFormat="MM/DD/YYYY" formControlName="vaccineDate" [(ngModel)]="vaccineDate" name="vaccineDate"></ion-datetime>\n\n      </ion-item>\n\n  \n\n        <ion-item>\n\n          <ion-label floating>Remarks</ion-label>\n\n          <ion-textarea type="text" formControlName="remarks" [(ngModel)]="remarks" name="remarks"></ion-textarea>\n\n        </ion-item>\n\n    \n\n      <button ion-button type="submit" class="btnSave" [disabled]="isSubmitting">\n\n        <ion-spinner name="crescent" *ngIf="isSubmitting"></ion-spinner>\n\n        <ion-icon name="cloud-download" *ngIf="isSubmitting == false"></ion-icon> &nbsp; Save</button>\n\n    </form>\n\n  </ion-content>\n\n  '/*ion-inline-end:"C:\Users\Sanchez\Dropbox\petApp\src\pages\edit-for-sale-pet\edit-for-sale-pet.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_buypet_buypet__["a" /* BuypetProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */]])
], EditForSalePetPage);

//# sourceMappingURL=edit-for-sale-pet.js.map

/***/ }),

/***/ 349:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LostPetDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_lostpet_lostpet__ = __webpack_require__(95);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let LostPetDetailsPage = class LostPetDetailsPage {
    constructor(navCtrl, navParams, viewCtrl, lostpetProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.lostpetProvider = lostpetProvider;
    }
    ionViewDidLoad() {
        console.log('navParams', this.navParams);
        this.name = this.navParams.get('name');
        this.breed = this.navParams.get('breed');
        this.color = this.navParams.get('color');
        this.gender = this.navParams.get('gender');
        this.placeLost = this.navParams.get('placeLost');
        this.lostDate = this.navParams.get('lostDate');
        this.remarks = this.navParams.get('remarks');
        this.ownerUid = this.navParams.get('uid');
        this.type = this.navParams.get('petType');
        this.getOwnerInfo();
    }
    getOwnerInfo() {
        this.lostpetProvider.ownerInfo(this.ownerUid).then(owner => {
            this.ownerName = owner['name'];
            this.ownerEmail = owner['email'];
            this.ownerPhone = owner['phone'];
            this.ownerAddress = owner['address'];
        });
    }
    dismiss() {
        this.viewCtrl.dismiss();
    }
};
LostPetDetailsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-lost-pet-details',template:/*ion-inline-start:"C:\Users\Sanchez\Dropbox\petApp\src\pages\lost-pet-details\lost-pet-details.html"*/'<ion-header>\n\n  <ion-toolbar>\n\n    <ion-title>\n\n      Lost Pet Details\n\n    </ion-title>\n\n    <ion-buttons start>\n\n      <button ion-button (click)="dismiss()">\n\n        <span ion-text color="primary" showWhen="ios">Cancel</span>\n\n        <ion-icon name="md-close" showWhen="android, windows"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n<table class="profileTbl">\n\n  <tr>\n\n    <td>\n\n      <ion-icon name="paw"></ion-icon>\n\n    </td>\n\n    <td>\n\n      <strong>Name</strong>\n\n      <p>{{name}}</p>\n\n    </td>\n\n  </tr>\n\n  <tr>\n\n    <td>\n\n      <ion-icon name="checkbox-outline"></ion-icon>\n\n    </td>\n\n    <td>\n\n      <strong>Type</strong>\n\n      <p *ngIf="type == \'\' || type == undefined">N/A</p>\n\n      <p *ngIf="type">{{type}}</p>\n\n    </td>\n\n  </tr>\n\n  <tr>\n\n    <td>\n\n      <ion-icon name="bookmark"></ion-icon>\n\n    </td>\n\n    <td>\n\n      <strong>Breed</strong>\n\n      <p *ngIf="breed == \'\' || breed == null">N/A</p>\n\n      <p *ngIf="breed">{{breed}}</p>\n\n    </td>\n\n  </tr>\n\n  <tr>\n\n    <td>\n\n      <ion-icon name="color-fill"></ion-icon>\n\n    </td>\n\n    <td>\n\n      <strong>Color</strong>\n\n      <p *ngIf="color == \'\' || color == null">N/A</p>\n\n      <p *ngIf="color">{{color}}</p>\n\n    </td>\n\n  </tr>\n\n  <tr>\n\n    <td>\n\n      <ion-icon name="heart"></ion-icon>\n\n    </td>\n\n    <td>\n\n      <strong>Gender</strong>\n\n      <p *ngIf="gender == \'\' || gender == null">N/A</p>\n\n      <p *ngIf="gender">{{gender}}</p>\n\n    </td>\n\n  </tr>\n\n  <tr>\n\n    <td>\n\n      <ion-icon name="locate"></ion-icon>\n\n    </td>\n\n    <td>\n\n      <strong>Place of Lost</strong>\n\n      <p *ngIf="placeLost == \'\' || placeLost == null">N/A</p>\n\n      <p *ngIf="placeLost">{{placeLost}}</p>\n\n    </td>\n\n  </tr>\n\n  <tr>\n\n    <td>\n\n      <ion-icon name="calendar"></ion-icon>\n\n    </td>\n\n    <td>\n\n      <strong>Lost Date</strong>\n\n      <p *ngIf="lostDate == \'\' || lostDate == null">N/A</p>\n\n      <p *ngIf="lostDate">{{lostDate | date:\'mediumDate\'}}</p>\n\n    </td>\n\n  </tr>\n\n  <tr>\n\n    <td>\n\n      <ion-icon name="md-contact"></ion-icon>\n\n    </td>\n\n    <td>\n\n      <strong>Owner Name</strong>\n\n      <p *ngIf="ownerName == \'\' || ownerName == null">N/A</p>\n\n      <p *ngIf="ownerName">{{ownerName}}</p>\n\n    </td>\n\n  </tr>\n\n  <tr>\n\n    <td>\n\n      <ion-icon name="mail"></ion-icon>\n\n    </td>\n\n    <td>\n\n      <strong>Email Address</strong>\n\n      <p *ngIf="ownerEmail == \'\' || ownerEmail == null">N/A</p>\n\n      <p *ngIf="ownerEmail">{{ownerEmail}}</p>\n\n    </td>\n\n  </tr>\n\n  <tr>\n\n    <td>\n\n      <ion-icon name="call"></ion-icon>\n\n    </td>\n\n    <td>\n\n      <strong>Phone Number</strong>\n\n      <p *ngIf="ownerPhone == \'\' || ownerPhone == null">N/A</p>\n\n      <p *ngIf="ownerPhone">{{ownerPhone}}</p>\n\n    </td>\n\n  </tr>\n\n  <tr>\n\n    <td>\n\n      <ion-icon name="locate"></ion-icon>\n\n    </td>\n\n    <td>\n\n      <strong>Address</strong>\n\n      <p *ngIf="ownerAddress == \'\' || ownerAddress == null">N/A</p>\n\n      <p *ngIf="ownerAddress">{{ownerAddress}}</p>\n\n    </td>\n\n  </tr>\n\n  <tr>\n\n    <td>\n\n      <ion-icon name="information-circle"></ion-icon>\n\n    </td>\n\n    <td>\n\n      <strong>Remarks</strong>\n\n      <p *ngIf="remarks == \'\' || remarks == null">N/A</p>\n\n      <p *ngIf="remarks">{{remarks}}</p>\n\n    </td>\n\n  </tr>\n\n</table>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Sanchez\Dropbox\petApp\src\pages\lost-pet-details\lost-pet-details.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__providers_lostpet_lostpet__["a" /* LostpetProvider */]])
], LostPetDetailsPage);

//# sourceMappingURL=lost-pet-details.js.map

/***/ }),

/***/ 350:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditLostPetPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_lostpet_lostpet__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_clarifai__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_clarifai___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_clarifai__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






const app = new __WEBPACK_IMPORTED_MODULE_4_clarifai__["App"]({
    apiKey: 'b1c9abe51ae7422a8cf6f0977081d9aa'
});
let EditLostPetPage = class EditLostPetPage {
    constructor(navCtrl, navParams, viewCtrl, loadingCtrl, toastCtrl, lostpetProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.lostpetProvider = lostpetProvider;
        this.image = '';
        this.name = '';
        this.petType = '';
        this.breed = '';
        this.color = '';
        this.age = '';
        this.gender = '';
        this.placeLost = '';
        this.lostDate = '';
        this.remarks = '';
        this.isSubmitting = false;
        this.imageCtrl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('');
        this.nameCtrl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required);
        this.breedCtrl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required);
        this.colorCtrl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required);
        this.ageCtrl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required);
        this.genderCtrl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required);
        this.placeLostCtrl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required);
        this.petTypeCtrl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required);
        this.lostDateCtrl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('');
        this.remarksCtrl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('');
        this.addLostPetForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormGroup */]({
            image: this.imageCtrl,
            name: this.nameCtrl,
            petType: this.petTypeCtrl,
            breed: this.breedCtrl,
            color: this.colorCtrl,
            age: this.ageCtrl,
            gender: this.genderCtrl,
            placeLost: this.placeLostCtrl,
            lostDate: this.lostDateCtrl,
            remarks: this.remarksCtrl
        });
        this.petId = this.navParams.get('petId');
        this.getLostPetInfo();
    }
    getLostPetInfo() {
        this.lostpetProvider.getLostPetInfo(this.petId).then(pet => {
            this.image = pet['image'];
            this.name = pet['name'];
            this.petType = pet['petType'];
            this.breed = pet['breed'];
            this.color = pet['color'];
            this.age = pet['age'];
            this.gender = pet['gender'];
            this.placeLost = pet['placeLost'];
            this.lostDate = pet['lostDate'];
            this.remarks = pet['remarks'];
        }).catch(err => {
            console.log('err', err);
        });
    }
    dismiss() {
        this.viewCtrl.dismiss();
    }
    capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    }
    petPicUploadEvent(event) {
        let loading = this.loadingCtrl.create({
            content: 'Uploading your pet photo...'
        });
        loading.present();
        this.lostpetProvider.uploadPhoto(event.target.files.item(0)).then(photo => {
            app.models.predict(__WEBPACK_IMPORTED_MODULE_4_clarifai__["GENERAL_MODEL"], photo).then(res => {
                let tagArray = res.rawData.outputs[0].data.concepts;
                let isValid = 0;
                for (var other = 0; other < tagArray.length; other++) {
                    if (tagArray[other].name == 'dog' || tagArray[other].name == 'cat') {
                        isValid = 1;
                        let name = tagArray[other].name;
                        this.petType = this.capitalizeFirstLetter(name);
                    }
                }
                if (isValid) {
                    app.models.predict(__WEBPACK_IMPORTED_MODULE_4_clarifai__["COLOR_MODEL"], photo).then(res => {
                        let tagArray = res.rawData.outputs[0].data.colors;
                        this.color = tagArray[0].w3c.name;
                        this.image = photo;
                        loading.dismiss();
                        let toast = this.toastCtrl.create({
                            message: 'Photo was uploaded',
                            duration: 5000,
                            position: 'bottom'
                        });
                    }, err => {
                        loading.dismiss();
                        let toast = this.toastCtrl.create({
                            message: err.message,
                            duration: 5000,
                            position: 'bottom'
                        });
                        toast.present();
                    });
                }
                else {
                    loading.dismiss();
                    let toast = this.toastCtrl.create({
                        message: 'Upload failed, pet photo must be a cat or dog',
                        duration: 5000,
                        position: 'bottom'
                    });
                    toast.present();
                }
            }, err => {
                loading.dismiss();
                let toast = this.toastCtrl.create({
                    message: err.message,
                    duration: 5000,
                    position: 'bottom'
                });
                toast.present();
            });
        }).catch(err => {
            loading.dismiss();
            let toast = this.toastCtrl.create({
                message: err.message,
                duration: 5000,
                position: 'bottom'
            });
            toast.present();
        });
    }
    petLostSubmit() {
        this.isSubmitting = true;
        if (this.addLostPetForm.valid) {
            let petInfo = {
                name: this.name,
                petType: this.petType,
                image: this.image,
                breed: this.breed,
                color: this.color,
                age: this.age,
                gender: this.gender,
                placeLost: this.placeLost,
                lostDate: this.lostDate,
                remarks: this.remarks,
            };
            this.lostpetProvider.saveUpdates(petInfo, this.petId).then(res => {
                this.isSubmitting = false;
                this.viewCtrl.dismiss();
                let toast = this.toastCtrl.create({
                    message: 'Updates was posted',
                    duration: 4000,
                    position: 'bottom'
                });
                toast.present();
            }).catch(err => {
                console.log('err', err);
                this.isSubmitting = false;
                let toast = this.toastCtrl.create({
                    message: err.message,
                    duration: 4000,
                    position: 'bottom'
                });
                toast.present();
            });
        }
        else {
            this.isSubmitting = false;
            let toast = this.toastCtrl.create({
                message: 'Post failed, please fill up all required fields',
                duration: 4000,
                position: 'bottom'
            });
            toast.present();
        }
    }
};
EditLostPetPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-edit-lost-pet',template:/*ion-inline-start:"C:\Users\Sanchez\Dropbox\petApp\src\pages\edit-lost-pet\edit-lost-pet.html"*/'<ion-header>\n\n    <ion-toolbar>\n\n      <ion-title>\n\n        Edit Pet Details\n\n      </ion-title>\n\n      <ion-buttons start>\n\n        <button ion-button (click)="dismiss()">\n\n          <span ion-text color="primary" showWhen="ios">Cancel</span>\n\n          <ion-icon name="md-close" showWhen="android, windows"></ion-icon>\n\n        </button>\n\n      </ion-buttons>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n  \n\n  <ion-content padding>\n\n    <div class="profileBlock">\n\n      <input type="file" hidden #petPicUpload name="petPicUpload" (change)="petPicUploadEvent($event)">\n\n      <img [src]="image != \'\' && image != null ? image : \'assets/images/icon.png\' " width="124" height="124"\n\n        alt="" (click)="petPicUpload.click()">\n\n      <ion-icon name="camera" class="camera" (click)="petPicUpload.click()"></ion-icon>\n\n    </div>\n\n  \n\n    <form [formGroup]="addLostPetForm" (ngSubmit)="petLostSubmit()">\n\n      <ion-item hidden>\n\n        <ion-label floating>Image</ion-label>\n\n        <ion-input type="text" formControlName="image" [(ngModel)]="image" name="image"></ion-input>\n\n      </ion-item>\n\n  \n\n      <ion-item>\n\n        <ion-label floating>Name</ion-label>\n\n        <ion-input type="text" formControlName="name" [(ngModel)]="name" name="name"></ion-input>\n\n      </ion-item>\n\n  \n\n      <ion-item>\n\n        <ion-label floating>Pet Type</ion-label>\n\n        <ion-select formControlName="petType" [(ngModel)]="petType" name="gender">\n\n          <ion-option value="Dog">Dog</ion-option>\n\n          <ion-option value="Cat">Cat</ion-option>\n\n        </ion-select>\n\n      </ion-item>\n\n    \n\n      <ion-item>\n\n        <ion-label floating>Breed</ion-label>\n\n        <ion-input type="text" formControlName="breed" [(ngModel)]="breed" name="breed"></ion-input>\n\n      </ion-item>\n\n    \n\n      <ion-item>\n\n        <ion-label floating>Color</ion-label>\n\n        <ion-input type="text" formControlName="color" [(ngModel)]="color" name="color"></ion-input>\n\n      </ion-item>\n\n    \n\n      <ion-item>\n\n        <ion-label floating>Age</ion-label>\n\n        <ion-input type="text" formControlName="age" [(ngModel)]="age" name="age"></ion-input>\n\n      </ion-item>\n\n  \n\n      <ion-item>\n\n        <ion-label floating>Gender</ion-label>\n\n        <ion-select formControlName="gender" [(ngModel)]="gender" name="gender">\n\n          <ion-option value="Female">Female</ion-option>\n\n          <ion-option value="Male">Male</ion-option>\n\n        </ion-select>\n\n      </ion-item>\n\n  \n\n      <ion-item>\n\n        <ion-label floating>Place of lost</ion-label>\n\n        <ion-input type="text" formControlName="placeLost" [(ngModel)]="placeLost" name="placeLost"></ion-input>\n\n      </ion-item>\n\n  \n\n      <ion-item>\n\n        <ion-label floating>Lost Date</ion-label>\n\n        <ion-datetime displayFormat="MM/DD/YYYY" formControlName="lostDate" [(ngModel)]="lostDate" name="lostDate"></ion-datetime>\n\n      </ion-item>\n\n  \n\n        <ion-item>\n\n          <ion-label floating>Remarks</ion-label>\n\n          <ion-textarea type="text" formControlName="remarks" [(ngModel)]="remarks" name="remarks"></ion-textarea>\n\n        </ion-item>\n\n    \n\n      <button ion-button type="submit" class="btnSave" [disabled]="isSubmitting">\n\n        <ion-spinner name="crescent" *ngIf="isSubmitting"></ion-spinner>\n\n        <ion-icon name="cloud-download" *ngIf="isSubmitting == false"></ion-icon> &nbsp; Save</button>\n\n    </form>\n\n  </ion-content>\n\n  '/*ion-inline-end:"C:\Users\Sanchez\Dropbox\petApp\src\pages\edit-lost-pet\edit-lost-pet.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_lostpet_lostpet__["a" /* LostpetProvider */]])
], EditLostPetPage);

//# sourceMappingURL=edit-lost-pet.js.map

/***/ }),

/***/ 351:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditRegisteredPetPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_register_pet_register_pet__ = __webpack_require__(117);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




let EditRegisteredPetPage = class EditRegisteredPetPage {
    constructor(navCtrl, navParams, viewCtrl, loadingCtrl, registerPetProvider, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.loadingCtrl = loadingCtrl;
        this.registerPetProvider = registerPetProvider;
        this.toastCtrl = toastCtrl;
        this.image = '';
        this.name = '';
        this.petType = '';
        this.breed = '';
        this.color = '';
        this.age = '';
        this.gender = '';
        this.vaccineDate = '';
        this.remarks = '';
        this.isSubmitting = false;
        this.imageCtrl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('');
        this.nameCtrl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required);
        this.petTypeCtrl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required);
        this.breedCtrl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required);
        this.colorCtrl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required);
        this.ageCtrl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required);
        this.genderCtrl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required);
        this.vaccineDateCtrl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('');
        this.remarksCtrl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('');
        this.registerPetForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormGroup */]({
            image: this.imageCtrl,
            name: this.nameCtrl,
            petType: this.petTypeCtrl,
            breed: this.breedCtrl,
            color: this.colorCtrl,
            age: this.ageCtrl,
            gender: this.genderCtrl,
            vaccineDate: this.vaccineDateCtrl,
            remarks: this.remarksCtrl
        });
        this.petId = this.navParams.get('petId');
        console.log('this.petId', this.petId);
        this.getRegisterPetInfo();
    }
    getRegisterPetInfo() {
        this.registerPetProvider.getRegisterPetInfo(this.petId).then(pet => {
            this.image = pet['image'];
            this.name = pet['name'];
            this.petType = pet['petType'];
            this.breed = pet['breed'];
            this.color = pet['color'];
            this.age = pet['age'];
            this.gender = pet['gender'];
            this.vaccineDate = pet['vaccineDate'];
            this.remarks = pet['remarks'];
        }).catch(err => {
            console.log('err', err);
        });
    }
    dismiss() {
        this.viewCtrl.dismiss();
    }
    petPicUploadEvent(event) {
        let loading = this.loadingCtrl.create({
            content: 'Uploading your pet photo...'
        });
        loading.present();
        this.registerPetProvider.uploadPhoto(event.target.files.item(0)).then(photo => {
            console.log('photo', photo);
            this.image = photo;
            loading.dismiss();
            let toast = this.toastCtrl.create({
                message: 'Photo was uploaded',
                duration: 5000,
                position: 'bottom'
            });
        }).catch(err => {
            loading.dismiss();
            let toast = this.toastCtrl.create({
                message: err.message,
                duration: 5000,
                position: 'bottom'
            });
            toast.present();
        });
    }
    registerPetFormSubmit() {
        this.isSubmitting = true;
        if (this.registerPetForm.valid) {
            console.log('valid');
            let petInfo = {
                name: this.name,
                petType: this.petType,
                image: this.image,
                breed: this.breed,
                color: this.color,
                age: this.age,
                gender: this.gender,
                remarks: this.remarks,
                vaccineDate: this.vaccineDate
            };
            this.registerPetProvider.saveUpdates(petInfo, this.petId).then(res => {
                this.isSubmitting = false;
                this.viewCtrl.dismiss();
                let toast = this.toastCtrl.create({
                    message: 'Updates was saved',
                    duration: 4000,
                    position: 'bottom'
                });
                toast.present();
            }).catch(err => {
                console.log('err', err);
                this.isSubmitting = false;
                let toast = this.toastCtrl.create({
                    message: err.message,
                    duration: 4000,
                    position: 'bottom'
                });
                toast.present();
            });
        }
        else {
            this.isSubmitting = false;
            let toast = this.toastCtrl.create({
                message: 'Post failed, please fill up all required fields',
                duration: 4000,
                position: 'bottom'
            });
            toast.present();
        }
    }
};
EditRegisteredPetPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-edit-registered-pet',template:/*ion-inline-start:"C:\Users\Sanchez\Dropbox\petApp\src\pages\edit-registered-pet\edit-registered-pet.html"*/'<ion-header>\n\n    <ion-toolbar>\n\n      <ion-title>\n\n        Edit Pet Details\n\n      </ion-title>\n\n      <ion-buttons start>\n\n        <button ion-button (click)="dismiss()">\n\n          <span ion-text color="primary" showWhen="ios">Cancel</span>\n\n          <ion-icon name="md-close" showWhen="android, windows"></ion-icon>\n\n        </button>\n\n      </ion-buttons>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n  \n\n  <ion-content padding>\n\n    <div class="profileBlock">\n\n      <input type="file" hidden #petPicUpload name="petPicUpload" (change)="petPicUploadEvent($event)">\n\n      <img [src]="image != \'\' && image != null ? image : \'assets/images/icon.png\' " width="124" height="124"\n\n        alt="" (click)="petPicUpload.click()">\n\n      <ion-icon name="camera" class="camera" (click)="petPicUpload.click()"></ion-icon>\n\n    </div>\n\n  \n\n    <form [formGroup]="registerPetForm" (ngSubmit)="registerPetFormSubmit()">\n\n      <ion-item hidden>\n\n        <ion-label floating>Image</ion-label>\n\n        <ion-input type="text" formControlName="image" [(ngModel)]="image" name="image"></ion-input>\n\n      </ion-item>\n\n  \n\n      <ion-item>\n\n        <ion-label floating>Name</ion-label>\n\n        <ion-input type="text" formControlName="name" [(ngModel)]="name" name="name"></ion-input>\n\n      </ion-item>\n\n  \n\n      <ion-item>\n\n        <ion-label floating>Pet Type</ion-label>\n\n        <ion-select formControlName="petType" [(ngModel)]="petType" name="petType">\n\n          <ion-option value="Dog">Dog</ion-option>\n\n          <ion-option value="Cat">Cat</ion-option>\n\n        </ion-select>\n\n      </ion-item>\n\n    \n\n      <ion-item>\n\n        <ion-label floating>Breed</ion-label>\n\n        <ion-input type="text" formControlName="breed" [(ngModel)]="breed" name="breed"></ion-input>\n\n      </ion-item>\n\n    \n\n      <ion-item>\n\n        <ion-label floating>Color</ion-label>\n\n        <ion-input type="text" formControlName="color" [(ngModel)]="color" name="color"></ion-input>\n\n      </ion-item>\n\n    \n\n      <ion-item>\n\n        <ion-label floating>Age</ion-label>\n\n        <ion-input type="text" formControlName="age" [(ngModel)]="age" name="age"></ion-input>\n\n      </ion-item>\n\n  \n\n      <ion-item>\n\n        <ion-label floating>Gender</ion-label>\n\n        <ion-select formControlName="gender" [(ngModel)]="gender" name="gender">\n\n          <ion-option value="Female">Female</ion-option>\n\n          <ion-option value="Male">Male</ion-option>\n\n        </ion-select>\n\n      </ion-item>\n\n  \n\n      <ion-item>\n\n        <ion-label floating>Date of last vaccine</ion-label>\n\n        <ion-datetime displayFormat="MM/DD/YYYY" formControlName="vaccineDate" [(ngModel)]="vaccineDate" name="vaccineDate"></ion-datetime>\n\n      </ion-item>\n\n  \n\n      <ion-item>\n\n        <ion-label floating>Remarks</ion-label>\n\n        <ion-textarea type="text" formControlName="remarks" [(ngModel)]="remarks" name="remarks"></ion-textarea>\n\n      </ion-item>\n\n    \n\n      <button ion-button type="submit" class="btnSave" [disabled]="isSubmitting">\n\n        <ion-spinner name="crescent" *ngIf="isSubmitting"></ion-spinner>\n\n        <ion-icon name="cloud-download" *ngIf="isSubmitting == false"></ion-icon> &nbsp; Save</button>\n\n    </form>\n\n  </ion-content>\n\n  '/*ion-inline-end:"C:\Users\Sanchez\Dropbox\petApp\src\pages\edit-registered-pet\edit-registered-pet.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_register_pet_register_pet__["a" /* RegisterPetProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */]])
], EditRegisteredPetPage);

//# sourceMappingURL=edit-registered-pet.js.map

/***/ }),

/***/ 352:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPetFormPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_register_pet_register_pet__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_clarifai__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_clarifai___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_clarifai__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





const app = new __WEBPACK_IMPORTED_MODULE_4_clarifai__["App"]({
    apiKey: 'b1c9abe51ae7422a8cf6f0977081d9aa'
});
let RegisterPetFormPage = class RegisterPetFormPage {
    constructor(navCtrl, navParams, viewCtrl, loadingCtrl, registerPetProvider, toastCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.loadingCtrl = loadingCtrl;
        this.registerPetProvider = registerPetProvider;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.image = '';
        this.name = '';
        this.petType = '';
        this.breed = '';
        this.color = '';
        this.age = '';
        this.gender = '';
        this.vaccineDate = '';
        this.remarks = '';
        this.isSubmitting = false;
        this.imageCtrl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('');
        this.nameCtrl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required);
        this.petTypeCtrl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required);
        this.breedCtrl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required);
        this.colorCtrl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required);
        this.ageCtrl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required);
        this.genderCtrl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required);
        this.vaccineDateCtrl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('');
        this.remarksCtrl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('');
        this.registerPetForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormGroup */]({
            image: this.imageCtrl,
            name: this.nameCtrl,
            petType: this.petTypeCtrl,
            breed: this.breedCtrl,
            color: this.colorCtrl,
            age: this.ageCtrl,
            gender: this.genderCtrl,
            vaccineDate: this.vaccineDateCtrl,
            remarks: this.remarksCtrl
        });
    }
    capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    }
    petPicUploadEvent(event) {
        let loading = this.loadingCtrl.create({
            content: 'Uploading your pet photo...'
        });
        loading.present();
        let imageType = ['image/gif', 'image/png', 'image/jpeg', 'image/bmp', 'image/webp'];
        if (imageType.indexOf(event.target.files.item(0)['type']) != -1) {
            this.registerPetProvider.uploadPhoto(event.target.files.item(0)).then(photo => {
                app.models.predict(__WEBPACK_IMPORTED_MODULE_4_clarifai__["GENERAL_MODEL"], photo).then(res => {
                    let tagArray = res.rawData.outputs[0].data.concepts;
                    let isValid = 0;
                    for (var other = 0; other < tagArray.length; other++) {
                        if (tagArray[other].name == 'dog' || tagArray[other].name == 'cat') {
                            isValid = 1;
                            let name = tagArray[other].name;
                            this.petType = this.capitalizeFirstLetter(name);
                        }
                    }
                    if (isValid) {
                        console.log('tagArray', tagArray);
                        let html = "We have analyzed your uploaded image, to help you describe the pet photo that you have uploaded, here’s our prediction.";
                        html += '<ul class="predictUl">';
                        html += '<li><span class="title01">PREDICTED CONCEPT</span><span class="title02">PROBABILITY</span></li>';
                        for (var other = 0; other < tagArray.length; other++) {
                            if (other < 10) {
                                html += '<li><span class="name">' + tagArray[other].name + '</span> <span class="value">' + tagArray[other].value + '</span></li>';
                            }
                        }
                        html += '</ul>';
                        let alert = this.alertCtrl.create({
                            title: '',
                            subTitle: html,
                            buttons: ['OK']
                        });
                        alert.present();
                        this.image = photo;
                        loading.dismiss();
                        let toast = this.toastCtrl.create({
                            message: 'Photo was uploaded',
                            duration: 5000,
                            position: 'bottom'
                        });
                        // app.models.predict(Clarifai.COLOR_MODEL, photo).then(res => {
                        //   let tagArray = res.rawData.outputs[0].data.colors;
                        //   this.color = tagArray[0].w3c.name;
                        // }, err => {
                        //   loading.dismiss();
                        //   let toast = this.toastCtrl.create({
                        //     message: err.message,
                        //     duration: 5000,
                        //     position: 'bottom'
                        //   });
                        //   toast.present();
                        // });
                    }
                    else {
                        loading.dismiss();
                        let toast = this.toastCtrl.create({
                            message: 'Upload failed, pet photo must be a cat or dog',
                            duration: 5000,
                            position: 'bottom'
                        });
                        toast.present();
                    }
                }, err => {
                    loading.dismiss();
                    let toast = this.toastCtrl.create({
                        message: err.message,
                        duration: 5000,
                        position: 'bottom'
                    });
                    toast.present();
                });
            }).catch(err => {
                loading.dismiss();
                let toast = this.toastCtrl.create({
                    message: err.message,
                    duration: 5000,
                    position: 'bottom'
                });
                toast.present();
            });
        }
        else {
            loading.dismiss();
            let toast = this.toastCtrl.create({
                message: 'Invalid file type, only allowed file types are gif, png, jpeg, bmp, webp',
                duration: 5000,
                position: 'bottom'
            });
            toast.present();
        }
    }
    dismiss() {
        this.viewCtrl.dismiss();
    }
    registerPetFormSubmit() {
        this.isSubmitting = true;
        if (this.registerPetForm.valid) {
            console.log('valid');
            let petInfo = {
                name: this.name,
                petType: this.petType,
                image: this.image,
                breed: this.breed,
                color: this.color,
                age: this.age,
                gender: this.gender,
                remarks: this.remarks,
                vaccineDate: this.vaccineDate
            };
            this.registerPetProvider.saveLostPet(petInfo).then(res => {
                this.isSubmitting = false;
                this.viewCtrl.dismiss();
                let toast = this.toastCtrl.create({
                    message: 'Lost pet was posted',
                    duration: 4000,
                    position: 'bottom'
                });
                toast.present();
            }).catch(err => {
                console.log('err', err);
                this.isSubmitting = false;
                let toast = this.toastCtrl.create({
                    message: err.message,
                    duration: 4000,
                    position: 'bottom'
                });
                toast.present();
            });
        }
        else {
            this.isSubmitting = false;
            let toast = this.toastCtrl.create({
                message: 'Post failed, please fill up all required fields',
                duration: 4000,
                position: 'bottom'
            });
            toast.present();
        }
    }
};
RegisterPetFormPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-register-pet-form',template:/*ion-inline-start:"C:\Users\Sanchez\Dropbox\petApp\src\pages\register-pet-form\register-pet-form.html"*/'<ion-header>\n\n  <ion-toolbar>\n\n    <ion-title>\n\n      Register Pet Form\n\n    </ion-title>\n\n    <ion-buttons start>\n\n      <button ion-button (click)="dismiss()">\n\n        <span ion-text color="primary" showWhen="ios">Cancel</span>\n\n        <ion-icon name="md-close" showWhen="android, windows"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <div class="profileBlock">\n\n    <input type="file" hidden #petPicUpload name="petPicUpload" (change)="petPicUploadEvent($event)">\n\n    <img [src]="image != \'\' && image != null ? image : \'assets/images/icon.png\' " width="124" height="124"\n\n      alt="" (click)="petPicUpload.click()">\n\n    <ion-icon name="camera" class="camera" (click)="petPicUpload.click()"></ion-icon>\n\n  </div>\n\n\n\n  <form [formGroup]="registerPetForm" (ngSubmit)="registerPetFormSubmit()">\n\n    <ion-item hidden>\n\n      <ion-label floating>Image</ion-label>\n\n      <ion-input type="text" formControlName="image" [(ngModel)]="image" name="image"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label floating>Name</ion-label>\n\n      <ion-input type="text" formControlName="name" [(ngModel)]="name" name="name"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label floating>Pet Type</ion-label>\n\n      <ion-select formControlName="petType" [(ngModel)]="petType" name="petType">\n\n        <ion-option value="Dog">Dog</ion-option>\n\n        <ion-option value="Cat">Cat</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n  \n\n    <ion-item>\n\n      <ion-label floating>Breed</ion-label>\n\n      <ion-input type="text" formControlName="breed" [(ngModel)]="breed" name="breed"></ion-input>\n\n    </ion-item>\n\n  \n\n    <ion-item>\n\n      <ion-label floating>Color</ion-label>\n\n      <ion-input type="text" formControlName="color" [(ngModel)]="color" name="color"></ion-input>\n\n    </ion-item>\n\n  \n\n    <ion-item>\n\n      <ion-label floating>Age</ion-label>\n\n      <ion-input type="text" formControlName="age" [(ngModel)]="age" name="age"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label floating>Gender</ion-label>\n\n      <ion-select formControlName="gender" [(ngModel)]="gender" name="gender">\n\n        <ion-option value="Female">Female</ion-option>\n\n        <ion-option value="Male">Male</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label floating>Date of last vaccine</ion-label>\n\n      <ion-datetime displayFormat="MM/DD/YYYY" formControlName="vaccineDate" [(ngModel)]="vaccineDate" name="vaccineDate"></ion-datetime>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label floating>Remarks</ion-label>\n\n      <ion-textarea type="text" formControlName="remarks" [(ngModel)]="remarks" name="remarks"></ion-textarea>\n\n    </ion-item>\n\n  \n\n    <button ion-button type="submit" class="btnSave" [disabled]="isSubmitting">\n\n      <ion-spinner name="crescent" *ngIf="isSubmitting"></ion-spinner>\n\n      <ion-icon name="cloud-download" *ngIf="isSubmitting == false"></ion-icon> &nbsp; Save</button>\n\n  </form>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Sanchez\Dropbox\petApp\src\pages\register-pet-form\register-pet-form.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_register_pet_register_pet__["a" /* RegisterPetProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
], RegisterPetFormPage);

//# sourceMappingURL=register-pet-form.js.map

/***/ }),

/***/ 353:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddAdoptPetPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_buypet_buypet__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_clarifai__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_clarifai___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_clarifai__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





const app = new __WEBPACK_IMPORTED_MODULE_4_clarifai__["App"]({
    apiKey: 'b1c9abe51ae7422a8cf6f0977081d9aa'
});
let AddAdoptPetPage = class AddAdoptPetPage {
    constructor(navCtrl, navParams, viewCtrl, loadingCtrl, buypetProvider, toastCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.loadingCtrl = loadingCtrl;
        this.buypetProvider = buypetProvider;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.image = '';
        this.name = '';
        this.petType = '';
        this.breed = '';
        this.color = '';
        this.age = '';
        this.gender = '';
        this.vaccineDate = '';
        this.remarks = '';
        this.isSubmitting = false;
        this.nameCtrl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required);
        this.petTypeCtrl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required);
        this.breedCtrl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required);
        this.colorCtrl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required);
        this.ageCtrl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required);
        this.genderCtrl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required);
        this.vaccineDateCtrl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('');
        this.remarksCtrl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('');
        this.imageCtrl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('');
        this.addForSalePet = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormGroup */]({
            image: this.imageCtrl,
            name: this.nameCtrl,
            petType: this.petTypeCtrl,
            breed: this.breedCtrl,
            color: this.colorCtrl,
            age: this.ageCtrl,
            gender: this.genderCtrl,
            vaccineDate: this.vaccineDateCtrl,
            remarks: this.remarksCtrl
        });
    }
    addForSalePetSubmit() {
        this.isSubmitting = true;
        if (this.addForSalePet.valid) {
            let petInfo = {
                name: this.name,
                image: this.image,
                petType: this.petType,
                breed: this.breed,
                color: this.color,
                age: this.age,
                gender: this.gender,
                vaccineDate: this.vaccineDate,
                remarks: this.remarks,
                isactive: true,
                interestedCount: 0,
                interestedUsers: []
            };
            this.buypetProvider.saveAdoptPet(petInfo).then(res => {
                this.isSubmitting = false;
                this.viewCtrl.dismiss();
                let toast = this.toastCtrl.create({
                    message: 'Pet was posted',
                    duration: 4000,
                    position: 'bottom'
                });
                toast.present();
            }).catch(err => {
                console.log('err', err);
                this.isSubmitting = false;
                let toast = this.toastCtrl.create({
                    message: err.message,
                    duration: 4000,
                    position: 'bottom'
                });
                toast.present();
            });
        }
        else {
            this.isSubmitting = false;
            let toast = this.toastCtrl.create({
                message: 'Post failed, please fill up all required fields',
                duration: 4000,
                position: 'bottom'
            });
            toast.present();
        }
    }
    dismiss() {
        this.viewCtrl.dismiss();
    }
    capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    }
    petPicUploadEvent(event) {
        let loading = this.loadingCtrl.create({
            content: 'Uploading your pet photo...'
        });
        loading.present();
        let imageType = ['image/gif', 'image/png', 'image/jpeg', 'image/bmp', 'image/webp'];
        if (imageType.indexOf(event.target.files.item(0)['type']) != -1) {
            this.buypetProvider.uploadPhoto(event.target.files.item(0)).then(photo => {
                console.log('photo', photo);
                app.models.predict(__WEBPACK_IMPORTED_MODULE_4_clarifai__["GENERAL_MODEL"], photo).then(res => {
                    let tagArray = res.rawData.outputs[0].data.concepts;
                    let isValid = 0;
                    for (var other = 0; other < tagArray.length; other++) {
                        if (tagArray[other].name == 'dog' || tagArray[other].name == 'cat') {
                            isValid = 1;
                            let name = tagArray[other].name;
                            this.petType = this.capitalizeFirstLetter(name);
                        }
                    }
                    if (isValid) {
                        console.log('tagArray', tagArray);
                        let html = "We have analyzed your uploaded image, to help you describe the pet photo that you have uploaded, here’s our prediction.";
                        html += '<ul class="predictUl">';
                        html += '<li><span class="title01">PREDICTED CONCEPT</span><span class="title02">PROBABILITY</span></li>';
                        for (var other = 0; other < tagArray.length; other++) {
                            if (other < 10) {
                                html += '<li><span class="name">' + tagArray[other].name + '</span> <span class="value">' + tagArray[other].value + '</span></li>';
                            }
                        }
                        html += '</ul>';
                        let alert = this.alertCtrl.create({
                            title: '',
                            subTitle: html,
                            buttons: ['OK']
                        });
                        alert.present();
                        this.image = photo;
                        loading.dismiss();
                        let toast = this.toastCtrl.create({
                            message: 'Photo was uploaded',
                            duration: 5000,
                            position: 'bottom'
                        });
                    }
                    else {
                        loading.dismiss();
                        let toast = this.toastCtrl.create({
                            message: 'Upload failed, pet photo must be a cat or dog',
                            duration: 5000,
                            position: 'bottom'
                        });
                        toast.present();
                    }
                }, err => {
                    loading.dismiss();
                    let toast = this.toastCtrl.create({
                        message: err.message,
                        duration: 5000,
                        position: 'bottom'
                    });
                    toast.present();
                });
            }).catch(err => {
                loading.dismiss();
                let toast = this.toastCtrl.create({
                    message: err.message,
                    duration: 5000,
                    position: 'bottom'
                });
                toast.present();
            });
        }
        else {
            loading.dismiss();
            let toast = this.toastCtrl.create({
                message: 'Invalid file type, only allowed file types are gif, png, jpeg, bmp, webp',
                duration: 5000,
                position: 'bottom'
            });
            toast.present();
        }
    }
};
AddAdoptPetPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-add-adopt-pet',template:/*ion-inline-start:"C:\Users\Sanchez\Dropbox\petApp\src\pages\add-adopt-pet\add-adopt-pet.html"*/'<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      Post your pet\n    </ion-title>\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">\n        <span ion-text color="primary" showWhen="ios">Cancel</span>\n        <ion-icon name="md-close" showWhen="android, windows"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <div class="profileBlock">\n    <input type="file" hidden #petPicUpload name="petPicUpload" (change)="petPicUploadEvent($event)">\n    <img [src]="image != \'\' && image != null ? image : \'assets/images/icon.png\' " width="124" height="124" alt="" (click)="petPicUpload.click()">\n    <ion-icon name="camera" class="camera" (click)="petPicUpload.click()"></ion-icon>\n  </div>\n\n  <form [formGroup]="addForSalePet" (ngSubmit)="addForSalePetSubmit()">\n    <ion-item hidden>\n      <ion-label floating>Image</ion-label>\n      <ion-input type="text" formControlName="image" [(ngModel)]="image" name="image"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Name</ion-label>\n      <ion-input type="text" formControlName="name" [(ngModel)]="name" name="name"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Pet Type</ion-label>\n      <ion-select formControlName="petType" [(ngModel)]="petType" name="petType">\n        <ion-option value="Dog">Dog</ion-option>\n        <ion-option value="Cat">Cat</ion-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Breed</ion-label>\n      <ion-input type="text" formControlName="breed" [(ngModel)]="breed" name="breed"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Color</ion-label>\n      <ion-input type="text" formControlName="color" [(ngModel)]="color" name="color"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Age</ion-label>\n      <ion-input type="text" formControlName="age" [(ngModel)]="age" name="age"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Gender</ion-label>\n      <ion-select formControlName="gender" [(ngModel)]="gender" name="gender">\n        <ion-option value="Female">Female</ion-option>\n        <ion-option value="Male">Male</ion-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Date of last vaccine</ion-label>\n      <ion-datetime displayFormat="MM/DD/YYYY" formControlName="vaccineDate" [(ngModel)]="vaccineDate" name="vaccineDate"></ion-datetime>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Remarks</ion-label>\n      <ion-textarea type="text" formControlName="remarks" [(ngModel)]="remarks" name="remarks"></ion-textarea>\n    </ion-item>\n\n    <button ion-button type="submit" class="btnSave" [disabled]="isSubmitting">\n      <ion-spinner name="crescent" *ngIf="isSubmitting"></ion-spinner>\n      <ion-icon name="cloud-download" *ngIf="isSubmitting == false"></ion-icon> &nbsp; Save</button>\n  </form>\n</ion-content>'/*ion-inline-end:"C:\Users\Sanchez\Dropbox\petApp\src\pages\add-adopt-pet\add-adopt-pet.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_buypet_buypet__["a" /* BuypetProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
], AddAdoptPetPage);

//# sourceMappingURL=add-adopt-pet.js.map

/***/ }),

/***/ 354:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddVaccinationScheduleFormPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_vaccine_vaccine__ = __webpack_require__(171);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




let AddVaccinationScheduleFormPage = class AddVaccinationScheduleFormPage {
    constructor(navCtrl, navParams, loadingCtrl, viewCtrl, toastCtrl, vaccineProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.viewCtrl = viewCtrl;
        this.toastCtrl = toastCtrl;
        this.vaccineProvider = vaccineProvider;
        this.isSubmitting = false;
        this.imageCtrl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('');
        this.titleCtrl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required);
        this.notesCtrl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('');
        this.vaccineDateCtrl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('');
        this.addVaccineForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormGroup */]({
            image: this.imageCtrl,
            title: this.titleCtrl,
            notes: this.notesCtrl,
            vaccineDate: this.vaccineDateCtrl
        });
    }
    dismiss() {
        this.viewCtrl.dismiss();
    }
    addVaccineFormSubmit() {
        this.isSubmitting = true;
        if (this.addVaccineForm.valid) {
            let vaccineData = {
                image: this.image,
                title: this.title,
                notes: this.notes,
                vaccineDate: this.vaccineDate
            };
            this.vaccineProvider.addVaccineSched(vaccineData).then(res => {
                this.isSubmitting = false;
                this.navCtrl.push('VaccinationSchedulePage');
                let toast = this.toastCtrl.create({
                    message: 'Vaccine Schedule was posted',
                    duration: 5000,
                    position: 'bottom'
                });
                toast.present();
            }).catch(err => {
                this.isSubmitting = false;
                let toast = this.toastCtrl.create({
                    message: err.message,
                    duration: 5000,
                    position: 'bottom'
                });
                toast.present();
            });
        }
        else {
            this.isSubmitting = false;
            console.log('invalid');
        }
    }
    petPicUploadEvent(event) {
        let loading = this.loadingCtrl.create({
            content: 'Uploading your banner'
        });
        loading.present();
        let imageType = ['image/gif', 'image/png', 'image/jpeg', 'image/bmp', 'image/webp'];
        if (imageType.indexOf(event.target.files.item(0)['type']) != -1) {
            this.vaccineProvider.uploadPhoto(event.target.files.item(0)).then(photo => {
                console.log('photo', photo);
                this.image = photo;
                loading.dismiss();
                let toast = this.toastCtrl.create({
                    message: 'Photo was uploaded',
                    duration: 5000,
                    position: 'bottom'
                });
            }).catch(err => {
                loading.dismiss();
                let toast = this.toastCtrl.create({
                    message: err.message,
                    duration: 5000,
                    position: 'bottom'
                });
                toast.present();
            });
        }
        else {
            loading.dismiss();
            let toast = this.toastCtrl.create({
                message: 'Invalid file type, only allowed file types are gif, png, jpeg, bmp, webp',
                duration: 5000,
                position: 'bottom'
            });
            toast.present();
        }
    }
};
AddVaccinationScheduleFormPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-add-vaccination-schedule-form',template:/*ion-inline-start:"C:\Users\Sanchez\Dropbox\petApp\src\pages\add-vaccination-schedule-form\add-vaccination-schedule-form.html"*/'<ion-header>\n\n  <ion-toolbar>\n\n    <ion-title>\n\n      Add Vaccination Schedule\n\n    </ion-title>\n\n    <ion-buttons start>\n\n      <button ion-button (click)="dismiss()">\n\n        <span ion-text color="primary" showWhen="ios">Cancel</span>\n\n        <ion-icon name="md-close" showWhen="android, windows"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <div class="profileBlock">\n\n    <input type="file" hidden #petPicUpload name="petPicUpload" (change)="petPicUploadEvent($event)">\n\n    <img [src]="image != \'\' && image != null ? image : \'assets/images/icon.png\' " width="124" height="124" alt="" (click)="petPicUpload.click()">\n\n    <ion-icon name="camera" class="camera" (click)="petPicUpload.click()"></ion-icon>\n\n  </div>\n\n\n\n  <form [formGroup]="addVaccineForm" (ngSubmit)="addVaccineFormSubmit()">\n\n    <ion-item hidden>\n\n      <ion-label floating>Image</ion-label>\n\n      <ion-input type="text" formControlName="image" [(ngModel)]="image" name="image"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label floating>Title</ion-label>\n\n      <ion-input type="text" formControlName="title" [(ngModel)]="title" name="title"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label floating>Notes</ion-label>\n\n      <ion-textarea type="text" formControlName="notes" [(ngModel)]="notes" name="notes"></ion-textarea>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label floating>Vaccination Date</ion-label>\n\n      <ion-datetime displayFormat="MM/DD/YYYY" formControlName="vaccineDate" [(ngModel)]="vaccineDate" name="vaccineDate"></ion-datetime>\n\n    </ion-item>\n\n\n\n\n\n    <button ion-button type="submit" class="btnSave" [disabled]="isSubmitting">\n\n      <ion-spinner name="crescent" *ngIf="isSubmitting"></ion-spinner>\n\n      <ion-icon name="cloud-download" *ngIf="isSubmitting == false"></ion-icon> &nbsp; Save</button>\n\n  </form>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Sanchez\Dropbox\petApp\src\pages\add-vaccination-schedule-form\add-vaccination-schedule-form.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_vaccine_vaccine__["a" /* VaccineProvider */]])
], AddVaccinationScheduleFormPage);

//# sourceMappingURL=add-vaccination-schedule-form.js.map

/***/ }),

/***/ 355:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminAddGroomPetPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_admin_admin__ = __webpack_require__(64);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




let AdminAddGroomPetPage = class AdminAddGroomPetPage {
    constructor(navCtrl, navParams, viewCtrl, loadingCtrl, adminProvider, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.loadingCtrl = loadingCtrl;
        this.adminProvider = adminProvider;
        this.toastCtrl = toastCtrl;
        this.videoCtrl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required);
        this.titleCtrl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required);
        this.isSubmitting = false;
        this.addGroomPetVideo = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormGroup */]({
            video: this.videoCtrl,
            title: this.titleCtrl
        });
    }
    addGroomPetVideoSubmit() {
        this.isSubmitting = true;
        if (this.addGroomPetVideo.valid) {
            let data = {
                video: this.video,
                title: this.title,
                videoTitle: this.videoTitle,
                isactive: true
            };
            this.adminProvider.saveGroomPetVideo(data).then(res => {
                this.isSubmitting = false;
                this.navCtrl.push('AdminGroomPetPage');
                let toast = this.toastCtrl.create({
                    message: 'Groom pet video was posted',
                    duration: 5000,
                    position: 'bottom'
                });
                toast.present();
            }).catch(err => {
                this.isSubmitting = false;
                let toast = this.toastCtrl.create({
                    message: err.message,
                    duration: 5000,
                    position: 'bottom'
                });
                toast.present();
            });
        }
        else {
            this.isSubmitting = false;
            let toast = this.toastCtrl.create({
                message: 'Title and Video is required',
                duration: 4000,
                position: 'bottom'
            });
            toast.present();
        }
    }
    dismiss() {
        this.viewCtrl.dismiss();
    }
    photoUploadEvent(event) {
        let loading = this.loadingCtrl.create({
            content: 'Uploading your video...'
        });
        loading.present();
        // let videoType = ['video/avi', 'video/mp4', 'video/quicktime', 'video/mp4', 'video/mpeg', 'video/x-ms-wmv']; 
        let videoType = ['video/mp4'];
        if (videoType.indexOf(event.target.files.item(0)['type']) != -1) {
            this.videoTitle = event.target.files.item(0)['name'];
            this.adminProvider.uploadPhoto(event.target.files.item(0)).then(photo => {
                this.video = photo;
                loading.dismiss();
                let toast = this.toastCtrl.create({
                    message: 'Video was uploaded',
                    duration: 5000,
                    position: 'bottom'
                });
            }).catch(err => {
                loading.dismiss();
                this.navCtrl.push('AdminGroomPetPage');
                let toast = this.toastCtrl.create({
                    message: err.message,
                    duration: 5000,
                    position: 'bottom'
                });
                toast.present();
            });
        }
        else {
            loading.dismiss();
            let toast = this.toastCtrl.create({
                message: 'Upload failed, file type must be mp4 format',
                duration: 5000,
                position: 'bottom'
            });
            toast.present();
        }
    }
};
AdminAddGroomPetPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-admin-add-groom-pet',template:/*ion-inline-start:"C:\Users\Sanchez\Dropbox\petApp\src\pages\admin-add-groom-pet\admin-add-groom-pet.html"*/'<ion-header>\n\n  <ion-toolbar>\n\n    <ion-title>\n\n      Add Groom Pet Video\n\n    </ion-title>\n\n    <ion-buttons start>\n\n      <button ion-button (click)="dismiss()">\n\n        <span ion-text color="primary" showWhen="ios">Cancel</span>\n\n        <ion-icon name="md-close" showWhen="android, windows"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <div class="profileBlock">\n\n    <input type="file" hidden #petPicUpload name="petPicUpload" (change)="photoUploadEvent($event)">\n\n    <ion-icon name="cloud-upload" class="uploadIcon" (click)="petPicUpload.click()"></ion-icon>\n\n    <span (click)="petPicUpload.click()">Upload Video</span> - {{videoTitle}}\n\n  </div>\n\n\n\n  <form [formGroup]="addGroomPetVideo" (ngSubmit)="addGroomPetVideoSubmit()">\n\n    <ion-item hidden>\n\n      <ion-label floating>Video</ion-label>\n\n      <ion-input type="text" formControlName="video" [(ngModel)]="video" name="video"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label floating>Title</ion-label>\n\n      <ion-input type="text" formControlName="title" [(ngModel)]="title" name="title"></ion-input>\n\n    </ion-item>\n\n\n\n    <button ion-button type="submit" class="btnSave" [disabled]="isSubmitting">\n\n      <ion-spinner name="crescent" *ngIf="isSubmitting"></ion-spinner>\n\n      <ion-icon name="cloud-download" *ngIf="isSubmitting == false"></ion-icon> &nbsp; Save</button>\n\n  </form>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Sanchez\Dropbox\petApp\src\pages\admin-add-groom-pet\admin-add-groom-pet.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_admin_admin__["a" /* AdminProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */]])
], AdminAddGroomPetPage);

//# sourceMappingURL=admin-add-groom-pet.js.map

/***/ }),

/***/ 356:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditGroomPetPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_admin_admin__ = __webpack_require__(64);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




let EditGroomPetPage = class EditGroomPetPage {
    constructor(navCtrl, navParams, viewCtrl, loadingCtrl, toastCtrl, adminProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.adminProvider = adminProvider;
        this.videoCtrl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required);
        this.titleCtrl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required);
        this.isSubmitting = false;
        this.editGroomPetVideo = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormGroup */]({
            video: this.videoCtrl,
            title: this.titleCtrl
        });
        this.videoId = this.navParams.get('videoId');
        console.log('this.videoId', this.videoId);
        this.groomPetInfo();
    }
    groomPetInfo() {
        this.adminProvider.groomPetInfo(this.videoId).then(info => {
            console.log('info', info);
            this.videoTitle = info['videoTitle'];
            this.video = info['video'];
            this.title = info['title'];
        }).catch(err => {
            let toast = this.toastCtrl.create({
                message: err.message,
                duration: 4000,
                position: 'bottom'
            });
            toast.present();
        });
    }
    editGroomPetVideoSubmit() {
        this.isSubmitting = true;
        if (this.editGroomPetVideo.valid) {
            let data = {
                video: this.video,
                videoTitle: this.videoTitle,
                title: this.title
            };
            this.adminProvider.saveUpdatesGroomPet(data, this.videoId).then(res => {
                this.isSubmitting = false;
                this.navCtrl.push('AdminGroomPetPage');
                let toast = this.toastCtrl.create({
                    message: 'Updates was saved',
                    duration: 4000,
                    position: 'bottom'
                });
                toast.present();
            }).catch(err => {
                this.isSubmitting = false;
                let toast = this.toastCtrl.create({
                    message: err.message,
                    duration: 4000,
                    position: 'bottom'
                });
                toast.present();
            });
        }
        else {
            this.isSubmitting = false;
            let toast = this.toastCtrl.create({
                message: 'Title and Video is required',
                duration: 4000,
                position: 'bottom'
            });
            toast.present();
        }
    }
    dismiss() {
        this.viewCtrl.dismiss();
    }
    petPicUploadEvent(event) {
        let loading = this.loadingCtrl.create({
            content: 'Uploading your video...'
        });
        loading.present();
        let videoType = ['video/avi', 'video/mp4', 'video/quicktime', 'video/mp4', 'video/mpeg', 'video/x-ms-wmv'];
        if (videoType.indexOf(event.target.files.item(0)['type']) != -1) {
            this.videoTitle = event.target.files.item(0)['name'];
            this.adminProvider.uploadPhoto(event.target.files.item(0)).then(photo => {
                this.video = photo;
                loading.dismiss();
                let toast = this.toastCtrl.create({
                    message: 'Video was uploaded',
                    duration: 5000,
                    position: 'bottom'
                });
            }).catch(err => {
                loading.dismiss();
                this.navCtrl.push('AdminGroomPetPage');
                let toast = this.toastCtrl.create({
                    message: err.message,
                    duration: 5000,
                    position: 'bottom'
                });
                toast.present();
            });
        }
        else {
            loading.dismiss();
            let toast = this.toastCtrl.create({
                message: 'Invalid file type, only allowed file types are mp4, m4v, mov, avi, flv, mpg and wmv',
                duration: 5000,
                position: 'bottom'
            });
            toast.present();
        }
    }
};
EditGroomPetPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-edit-groom-pet',template:/*ion-inline-start:"C:\Users\Sanchez\Dropbox\petApp\src\pages\edit-groom-pet\edit-groom-pet.html"*/'<ion-header>\n\n  <ion-toolbar>\n\n    <ion-title>\n\n      Edit Groom Pet Post\n\n    </ion-title>\n\n    <ion-buttons start>\n\n      <button ion-button (click)="dismiss()">\n\n        <span ion-text color="primary" showWhen="ios">Cancel</span>\n\n        <ion-icon name="md-close" showWhen="android, windows"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <div class="profileBlock">\n\n    <input type="file" hidden #petPicUpload name="petPicUpload" (change)="petPicUploadEvent($event)">\n\n    <ion-icon name="cloud-upload" class="uploadIcon" (click)="petPicUpload.click()"></ion-icon>\n\n    <span (click)="petPicUpload.click()">Upload Video</span> - {{videoTitle}}\n\n  </div>\n\n\n\n  <form [formGroup]="editGroomPetVideo" (ngSubmit)="editGroomPetVideoSubmit()">\n\n    <ion-item hidden>\n\n      <ion-label floating>Video</ion-label>\n\n      <ion-input type="text" formControlName="video" [(ngModel)]="video" name="video"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label floating>Title</ion-label>\n\n      <ion-input type="text" formControlName="title" [(ngModel)]="title" name="title"></ion-input>\n\n    </ion-item>\n\n\n\n    <button ion-button type="submit" class="btnSave" [disabled]="isSubmitting">\n\n      <ion-spinner name="crescent" *ngIf="isSubmitting"></ion-spinner>\n\n      <ion-icon name="cloud-download" *ngIf="isSubmitting == false"></ion-icon> &nbsp; Save</button>\n\n  </form>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Sanchez\Dropbox\petApp\src\pages\edit-groom-pet\edit-groom-pet.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_admin_admin__["a" /* AdminProvider */]])
], EditGroomPetPage);

//# sourceMappingURL=edit-groom-pet.js.map

/***/ }),

/***/ 357:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminViewProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_admin_admin__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__admin_view_user_registered_pets_admin_view_user_registered_pets__ = __webpack_require__(195);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




let AdminViewProfilePage = class AdminViewProfilePage {
    constructor(navCtrl, navParams, viewCtrl, adminProvider, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.adminProvider = adminProvider;
        this.modalCtrl = modalCtrl;
    }
    ionViewDidLoad() {
        this.userId = this.navParams.get('userId');
        this.loadProfile();
    }
    dismiss() {
        this.viewCtrl.dismiss();
    }
    loadProfile() {
        this.adminProvider.loadProfile(this.userId).then(user => {
            this.user = user;
        });
    }
    registeredPetsClick() {
        let user = {
            userId: this.userId
        };
        let modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__admin_view_user_registered_pets_admin_view_user_registered_pets__["a" /* AdminViewUserRegisteredPetsPage */], user);
        modal.onDidDismiss(data => {
            if (data) {
                // this.loadProfile();
            }
        });
        modal.present();
    }
};
AdminViewProfilePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-admin-view-profile',template:/*ion-inline-start:"C:\Users\Sanchez\Dropbox\petApp\src\pages\admin-view-profile\admin-view-profile.html"*/'<ion-header>\n\n  <ion-toolbar>\n\n    <ion-title>\n\n      User Details\n\n    </ion-title>\n\n    <ion-buttons start>\n\n      <button ion-button (click)="dismiss()">\n\n        <span ion-text color="primary" showWhen="ios">Cancel</span>\n\n        <ion-icon name="md-close" showWhen="android, windows"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n    <div class="profileBlock">\n\n        <img [src]="user?.photo != \'\' && user?.photo != null ? user?.photo : \'assets/images/blank-profile.png\' " width="124" height="124" alt="">\n\n        <h3 *ngIf="user?.name != \'\' || user?.name != null">{{user?.name}}</h3>\n\n        <h3 *ngIf="user?.name == \'\' || user?.name == null">N/A</h3>\n\n    </div>\n\n    \n\n    <table class="profileTbl">\n\n        <tr>\n\n            <td><ion-icon name="mail"></ion-icon></td>\n\n            <td>\n\n                <strong>Email Address</strong>\n\n                <p *ngIf="user?.email != \'\' && user?.email != null">{{user?.email}}</p>\n\n                <p *ngIf="user?.email == \'\' || user?.email == null">N/A</p>\n\n            </td>\n\n        </tr>\n\n        <tr>\n\n            <td><ion-icon name="call"></ion-icon></td>\n\n            <td>\n\n                <strong>Phone Number</strong>\n\n                <p *ngIf="user?.phone != \'\' && user?.phone != null">{{user?.phone}}</p>\n\n                <p *ngIf="user?.phone == \'\' || user?.phone == null">N/A</p>\n\n            </td>\n\n        </tr>\n\n        <tr>\n\n            <td><ion-icon name="locate"></ion-icon></td>\n\n            <td>\n\n                <strong>Address</strong>\n\n                <p *ngIf="user?.address != \'\' && user?.address != null">{{user?.address}}</p>\n\n                <p *ngIf="user?.address == \'\' || user?.address == null">N/A</p>\n\n            </td>\n\n        </tr>\n\n        <tr>\n\n            <td><ion-icon name="paw"></ion-icon></td>\n\n            <td>\n\n                <strong (click)="registeredPetsClick()">Registered Pets</strong>\n\n                <p (click)="registeredPetsClick()">Click to see registered pets</p>\n\n            </td>\n\n        </tr>\n\n    </table>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Sanchez\Dropbox\petApp\src\pages\admin-view-profile\admin-view-profile.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_admin_admin__["a" /* AdminProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */]])
], AdminViewProfilePage);

//# sourceMappingURL=admin-view-profile.js.map

/***/ }),

/***/ 358:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminAddTrainPetPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_admin_admin__ = __webpack_require__(64);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




let AdminAddTrainPetPage = class AdminAddTrainPetPage {
    constructor(navCtrl, navParams, viewCtrl, loadingCtrl, adminProvider, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.loadingCtrl = loadingCtrl;
        this.adminProvider = adminProvider;
        this.toastCtrl = toastCtrl;
        this.videoCtrl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required);
        this.titleCtrl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required);
        this.isSubmitting = false;
        this.addTrainPetVideo = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormGroup */]({
            video: this.videoCtrl,
            title: this.titleCtrl
        });
    }
    addTrainPetVideoSubmit() {
        this.isSubmitting = true;
        if (this.addTrainPetVideo.valid) {
            let data = {
                video: this.video,
                title: this.title,
                videoTitle: this.videoTitle,
                isactive: true
            };
            this.adminProvider.saveTrainPetVideo(data).then(res => {
                this.isSubmitting = false;
                this.navCtrl.push('AdminTrainPetPage');
                let toast = this.toastCtrl.create({
                    message: 'Train pet video was posted',
                    duration: 5000,
                    position: 'bottom'
                });
                toast.present();
            }).catch(err => {
                this.isSubmitting = false;
                let toast = this.toastCtrl.create({
                    message: err.message,
                    duration: 5000,
                    position: 'bottom'
                });
                toast.present();
            });
        }
        else {
            this.isSubmitting = false;
            let toast = this.toastCtrl.create({
                message: 'Title and Video is required',
                duration: 4000,
                position: 'bottom'
            });
            toast.present();
        }
    }
    dismiss() {
        this.viewCtrl.dismiss();
    }
    photoUploadEvent(event) {
        let loading = this.loadingCtrl.create({
            content: 'Uploading your video...'
        });
        loading.present();
        // let videoType = ['video/avi', 'video/mp4', 'video/quicktime', 'video/mp4', 'video/mpeg', 'video/x-ms-wmv'];
        let videoType = ['video/mp4'];
        if (videoType.indexOf(event.target.files.item(0)['type']) != -1) {
            this.videoTitle = event.target.files.item(0)['name'];
            this.adminProvider.uploadPhoto(event.target.files.item(0)).then(photo => {
                this.video = photo;
                loading.dismiss();
                let toast = this.toastCtrl.create({
                    message: 'Video was uploaded',
                    duration: 5000,
                    position: 'bottom'
                });
            }).catch(err => {
                loading.dismiss();
                this.navCtrl.push('AdminTrainPetPage');
                let toast = this.toastCtrl.create({
                    message: err.message,
                    duration: 5000,
                    position: 'bottom'
                });
                toast.present();
            });
        }
        else {
            loading.dismiss();
            let toast = this.toastCtrl.create({
                message: 'Upload failed, file type must be mp4 format',
                duration: 5000,
                position: 'bottom'
            });
            toast.present();
        }
    }
};
AdminAddTrainPetPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-admin-add-train-pet',template:/*ion-inline-start:"C:\Users\Sanchez\Dropbox\petApp\src\pages\admin-add-train-pet\admin-add-train-pet.html"*/'<ion-header>\n\n  <ion-toolbar>\n\n    <ion-title>\n\n      Add Train Pet Video\n\n    </ion-title>\n\n    <ion-buttons start>\n\n      <button ion-button (click)="dismiss()">\n\n        <span ion-text color="primary" showWhen="ios">Cancel</span>\n\n        <ion-icon name="md-close" showWhen="android, windows"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <div class="profileBlock">\n\n    <input type="file" hidden #petPicUpload name="petPicUpload" (change)="photoUploadEvent($event)">\n\n    <ion-icon name="cloud-upload" class="uploadIcon" (click)="petPicUpload.click()"></ion-icon>\n\n    <span (click)="petPicUpload.click()">Upload Video</span> - {{videoTitle}}\n\n  </div>\n\n\n\n  <form [formGroup]="addTrainPetVideo" (ngSubmit)="addTrainPetVideoSubmit()">\n\n    <ion-item hidden>\n\n      <ion-label floating>Video</ion-label>\n\n      <ion-input type="text" formControlName="video" [(ngModel)]="video" name="video"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label floating>Title</ion-label>\n\n      <ion-input type="text" formControlName="title" [(ngModel)]="title" name="title"></ion-input>\n\n    </ion-item>\n\n\n\n    <button ion-button type="submit" class="btnSave" [disabled]="isSubmitting">\n\n      <ion-spinner name="crescent" *ngIf="isSubmitting"></ion-spinner>\n\n      <ion-icon name="cloud-download" *ngIf="isSubmitting == false"></ion-icon> &nbsp; Save</button>\n\n  </form>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Sanchez\Dropbox\petApp\src\pages\admin-add-train-pet\admin-add-train-pet.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_admin_admin__["a" /* AdminProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */]])
], AdminAddTrainPetPage);

//# sourceMappingURL=admin-add-train-pet.js.map

/***/ }),

/***/ 359:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditTrainPetPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_admin_admin__ = __webpack_require__(64);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




let EditTrainPetPage = class EditTrainPetPage {
    constructor(navCtrl, navParams, viewCtrl, loadingCtrl, toastCtrl, adminProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.adminProvider = adminProvider;
        this.videoCtrl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required);
        this.titleCtrl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required);
        this.isSubmitting = false;
        this.editTrainPetVideo = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormGroup */]({
            video: this.videoCtrl,
            title: this.titleCtrl
        });
        this.videoId = this.navParams.get('videoId');
        console.log('this.videoId', this.videoId);
        this.trainPetInfo();
    }
    trainPetInfo() {
        this.adminProvider.trainPetInfo(this.videoId).then(info => {
            console.log('info', info);
            this.videoTitle = info['videoTitle'];
            this.video = info['video'];
            this.title = info['title'];
        }).catch(err => {
            let toast = this.toastCtrl.create({
                message: err.message,
                duration: 4000,
                position: 'bottom'
            });
            toast.present();
        });
    }
    editTrainPetVideoSubmit() {
        this.isSubmitting = true;
        if (this.editTrainPetVideo.valid) {
            let data = {
                video: this.video,
                videoTitle: this.videoTitle,
                title: this.title
            };
            this.adminProvider.saveUpdatesTrainPet(data, this.videoId).then(res => {
                this.isSubmitting = false;
                this.navCtrl.push('AdminTrainPetPage');
                let toast = this.toastCtrl.create({
                    message: 'Updates was saved',
                    duration: 4000,
                    position: 'bottom'
                });
                toast.present();
            }).catch(err => {
                this.isSubmitting = false;
                let toast = this.toastCtrl.create({
                    message: err.message,
                    duration: 4000,
                    position: 'bottom'
                });
                toast.present();
            });
        }
        else {
            this.isSubmitting = false;
            let toast = this.toastCtrl.create({
                message: 'Title and Video is required',
                duration: 4000,
                position: 'bottom'
            });
            toast.present();
        }
    }
    dismiss() {
        this.viewCtrl.dismiss();
    }
    petPicUploadEvent(event) {
        let loading = this.loadingCtrl.create({
            content: 'Uploading your video...'
        });
        loading.present();
        let videoType = ['video/avi', 'video/mp4', 'video/quicktime', 'video/mp4', 'video/mpeg', 'video/x-ms-wmv'];
        if (videoType.indexOf(event.target.files.item(0)['type']) != -1) {
            this.videoTitle = event.target.files.item(0)['name'];
            this.adminProvider.uploadPhoto(event.target.files.item(0)).then(photo => {
                this.video = photo;
                loading.dismiss();
                let toast = this.toastCtrl.create({
                    message: 'Video was uploaded',
                    duration: 5000,
                    position: 'bottom'
                });
            }).catch(err => {
                loading.dismiss();
                this.navCtrl.push('AdminTrainPetPage');
                let toast = this.toastCtrl.create({
                    message: err.message,
                    duration: 5000,
                    position: 'bottom'
                });
                toast.present();
            });
        }
        else {
            loading.dismiss();
            let toast = this.toastCtrl.create({
                message: 'Invalid file type, only allowed file types are mp4, m4v, mov, avi, flv, mpg and wmv',
                duration: 5000,
                position: 'bottom'
            });
            toast.present();
        }
    }
};
EditTrainPetPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-edit-train-pet',template:/*ion-inline-start:"C:\Users\Sanchez\Dropbox\petApp\src\pages\edit-train-pet\edit-train-pet.html"*/'<ion-header>\n\n  <ion-toolbar>\n\n    <ion-title>\n\n      Edit Train Pet Post\n\n    </ion-title>\n\n    <ion-buttons start>\n\n      <button ion-button (click)="dismiss()">\n\n        <span ion-text color="primary" showWhen="ios">Cancel</span>\n\n        <ion-icon name="md-close" showWhen="android, windows"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <div class="profileBlock">\n\n    <input type="file" hidden #petPicUpload name="petPicUpload" (change)="petPicUploadEvent($event)">\n\n    <ion-icon name="cloud-upload" class="uploadIcon" (click)="petPicUpload.click()"></ion-icon>\n\n    <span (click)="petPicUpload.click()">Upload Video</span> - {{videoTitle}}\n\n  </div>\n\n\n\n  <form [formGroup]="editTrainPetVideo" (ngSubmit)="editTrainPetVideoSubmit()">\n\n    <ion-item hidden>\n\n      <ion-label floating>Video</ion-label>\n\n      <ion-input type="text" formControlName="video" [(ngModel)]="video" name="video"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label floating>Title</ion-label>\n\n      <ion-input type="text" formControlName="title" [(ngModel)]="title" name="title"></ion-input>\n\n    </ion-item>\n\n\n\n    <button ion-button type="submit" class="btnSave" [disabled]="isSubmitting">\n\n      <ion-spinner name="crescent" *ngIf="isSubmitting"></ion-spinner>\n\n      <ion-icon name="cloud-download" *ngIf="isSubmitting == false"></ion-icon> &nbsp; Save</button>\n\n  </form>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Sanchez\Dropbox\petApp\src\pages\edit-train-pet\edit-train-pet.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_admin_admin__["a" /* AdminProvider */]])
], EditTrainPetPage);

//# sourceMappingURL=edit-train-pet.js.map

/***/ }),

/***/ 360:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditAdoptPetPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_buypet_buypet__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_clarifai__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_clarifai___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_clarifai__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





const app = new __WEBPACK_IMPORTED_MODULE_4_clarifai__["App"]({
    apiKey: 'b1c9abe51ae7422a8cf6f0977081d9aa'
});
let EditAdoptPetPage = class EditAdoptPetPage {
    constructor(navCtrl, navParams, viewCtrl, loadingCtrl, buypetProvider, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.loadingCtrl = loadingCtrl;
        this.buypetProvider = buypetProvider;
        this.toastCtrl = toastCtrl;
        this.image = '';
        this.name = '';
        this.petType = '';
        this.breed = '';
        this.color = '';
        this.age = '';
        this.gender = '';
        this.vaccineDate = '';
        this.remarks = '';
        this.isSubmitting = false;
        this.nameCtrl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required);
        this.petTypeCtrl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required);
        this.breedCtrl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required);
        this.colorCtrl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required);
        this.ageCtrl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required);
        this.genderCtrl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required);
        this.vaccineDateCtrl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('');
        this.remarksCtrl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('');
        this.imageCtrl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('');
        this.addForSalePet = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormGroup */]({
            image: this.imageCtrl,
            name: this.nameCtrl,
            petType: this.petTypeCtrl,
            breed: this.breedCtrl,
            color: this.colorCtrl,
            age: this.ageCtrl,
            gender: this.genderCtrl,
            vaccineDate: this.vaccineDateCtrl,
            remarks: this.remarksCtrl
        });
        console.log('this.navParams', this.navParams);
        this.petId = this.navParams.get('petId');
        this.getPetInfo();
    }
    getPetInfo() {
        this.buypetProvider.getAdoptPetInfo(this.petId).then(pet => {
            this.image = pet['image'];
            this.name = pet['name'];
            this.petType = pet['petType'];
            this.breed = pet['breed'];
            this.color = pet['color'];
            this.age = pet['age'];
            this.gender = pet['gender'];
            this.vaccineDate = pet['vaccineDate'];
            this.remarks = pet['remarks'];
        }).catch(err => {
            console.log('err', err);
        });
    }
    addForSalePetSubmit() {
        this.isSubmitting = true;
        if (this.addForSalePet.valid) {
            let petInfo = {
                name: this.name,
                image: this.image,
                petType: this.petType,
                breed: this.breed,
                color: this.color,
                age: this.age,
                gender: this.gender,
                vaccineDate: this.vaccineDate,
                remarks: this.remarks,
                isactive: true,
            };
            this.buypetProvider.saveUpdatedAdoptPetInfo(petInfo, this.petId).then(res => {
                this.isSubmitting = false;
                this.viewCtrl.dismiss();
                let toast = this.toastCtrl.create({
                    message: 'Updates was posted',
                    duration: 4000,
                    position: 'bottom'
                });
                toast.present();
            }).catch(err => {
                console.log('err', err);
                this.isSubmitting = false;
                let toast = this.toastCtrl.create({
                    message: err.message,
                    duration: 4000,
                    position: 'bottom'
                });
                toast.present();
            });
        }
        else {
            this.isSubmitting = false;
            let toast = this.toastCtrl.create({
                message: 'Post failed, please fill up all required fields',
                duration: 4000,
                position: 'bottom'
            });
            toast.present();
        }
    }
    dismiss() {
        this.viewCtrl.dismiss();
    }
    capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    }
    petPicUploadEvent(event) {
        let loading = this.loadingCtrl.create({
            content: 'Uploading your pet photo...'
        });
        loading.present();
        this.buypetProvider.uploadPhoto(event.target.files.item(0)).then(photo => {
            app.models.predict(__WEBPACK_IMPORTED_MODULE_4_clarifai__["GENERAL_MODEL"], photo).then(res => {
                let tagArray = res.rawData.outputs[0].data.concepts;
                let isValid = 0;
                for (var other = 0; other < tagArray.length; other++) {
                    if (tagArray[other].name == 'dog' || tagArray[other].name == 'cat') {
                        isValid = 1;
                        let name = tagArray[other].name;
                        this.petType = this.capitalizeFirstLetter(name);
                    }
                }
                if (isValid) {
                    app.models.predict(__WEBPACK_IMPORTED_MODULE_4_clarifai__["COLOR_MODEL"], photo).then(res => {
                        let tagArray = res.rawData.outputs[0].data.colors;
                        this.color = tagArray[0].w3c.name;
                        this.image = photo;
                        loading.dismiss();
                        let toast = this.toastCtrl.create({
                            message: 'Photo was uploaded',
                            duration: 5000,
                            position: 'bottom'
                        });
                    }, err => {
                        loading.dismiss();
                        let toast = this.toastCtrl.create({
                            message: err.message,
                            duration: 5000,
                            position: 'bottom'
                        });
                        toast.present();
                    });
                }
                else {
                    loading.dismiss();
                    let toast = this.toastCtrl.create({
                        message: 'Upload failed, pet photo must be a cat or dog',
                        duration: 5000,
                        position: 'bottom'
                    });
                    toast.present();
                }
            }, err => {
                loading.dismiss();
                let toast = this.toastCtrl.create({
                    message: err.message,
                    duration: 5000,
                    position: 'bottom'
                });
                toast.present();
            });
        }).catch(err => {
            loading.dismiss();
            let toast = this.toastCtrl.create({
                message: err.message,
                duration: 5000,
                position: 'bottom'
            });
            toast.present();
        });
    }
};
EditAdoptPetPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-edit-adopt-pet',template:/*ion-inline-start:"C:\Users\Sanchez\Dropbox\petApp\src\pages\edit-adopt-pet\edit-adopt-pet.html"*/'<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      Edit Pet Details\n    </ion-title>\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">\n        <span ion-text color="primary" showWhen="ios">Cancel</span>\n        <ion-icon name="md-close" showWhen="android, windows"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <div class="profileBlock">\n    <input type="file" hidden #petPicUpload name="petPicUpload" (change)="petPicUploadEvent($event)">\n    <img [src]="image != \'\' && image != null ? image : \'assets/images/icon.png\' " width="124" height="124" alt="" (click)="petPicUpload.click()">\n    <ion-icon name="camera" class="camera" (click)="petPicUpload.click()"></ion-icon>\n  </div>\n\n  <form [formGroup]="addForSalePet" (ngSubmit)="addForSalePetSubmit()">\n    <ion-item hidden>\n      <ion-label floating>Image</ion-label>\n      <ion-input type="text" formControlName="image" [(ngModel)]="image" name="image"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Name</ion-label>\n      <ion-input type="text" formControlName="name" [(ngModel)]="name" name="name"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Pet Type</ion-label>\n      <ion-select formControlName="petType" [(ngModel)]="petType" name="petType">\n        <ion-option value="Dog">Dog</ion-option>\n        <ion-option value="Cat">Cat</ion-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Breed</ion-label>\n      <ion-input type="text" formControlName="breed" [(ngModel)]="breed" name="breed"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Color</ion-label>\n      <ion-input type="text" formControlName="color" [(ngModel)]="color" name="color"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Age</ion-label>\n      <ion-input type="text" formControlName="age" [(ngModel)]="age" name="age"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Gender</ion-label>\n      <ion-select formControlName="gender" [(ngModel)]="gender" name="gender">\n        <ion-option value="Female">Female</ion-option>\n        <ion-option value="Male">Male</ion-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Date of last vaccine</ion-label>\n      <ion-datetime displayFormat="MM/DD/YYYY" formControlName="vaccineDate" [(ngModel)]="vaccineDate" name="vaccineDate"></ion-datetime>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Remarks</ion-label>\n      <ion-textarea type="text" formControlName="remarks" [(ngModel)]="remarks" name="remarks"></ion-textarea>\n    </ion-item>\n\n    <button ion-button type="submit" class="btnSave" [disabled]="isSubmitting">\n      <ion-spinner name="crescent" *ngIf="isSubmitting"></ion-spinner>\n      <ion-icon name="cloud-download" *ngIf="isSubmitting == false"></ion-icon> &nbsp; Save</button>\n  </form>\n</ion-content>'/*ion-inline-end:"C:\Users\Sanchez\Dropbox\petApp\src\pages\edit-adopt-pet\edit-adopt-pet.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_buypet_buypet__["a" /* BuypetProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */]])
], EditAdoptPetPage);

//# sourceMappingURL=edit-adopt-pet.js.map

/***/ }),

/***/ 361:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_firestore__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase_firestore__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




let ChatProvider = class ChatProvider {
    constructor(http) {
        this.http = http;
        this.db = __WEBPACK_IMPORTED_MODULE_2_firebase__["firestore"]();
        this.basePath = '/uploads';
        this.userId = localStorage.getItem('userId');
    }
    randomCharacters() {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (var i = 0; i < 20; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        return text;
    }
    uploadPhoto(upload, chatId, name, userEmailName, userPhoto) {
        let uploadName = upload['name'] + '-' + this.randomCharacters(); // create a random name for the upload name
        Object.defineProperty(upload, 'name', {
            writable: true,
            value: uploadName
        });
        const promise = new Promise((resolve, reject) => {
            let storageRef = __WEBPACK_IMPORTED_MODULE_2_firebase__["storage"]().ref();
            let uploadTask = storageRef.child(`${this.basePath}/${upload.name}`).put(upload);
            uploadTask.on(__WEBPACK_IMPORTED_MODULE_2_firebase__["storage"].TaskEvent.STATE_CHANGED, (snapshot) => {
                upload.progress = (uploadTask.snapshot.bytesTransferred / uploadTask.snapshot.totalBytes) * 100;
            }, (error) => {
                reject(error);
            }, () => {
                let timeStampSec = new Date().getTime() / 1000;
                let payload = {
                    message: uploadTask.snapshot.downloadURL,
                    isPhoto: true,
                    name: name,
                    userEmailName: userEmailName,
                    photo: userPhoto,
                    isRead: 0,
                    dateAdded: __WEBPACK_IMPORTED_MODULE_2_firebase__["firestore"].FieldValue.serverTimestamp(),
                    timestampInSecs: timeStampSec
                };
                this.db.collection('chats').doc(chatId).collection('messages').add(payload).then(res => {
                    resolve(1);
                }).catch(err => {
                    console.log('err', err);
                });
            });
        });
        return promise;
    }
};
ChatProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
], ChatProvider);

//# sourceMappingURL=chat.js.map

/***/ }),

/***/ 362:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditVaccinationSchedPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_vaccine_vaccine__ = __webpack_require__(171);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




let EditVaccinationSchedPage = class EditVaccinationSchedPage {
    constructor(navCtrl, navParams, loadingCtrl, viewCtrl, toastCtrl, vaccineProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.viewCtrl = viewCtrl;
        this.toastCtrl = toastCtrl;
        this.vaccineProvider = vaccineProvider;
        this.imageCtrl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('');
        this.titleCtrl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('');
        this.notesCtrl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('');
        this.vaccineDateCtrl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('');
        this.isSubmitting = false;
        this.editVaccineForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormGroup */]({
            image: this.imageCtrl,
            title: this.titleCtrl,
            notes: this.notesCtrl,
            vaccineDate: this.vaccineDateCtrl
        });
        this.postId = this.navParams.get('postId');
        this.getPostInfo();
    }
    getPostInfo() {
        this.vaccineProvider.getPostInfo(this.postId).then(pet => {
            this.image = pet['image'];
            this.title = pet['title'];
            this.notes = pet['notes'];
            this.vaccineDate = pet['vaccineDate'];
        }).catch(err => {
            console.log('err', err);
        });
    }
    dismiss() {
        this.viewCtrl.dismiss();
    }
    editVaccineFormSubmit() {
        this.isSubmitting = true;
        if (this.editVaccineForm.valid) {
            let vaccineData = {
                image: this.image,
                title: this.title,
                notes: this.notes,
                vaccineDate: this.vaccineDate
            };
            this.vaccineProvider.editVaccineSched(vaccineData, this.postId).then(res => {
                this.isSubmitting = false;
                this.navCtrl.push('VaccinationSchedulePage');
                let toast = this.toastCtrl.create({
                    message: 'Post updates was saved',
                    duration: 5000,
                    position: 'bottom'
                });
                toast.present();
            }).catch(err => {
                this.isSubmitting = false;
                let toast = this.toastCtrl.create({
                    message: err.message,
                    duration: 5000,
                    position: 'bottom'
                });
                toast.present();
            });
        }
        else {
            this.isSubmitting = false;
        }
    }
    petPicUploadEvent(event) {
        let loading = this.loadingCtrl.create({
            content: 'Uploading your banner'
        });
        loading.present();
        this.vaccineProvider.uploadPhoto(event.target.files.item(0)).then(photo => {
            console.log('photo', photo);
            this.image = photo;
            loading.dismiss();
            let toast = this.toastCtrl.create({
                message: 'Photo was uploaded',
                duration: 5000,
                position: 'bottom'
            });
        }).catch(err => {
            loading.dismiss();
            let toast = this.toastCtrl.create({
                message: err.message,
                duration: 5000,
                position: 'bottom'
            });
            toast.present();
        });
    }
};
EditVaccinationSchedPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-edit-vaccination-sched',template:/*ion-inline-start:"C:\Users\Sanchez\Dropbox\petApp\src\pages\edit-vaccination-sched\edit-vaccination-sched.html"*/'<ion-header>\n\n  <ion-toolbar>\n\n    <ion-title>\n\n      Edit Pet Details\n\n    </ion-title>\n\n    <ion-buttons start>\n\n      <button ion-button (click)="dismiss()">\n\n        <span ion-text color="primary" showWhen="ios">Cancel</span>\n\n        <ion-icon name="md-close" showWhen="android, windows"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <div class="profileBlock">\n\n    <input type="file" hidden #petPicUpload name="petPicUpload" (change)="petPicUploadEvent($event)">\n\n    <img [src]="image != \'\' && image != null ? image : \'assets/images/icon.png\' " width="124" height="124" alt="" (click)="petPicUpload.click()">\n\n    <ion-icon name="camera" class="camera" (click)="petPicUpload.click()"></ion-icon>\n\n  </div>\n\n\n\n  <form [formGroup]="editVaccineForm" (ngSubmit)="editVaccineFormSubmit()">\n\n    <ion-item hidden>\n\n      <ion-label floating>Image</ion-label>\n\n      <ion-input type="text" formControlName="image" [(ngModel)]="image" name="image"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label floating>Title</ion-label>\n\n      <ion-input type="text" formControlName="title" [(ngModel)]="title" name="title"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label floating>Notes</ion-label>\n\n      <ion-textarea type="text" formControlName="notes" [(ngModel)]="notes" name="notes"></ion-textarea>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label floating>Vaccination Date</ion-label>\n\n      <ion-datetime displayFormat="MM/DD/YYYY" formControlName="vaccineDate" [(ngModel)]="vaccineDate" name="vaccineDate"></ion-datetime>\n\n    </ion-item>\n\n\n\n\n\n    <button ion-button type="submit" class="btnSave" [disabled]="isSubmitting">\n\n      <ion-spinner name="crescent" *ngIf="isSubmitting"></ion-spinner>\n\n      <ion-icon name="cloud-download" *ngIf="isSubmitting == false"></ion-icon> &nbsp; Save</button>\n\n  </form>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Sanchez\Dropbox\petApp\src\pages\edit-vaccination-sched\edit-vaccination-sched.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_vaccine_vaccine__["a" /* VaccineProvider */]])
], EditVaccinationSchedPage);

//# sourceMappingURL=edit-vaccination-sched.js.map

/***/ }),

/***/ 363:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditprofilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_profile_profile__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
let EditprofilePage = class EditprofilePage {
    constructor(navCtrl, navParams, viewCtrl, toastCtrl, profileProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.toastCtrl = toastCtrl;
        this.profileProvider = profileProvider;
        this.isSubmitting = false;
        this.nameCtrl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('');
        this.emailCtrl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].pattern(EMAIL_REGEX)]);
        this.phoneCtrl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('');
        this.addressCtrl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('');
        this.editForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormGroup */]({
            name: this.nameCtrl,
            email: this.emailCtrl,
            phone: this.phoneCtrl,
            address: this.addressCtrl
        });
        this.name = navParams.get('name');
        this.email = navParams.get('email');
        this.phone = navParams.get('phone');
        this.address = navParams.get('address');
        this.userId = navParams.get('uid');
    }
    dismiss() {
        this.viewCtrl.dismiss();
    }
    editProfileSubmit() {
        this.isSubmitting = true;
        if (this.editForm.valid) {
            let userData = {
                name: this.name,
                email: this.email,
                phone: this.phone,
                address: this.address,
                uid: this.userId
            };
            this.profileProvider.editProfile(userData).then(res => {
                this.viewCtrl.dismiss(1);
                this.isSubmitting = false;
                let toast = this.toastCtrl.create({
                    message: 'Profile information was updated',
                    duration: 5000,
                    position: 'bottom'
                });
                toast.present();
            }).catch(err => {
                this.isSubmitting = false;
                let toast = this.toastCtrl.create({
                    message: err.message,
                    duration: 5000,
                    position: 'bottom'
                });
                toast.present();
            });
        }
        else {
            this.isSubmitting = false;
            let toast = this.toastCtrl.create({
                message: 'Invalid email address',
                duration: 5000,
                position: 'bottom'
            });
            toast.present();
        }
    }
};
EditprofilePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-editprofile',template:/*ion-inline-start:"C:\Users\Sanchez\Dropbox\petApp\src\pages\editprofile\editprofile.html"*/'<ion-header>\n\n  <ion-toolbar>\n\n    <ion-title>\n\n      Edit Profile\n\n    </ion-title>\n\n    <ion-buttons start>\n\n      <button ion-button (click)="dismiss()">\n\n        <span ion-text color="primary" showWhen="ios">Cancel</span>\n\n        <ion-icon name="md-close" showWhen="android, windows"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <form [formGroup]="editForm" (ngSubmit)="editProfileSubmit()">\n\n    <ion-item>\n\n      <ion-label floating>Name</ion-label>\n\n      <ion-input type="text" formControlName="name" [(ngModel)]="name" name="name"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label floating>Email</ion-label>\n\n      <ion-input type="text" formControlName="email" [(ngModel)]="email" name="email"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label floating>Phone number</ion-label>\n\n      <ion-input type="text" formControlName="phone" [(ngModel)]="phone" name="phone"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n        <ion-label floating>Address</ion-label>\n\n        <ion-input type="text" formControlName="address" [(ngModel)]="address" name="address"></ion-input>\n\n      </ion-item>\n\n  \n\n    <button ion-button type="submit" class="btnSave" [disabled]="isSubmitting"><ion-spinner name="crescent" *ngIf="isSubmitting"></ion-spinner><ion-icon name="cloud-download" *ngIf="isSubmitting == false"></ion-icon> &nbsp; Save</button>\n\n  </form>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Sanchez\Dropbox\petApp\src\pages\editprofile\editprofile.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */], __WEBPACK_IMPORTED_MODULE_3__providers_profile_profile__["a" /* ProfileProvider */]])
], EditprofilePage);

//# sourceMappingURL=editprofile.js.map

/***/ }),

/***/ 364:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlaceDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let PlaceDetailPage = class PlaceDetailPage {
    constructor(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.isClinicOpen = false;
        this.scheds = false;
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
};
PlaceDetailPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-place-detail',template:/*ion-inline-start:"C:\Users\Sanchez\Dropbox\petApp\src\pages\place-detail\place-detail.html"*/'<ion-header>\n\n  <ion-toolbar>\n\n    <ion-title>\n\n      Place Detail\n\n    </ion-title>\n\n    <ion-buttons start>\n\n      <button ion-button (click)="dismiss()">\n\n        <span ion-text color="primary" showWhen="ios">Cancel</span>\n\n        <ion-icon name="md-close" showWhen="android, windows"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n<table class="profileTbl">\n\n  <tr>\n\n    <td>\n\n      <ion-icon name="paw"></ion-icon>\n\n    </td>\n\n    <td>\n\n      <strong>Clinic Name</strong>\n\n      <p>{{name}}</p>\n\n    </td>\n\n  </tr>\n\n  <tr>\n\n    <td>\n\n      <ion-icon name="locate"></ion-icon>\n\n    </td>\n\n    <td>\n\n      <strong>Address</strong>\n\n      <p>{{address}}</p>\n\n    </td>\n\n  </tr>\n\n  <tr>\n\n    <td>\n\n      <ion-icon name="call"></ion-icon>\n\n    </td>\n\n    <td>\n\n      <strong>Phone number</strong>\n\n      <p>{{phoneNumber == null ? \'N/A\' : phoneNumber}}</p>\n\n    </td>\n\n  </tr>\n\n  <tr class="sched">\n\n    <td class="timeIcon">\n\n      <ion-icon name="time"></ion-icon>\n\n    </td>\n\n    <td>\n\n      <strong>Schedule</strong>\n\n      <p>{{isClinicOpen === true ? \'Open\' : \'Close\'}} now</p>\n\n      <p *ngIf="scheds == false">No schedule</p>\n\n      <ul *ngIf="scheds">\n\n        <li *ngFor="let sched of scheds">\n\n          {{sched}}\n\n        </li>\n\n      </ul>\n\n    </td>\n\n  </tr>\n\n</table>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Sanchez\Dropbox\petApp\src\pages\place-detail\place-detail.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */]])
], PlaceDetailPage);

//# sourceMappingURL=place-detail.js.map

/***/ }),

/***/ 365:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdoptPetDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_buypet_buypet__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let AdoptPetDetailsPage = class AdoptPetDetailsPage {
    constructor(navCtrl, navParams, viewCtrl, buypetProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.buypetProvider = buypetProvider;
    }
    ionViewDidLoad() {
        console.log('navParams', this.navParams);
        this.name = this.navParams.get('name');
        this.breed = this.navParams.get('breed');
        this.color = this.navParams.get('color');
        this.gender = this.navParams.get('gender');
        this.vaccineDate = this.navParams.get('vaccineDate');
        this.remarks = this.navParams.get('remarks');
        this.ownerUid = this.navParams.get('uid');
        this.type = this.navParams.get('petType');
        this.getOwnerInfo();
    }
    getOwnerInfo() {
        this.buypetProvider.ownerInfo(this.ownerUid).then(owner => {
            this.ownerName = owner['name'];
            this.ownerEmail = owner['email'];
            this.ownerPhone = owner['phone'];
            this.ownerAddress = owner['address'];
        });
    }
    dismiss() {
        this.viewCtrl.dismiss();
    }
};
AdoptPetDetailsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-adopt-pet-details',template:/*ion-inline-start:"C:\Users\Sanchez\Dropbox\petApp\src\pages\adopt-pet-details\adopt-pet-details.html"*/'<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      Pet Details\n    </ion-title>\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">\n        <span ion-text color="primary" showWhen="ios">Cancel</span>\n        <ion-icon name="md-close" showWhen="android, windows"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n  <table class="profileTbl">\n    <tr>\n      <td>\n        <ion-icon name="paw"></ion-icon>\n      </td>\n      <td>\n        <strong>Name</strong>\n        <p>{{name}}</p>\n      </td>\n    </tr>\n    <tr>\n      <td>\n        <ion-icon name="checkbox-outline"></ion-icon>\n      </td>\n      <td>\n        <strong>Type</strong>\n        <p *ngIf="type == \'\' || type == undefined">N/A</p>\n        <p *ngIf="type">{{type}}</p>\n      </td>\n    </tr>\n    <tr>\n      <td>\n        <ion-icon name="bookmark"></ion-icon>\n      </td>\n      <td>\n        <strong>Breed</strong>\n        <p *ngIf="breed == \'\' || breed == null">N/A</p>\n        <p *ngIf="breed">{{breed}}</p>\n      </td>\n    </tr>\n    <tr>\n      <td>\n        <ion-icon name="color-fill"></ion-icon>\n      </td>\n      <td>\n        <strong>Color</strong>\n        <p *ngIf="color == \'\' || color == null">N/A</p>\n        <p *ngIf="color">{{color}}</p>\n      </td>\n    </tr>\n    <tr>\n      <td>\n        <ion-icon name="heart"></ion-icon>\n      </td>\n      <td>\n        <strong>Gender</strong>\n        <p *ngIf="gender == \'\' || gender == null">N/A</p>\n        <p *ngIf="gender">{{gender}}</p>\n      </td>\n    </tr>\n    <tr>\n      <td>\n        <ion-icon name="md-contact"></ion-icon>\n      </td>\n      <td>\n        <strong>Owner Name</strong>\n        <p *ngIf="ownerName == \'\' || ownerName == null">N/A</p>\n        <p *ngIf="ownerName">{{ownerName}}</p>\n      </td>\n    </tr>\n    <tr>\n      <td>\n        <ion-icon name="mail"></ion-icon>\n      </td>\n      <td>\n        <strong>Email Address</strong>\n        <p *ngIf="ownerEmail == \'\' || ownerEmail == null">N/A</p>\n        <p *ngIf="ownerEmail">{{ownerEmail}}</p>\n      </td>\n    </tr>\n    <tr>\n      <td>\n        <ion-icon name="call"></ion-icon>\n      </td>\n      <td>\n        <strong>Phone Number</strong>\n        <p *ngIf="ownerPhone == \'\' || ownerPhone == null">N/A</p>\n        <p *ngIf="ownerPhone">{{ownerPhone}}</p>\n      </td>\n    </tr>\n    <tr>\n      <td>\n        <ion-icon name="locate"></ion-icon>\n      </td>\n      <td>\n        <strong>Address</strong>\n        <p *ngIf="ownerAddress == \'\' || ownerAddress == null">N/A</p>\n        <p *ngIf="ownerAddress">{{ownerAddress}}</p>\n      </td>\n    </tr>\n    <tr>\n      <td>\n        <ion-icon name="information-circle"></ion-icon>\n      </td>\n      <td>\n        <strong>Remarks</strong>\n        <p *ngIf="remarks == \'\' || remarks == null">N/A</p>\n        <p *ngIf="remarks">{{remarks}}</p>\n      </td>\n    </tr>\n  </table>\n</ion-content>'/*ion-inline-end:"C:\Users\Sanchez\Dropbox\petApp\src\pages\adopt-pet-details\adopt-pet-details.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__providers_buypet_buypet__["a" /* BuypetProvider */]])
], AdoptPetDetailsPage);

//# sourceMappingURL=adopt-pet-details.js.map

/***/ }),

/***/ 367:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(389);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 389:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_video_player__ = __webpack_require__(594);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_streaming_media__ = __webpack_require__(595);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_geolocation__ = __webpack_require__(366);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_badge__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_component__ = __webpack_require__(596);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_editprofile_editprofile__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_add_lost_pet_form_add_lost_pet_form__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_place_detail_place_detail__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_lost_pet_details_lost_pet_details__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_add_for_sale_pet_add_for_sale_pet__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_buy_pet_details_buy_pet_details__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_register_pet_form_register_pet_form__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_registered_pet_details_registered_pet_details__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_admin_view_profile_admin_view_profile__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_admin_view_user_registered_pets_admin_view_user_registered_pets__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_edit_for_sale_pet_edit_for_sale_pet__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_edit_lost_pet_edit_lost_pet__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_edit_registered_pet_edit_registered_pet__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_add_vaccination_schedule_form_add_vaccination_schedule_form__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_edit_vaccination_sched_edit_vaccination_sched__ = __webpack_require__(362);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_admin_add_groom_pet_admin_add_groom_pet__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_edit_groom_pet_edit_groom_pet__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_admin_add_train_pet_admin_add_train_pet__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_edit_train_pet_edit_train_pet__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__providers_auth_auth__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__providers_profile_profile__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__providers_google_cloud_vision_google_cloud_vision__ = __webpack_require__(597);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__providers_lostpet_lostpet__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__providers_buypet_buypet__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__providers_register_pet_register_pet__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__providers_admin_admin__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__providers_vaccine_vaccine__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__providers_chat_chat__ = __webpack_require__(361);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__pages_add_adopt_pet_add_adopt_pet__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__pages_edit_adopt_pet_edit_adopt_pet__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__pages_adopt_pet_details_adopt_pet_details__ = __webpack_require__(365);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









// Plugins


// Components




















// Providers












// Firebase Setup
const config = {
    apiKey: "AIzaSyCEc_GbF6xYYsd82ddTLgoFU0DNsGUXbpc",
    authDomain: "purrspaws-87594.firebaseapp.com",
    databaseURL: "https://purrspaws-87594.firebaseio.com",
    projectId: "purrspaws-87594",
    storageBucket: "purrspaws-87594.appspot.com",
    messagingSenderId: "1015253898291"
};
// Dev01
// const config = {
//   apiKey: "AIzaSyBdAMc_GPRd0ajgNmtzhybsOZ82QpAlXd0",
//   authDomain: "purrspawdev01.firebaseapp.com",
//   databaseURL: "https://purrspawdev01.firebaseio.com",
//   projectId: "purrspawdev01",
//   storageBucket: "purrspawdev01.appspot.com",
//   messagingSenderId: "744188651812"
// };
__WEBPACK_IMPORTED_MODULE_6_firebase__["initializeApp"](config);
let AppModule = class AppModule {
};
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_12__pages_editprofile_editprofile__["a" /* EditprofilePage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_add_lost_pet_form_add_lost_pet_form__["a" /* AddLostPetFormPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_place_detail_place_detail__["a" /* PlaceDetailPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_lost_pet_details_lost_pet_details__["a" /* LostPetDetailsPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_add_for_sale_pet_add_for_sale_pet__["a" /* AddForSalePetPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_buy_pet_details_buy_pet_details__["a" /* BuyPetDetailsPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_register_pet_form_register_pet_form__["a" /* RegisterPetFormPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_registered_pet_details_registered_pet_details__["a" /* RegisteredPetDetailsPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_admin_view_profile_admin_view_profile__["a" /* AdminViewProfilePage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_admin_view_user_registered_pets_admin_view_user_registered_pets__["a" /* AdminViewUserRegisteredPetsPage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_edit_for_sale_pet_edit_for_sale_pet__["a" /* EditForSalePetPage */],
            __WEBPACK_IMPORTED_MODULE_23__pages_edit_lost_pet_edit_lost_pet__["a" /* EditLostPetPage */],
            __WEBPACK_IMPORTED_MODULE_24__pages_edit_registered_pet_edit_registered_pet__["a" /* EditRegisteredPetPage */],
            __WEBPACK_IMPORTED_MODULE_25__pages_add_vaccination_schedule_form_add_vaccination_schedule_form__["a" /* AddVaccinationScheduleFormPage */],
            __WEBPACK_IMPORTED_MODULE_26__pages_edit_vaccination_sched_edit_vaccination_sched__["a" /* EditVaccinationSchedPage */],
            __WEBPACK_IMPORTED_MODULE_27__pages_admin_add_groom_pet_admin_add_groom_pet__["a" /* AdminAddGroomPetPage */],
            __WEBPACK_IMPORTED_MODULE_28__pages_edit_groom_pet_edit_groom_pet__["a" /* EditGroomPetPage */],
            __WEBPACK_IMPORTED_MODULE_29__pages_admin_add_train_pet_admin_add_train_pet__["a" /* AdminAddTrainPetPage */],
            __WEBPACK_IMPORTED_MODULE_30__pages_edit_train_pet_edit_train_pet__["a" /* EditTrainPetPage */],
            __WEBPACK_IMPORTED_MODULE_40__pages_add_adopt_pet_add_adopt_pet__["a" /* AddAdoptPetPage */],
            __WEBPACK_IMPORTED_MODULE_41__pages_edit_adopt_pet_edit_adopt_pet__["a" /* EditAdoptPetPage */],
            __WEBPACK_IMPORTED_MODULE_42__pages_adopt_pet_details_adopt_pet_details__["a" /* AdoptPetDetailsPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* MyApp */], {
                tabsPlacement: 'top',
                tabsHideOnSubPages: true
            }, {
                links: [
                    { loadChildren: '../pages/add-adopt-pet/add-adopt-pet.module#AddAdoptPetPageModule', name: 'AddAdoptPetPage', segment: 'add-adopt-pet', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/add-lost-pet-form/add-lost-pet-form.module#AddLostPetFormPageModule', name: 'AddLostPetFormPage', segment: 'add-lost-pet-form', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/add-for-sale-pet/add-for-sale-pet.module#AddForSalePetPageModule', name: 'AddForSalePetPage', segment: 'add-for-sale-pet', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/add-vaccination-schedule-form/add-vaccination-schedule-form.module#AddVaccinationScheduleFormPageModule', name: 'AddVaccinationScheduleFormPage', segment: 'add-vaccination-schedule-form', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/admin-add-groom-pet/admin-add-groom-pet.module#AdminAddGroomPetPageModule', name: 'AdminAddGroomPetPage', segment: 'admin-add-groom-pet', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/admin-buy-and-sell/admin-buy-and-sell.module#AdminBuyAndSellPageModule', name: 'AdminBuyAndSellPage', segment: 'admin-buy-and-sell', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/admin-groom-pet/admin-groom-pet.module#AdminGroomPetPageModule', name: 'AdminGroomPetPage', segment: 'admin-groom-pet', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/admin-home/admin-home.module#AdminHomePageModule', name: 'AdminHomePage', segment: 'admin-home', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/admin-lost-pets/admin-lost-pets.module#AdminLostPetsPageModule', name: 'AdminLostPetsPage', segment: 'admin-lost-pets', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/admin-registered-user/admin-registered-user.module#AdminRegisteredUserPageModule', name: 'AdminRegisteredUserPage', segment: 'admin-registered-user', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/admin-train-pet/admin-train-pet.module#AdminTrainPetPageModule', name: 'AdminTrainPetPage', segment: 'admin-train-pet', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/admin-view-profile/admin-view-profile.module#AdminViewProfilePageModule', name: 'AdminViewProfilePage', segment: 'admin-view-profile', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/admin-view-user-registered-pets/admin-view-user-registered-pets.module#AdminViewUserRegisteredPetsPageModule', name: 'AdminViewUserRegisteredPetsPage', segment: 'admin-view-user-registered-pets', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/adopt-pet-details/adopt-pet-details.module#AdoptPetDetailsPageModule', name: 'AdoptPetDetailsPage', segment: 'adopt-pet-details', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/adoption/adoption.module#AdoptionPageModule', name: 'AdoptionPage', segment: 'adoption', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/buy-pet-details/buy-pet-details.module#BuyPetDetailsPageModule', name: 'BuyPetDetailsPage', segment: 'buy-pet-details', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/chat-list/chat-list.module#ChatListPageModule', name: 'ChatListPage', segment: 'chat-list', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/chat-notif-fab/chat-notif-fab.module#ChatNotifFabPageModule', name: 'ChatNotifFabPage', segment: 'chat-notif-fab', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/chat-single/chat-single.module#ChatSinglePageModule', name: 'ChatSinglePage', segment: 'chat-single', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/edit-adopt-pet/edit-adopt-pet.module#EditAdoptPetPageModule', name: 'EditAdoptPetPage', segment: 'edit-adopt-pet', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/edit-for-sale-pet/edit-for-sale-pet.module#EditForSalePetPageModule', name: 'EditForSalePetPage', segment: 'edit-for-sale-pet', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/edit-groom-pet/edit-groom-pet.module#EditGroomPetPageModule', name: 'EditGroomPetPage', segment: 'edit-groom-pet', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/edit-lost-pet/edit-lost-pet.module#EditLostPetPageModule', name: 'EditLostPetPage', segment: 'edit-lost-pet', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/edit-registered-pet/edit-registered-pet.module#EditRegisteredPetPageModule', name: 'EditRegisteredPetPage', segment: 'edit-registered-pet', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/edit-train-pet/edit-train-pet.module#EditTrainPetPageModule', name: 'EditTrainPetPage', segment: 'edit-train-pet', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/edit-vaccination-sched/edit-vaccination-sched.module#EditVaccinationSchedPageModule', name: 'EditVaccinationSchedPage', segment: 'edit-vaccination-sched', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/admin-add-train-pet/admin-add-train-pet.module#AdminAddTrainPetPageModule', name: 'AdminAddTrainPetPage', segment: 'admin-add-train-pet', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/forgot-pass/forgot-pass.module#ForgotPassPageModule', name: 'ForgotPassPage', segment: 'forgot-pass', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/groompet/groompet.module#GroompetPageModule', name: 'GroompetPage', segment: 'groompet', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/lost-pet-details/lost-pet-details.module#LostPetDetailsPageModule', name: 'LostPetDetailsPage', segment: 'lost-pet-details', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/lostpets/lostpets.module#LostpetsPageModule', name: 'LostpetsPage', segment: 'lostpets', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/notif-fab/notif-fab.module#NotifFabPageModule', name: 'NotifFabPage', segment: 'notif-fab', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/pet/pet.module#PetPageModule', name: 'PetPage', segment: 'pet', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/other/other.module#OtherPageModule', name: 'OtherPage', segment: 'other', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/editprofile/editprofile.module#EditprofilePageModule', name: 'EditprofilePage', segment: 'editprofile', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/register-pet-form/register-pet-form.module#RegisterPetFormPageModule', name: 'RegisterPetFormPage', segment: 'register-pet-form', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/registered-pet-details/registered-pet-details.module#RegisteredPetDetailsPageModule', name: 'RegisteredPetDetailsPage', segment: 'registered-pet-details', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/registerpet-single/registerpet-single.module#RegisterpetSinglePageModule', name: 'RegisterpetSinglePage', segment: 'registerpet-single', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/registerpets/registerpets.module#RegisterpetsPageModule', name: 'RegisterpetsPage', segment: 'registerpets', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/searchvet/searchvet.module#SearchvetPageModule', name: 'SearchvetPage', segment: 'searchvet', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/tabs/tabs.module#TabsPageModule', name: 'TabsPage', segment: 'tabs', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/trainpets/trainpets.module#TrainpetsPageModule', name: 'TrainpetsPage', segment: 'trainpets', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/place-detail/place-detail.module#PlaceDetailPageModule', name: 'PlaceDetailPage', segment: 'place-detail', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/vaccination-schedule/vaccination-schedule.module#VaccinationSchedulePageModule', name: 'VaccinationSchedulePage', segment: 'vaccination-schedule', priority: 'low', defaultHistory: [] }
                ]
            }),
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_12__pages_editprofile_editprofile__["a" /* EditprofilePage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_add_lost_pet_form_add_lost_pet_form__["a" /* AddLostPetFormPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_place_detail_place_detail__["a" /* PlaceDetailPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_lost_pet_details_lost_pet_details__["a" /* LostPetDetailsPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_add_for_sale_pet_add_for_sale_pet__["a" /* AddForSalePetPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_buy_pet_details_buy_pet_details__["a" /* BuyPetDetailsPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_register_pet_form_register_pet_form__["a" /* RegisterPetFormPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_registered_pet_details_registered_pet_details__["a" /* RegisteredPetDetailsPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_admin_view_profile_admin_view_profile__["a" /* AdminViewProfilePage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_admin_view_user_registered_pets_admin_view_user_registered_pets__["a" /* AdminViewUserRegisteredPetsPage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_edit_for_sale_pet_edit_for_sale_pet__["a" /* EditForSalePetPage */],
            __WEBPACK_IMPORTED_MODULE_23__pages_edit_lost_pet_edit_lost_pet__["a" /* EditLostPetPage */],
            __WEBPACK_IMPORTED_MODULE_24__pages_edit_registered_pet_edit_registered_pet__["a" /* EditRegisteredPetPage */],
            __WEBPACK_IMPORTED_MODULE_25__pages_add_vaccination_schedule_form_add_vaccination_schedule_form__["a" /* AddVaccinationScheduleFormPage */],
            __WEBPACK_IMPORTED_MODULE_26__pages_edit_vaccination_sched_edit_vaccination_sched__["a" /* EditVaccinationSchedPage */],
            __WEBPACK_IMPORTED_MODULE_27__pages_admin_add_groom_pet_admin_add_groom_pet__["a" /* AdminAddGroomPetPage */],
            __WEBPACK_IMPORTED_MODULE_28__pages_edit_groom_pet_edit_groom_pet__["a" /* EditGroomPetPage */],
            __WEBPACK_IMPORTED_MODULE_29__pages_admin_add_train_pet_admin_add_train_pet__["a" /* AdminAddTrainPetPage */],
            __WEBPACK_IMPORTED_MODULE_30__pages_edit_train_pet_edit_train_pet__["a" /* EditTrainPetPage */],
            __WEBPACK_IMPORTED_MODULE_40__pages_add_adopt_pet_add_adopt_pet__["a" /* AddAdoptPetPage */],
            __WEBPACK_IMPORTED_MODULE_41__pages_edit_adopt_pet_edit_adopt_pet__["a" /* EditAdoptPetPage */],
            __WEBPACK_IMPORTED_MODULE_42__pages_adopt_pet_details_adopt_pet_details__["a" /* AdoptPetDetailsPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_31__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_32__providers_profile_profile__["a" /* ProfileProvider */],
            __WEBPACK_IMPORTED_MODULE_33__providers_google_cloud_vision_google_cloud_vision__["a" /* GoogleCloudVisionProvider */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_34__providers_lostpet_lostpet__["a" /* LostpetProvider */],
            __WEBPACK_IMPORTED_MODULE_35__providers_buypet_buypet__["a" /* BuypetProvider */],
            __WEBPACK_IMPORTED_MODULE_36__providers_register_pet_register_pet__["a" /* RegisterPetProvider */],
            __WEBPACK_IMPORTED_MODULE_37__providers_admin_admin__["a" /* AdminProvider */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_video_player__["a" /* VideoPlayer */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_streaming_media__["a" /* StreamingMedia */],
            __WEBPACK_IMPORTED_MODULE_38__providers_vaccine_vaccine__["a" /* VaccineProvider */],
            __WEBPACK_IMPORTED_MODULE_39__providers_chat_chat__["a" /* ChatProvider */],
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_badge__["a" /* Badge */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BuypetProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_firestore__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase_firestore__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




let BuypetProvider = class BuypetProvider {
    constructor(http) {
        this.http = http;
        this.db = __WEBPACK_IMPORTED_MODULE_2_firebase__["firestore"]();
        this.basePath = '/uploads';
        this.userId = localStorage.getItem('userId');
    }
    randomCharacters() {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (var i = 0; i < 20; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        return text;
    }
    uploadPhoto(upload) {
        let uploadName = upload['name'] + '-' + this.randomCharacters(); // create a random name for the upload name
        Object.defineProperty(upload, 'name', {
            writable: true,
            value: uploadName
        });
        const promise = new Promise((resolve, reject) => {
            let storageRef = __WEBPACK_IMPORTED_MODULE_2_firebase__["storage"]().ref();
            let uploadTask = storageRef.child(`${this.basePath}/${upload.name}`).put(upload);
            uploadTask.on(__WEBPACK_IMPORTED_MODULE_2_firebase__["storage"].TaskEvent.STATE_CHANGED, (snapshot) => {
                upload.progress = (uploadTask.snapshot.bytesTransferred / uploadTask.snapshot.totalBytes) * 100;
            }, (error) => {
                reject(error);
            }, () => {
                resolve(uploadTask.snapshot.downloadURL);
            });
        });
        return promise;
    }
    saveLostPet(pet) {
        const promise = new Promise((resolve, reject) => {
            pet['uid'] = this.userId;
            pet['datePosted'] = __WEBPACK_IMPORTED_MODULE_2_firebase__["firestore"].FieldValue.serverTimestamp();
            this.db.collection('buypets').doc().set(pet).then((res) => {
                this.db.collection('users').get().then(user => {
                    user.docs.map(user => {
                        let email = user.data().email.toLowerCase();
                        if (email != localStorage.getItem('email')) {
                            let userName = email.split('@')[0].replace('.', '');
                            __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref(`notif/buyandsell/${userName}/`).once('value', snapshot => {
                                console.log('firing');
                                if (snapshot.hasChild('unread')) {
                                    let unread = snapshot.val().unread + 1;
                                    __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref(`notif/buyandsell/${userName}/`).set({
                                        unread: unread
                                    });
                                }
                                else {
                                    __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref(`notif/buyandsell/${userName}/`).set({
                                        unread: 1
                                    });
                                }
                            });
                        }
                    });
                    resolve(1);
                });
            }).catch(err => {
                reject(err);
            });
        });
        return promise;
    }
    saveAdoptPet(pet) {
        const promise = new Promise((resolve, reject) => {
            pet['uid'] = this.userId;
            pet['datePosted'] = __WEBPACK_IMPORTED_MODULE_2_firebase__["firestore"].FieldValue.serverTimestamp();
            this.db.collection('adopt').doc().set(pet).then((res) => {
                this.db.collection('users').get().then(user => {
                    user.docs.map(user => {
                        let email = user.data().email.toLowerCase();
                        if (email != localStorage.getItem('email')) {
                            let userName = email.split('@')[0].replace('.', '');
                            __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref(`notif/adopt/${userName}/`).once('value', snapshot => {
                                console.log('firing');
                                if (snapshot.hasChild('unread')) {
                                    let unread = snapshot.val().unread + 1;
                                    __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref(`notif/adopt/${userName}/`).set({
                                        unread: unread
                                    });
                                }
                                else {
                                    __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref(`notif/adopt/${userName}/`).set({
                                        unread: 1
                                    });
                                }
                            });
                        }
                    });
                    resolve(1);
                });
            }).catch(err => {
                reject(err);
            });
        });
        return promise;
    }
    saveUpdatedPetInfo(pet, petId) {
        const promise = new Promise((resolve, reject) => {
            pet['datePosted'] = __WEBPACK_IMPORTED_MODULE_2_firebase__["firestore"].FieldValue.serverTimestamp();
            this.db.collection('buypets').doc(petId).update(pet).then((res) => {
                resolve(1);
            }).catch(err => {
                reject(err);
            });
        });
        return promise;
    }
    saveUpdatedAdoptPetInfo(pet, petId) {
        const promise = new Promise((resolve, reject) => {
            pet['datePosted'] = __WEBPACK_IMPORTED_MODULE_2_firebase__["firestore"].FieldValue.serverTimestamp();
            this.db.collection('adopt').doc(petId).update(pet).then((res) => {
                resolve(1);
            }).catch(err => {
                reject(err);
            });
        });
        return promise;
    }
    ownerInfo(uid) {
        const promise = new Promise((resolve, reject) => {
            this.db.collection('users').doc(uid).get().then(snapshots => {
                resolve(snapshots.data());
            }).catch(err => {
                reject(err);
            });
        });
        return promise;
    }
    getPetInfo(petId) {
        const promise = new Promise((resolve, reject) => {
            this.db.collection('buypets').doc(petId).get().then(pet => {
                resolve(pet.data());
            }).catch(err => {
                reject(err);
            });
        });
        return promise;
    }
    getAdoptPetInfo(petId) {
        const promise = new Promise((resolve, reject) => {
            this.db.collection('adopt').doc(petId).get().then(pet => {
                resolve(pet.data());
            }).catch(err => {
                reject(err);
            });
        });
        return promise;
    }
};
BuypetProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
], BuypetProvider);

//# sourceMappingURL=buypet.js.map

/***/ }),

/***/ 596:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(341);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




let MyApp = class MyApp {
    constructor(platform, statusBar, splashScreen) {
        // if(localStorage.getItem('uid') != '') {
        //   if (localStorage.getItem('adminSwitchUser') == '1') {
        //     this.rootPage = "AdminHomePage";
        //   }else {
        //     this.rootPage = "TabsPage";
        //   }
        // }else {
        //   this.rootPage = "HomePage";
        // }
        this.rootPage = "HomePage";
        platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
};
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Sanchez\Dropbox\petApp\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Users\Sanchez\Dropbox\petApp\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 597:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GoogleCloudVisionProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let GoogleCloudVisionProvider = class GoogleCloudVisionProvider {
    constructor(http) {
        this.http = http;
        console.log('Hello GoogleCloudVisionProvider Provider');
    }
};
GoogleCloudVisionProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
], GoogleCloudVisionProvider);

//# sourceMappingURL=google-cloud-vision.js.map

/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_firestore__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase_firestore__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




let AdminProvider = class AdminProvider {
    constructor(http) {
        this.http = http;
        this.db = __WEBPACK_IMPORTED_MODULE_2_firebase__["firestore"]();
        this.basePath = '/uploads';
        this.userId = localStorage.getItem('userId');
        console.log('Hello AdminProvider Provider');
    }
    saveGroomPetVideo(data) {
        const promise = new Promise((resolve, reject) => {
            data['uid'] = this.userId;
            data['datePosted'] = __WEBPACK_IMPORTED_MODULE_2_firebase__["firestore"].FieldValue.serverTimestamp();
            this.db.collection('groompetsvideos').doc().set(data).then(res => {
                this.db.collection('users').get().then(user => {
                    user.docs.map(user => {
                        let email = user.data().email.toLowerCase();
                        if (email != localStorage.getItem('email')) {
                            let userName = email.split('@')[0].replace('.', '');
                            __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref(`notif/groompet/${userName}/`).once('value', snapshot => {
                                console.log('firing');
                                if (snapshot.hasChild('unread')) {
                                    let unread = snapshot.val().unread + 1;
                                    __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref(`notif/groompet/${userName}/`).set({
                                        unread: unread
                                    });
                                }
                                else {
                                    __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref(`notif/groompet/${userName}/`).set({
                                        unread: 1
                                    });
                                }
                            });
                        }
                    });
                    resolve(1);
                });
            }).catch(err => {
                reject(err);
            });
        });
        return promise;
    }
    loadProfile(userId) {
        const promise = new Promise((resolve, reject) => {
            this.db.collection('users').doc(userId).get().then(doc => {
                resolve(doc.data());
            }).catch(err => {
                reject(err);
            });
        });
        return promise;
    }
    registeredUserCount() {
        const promise = new Promise((resolve, reject) => {
            this.db.collection('users').get().then(user => {
                resolve(user.docs.length);
            }).catch(err => {
                reject(err);
            });
        });
        return promise;
    }
    buySellPetCount() {
        const promise = new Promise((resolve, reject) => {
            this.db.collection('buypets').where("isactive", "==", true).get().then(user => {
                resolve(user.docs.length);
            }).catch(err => {
                reject(err);
            });
        });
        return promise;
    }
    lostPetCount() {
        const promise = new Promise((resolve, reject) => {
            this.db.collection('lostpets').where("status", "==", false).get().then(user => {
                resolve(user.docs.length);
            }).catch(err => {
                reject(err);
            });
        });
        return promise;
    }
    groomPetCount() {
        const promise = new Promise((resolve, reject) => {
            this.db.collection('groompetsvideos').where("isactive", "==", true).get().then(user => {
                resolve(user.docs.length);
            }).catch(err => {
                reject(err);
            });
        });
        return promise;
    }
    vaccineSchedCount() {
        const promise = new Promise((resolve, reject) => {
            this.db.collection('vaccineschedules').where("isvisible", "==", true).get().then(res => {
                resolve(res.docs.length);
            }).catch(err => {
                reject(err);
            });
        });
        return promise;
    }
    trainPetCount() {
        const promise = new Promise((resolve, reject) => {
            this.db.collection('trainpetsvideos').where("isactive", "==", true).get().then(res => {
                resolve(res.docs.length);
            }).catch(err => {
                reject(err);
            });
        });
        return promise;
    }
    randomCharacters() {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (var i = 0; i < 20; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        return text;
    }
    uploadPhoto(upload) {
        let uploadName = upload['name'] + '-' + this.randomCharacters(); // create a random name for the upload name
        Object.defineProperty(upload, 'name', {
            writable: true,
            value: uploadName
        });
        const promise = new Promise((resolve, reject) => {
            let storageRef = __WEBPACK_IMPORTED_MODULE_2_firebase__["storage"]().ref();
            let uploadTask = storageRef.child(`${this.basePath}/${upload.name}`).put(upload);
            uploadTask.on(__WEBPACK_IMPORTED_MODULE_2_firebase__["storage"].TaskEvent.STATE_CHANGED, (snapshot) => {
                upload.progress = (uploadTask.snapshot.bytesTransferred / uploadTask.snapshot.totalBytes) * 100;
            }, (error) => {
                reject(error);
            }, () => {
                resolve(uploadTask.snapshot.downloadURL);
            });
        });
        return promise;
    }
    groomPetInfo(videoId) {
        const promise = new Promise((resolve, reject) => {
            this.db.collection('groompetsvideos').doc(videoId).get().then(res => {
                resolve(res.data());
            }).catch(err => {
                reject(err);
            });
        });
        return promise;
    }
    trainPetInfo(videoId) {
        const promise = new Promise((resolve, reject) => {
            this.db.collection('trainpetsvideos').doc(videoId).get().then(res => {
                resolve(res.data());
            }).catch(err => {
                reject(err);
            });
        });
        return promise;
    }
    saveUpdatesTrainPet(data, videoId) {
        const promise = new Promise((resolve, reject) => {
            this.db.collection('trainpetsvideos').doc(videoId).update(data).then(res => {
                resolve(1);
            }).catch(err => {
                reject(err);
            });
        });
        return promise;
    }
    saveUpdatesGroomPet(data, videoId) {
        const promise = new Promise((resolve, reject) => {
            this.db.collection('groompetsvideos').doc(videoId).update(data).then(res => {
                resolve(1);
            }).catch(err => {
                reject(err);
            });
        });
        return promise;
    }
    saveTrainPetVideo(data) {
        const promise = new Promise((resolve, reject) => {
            data['uid'] = this.userId;
            data['datePosted'] = __WEBPACK_IMPORTED_MODULE_2_firebase__["firestore"].FieldValue.serverTimestamp();
            this.db.collection('trainpetsvideos').doc().set(data).then(res => {
                this.db.collection('users').get().then(user => {
                    user.docs.map(user => {
                        let email = user.data().email.toLowerCase();
                        if (email != localStorage.getItem('email')) {
                            let userName = email.split('@')[0].replace('.', '');
                            __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref(`notif/trainpet/${userName}/`).once('value', snapshot => {
                                console.log('firing');
                                if (snapshot.hasChild('unread')) {
                                    let unread = snapshot.val().unread + 1;
                                    __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref(`notif/trainpet/${userName}/`).set({
                                        unread: unread
                                    });
                                }
                                else {
                                    __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref(`notif/trainpet/${userName}/`).set({
                                        unread: 1
                                    });
                                }
                            });
                        }
                    });
                    resolve(1);
                });
            }).catch(err => {
                reject(err);
            });
        });
        return promise;
    }
};
AdminProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
], AdminProvider);

//# sourceMappingURL=admin.js.map

/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LostpetProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_firestore__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase_firestore__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




let LostpetProvider = class LostpetProvider {
    constructor(http) {
        this.http = http;
        this.db = __WEBPACK_IMPORTED_MODULE_2_firebase__["firestore"]();
        this.basePath = '/uploads';
        this.userId = localStorage.getItem('userId');
    }
    randomCharacters() {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (var i = 0; i < 20; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        return text;
    }
    uploadPhoto(upload) {
        let uploadName = upload['name'] + '-' + this.randomCharacters(); // create a random name for the upload name
        Object.defineProperty(upload, 'name', {
            writable: true,
            value: uploadName
        });
        const promise = new Promise((resolve, reject) => {
            let storageRef = __WEBPACK_IMPORTED_MODULE_2_firebase__["storage"]().ref();
            let uploadTask = storageRef.child(`${this.basePath}/${upload.name}`).put(upload);
            uploadTask.on(__WEBPACK_IMPORTED_MODULE_2_firebase__["storage"].TaskEvent.STATE_CHANGED, (snapshot) => {
                upload.progress = (uploadTask.snapshot.bytesTransferred / uploadTask.snapshot.totalBytes) * 100;
            }, (error) => {
                reject(error);
            }, () => {
                resolve(uploadTask.snapshot.downloadURL);
            });
        });
        return promise;
    }
    saveLostPet(pet) {
        const promise = new Promise((resolve, reject) => {
            pet['uid'] = this.userId;
            pet['datePosted'] = __WEBPACK_IMPORTED_MODULE_2_firebase__["firestore"].FieldValue.serverTimestamp();
            pet['status'] = false;
            this.db.collection('lostpets').doc().set(pet).then((res) => {
                this.db.collection('users').get().then(user => {
                    user.docs.map(user => {
                        let email = user.data().email.toLowerCase();
                        if (email != localStorage.getItem('email')) {
                            let userName = email.split('@')[0].replace('.', '');
                            __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref(`notif/lostpets/${userName}/`).once('value', snapshot => {
                                console.log('firing');
                                if (snapshot.hasChild('unread')) {
                                    let unread = snapshot.val().unread + 1;
                                    __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref(`notif/lostpets/${userName}/`).set({
                                        unread: unread
                                    });
                                }
                                else {
                                    __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref(`notif/lostpets/${userName}/`).set({
                                        unread: 1
                                    });
                                }
                            });
                        }
                    });
                    resolve(1);
                });
            }).catch(err => {
                reject(err);
            });
        });
        return promise;
    }
    saveUpdates(pet, petId) {
        const promise = new Promise((resolve, reject) => {
            this.db.collection('lostpets').doc(petId).update(pet).then((res) => {
                resolve(1);
            }).catch(err => {
                reject(err);
            });
        });
        return promise;
    }
    ownerInfo(uid) {
        const promise = new Promise((resolve, reject) => {
            this.db.collection('users').doc(uid).get().then(snapshots => {
                resolve(snapshots.data());
            }).catch(err => {
                reject(err);
            });
        });
        return promise;
    }
    getLostPetInfo(petId) {
        const promise = new Promise((resolve, reject) => {
            this.db.collection('lostpets').doc(petId).get().then(pet => {
                resolve(pet.data());
            }).catch(err => {
                reject(err);
            });
        });
        return promise;
    }
};
LostpetProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
], LostpetProvider);

//# sourceMappingURL=lostpet.js.map

/***/ })

},[367]);
//# sourceMappingURL=main.js.map