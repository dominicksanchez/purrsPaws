webpackJsonp([9],{

/***/ 645:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VaccinationSchedulePageModule", function() { return VaccinationSchedulePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vaccination_schedule__ = __webpack_require__(671);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let VaccinationSchedulePageModule = class VaccinationSchedulePageModule {
};
VaccinationSchedulePageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__vaccination_schedule__["a" /* VaccinationSchedulePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__vaccination_schedule__["a" /* VaccinationSchedulePage */]),
        ],
    })
], VaccinationSchedulePageModule);

//# sourceMappingURL=vaccination-schedule.module.js.map

/***/ }),

/***/ 671:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VaccinationSchedulePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_vaccination_schedule_form_add_vaccination_schedule_form__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__edit_vaccination_sched_edit_vaccination_sched__ = __webpack_require__(362);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase_firestore__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase_firestore__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






let VaccinationSchedulePage = class VaccinationSchedulePage {
    constructor(navCtrl, navParams, modalCtrl, actionSheetCtrl, alertCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.postsCount = 0;
        this.db = __WEBPACK_IMPORTED_MODULE_4_firebase__["firestore"]();
        this.pageLoaded = false;
        this.userId = localStorage.getItem('userId');
        this.isAdmin = parseInt(localStorage.getItem('isAdmin'));
        this.getVaccinationSched();
    }
    ionViewDidEnter() {
        this.markAsRead();
    }
    markAsRead() {
        let userName = localStorage.getItem('email').split('@')[0].replace('.', '');
        __WEBPACK_IMPORTED_MODULE_4_firebase__["database"]().ref(`notif/vaccinesched/${userName}`).set({
            unread: 0
        });
    }
    addVaccinationSched() {
        let modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__add_vaccination_schedule_form_add_vaccination_schedule_form__["a" /* AddVaccinationScheduleFormPage */]);
        modal.onDidDismiss(data => {
        });
        modal.present();
    }
    getVaccinationSched() {
        this.pageLoaded = true;
        this.db.collection('vaccineschedules').where("isvisible", "==", true).onSnapshot(snapshots => {
            let pets = [];
            snapshots.forEach(doc => {
                let docData = doc.data();
                docData['postId'] = doc.id;
                pets.push(docData);
            });
            this.posts = pets;
            this.postsCount = Object.keys(pets).length;
            this.pageLoaded = true;
        }), (err => {
            console.log('err', err);
        });
    }
    removePost(postId) {
        let confirm = this.alertCtrl.create({
            title: 'Remove your post?',
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
                        this.db.collection('vaccineschedules').doc(postId).update({
                            isvisible: false
                        });
                        let toast = this.toastCtrl.create({
                            message: 'Post was removed',
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
    action(postId) {
        let actionSheet = this.actionSheetCtrl.create({
            title: 'Modify your post',
            buttons: [
                {
                    text: 'Remove',
                    icon: 'trash',
                    handler: () => {
                        this.removePost(postId);
                    }
                }, {
                    text: 'Edit',
                    icon: 'create',
                    handler: () => {
                        let data = {
                            postId: postId
                        };
                        let modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__edit_vaccination_sched_edit_vaccination_sched__["a" /* EditVaccinationSchedPage */], data);
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
VaccinationSchedulePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-vaccination-schedule',template:/*ion-inline-start:"C:\Users\Sanchez\Dropbox\petApp\src\pages\vaccination-schedule\vaccination-schedule.html"*/'<ion-header [class.admin]="isAdmin == 1">\n\n\n\n  <ion-navbar>\n\n    <ion-title>Vaccination Schedules</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="card-background-page" [class.admin]="isAdmin == 1">\n\n  <ion-spinner name="crescent" class="pageLoader" *ngIf="pageLoaded == false"></ion-spinner>\n\n  <div *ngIf="pageLoaded">\n\n    <p *ngIf="posts?.length == 0" class="noResult">No vaccination schedule posted yet.</p>\n\n    <div *ngIf="posts?.length">\n\n      <ion-card *ngFor="let post of posts">\n\n        <img [src]="post?.image != \'\' && post?.image != null ? post?.image : \'assets/images/icon.png\'" [class.noImage]="post?.image == \'\' || post?.image == null"\n\n        />\n\n        <ion-card-content>\n\n          <ion-card-title>{{post.title}}\n\n          </ion-card-title>\n\n          <div>\n\n            <span class="bold">Notes:</span>\n\n            <span>{{post.notes}}</span>\n\n          </div>\n\n          <div>\n\n            <span class="bold">Vaccination Date:</span>\n\n            <span>{{post.vaccineDate | date:\'mediumDate\'}}</span>\n\n          </div>\n\n          <button ion-button type="button" *ngIf="isAdmin == \'1\'" class="removeBtn" (click)="action(post.postId)">\n\n            <ion-icon name="more"></ion-icon>\n\n          </button>\n\n          <span class="datePosted">Posted: {{post.datePosted | date:\'mediumDate\'}}</span>\n\n        </ion-card-content>\n\n      </ion-card>\n\n    </div>\n\n  </div>\n\n  <ion-fab bottom right *ngIf="isAdmin == \'1\'">\n\n    <button ion-fab (click)="addVaccinationSched()">\n\n      <ion-icon name="add"></ion-icon>\n\n    </button>\n\n  </ion-fab>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Sanchez\Dropbox\petApp\src\pages\vaccination-schedule\vaccination-schedule.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */]])
], VaccinationSchedulePage);

//# sourceMappingURL=vaccination-schedule.js.map

/***/ })

});
//# sourceMappingURL=9.js.map