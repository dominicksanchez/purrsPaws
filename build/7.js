webpackJsonp([7,22],{

/***/ 598:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatNotifFabPageModule", function() { return ChatNotifFabPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chat_notif_fab__ = __webpack_require__(646);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let ChatNotifFabPageModule = class ChatNotifFabPageModule {
};
ChatNotifFabPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__chat_notif_fab__["a" /* ChatNotifFabPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__chat_notif_fab__["a" /* ChatNotifFabPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__chat_notif_fab__["a" /* ChatNotifFabPage */],
        ]
    })
], ChatNotifFabPageModule);

//# sourceMappingURL=chat-notif-fab.module.js.map

/***/ }),

/***/ 606:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminHomePageModule", function() { return AdminHomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__admin_home__ = __webpack_require__(649);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__chat_notif_fab_chat_notif_fab_module__ = __webpack_require__(598);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




let AdminHomePageModule = class AdminHomePageModule {
};
AdminHomePageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__admin_home__["a" /* AdminHomePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__admin_home__["a" /* AdminHomePage */]),
            __WEBPACK_IMPORTED_MODULE_3__chat_notif_fab_chat_notif_fab_module__["ChatNotifFabPageModule"]
        ],
    })
], AdminHomePageModule);

//# sourceMappingURL=admin-home.module.js.map

/***/ }),

/***/ 646:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatNotifFabPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_firestore__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase_firestore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_badge__ = __webpack_require__(343);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};





let ChatNotifFabPage = class ChatNotifFabPage {
    constructor(navCtrl, navParams, badge) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.badge = badge;
        this.db = __WEBPACK_IMPORTED_MODULE_2_firebase__["firestore"]();
        this.userEmailName = localStorage.getItem('email').split('@')[0].replace('.', '');
        this.getPermission();
        this.getUnreadMessages();
    }
    getPermission() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let permission = yield this.badge.registerPermission();
            }
            catch (err) {
                console.log(err);
            }
        });
    }
    getUnreadMessages() {
        let notifRef = __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref(`notif/chats/${this.userEmailName}`);
        notifRef.on('value', snapshot => {
            console.log('firing');
            if (snapshot.hasChild('unread')) {
                this.totalUnread = snapshot.val()['unread'];
            }
            else {
                this.totalUnread = 0;
            }
            this.badge.set(this.totalUnread);
        });
    }
    goToChatList() {
        this.navCtrl.push('ChatListPage');
    }
};
ChatNotifFabPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-chat-notif-fab',template:/*ion-inline-start:"C:\Users\Sanchez\Dropbox\petApp\src\pages\chat-notif-fab\chat-notif-fab.html"*/'<div class="chatBoxFab">\n\n  <ion-fab bottom right>\n\n      <button ion-fab (click)="goToChatList()"><ion-icon name="chatboxes"></ion-icon><ion-badge item-end *ngIf="totalUnread != 0">{{totalUnread}}</ion-badge></button>\n\n  </ion-fab>\n\n</div>'/*ion-inline-end:"C:\Users\Sanchez\Dropbox\petApp\src\pages\chat-notif-fab\chat-notif-fab.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_badge__["a" /* Badge */]])
], ChatNotifFabPage);

//# sourceMappingURL=chat-notif-fab.js.map

/***/ }),

/***/ 649:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminHomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_admin_admin__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_badge__ = __webpack_require__(343);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





