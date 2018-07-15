webpackJsonp([2,22],{

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

/***/ 633:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtherPageModule", function() { return OtherPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__other__ = __webpack_require__(663);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__chat_notif_fab_chat_notif_fab_module__ = __webpack_require__(598);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




let OtherPageModule = class OtherPageModule {
};
OtherPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__other__["a" /* OtherPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__other__["a" /* OtherPage */]),
            __WEBPACK_IMPORTED_MODULE_3__chat_notif_fab_chat_notif_fab_module__["ChatNotifFabPageModule"]
        ],
    })
], OtherPageModule);

//# sourceMappingURL=other.module.js.map

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

/***/ 663:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OtherPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase_firestore__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase_firestore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_badge__ = __webpack_require__(343);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






let OtherPage = class OtherPage {
    constructor(navCtrl, navParams, alertCtrl, authProvider, app, toastCtrl, badge) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.authProvider = authProvider;
        this.app = app;
        this.toastCtrl = toastCtrl;
        this.badge = badge;
        this.db = __WEBPACK_IMPORTED_MODULE_3_firebase__["firestore"]();
        this.isAdmin = parseInt(localStorage.getItem('isAdmin'));
        this.userId = localStorage.getItem('userId');
        this.userEmailName = localStorage.getItem('email').split('@')[0].replace('.', '');
    }
    ionViewDidLoad() {
        this.groompetNotif();
        this.vaccineSchedNotif();
        this.trainpetNotif();
        this.adoptionpetNotif();
    }
    groompetNotif() {
        __WEBPACK_IMPORTED_MODULE_3_firebase__["database"]().ref(`notif/groompet/${this.userEmailName}`).on('value', snapshot => {
            if (snapshot.hasChild('unread')) {
                this.gCount = snapshot.val()['unread'];
            }
            else {
                this.gCount = 0;
            }
        });
    }
    trainpetNotif() {
        __WEBPACK_IMPORTED_MODULE_3_firebase__["database"]().ref(`notif/trainpet/${this.userEmailName}`).on('value', snapshot => {
            if (snapshot.hasChild('unread')) {
                this.tCount = snapshot.val()['unread'];
            }
            else {
                this.tCount = 0;
            }
        });
    }
    adoptionpetNotif() {
        __WEBPACK_IMPORTED_MODULE_3_firebase__["database"]().ref(`notif/adopt/${this.userEmailName}`).on('value', snapshot => {
            if (snapshot.hasChild('unread')) {
                this.aCount = snapshot.val()['unread'];
            }
            else {
                this.aCount = 0;
            }
        });
    }
    vaccineSchedNotif() {
        __WEBPACK_IMPORTED_MODULE_3_firebase__["database"]().ref(`notif/vaccinesched/${this.userEmailName}`).on('value', snapshot => {
            if (snapshot.hasChild('unread')) {
                this.vCount = snapshot.val()['unread'];
            }
            else {
                this.vCount = 0;
            }
        });
    }
    goToPage(page) {
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
                        this.authProvider.switchRole(this.userId, 1).then(() => {
                            this.navCtrl.push('AdminHomePage');
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
    goToChatList() {
        this.navCtrl.push('ChatListPage');
    }
};
OtherPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-other',template:/*ion-inline-start:"C:\Users\Sanchez\Dropbox\petApp\src\pages\other\other.html"*/'<ion-content>\n\n  <ion-list>\n\n    <button ion-item (click)="goToPage(\'ProfilePage\')">\n\n      <ion-icon name="person" class="preIcon"></ion-icon> &nbsp;\n\n      <span class="listName">Profile</span>\n\n      <ion-icon name="arrow-dropright" class="arrow"></ion-icon>\n\n    </button>\n\n    <button ion-item (click)="goToPage(\'AdoptionPage\')">\n\n      <ion-icon name="paw" class="preIcon"></ion-icon> &nbsp;\n\n      <span class="listName">Adoption</span>\n\n      <ion-badge color="danger" *ngIf="vCount">{{vCount}}</ion-badge>\n\n      <ion-icon name="arrow-dropright" class="arrow"></ion-icon>\n\n    </button>\n\n    <button ion-item (click)="goToPage(\'VaccinationSchedulePage\')">\n\n      <ion-icon name="calendar" class="preIcon"></ion-icon> &nbsp;\n\n      <span class="listName">Vaccination Schedules</span>\n\n      <ion-badge color="danger" *ngIf="aCount">{{aCount}}</ion-badge>\n\n      <ion-icon name="arrow-dropright" class="arrow"></ion-icon>\n\n    </button>\n\n    <button ion-item (click)="goToPage(\'AdminTrainPetPage\')">\n\n      <ion-icon name="help-buoy" class="preIcon"></ion-icon> &nbsp;<span class="listName">Train Your Pet</span>\n\n      <ion-badge color="danger" *ngIf="tCount">{{tCount}}</ion-badge>\n\n      <ion-icon name="arrow-dropright" class="arrow"></ion-icon>\n\n    </button>\n\n    <button ion-item (click)="goToPage(\'AdminGroomPetPage\')">\n\n      <ion-icon name="shirt" class="preIcon"></ion-icon> &nbsp;\n\n      <span class="listName">Groom Pet</span>\n\n      <ion-badge color="danger" *ngIf="gCount">{{gCount}}</ion-badge>\n\n      <ion-icon name="arrow-dropright" class="arrow"></ion-icon>\n\n    </button>\n\n    <button ion-item (click)="goToPage(\'SearchvetPage\')">\n\n      <ion-icon name="search" class="preIcon"></ion-icon> &nbsp;<span class="listName">Find Vet Clinics</span>\n\n      <ion-icon name="arrow-dropright" class="arrow"></ion-icon>\n\n    </button>\n\n    <button ion-item (click)="switchRole()" *ngIf="isAdmin">\n\n      <ion-icon name="switch" class="preIcon"></ion-icon> &nbsp;\n\n      <span class="listName">Switch to admin</span>\n\n    </button>\n\n    <button ion-item (click)="logout()">\n\n      <ion-icon name="log-out" class="preIcon"></ion-icon> &nbsp;\n\n      <span class="listName">Log out</span>\n\n    </button>\n\n  </ion-list>\n\n\n\n  <page-chat-notif-fab></page-chat-notif-fab>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Sanchez\Dropbox\petApp\src\pages\other\other.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_5__ionic_native_badge__["a" /* Badge */]])
], OtherPage);

//# sourceMappingURL=other.js.map

/***/ })

});
//# sourceMappingURL=2.js.map