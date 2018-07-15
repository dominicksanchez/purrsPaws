webpackJsonp([15],{

/***/ 635:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile__ = __webpack_require__(664);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let ProfilePageModule = class ProfilePageModule {
};
ProfilePageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__profile__["a" /* ProfilePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__profile__["a" /* ProfilePage */]),
        ],
    })
], ProfilePageModule);

//# sourceMappingURL=profile.module.js.map

/***/ }),

/***/ 664:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__editprofile_editprofile__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_profile_profile__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






let ProfilePage = class ProfilePage {
    constructor(navCtrl, navParams, authProvider, toastCtrl, modalCtrl, profileProvider, loadingCtrl, alertCtrl, app) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authProvider = authProvider;
        this.toastCtrl = toastCtrl;
        this.modalCtrl = modalCtrl;
        this.profileProvider = profileProvider;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.app = app;
    }
    ionViewDidLoad() {
        this.userId = localStorage.getItem('userId');
        this.loadProfile(this.userId);
    }
    loadProfile(userId) {
        this.profileProvider.loadProfile(userId).then(userData => {
            console.log('userData', userData);
            this.user = userData;
        }).catch(err => {
            console.log(err);
        });
    }
    profileChange(event) {
        let loading = this.loadingCtrl.create({
            content: 'Uploading your profile picture, please wait...'
        });
        loading.present();
        let imageType = ['image/gif', 'image/png', 'image/jpeg', 'image/bmp', 'image/webp'];
        if (imageType.indexOf(event.target.files.item(0)['type']) != -1) {
            this.profileProvider.uploadPhoto(event.target.files.item(0)).then(photo => {
                this.profileProvider.saveFileData(photo).then(res => {
                    this.loadProfile(this.userId);
                    loading.dismiss();
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
    editProfile() {
        let modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__editprofile_editprofile__["a" /* EditprofilePage */], this.user);
        modal.onDidDismiss(data => {
            if (data) {
                this.loadProfile(this.userId);
            }
        });
        modal.present();
    }
    registeredPetsClick() {
        this.navCtrl.push('RegisterpetSinglePage');
    }
};
ProfilePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-profile',template:/*ion-inline-start:"C:\Users\Sanchez\Dropbox\petApp\src\pages\profile\profile.html"*/'<ion-header>\n\n\n\n    <ion-navbar>\n\n        <ion-title>Profile</ion-title>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content>\n\n<div class="profileBlock">\n\n    <input type="file" hidden #profilePicUpload name="profilePicUpload" (change)="profileChange($event)">\n\n    <img [src]="user?.photo != \'\' && user?.photo != null ? user?.photo : \'assets/images/blank-profile.png\' " width="124" height="124" alt="" (click)="profilePicUpload.click()">\n\n    <ion-icon name="camera" class="camera" (click)="profilePicUpload.click()"></ion-icon>\n\n    \n\n    <h3 *ngIf="user?.name != \'\' || user?.name != null">{{user?.name}}</h3>\n\n    <h3 *ngIf="user?.name == \'\' || user?.name == null">N/A</h3>\n\n    </div>\n\n    \n\n    <table class="profileTbl">\n\n        <tr>\n\n            <td><ion-icon name="mail"></ion-icon></td>\n\n            <td>\n\n                <strong>Email Address</strong>\n\n                <p *ngIf="user?.email != \'\' && user?.email != null">{{user?.email}}</p>\n\n                <p *ngIf="user?.email == \'\' || user?.email == null">N/A</p>\n\n            </td>\n\n        </tr>\n\n        <tr>\n\n            <td><ion-icon name="call"></ion-icon></td>\n\n            <td>\n\n                <strong>Phone Number</strong>\n\n                <p *ngIf="user?.phone != \'\' && user?.phone != null">{{user?.phone}}</p>\n\n                <p *ngIf="user?.phone == \'\' || user?.phone == null">N/A</p>\n\n            </td>\n\n        </tr>\n\n        <tr>\n\n            <td><ion-icon name="locate"></ion-icon></td>\n\n            <td>\n\n                <strong>Address</strong>\n\n                <p *ngIf="user?.address != \'\' && user?.address != null">{{user?.address}}</p>\n\n                <p *ngIf="user?.address == \'\' || user?.address == null">N/A</p>\n\n            </td>\n\n        </tr>\n\n        <tr>\n\n            <td><ion-icon name="paw"></ion-icon></td>\n\n            <td>\n\n                <strong (click)="registeredPetsClick()">Registered Pets</strong>\n\n                <p (click)="registeredPetsClick()">Click to see registered pets</p>\n\n            </td>\n\n        </tr>\n\n    </table>\n\n    \n\n    <ion-fab bottom right (click)="editProfile()">\n\n        <button ion-fab><ion-icon name="create"></ion-icon></button>\n\n    </ion-fab>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Sanchez\Dropbox\petApp\src\pages\profile\profile.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_4__providers_profile_profile__["a" /* ProfileProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */]])
], ProfilePage);

//# sourceMappingURL=profile.js.map

/***/ })

});
//# sourceMappingURL=15.js.map