let AdminHomePage = class AdminHomePage {
    constructor(navCtrl, navParams, authProvider, alertCtrl, toastCtrl, adminProvider, app, badge) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authProvider = authProvider;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.adminProvider = adminProvider;
        this.app = app;
        this.badge = badge;
        this.userCount = 0;
        this.buySellPetCount = 0;
        this.lostPetsCount = 0;
        this.vaccineSchedCount = 0;
        this.groomPetCount = 0;
        this.trainPetCount = 0;
        this.pageLoaded = false;
        this.registeredUserCount();
        this.userId = localStorage.getItem('userId');
    }
    registeredUserCount() {
        this.adminProvider.registeredUserCount().then(count01 => {
            this.userCount = count01;
            this.adminProvider.buySellPetCount().then(count02 => {
                this.buySellPetCount = count02;
                this.adminProvider.lostPetCount().then(count03 => {
                    this.lostPetsCount = count03;
                    this.adminProvider.vaccineSchedCount().then(count4 => {
                        this.vaccineSchedCount = count4;
                        this.adminProvider.groomPetCount().then(count5 => {
                            this.groomPetCount = count5;
                            this.adminProvider.trainPetCount().then(count6 => {
                                this.pageLoaded = true;
                                this.trainPetCount = count6;
                            }).catch(err => {
                                console.log('err', err);
                            });
                        }).catch(err => {
                            console.log('err', err);
                        });
                    }).catch(err => {
                        console.log('err', err);
                    });
                }).catch(err => {
                    console.log('err', err);
                });
            }).catch(err => {
                console.log('err', err);
            });
        }).catch(err => {
            console.log('err', err);
        });
    }
    pushPage(page) {
        this.navCtrl.push(page);
    }
    logout() {
        let confirm = this.alertCtrl.create({
            title: 'Logout Confirmation?',
            message: 'Are you sure do you want to log out?',
            buttons: [
                {
                    text: 'Cancel',
                    handler: () => {
                    }
                },
                {
                    text: 'Ok',
                    handler: () => {
                        this.authProvider.logout().then(() => {
                            localStorage.clear();
                            this.badge.clear();
                            this.app.getRootNav().setRoot('HomePage');
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
    switchRole() {
        let confirm = this.alertCtrl.create({
            title: 'Switch Role Confirmation?',
            message: 'Are you sure do you want to switch user role?',
            buttons: [
                {
                    text: 'Cancel',
                    handler: () => {
                    }
                },
                {
                    text: 'Ok',
                    handler: () => {
                        this.authProvider.switchRole(this.userId, 0).then(() => {
                            this.navCtrl.push('TabsPage');
                            let toast = this.toastCtrl.create({
                                message: 'Switching role completed',
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
};
AdminHomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-admin-home',template:/*ion-inline-start:"C:\Users\Sanchez\Dropbox\petApp\src\pages\admin-home\admin-home.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Purrs &amp; Paws Admin Dashboard</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-spinner name="crescent" class="pageLoader" *ngIf="pageLoaded == false"></ion-spinner>\n\n  <div *ngIf="pageLoaded">\n\n      <div class="box green" (click)="pushPage(\'AdminRegisteredUserPage\')">\n\n        <div class="iconBlock">\n\n          <ion-icon name="people"></ion-icon>\n\n        </div>\n\n        <div class="titleBlock">\n\n          <p class="count">{{userCount}}</p>\n\n          <h3>Registered Users</h3>\n\n        </div>\n\n        <ion-icon name="arrow-forward" class="arrow"></ion-icon>\n\n      </div>\n\n    \n\n      <div class="box blue" (click)="pushPage(\'AdminBuyAndSellPage\')">\n\n        <div class="iconBlock">\n\n          <ion-icon name="pricetag"></ion-icon>\n\n        </div>\n\n        <div class="titleBlock">\n\n          <p class="count">{{buySellPetCount}}</p>\n\n          <h3>Buy &amp; Sell Pets</h3>\n\n        </div>\n\n        <ion-icon name="arrow-forward" class="arrow"></ion-icon>\n\n      </div>\n\n    \n\n      <div class="box pink" (click)="pushPage(\'AdminLostPetsPage\')">\n\n        <div class="iconBlock">\n\n          <ion-icon name="paw"></ion-icon>\n\n        </div>\n\n        <div class="titleBlock">\n\n          <p class="count">{{lostPetsCount}}</p>\n\n          <h3>Lost Pets</h3>\n\n        </div>\n\n        <ion-icon name="arrow-forward" class="arrow"></ion-icon>\n\n      </div>\n\n\n\n      <div class="box cyan" (click)="pushPage(\'VaccinationSchedulePage\')">\n\n        <div class="iconBlock">\n\n          <ion-icon name="calendar"></ion-icon>\n\n        </div>\n\n        <div class="titleBlock">\n\n          <p class="count">{{vaccineSchedCount}}</p>\n\n          <h3>Vaccination Schedule</h3>\n\n        </div>\n\n        <ion-icon name="arrow-forward" class="arrow"></ion-icon>\n\n      </div>\n\n\n\n      <div class="box indigo" (click)="pushPage(\'AdminGroomPetPage\')">\n\n        <div class="iconBlock">\n\n          <ion-icon name="shirt"></ion-icon>\n\n        </div>\n\n        <div class="titleBlock">\n\n          <p class="count">{{groomPetCount}}</p>\n\n          <h3>Groom Pet Videos</h3>\n\n        </div>\n\n        <ion-icon name="arrow-forward" class="arrow"></ion-icon>\n\n      </div>\n\n      <div class="box amber" (click)="pushPage(\'AdminTrainPetPage\')">\n\n        <div class="iconBlock">\n\n          <ion-icon name="help-buoy"></ion-icon>\n\n        </div>\n\n        <div class="titleBlock">\n\n          <p class="count">{{trainPetCount}}</p>\n\n          <h3>Train Pet Videos</h3>\n\n        </div>\n\n        <ion-icon name="arrow-forward" class="arrow"></ion-icon>\n\n      </div>\n\n\n\n      <!-- <ion-fab bottom right>\n\n        <button ion-fab (click)="logout()" class="logout"><ion-icon name="log-out"></ion-icon></button>\n\n      </ion-fab> -->\n\n\n\n      <page-chat-notif-fab></page-chat-notif-fab>\n\n\n\n      <ion-fab bottom right edge>\n\n        <button ion-fab>\n\n          <ion-icon name="arrow-dropleft"></ion-icon>\n\n        </button>\n\n        <ion-fab-list side="left">\n\n          <button ion-fab (click)="logout()" color="danger">\n\n            <ion-icon name="log-out"></ion-icon>\n\n          </button>\n\n          <button ion-fab (click)="switchRole()" color="secondary">\n\n            <ion-icon name="switch"></ion-icon>\n\n          </button>\n\n        </ion-fab-list>\n\n      </ion-fab>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Sanchez\Dropbox\petApp\src\pages\admin-home\admin-home.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_admin_admin__["a" /* AdminProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_native_badge__["a" /* Badge */]])
], AdminHomePage);

//# sourceMappingURL=admin-home.js.map

/***/ })

});
//# sourceMappingURL=7.js.map