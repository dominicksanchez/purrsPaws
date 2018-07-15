webpackJsonp([20],{

/***/ 625:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPassPageModule", function() { return ForgotPassPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__forgot_pass__ = __webpack_require__(656);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let ForgotPassPageModule = class ForgotPassPageModule {
};
ForgotPassPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__forgot_pass__["a" /* ForgotPassPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__forgot_pass__["a" /* ForgotPassPage */]),
        ],
    })
], ForgotPassPageModule);

//# sourceMappingURL=forgot-pass.module.js.map

/***/ }),

/***/ 656:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotPassPage; });
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
let ForgotPassPage = class ForgotPassPage {
    constructor(navCtrl, navParams, toastCtrl, authProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.authProvider = authProvider;
        this.isSubmitting = false;
        this.emailCtrl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].pattern(EMAIL_REGEX)]);
        this.forgotPassForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            email: this.emailCtrl,
        });
    }
    forgotPasswordSubmit() {
        this.isSubmitting = true;
        if (this.forgotPassForm.valid) {
            this.authProvider.forgotPass(this.email).then(res => {
                this.isSubmitting = false;
                let toast = this.toastCtrl.create({
                    message: 'Password reset email sent',
                    duration: 5000,
                    position: 'bottom'
                });
                this.email = '';
                this.navCtrl.push('LoginPage');
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
                duration: 4000,
                position: 'bottom'
            });
            toast.present();
        }
    }
};
ForgotPassPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-forgot-pass',template:/*ion-inline-start:"C:\Users\Sanchez\Dropbox\petApp\src\pages\forgot-pass\forgot-pass.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Forgot Password</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <form [formGroup]="forgotPassForm" (ngSubmit)="forgotPasswordSubmit()">\n\n    <ion-item>\n\n      <ion-label floating>Email</ion-label>\n\n      <ion-input type="text" formControlName="email" [(ngModel)]="email" name="email"></ion-input>\n\n    </ion-item>\n\n\n\n    <button ion-button class="btnForgotPass" type="submit" [disabled]="isSubmitting">\n\n      <ion-spinner name="crescent" *ngIf="isSubmitting"></ion-spinner>\n\n      <ion-icon name="send" *ngIf="isSubmitting == false"></ion-icon>&nbsp; Send</button>\n\n  </form>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Sanchez\Dropbox\petApp\src\pages\forgot-pass\forgot-pass.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["o" /* ToastController */], __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */]])
], ForgotPassPage);

//# sourceMappingURL=forgot-pass.js.map

/***/ })

});
//# sourceMappingURL=20.js.map