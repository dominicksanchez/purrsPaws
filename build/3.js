webpackJsonp([3,22],{

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

/***/ 630:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LostpetsPageModule", function() { return LostpetsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lostpets__ = __webpack_require__(660);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__chat_notif_fab_chat_notif_fab_module__ = __webpack_require__(598);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




let LostpetsPageModule = class LostpetsPageModule {
};
LostpetsPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__lostpets__["a" /* LostpetsPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__lostpets__["a" /* LostpetsPage */]),
            __WEBPACK_IMPORTED_MODULE_3__chat_notif_fab_chat_notif_fab_module__["ChatNotifFabPageModule"]
        ],
    })
], LostpetsPageModule);

//# sourceMappingURL=lostpets.module.js.map

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

/***/ 660:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LostpetsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_lost_pet_form_add_lost_pet_form__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_lostpet_lostpet__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase_firestore__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase_firestore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__lost_pet_details_lost_pet_details__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__edit_lost_pet_edit_lost_pet__ = __webpack_require__(350);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








let LostpetsPage = class LostpetsPage {
    constructor(navCtrl, navParams, modalCtrl, lostpetProvider, alertCtrl, toastCtrl, actionSheetCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.lostpetProvider = lostpetProvider;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.petsCount = 0;
        this.db = __WEBPACK_IMPORTED_MODULE_4_firebase__["firestore"]();
        this.pageLoaded = false;
        this.userId = localStorage.getItem('userId');
        this.searchFocus = 0;
        this.userEmailName = localStorage.getItem('email').split('@')[0].replace('.', '');
        this.getItems();
    }
    ionViewDidEnter() {
        this.searchFocus = 0;
        this.readNotif();
    }
    readNotif() {
        let userName = localStorage.getItem('email').split('@')[0].replace('.', '');
        __WEBPACK_IMPORTED_MODULE_4_firebase__["database"]().ref(`notif/lostpets/${userName}/`).set({
            unread: 0
        });
    }
    action(petId, status) {
        let text = '';
        if (status == 0) {
            text = 'Mark as found';
        }
        else {
            text = 'Mark as lost';
        }
        let actionSheet = this.actionSheetCtrl.create({
            title: 'Modify your post',
            buttons: [
                {
                    text: text,
                    icon: 'checkbox-outline',
                    handler: () => {
                        this.removeLostPet(petId, status);
                    }
                }, {
                    text: 'Edit',
                    icon: 'create',
                    handler: () => {
                        let data = {
                            petId: petId
                        };
                        let modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_7__edit_lost_pet_edit_lost_pet__["a" /* EditLostPetPage */], data);
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
    onSearch(ev) {
        this.pageLoaded = false;
        let val = ev.target.value;
        this.db.collection('lostpets').orderBy("datePosted", "desc").limit(1000).onSnapshot(snapshots => {
            let pets = [];
            snapshots.forEach(doc => {
                let docData = doc.data();
                docData['lostPetId'] = doc.id;
                pets.push(docData);
            });
            this.pets = pets;
            this.petsCount = Object.keys(pets).length;
            if (val && val.trim() != '') {
                this.pets = this.pets.filter((el) => {
                    return (el.name.toLowerCase().indexOf(val.toLowerCase()) > -1) ||
                        (el.placeLost.toLowerCase().indexOf(val.toLowerCase()) > -1) ||
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
        this.getItems();
    }
    addLostPet() {
        let modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__add_lost_pet_form_add_lost_pet_form__["a" /* AddLostPetFormPage */]);
        modal.onDidDismiss(data => {
        });
        modal.present();
    }
    getItems() {
        this.db.collection('lostpets').orderBy("datePosted", "desc").onSnapshot(snapshots => {
            console.log('snapshots', snapshots);
            let pets = [];
            snapshots.forEach(doc => {
                let docData = doc.data();
                docData['lostPetId'] = doc.id;
                pets.push(docData);
            });
            this.pets = pets;
            console.log('this.pets', this.pets);
            this.petsCount = Object.keys(pets).length;
            this.pageLoaded = true;
        }), (err => {
            console.log('err', err);
        });
    }
    lostPetDetails(pet) {
        console.log('pet', pet);
        let modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__lost_pet_details_lost_pet_details__["a" /* LostPetDetailsPage */], pet);
        modal.onDidDismiss(data => {
            if (data) {
                // this.loadProfile();
            }
        });
        modal.present();
    }
    removeLostPet(lostPetId, status) {
        let title = '';
        let message = '';
        if (status == 1) {
            title = 'Pet was lost?';
            message = 'Are you sure do you want to mark this pet as lost?';
        }
        else {
            title = 'Pet was found?';
            message = 'Are you sure do you want to mark this pet as found?';
        }
        let confirm = this.alertCtrl.create({
            title: title,
            message: message,
            buttons: [
                {
                    text: 'Cancel',
                    handler: () => {
                    }
                },
                {
                    text: 'Ok',
                    handler: () => {
                        this.db.collection('lostpets').doc(lostPetId).update({
                            status: !status
                        });
                        let toast = this.toastCtrl.create({
                            message: 'Post was updated',
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
    checkFocus() {
        if (this.searchFocus == 0) {
            let toast = this.toastCtrl.create({
                message: 'You can search by pet name, type and breed',
                showCloseButton: true,
                duration: 5000,
                closeButtonText: 'Ok',
                dismissOnPageChange: true
            });
            toast.present();
        }
        this.searchFocus = 1;
    }
    goToChatList() {
        this.navCtrl.push('ChatListPage');
    }
    openMessage(pet) {
        this.navCtrl.push("ChatSinglePage", pet);
    }
};
LostpetsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-lostpets',template:/*ion-inline-start:"C:\Users\Sanchez\Dropbox\petApp\src\pages\lostpets\lostpets.html"*/'\n\n<ion-content class="card-background-page">\n\n    <form action="" class="searchBar">\n\n        <ion-searchbar\n\n            [showCancelButton]="shouldShowCancel"\n\n            (ionInput)="onSearch($event)"\n\n            (ionCancel)="onCancel($event)"\n\n            [debounce]="700"\n\n            placeholder="Search"\n\n            (ionFocus)="checkFocus()"\n\n        >\n\n    </ion-searchbar>\n\n    </form>\n\n    <ion-spinner name="crescent" class="pageLoader" *ngIf="pageLoaded == false"></ion-spinner>\n\n    <div *ngIf="pageLoaded">\n\n        <p *ngIf="pets?.length == 0" class="noPetResult">No lost pet yet.</p>\n\n        <div *ngIf="pets?.length">\n\n            <ion-card *ngFor="let pet of pets">\n\n                <img [src]="pet?.image != \'\' && pet?.image != null ? pet?.image : \'assets/images/icon.png\'" [class.noImage]="pet?.image == \'\' || pet?.image == null"/>\n\n                <ion-card-content>\n\n                    <ion-card-title>{{pet.name}}</ion-card-title>\n\n                    <div>\n\n                        <span class="bold">Place of lost:</span>\n\n                        <span>{{pet.placeLost}}</span>\n\n                    </div>\n\n                    <div>\n\n                        <span class="bold">Lost date:</span>\n\n                        <span>{{pet.lostDate | date:\'mediumDate\'}}</span>\n\n                    </div>\n\n                    <div>\n\n                        <span class="bold">Status:</span>\n\n                        <span [class.blue]="pet.status" [class.red]="!pet.status">{{pet.status ? \'Found\' : \'Lost\'}}</span>\n\n                    </div>\n\n                    <button ion-button type="button" *ngIf="userId == pet?.uid" class="removeBtn" (click)="action(pet.lostPetId, pet.status)"><ion-icon name="more"></ion-icon></button>\n\n                    <button ion-button type="submit" class="btnDetails" (click)="lostPetDetails(pet)"><ion-icon name="paw"></ion-icon> More Details</button>\n\n                    <button ion-button type="button" class="btnMessage" *ngIf="userId != pet?.uid" (click)="openMessage(pet)"><ion-icon name="chatboxes"></ion-icon> Message Owner</button>\n\n                    <span class="datePosted">Posted: {{pet.lostDate | date:\'mediumDate\'}}</span>\n\n                </ion-card-content>\n\n            </ion-card>\n\n        </div>\n\n    </div>\n\n\n\n    <page-chat-notif-fab></page-chat-notif-fab>\n\n    \n\n    <ion-fab bottom right>\n\n        <button ion-fab (click)="addLostPet()"><ion-icon name="add"></ion-icon></button>\n\n    </ion-fab>\n\n</ion-content>\n\n\n\n\n\n\n\n'/*ion-inline-end:"C:\Users\Sanchez\Dropbox\petApp\src\pages\lostpets\lostpets.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_lostpet_lostpet__["a" /* LostpetProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */]])
], LostpetsPage);

//# sourceMappingURL=lostpets.js.map

/***/ })

});
//# sourceMappingURL=3.js.map