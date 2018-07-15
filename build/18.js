webpackJsonp([18],{

/***/ 627:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__(658);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let HomePageModule = class HomePageModule {
};
HomePageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]),
        ],
    })
], HomePageModule);

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 658:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(344);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




let HomePage = class HomePage {
    constructor(navCtrl, navParams, authProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authProvider = authProvider;
    }
    ionViewDidLoad() {
        console.log('ionViewDidLoad HomePage');
    }
    goToLoginPage() {
        this.navCtrl.push("LoginPage");
    }
    ionViewDidEnter() {
        this.authProvider.isAuthenticated().then(isAuth => {
            if (isAuth) {
                if (parseInt(localStorage.getItem('adminSwitchUser')) == 1) {
                    this.navCtrl.push('AdminHomePage');
                }
                else {
                    this.navCtrl.push('TabsPage');
                }
            }
            else {
                return true;
            }
        });
    }
    slideChanged() {
        let currentIndex = this.slides.getActiveIndex();
        if (currentIndex == 4) {
            this.navCtrl.push("LoginPage");
        }
    }
};
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Slides */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Slides */])
], HomePage.prototype, "slides", void 0);
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"C:\Users\Sanchez\Dropbox\petApp\src\pages\home\home.html"*/'<ion-slides pager (ionSlideDidChange)="slideChanged()">\n\n  <ion-slide>\n\n    <h2><img src="assets/images/mypet.png" alt=""></h2>\n\n    <h4>Manage Info on Your Pets</h4>\n\n    <p>Create a profile for the pets of every pet owners.</p>\n\n  </ion-slide>\n\n\n\n  <ion-slide>\n\n    <h2><img src="assets/images/registerpet.png" alt=""></h2>\n\n    <h4>Register your pet</h4>\n\n    <p>Pet owners can register their pet to have an active account.</p>\n\n  </ion-slide>\n\n\n\n  <ion-slide>\n\n    <h2><img src="assets/images/searchpet.png" alt=""></h2>\n\n    <h4>Search for Vet Clinic Around You</h4>\n\n    <p>Pet with diseases, disorders, and injuries can be treated, find all available vet clinics around you!</p>\n\n  </ion-slide>\n\n\n\n  <ion-slide>\n\n    <h2><img src="assets/images/buyandsell.png" alt=""></h2>\n\n    <h4>For Breeders, Buy, Sell And Adopt</h4>\n\n    <p>Are you a pet lover or have a pet for adoption? With this app\'s feature, you can buy, sell and adopt pets from people around the world.</p>\n\n  </ion-slide>\n\n\n\n  <ion-slide>\n\n    <ion-spinner name="crescent" class="pageLoader"></ion-spinner>\n\n  </ion-slide>\n\n</ion-slides>\n\n'/*ion-inline-end:"C:\Users\Sanchez\Dropbox\petApp\src\pages\home\home.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthProvider */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ })

});
//# sourceMappingURL=18.js.map