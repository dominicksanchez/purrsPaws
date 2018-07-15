webpackJsonp([17],{

/***/ 628:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(659);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let LoginPageModule = class LoginPageModule {
};
LoginPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]),
        ],
    })
], LoginPageModule);

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 659:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(344);
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
let LoginPage = class LoginPage {
    constructor(navCtrl, navParams, authProvider, toastCtrl, app) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authProvider = authProvider;
        this.toastCtrl = toastCtrl;
        this.app = app;
        this.isSubmitting = false;
        this.userId = '';
        this.isAdmin = 0;
        this.isadminSwitchUser = 0;
        this.emailCtrl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].pattern(EMAIL_REGEX)]);
        this.passwordCtrl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required);
        this.loginForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            email: this.emailCtrl,
            password: this.passwordCtrl
        });
    }
    ionViewDidEnter() {
        if (this.userId != '') {
            if (this.isadminSwitchUser == 1) {
                this.app.getRootNav().setRoot('AdminHomePage');
            }
            else {
                this.app.getRootNav().setRoot('TabsPage');
            }
        }
        else {
            return true;
        }
    }
    goToPage(page) {
        this.navCtrl.push(page);
        return false;
    }
    loginSubmit() {
        if (this.loginForm.valid) {
            this.isSubmitting = true;
            this.authProvider.login(this.email, this.password).then(user => {
                console.log('user', user);
                if (user['emailVerified']) {
                    this.isSubmitting = false;
                    this.userId = user['uid'];
                    localStorage.setItem('userId', user['uid']);
                    localStorage.setItem('email', user['email'].toLowerCase());
                    this.authProvider.loadProfile(user['uid']).then(res => {
                        localStorage.setItem('isAdmin', res['isAdmin']);
                        localStorage.setItem('adminSwitchUser', res['adminSwitchUser']);
                        if (res['adminSwitchUser'] == 1) {
                            this.isadminSwitchUser = 1;
                            this.navCtrl.push('AdminHomePage');
                        }
                        else {
                            this.isadminSwitchUser = 0;
                            this.navCtrl.push('TabsPage');
                        }
                    }).catch(err => {
                        this.isSubmitting = false;
                        let toast = this.toastCtrl.create({
                            message: 'Invalid email or password',
                            duration: 5000,
                            position: 'bottom'
                        });
                        toast.present();
                    });
                }
                else {
                    this.isSubmitting = false;
                    let toast = this.toastCtrl.create({
                        message: 'Login failed, your email address is not verified yet',
                        duration: 5000,
                        position: 'bottom'
                    });
                    toast.present();
                }
            }).catch(err => {
                this.isSubmitting = false;
                let toast = this.toastCtrl.create({
                    message: 'Invalid email or password',
                    duration: 5000,
                    position: 'bottom'
                });
                toast.present();
            });
        }
        else {
            this.isSubmitting = false;
            let toast = this.toastCtrl.create({
                message: 'Login failed',
                duration: 5000,
                position: 'bottom'
            });
            toast.present();
        }
    }
};
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"C:\Users\Sanchez\Dropbox\petApp\src\pages\login\login.html"*/'<ion-content padding>\n\n  <div>\n\n    <h1 class="headerLogo"><img src="assets/images/icon.png" alt=""></h1>\n\n    <p class="subTitle">Welcome to Purrs and Paws,<br> Login to your account</p>\n\n    <form [formGroup]="loginForm" (ngSubmit)="loginSubmit()">\n\n      <ion-item>\n\n        <ion-label floating>Email</ion-label>\n\n        <ion-input type="text" formControlName="email" [(ngModel)]="email" name="email"></ion-input>\n\n      </ion-item>\n\n    \n\n      <ion-item>\n\n        <ion-label floating>Password</ion-label>\n\n        <ion-input type="password" formControlName="password" [(ngModel)]="password" name="password"></ion-input>\n\n      </ion-item>\n\n      <p>Don\'t have an account? <a (click)="goToPage(\'RegisterPage\')" class="blue">Sign Up</a></p>\n\n      <button ion-button type="submit" class="btnLogin" [disabled]="isSubmitting"><ion-spinner name="crescent" *ngIf="isSubmitting"></ion-spinner><ion-icon name="log-in" *ngIf="isSubmitting == false"></ion-icon>&nbsp; Login</button>\n\n      <a class="forgotPassBtn" (click)="goToPage(\'ForgotPassPage\')">Forgot Password?</a>\n\n    </form>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Sanchez\Dropbox\petApp\src\pages\login\login.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["o" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* App */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ })

});
//# sourceMappingURL=17.js.map