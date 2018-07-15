webpackJsonp([11],{

/***/ 642:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageModule", function() { return TabsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs__ = __webpack_require__(669);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let TabsPageModule = class TabsPageModule {
};
TabsPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__tabs__["a" /* TabsPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__tabs__["a" /* TabsPage */]),
        ],
    })
], TabsPageModule);

//# sourceMappingURL=tabs.module.js.map

/***/ }),

/***/ 669:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
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






let TabsPage = class TabsPage {
    constructor(navCtrl, navParams, authProvider, app, badge) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authProvider = authProvider;
        this.app = app;
        this.badge = badge;
        this.tab1 = "RegisterpetsPage";
        this.tab2 = "PetPage";
        this.tab3 = "LostpetsPage";
        this.tab4 = "OtherPage";
        this.db = __WEBPACK_IMPORTED_MODULE_3_firebase__["firestore"]();
        this.userEmailName = localStorage.getItem('email').split('@')[0].replace('.', '');
        this.getBuyAndSellNotif();
        this.getLostPetNotif();
        this.groompetNotif();
        this.trainpetNotif();
        this.vaccineSchedNotif();
        this.countAllNotif();
    }
    ionViewDidEnter() {
        this.authProvider.isAuthenticated().then(isAuth => {
            if (isAuth) {
                return true;
            }
            else {
                this.app.getRootNav().setRoot('HomePage');
            }
        });
    }
    countAllNotif() {
        __WEBPACK_IMPORTED_MODULE_3_firebase__["database"]().ref('notif').on('value', snapshot => {
            let promises = [];
            let totalNotif = 0;
            const buyAndSell = new Promise((resolve, reject) => {
                __WEBPACK_IMPORTED_MODULE_3_firebase__["database"]().ref(`notif/buyandsell/${this.userEmailName}`).once('value', snapshot => {
                    if (snapshot.hasChild('unread')) {
                        totalNotif += snapshot.val()['unread'];
                    }
                    resolve(1);
                });
            });
            const lostPet = new Promise((resolve, reject) => {
                __WEBPACK_IMPORTED_MODULE_3_firebase__["database"]().ref(`notif/lostpets/${this.userEmailName}`).once('value', snapshot => {
                    if (snapshot.hasChild('unread')) {
                        totalNotif += snapshot.val()['unread'];
                    }
                    resolve(1);
                });
            });
            const chat = new Promise((resolve, reject) => {
                __WEBPACK_IMPORTED_MODULE_3_firebase__["database"]().ref(`notif/chats/${this.userEmailName}`).once('value', snapshot => {
                    if (snapshot.hasChild('unread')) {
                        totalNotif += snapshot.val()['unread'];
                    }
                    resolve(1);
                });
            });
            const groompet = new Promise((resolve, reject) => {
                __WEBPACK_IMPORTED_MODULE_3_firebase__["database"]().ref(`notif/groompet/${this.userEmailName}`).once('value', snapshot => {
                    if (snapshot.hasChild('unread')) {
                        totalNotif += snapshot.val()['unread'];
                    }
                    resolve(1);
                });
            });
            const trainpet = new Promise((resolve, reject) => {
                __WEBPACK_IMPORTED_MODULE_3_firebase__["database"]().ref(`notif/trainpet/${this.userEmailName}`).once('value', snapshot => {
                    if (snapshot.hasChild('unread')) {
                        totalNotif += snapshot.val()['unread'];
                    }
                    resolve(1);
                });
            });
            const vaccinesched = new Promise((resolve, reject) => {
                __WEBPACK_IMPORTED_MODULE_3_firebase__["database"]().ref(`notif/vaccinesched/${this.userEmailName}`).once('value', snapshot => {
                    if (snapshot.hasChild('unread')) {
                        totalNotif += snapshot.val()['unread'];
                    }
                    resolve(1);
                });
            });
            const adoptPet = new Promise((resolve, reject) => {
                __WEBPACK_IMPORTED_MODULE_3_firebase__["database"]().ref(`notif/adopt/${this.userEmailName}`).once('value', snapshot => {
                    if (snapshot.hasChild('unread')) {
                        totalNotif += snapshot.val()['unread'];
                    }
                    resolve(1);
                });
            });
            promises.push(buyAndSell, lostPet, chat, groompet, trainpet, vaccinesched, adoptPet);
            Promise.all(promises).then(() => {
                this.badge.set(totalNotif);
                console.log('totalNotif', totalNotif);
            });
        });
    }
    getBuyAndSellNotif() {
        __WEBPACK_IMPORTED_MODULE_3_firebase__["database"]().ref(`notif/buyandsell/${this.userEmailName}`).on('value', snapshot => {
            if (snapshot.hasChild('unread')) {
                this.buyAndSellNotifCount = snapshot.val()['unread'];
            }
            else {
                this.buyAndSellNotifCount = 0;
            }
        });
    }
    getAdoptCount() {
        __WEBPACK_IMPORTED_MODULE_3_firebase__["database"]().ref(`notif/adopt/${this.userEmailName}`).on('value', snapshot => {
            if (snapshot.hasChild('unread')) {
                this.otherNotifCount += snapshot.val()['unread'];
            }
        });
    }
    getLostPetNotif() {
        __WEBPACK_IMPORTED_MODULE_3_firebase__["database"]().ref(`notif/lostpets/${this.userEmailName}`).on('value', snapshot => {
            if (snapshot.hasChild('unread')) {
                this.lostPetNotifCount = snapshot.val()['unread'];
            }
            else {
                this.lostPetNotifCount = 0;
            }
        });
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
};
TabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-tabs',template:/*ion-inline-start:"C:\Users\Sanchez\Dropbox\petApp\src\pages\tabs\tabs.html"*/'\n\n\n\n<ion-tabs color="light-blue">\n\n  <ion-tab tabIcon="paw" [rootParams]="tabsParam" tabTitle="Pets" [root]="tab1" tabBadgeStyle="danger"></ion-tab>\n\n  <ion-tab tabIcon="pricetags" tabTitle="Buy &amp; Sell" [rootParams]="tabsParam" [root]="tab2" [tabBadge]="buyAndSellNotifCount > 0 ? buyAndSellNotifCount : null" tabBadgeStyle="danger"></ion-tab>\n\n  <ion-tab tabIcon="sad" tabTitle="Lost Pets" [root]="tab3" [rootParams]="tabsParam" [tabBadge]="lostPetNotifCount > 0 ? lostPetNotifCount : null" tabBadgeStyle="danger"></ion-tab>\n\n  <ion-tab tabIcon="apps" tabTitle="Others" [rootParams]="tabsParam" [tabBadge]="gCount > 0 || tCount > 0 || vCount > 0 ? gCount + tCount + vCount : null " tabBadgeStyle="danger" [root]="tab4"></ion-tab>\n\n</ion-tabs>\n\ngroompetNotifCount: \n\ntrainpetNotifCount: \n\nvaccineSchedNotifCount: '/*ion-inline-end:"C:\Users\Sanchez\Dropbox\petApp\src\pages\tabs\tabs.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */],
        __WEBPACK_IMPORTED_MODULE_5__ionic_native_badge__["a" /* Badge */]])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ })

});
//# sourceMappingURL=11.js.map