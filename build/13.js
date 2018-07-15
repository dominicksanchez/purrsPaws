webpackJsonp([13],{

/***/ 639:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterpetSinglePageModule", function() { return RegisterpetSinglePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__registerpet_single__ = __webpack_require__(666);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let RegisterpetSinglePageModule = class RegisterpetSinglePageModule {
};
RegisterpetSinglePageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__registerpet_single__["a" /* RegisterpetSinglePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__registerpet_single__["a" /* RegisterpetSinglePage */]),
        ],
    })
], RegisterpetSinglePageModule);

//# sourceMappingURL=registerpet-single.module.js.map

/***/ }),

/***/ 666:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterpetSinglePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register_pet_form_register_pet_form__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__registered_pet_details_registered_pet_details__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase_firestore__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase_firestore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__edit_registered_pet_edit_registered_pet__ = __webpack_require__(351);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







let RegisterpetSinglePage = class RegisterpetSinglePage {
    constructor(navCtrl, navParams, modalCtrl, alertCtrl, toastCtrl, actionSheetCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.petsCount = 0;
        this.db = __WEBPACK_IMPORTED_MODULE_4_firebase__["firestore"]();
        this.pageLoaded = false;
        this.userId = localStorage.getItem('userId');
        this.getRegisteredPets();
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
                        (el.breed.toLowerCase().indexOf(val.toLowerCase()) > -1) ||
                        (el.petType.toLowerCase().indexOf(val.toLowerCase()) > -1);
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
    addPet() {
        let modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__register_pet_form_register_pet_form__["a" /* RegisterPetFormPage */]);
        modal.onDidDismiss(data => {
        });
        modal.present();
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
    removeRegisteredPet(petId) {
        let confirm = this.alertCtrl.create({
            title: 'Remove Confirmation?',
            message: 'Are you sure do you want to remove your registered pet?',
            buttons: [
                {
                    text: 'Cancel',
                    handler: () => {
                    }
                },
                {
                    text: 'Ok',
                    handler: () => {
                        this.db.collection('registerpets').doc(petId).update({
                            isvisible: false
                        });
                        let toast = this.toastCtrl.create({
                            message: 'Registered pet was removed',
                            duration: 5000,
                            position: 'bottom'
                        });
                        toast.present();
                    }
                }
            ]
        });
        confirm.present();
    }
    registeredPetDetails(pet) {
        console.log('pet', pet);
        let modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__registered_pet_details_registered_pet_details__["a" /* RegisteredPetDetailsPage */], pet);
        modal.onDidDismiss(data => {
            if (data) {
                // this.loadProfile();
            }
        });
        modal.present();
    }
    action(petId) {
        console.log('petId', petId);
        let actionSheet = this.actionSheetCtrl.create({
            title: 'Modify your post',
            buttons: [
                {
                    text: 'Remove',
                    icon: 'trash',
                    handler: () => {
                        this.removeRegisteredPet(petId);
                    }
                }, {
                    text: 'Edit',
                    icon: 'create',
                    handler: () => {
                        let data = {
                            petId: petId
                        };
                        let modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__edit_registered_pet_edit_registered_pet__["a" /* EditRegisteredPetPage */], data);
                        modal.onDidDismiss(data => {
                        });
                        modal.present();
                    }
                }, {
                    text: 'Cancel',
                    icon: 'close',
                    handler: () => {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    }
};
RegisterpetSinglePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-registerpet-single',template:/*ion-inline-start:"C:\Users\Sanchez\Dropbox\petApp\src\pages\registerpet-single\registerpet-single.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Registered Pets</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <form action="" class="searchBar">\n\n    <ion-searchbar [showCancelButton]="shouldShowCancel" (ionInput)="onSearch($event)" (ionCancel)="onCancel($event)" [debounce]="700"\n\n      placeholder="Search Name, Breed, Type">\n\n    </ion-searchbar>\n\n  </form>\n\n  <ion-spinner name="crescent" class="pageLoader" *ngIf="pageLoaded == false"></ion-spinner>\n\n  <div *ngIf="pageLoaded">\n\n    <p *ngIf="pets?.length == 0" class="noPetResult">No registered pet yet.</p>\n\n    <div *ngIf="pets?.length">\n\n      <ion-card *ngFor="let pet of pets">\n\n        <img [src]="pet?.image != \'\' && pet?.image != null ? pet?.image : \'assets/images/icon.png\'" [class.noImage]="pet?.image == \'\' || pet?.image == null"\n\n        />\n\n        <ion-card-content>\n\n          <ion-card-title>{{pet.name}}</ion-card-title>\n\n          <div>\n\n            <span class="bold">Breed:</span>\n\n            <span>{{pet.breed}}</span>\n\n          </div>\n\n          <div>\n\n            <span class="bold">Age:</span>\n\n            <span>{{pet.age}}</span>\n\n          </div>\n\n          <button ion-button type="button" *ngIf="userId == pet?.uid" class="removeBtn" (click)="action(pet.regPetId)">\n\n            <ion-icon name="more"></ion-icon>\n\n          </button>\n\n          <button ion-button type="submit" class="btnDetails" (click)="registeredPetDetails(pet)">More Details</button>\n\n          <span class="datePosted">Date added: {{pet.datePosted | date:\'mediumDate\'}}</span>\n\n        </ion-card-content>\n\n      </ion-card>\n\n    </div>\n\n  </div>\n\n  <ion-fab bottom right>\n\n    <button ion-fab (click)="addPet()">\n\n      <ion-icon name="add"></ion-icon>\n\n    </button>\n\n  </ion-fab>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Sanchez\Dropbox\petApp\src\pages\registerpet-single\registerpet-single.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */]])
], RegisterpetSinglePage);

//# sourceMappingURL=registerpet-single.js.map

/***/ })

});
//# sourceMappingURL=13.js.map