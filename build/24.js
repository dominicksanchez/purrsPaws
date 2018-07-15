webpackJsonp([24],{

/***/ 609:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminTrainPetPageModule", function() { return AdminTrainPetPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__admin_train_pet__ = __webpack_require__(652);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let AdminTrainPetPageModule = class AdminTrainPetPageModule {
};
AdminTrainPetPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__admin_train_pet__["a" /* AdminTrainPetPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__admin_train_pet__["a" /* AdminTrainPetPage */]),
        ],
    })
], AdminTrainPetPageModule);

//# sourceMappingURL=admin-train-pet.module.js.map

/***/ }),

/***/ 652:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminTrainPetPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__admin_add_train_pet_admin_add_train_pet__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase_firestore__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase_firestore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__edit_train_pet_edit_train_pet__ = __webpack_require__(359);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






let AdminTrainPetPage = class AdminTrainPetPage {
    constructor(navCtrl, navParams, modalCtrl, toastCtrl, actionSheetCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.toastCtrl = toastCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.alertCtrl = alertCtrl;
        this.videosCount = 0;
        this.db = __WEBPACK_IMPORTED_MODULE_3_firebase__["firestore"]();
        this.pageLoaded = false;
        this.userId = localStorage.getItem('userId');
        this.isAdmin = parseInt(localStorage.getItem('isAdmin'));
        this.getTrainPetVideos();
        console.log('type', this.isAdmin);
    }
    ionViewDidEnter() {
        this.markAsRead();
    }
    markAsRead() {
        let userName = localStorage.getItem('email').split('@')[0].replace('.', '');
        __WEBPACK_IMPORTED_MODULE_3_firebase__["database"]().ref(`notif/trainpet/${userName}`).set({
            unread: 0
        });
    }
    getTrainPetVideos() {
        this.db.collection('trainpetsvideos').where("isactive", "==", true).orderBy("datePosted", "desc").limit(1000).onSnapshot(snapshots => {
            let videos = [];
            snapshots.forEach(doc => {
                let docData = doc.data();
                docData['videoId'] = doc.id;
                videos.push(docData);
            });
            this.videos = videos;
            this.videosCount = Object.keys(videos).length;
            this.pageLoaded = true;
            console.log('this.videos', this.videos);
        }), (err => {
            let toast = this.toastCtrl.create({
                message: err.message,
                duration: 5000,
                position: 'bottom'
            });
            toast.present();
        });
    }
    addTrainPetVideos() {
        let modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__admin_add_train_pet_admin_add_train_pet__["a" /* AdminAddTrainPetPage */]);
        modal.onDidDismiss(data => {
        });
        modal.present();
    }
    removePost(videoId) {
        let confirm = this.alertCtrl.create({
            title: 'Remove this post?',
            message: 'Are you sure do you want to remove your post?',
            buttons: [
                {
                    text: 'Cancel',
                    handler: () => {
                    }
                },
                {
                    text: 'Ok',
                    handler: () => {
                        this.db.collection('trainpetsvideos').doc(videoId).update({
                            isactive: false
                        }).then(res => {
                            let toast = this.toastCtrl.create({
                                message: 'Video was deleted',
                                duration: 5000,
                                position: 'bottom'
                            });
                            toast.present();
                        }).catch(err => {
                            let toast = this.toastCtrl.create({
                                message: err.message,
                                duration: 5000,
                                position: 'bottom'
                            });
                            toast.present();
                        });
                    }
                }
            ]
        });
        confirm.present();
    }
    action(videoId) {
        let actionSheet = this.actionSheetCtrl.create({
            title: 'Modify your post',
            buttons: [
                {
                    text: 'Remove',
                    icon: 'trash',
                    handler: () => {
                        this.removePost(videoId);
                    }
                }, {
                    text: 'Edit',
                    icon: 'create',
                    handler: () => {
                        let data = {
                            videoId: videoId
                        };
                        let modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__edit_train_pet_edit_train_pet__["a" /* EditTrainPetPage */], data);
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
AdminTrainPetPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-admin-train-pet',template:/*ion-inline-start:"C:\Users\Sanchez\Dropbox\petApp\src\pages\admin-train-pet\admin-train-pet.html"*/'<ion-header [class.admin]="isAdmin == 1">\n\n\n\n  <ion-navbar>\n\n    <ion-title>Train Pet Videos</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding [class.admin]="isAdmin == 1">\n\n  <ion-spinner name="crescent" class="pageLoader" *ngIf="pageLoaded == false"></ion-spinner>\n\n  <div *ngIf="pageLoaded">\n\n    <p *ngIf="videos?.length == 0" class="noPetResult">No train pet video yet.</p>\n\n    <div *ngIf="videos?.length">\n\n      <div class="videoPlayList" *ngFor="let video of videos">\n\n        <h5>{{video?.title}}</h5>\n\n        <video width="100%" controls poster="assets/images/icon.png">\n\n          <source src="{{video?.video}}" type="video/mp4">\n\n          <source src="{{video?.video}}" type="video/ogg"> Your browser does not support HTML5 video.\n\n        </video>\n\n        <button ion-button type="button" *ngIf="isAdmin == 1" class="listBtn" (click)="action(video.videoId)">\n\n          <ion-icon name="more"></ion-icon>\n\n        </button>\n\n        <span class="datePosted">Posted: {{video.datePosted | date:\'mediumDate\'}}</span>\n\n      </div>\n\n    </div>\n\n    <ion-fab bottom right *ngIf="isAdmin == 1">\n\n      <button ion-fab (click)="addTrainPetVideos()">\n\n        <ion-icon name="add"></ion-icon>\n\n      </button>\n\n    </ion-fab>\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Sanchez\Dropbox\petApp\src\pages\admin-train-pet\admin-train-pet.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
], AdminTrainPetPage);

//# sourceMappingURL=admin-train-pet.js.map

/***/ })

});
//# sourceMappingURL=24.js.map