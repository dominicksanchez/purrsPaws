webpackJsonp([4,22],{

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

/***/ 613:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdoptionPageModule", function() { return AdoptionPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__adoption__ = __webpack_require__(653);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__chat_notif_fab_chat_notif_fab_module__ = __webpack_require__(598);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




let AdoptionPageModule = class AdoptionPageModule {
};
AdoptionPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__adoption__["a" /* AdoptionPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__adoption__["a" /* AdoptionPage */]),
            __WEBPACK_IMPORTED_MODULE_3__chat_notif_fab_chat_notif_fab_module__["ChatNotifFabPageModule"]
        ],
    })
], AdoptionPageModule);

//# sourceMappingURL=adoption.module.js.map

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

/***/ 653:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdoptionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase_firestore__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase_firestore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__buy_pet_details_buy_pet_details__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_buypet_buypet__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__add_adopt_pet_add_adopt_pet__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__edit_adopt_pet_edit_adopt_pet__ = __webpack_require__(360);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









let AdoptionPage = class AdoptionPage {
    constructor(navCtrl, navParams, authProvider, modalCtrl, alertCtrl, toastCtrl, actionSheetCtrl, loadingCtrl, buypetProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authProvider = authProvider;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.loadingCtrl = loadingCtrl;
        this.buypetProvider = buypetProvider;
        this.petsCount = 0;
        this.db = __WEBPACK_IMPORTED_MODULE_3_firebase__["firestore"]();
        this.pageLoaded = false;
        this.userId = localStorage.getItem('userId');
        this.searchFocus = 0;
        this.userEmailName = localStorage.getItem('email').split('@')[0].replace('.', '');
        this.getItems();
    }
    readNotif() {
        __WEBPACK_IMPORTED_MODULE_3_firebase__["database"]().ref(`notif/adopt/${this.userEmailName}/`).set({
            unread: 0
        });
    }
    ionViewDidEnter() {
        this.searchFocus = 0;
        this.readNotif();
    }
    onSearch(ev) {
        this.pageLoaded = false;
        let val = ev.target.value;
        this.db.collection('adopt').where("isactive", "==", true).orderBy("datePosted", "desc").limit(1000).onSnapshot(snapshots => {
            console.log('snapshots', snapshots);
            let pets = [];
            snapshots.forEach(doc => {
                let docData = doc.data();
                let interestedUsers = docData['interestedUsers'];
                if (interestedUsers.indexOf(this.userId) == -1) {
                    docData['interested'] = false;
                }
                else {
                    docData['interested'] = true;
                }
                docData['adoptPetId'] = doc.id;
                pets.push(docData);
            });
            this.pets = pets;
            this.petsCount = Object.keys(pets).length;
            if (val && val.trim() != '') {
                this.pets = this.pets.filter((el) => {
                    return (el.name.toLowerCase().indexOf(val.toLowerCase()) > -1) ||
                        (el.breed.toLowerCase().indexOf(val.toLowerCase()) > -1) ||
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
    getItems() {
        this.db.collection('adopt').where("isactive", "==", true).orderBy("datePosted", "desc").onSnapshot(snapshots => {
            console.log('snapshots', snapshots);
            let pets = [];
            snapshots.forEach(doc => {
                let docData = doc.data();
                let interestedUsers = docData['interestedUsers'];
                if (interestedUsers.indexOf(this.userId) == -1) {
                    docData['interested'] = false;
                }
                else {
                    docData['interested'] = true;
                }
                docData['adoptPetId'] = doc.id;
                console.log('docData', docData);
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
    addAdoptPet() {
        let modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_7__add_adopt_pet_add_adopt_pet__["a" /* AddAdoptPetPage */]);
        modal.onDidDismiss(data => {
        });
        modal.present();
    }
    removePost(adoptPetId, status) {
        let title = '';
        let message = '';
        if (status == 1) {
            title = 'Pet was sold?';
            message = 'Are you sure do you want to mark this pet as sold?';
        }
        else {
            title = 'Pet was for sale?';
            message = 'Are you sure do you want to mark this pet as for sale?';
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
                        this.db.collection('adopt').doc(adoptPetId).update({
                            isactive: !status
                        });
                        let toast = this.toastCtrl.create({
                            message: 'Post was deleted',
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
    action(petId, status) {
        let text = '';
        if (status == 1) {
            text = 'Remove';
        }
        else {
            text = 'Remove this post';
        }
        let actionSheet = this.actionSheetCtrl.create({
            title: 'Modify your post',
            buttons: [
                {
                    text: text,
                    icon: 'trash',
                    handler: () => {
                        this.removePost(petId, status);
                    }
                }, {
                    text: 'Edit',
                    icon: 'create',
                    handler: () => {
                        let data = {
                            petId: petId
                        };
                        let modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_8__edit_adopt_pet_edit_adopt_pet__["a" /* EditAdoptPetPage */], data);
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
    adoptPetDetails(pet) {
        console.log('pet', pet);
        let modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__buy_pet_details_buy_pet_details__["a" /* BuyPetDetailsPage */], pet);
        modal.onDidDismiss(data => {
            if (data) {
                // this.loadProfile();
            }
        });
        modal.present();
    }
    thumbsUp(petId) {
        let petRef = this.db.collection('adopt').doc(petId);
        petRef.get().then(pet => {
            let data = pet.data();
            let interestedUsers = data['interestedUsers'];
            if (interestedUsers.indexOf(this.userId) == -1) {
                interestedUsers.push(this.userId);
                petRef.update({
                    interestedUsers: interestedUsers
                });
                let toast = this.toastCtrl.create({
                    message: 'Interested!',
                    duration: 5000,
                    position: 'bottom'
                });
                toast.present();
            }
            else {
                interestedUsers.splice(this.userId, 1);
                petRef.update({
                    interestedUsers: interestedUsers
                });
                let toast = this.toastCtrl.create({
                    message: 'Not interested!',
                    duration: 5000,
                    position: 'bottom'
                });
                toast.present();
            }
            petRef.update({
                interestedCount: interestedUsers.length
            });
        }).catch(err => {
            console.log('err', err);
        });
    }
    interestedView(petId) {
        let loader = this.loadingCtrl.create({
            content: "Fetching interested users",
            duration: 1000
        });
        loader.present();
        this.db.collection('adopt').doc(petId).get().then(res => {
            let names;
            let interestedUser = res.data()['interestedUsers'];
            let html = "";
            if (interestedUser.length > 0) {
                for (let userId of interestedUser) {
                    this.db.collection('users').doc(userId).get().then(user => {
                        let name = user.data()['name'];
                        html += '- ' + name + '<br>';
                    }).catch(err => {
                        console.log('err', err);
                    });
                }
            }
            else {
                html = 'No interested users yet.';
            }
            setTimeout(() => {
                let alert = this.alertCtrl.create({
                    title: 'Interested Users',
                    subTitle: html,
                    buttons: ['OK']
                });
                alert.present();
            }, 1000);
        }).catch(err => {
            console.log('err', err);
        });
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
    openMessage(pet) {
        this.navCtrl.push("ChatSinglePage", pet);
    }
    goToChatList() {
        this.navCtrl.push('ChatListPage');
    }
};
AdoptionPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-adoption',template:/*ion-inline-start:"C:\Users\Sanchez\Dropbox\petApp\src\pages\adoption\adoption.html"*/'<ion-header >\n  <ion-navbar>\n    <ion-title>Adoption</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="card-background-page">\n  <form action="" class="searchBar">\n    <ion-searchbar [showCancelButton]="shouldShowCancel" (ionInput)="onSearch($event)" (ionCancel)="onCancel($event)" [debounce]="700"\n      placeholder="Search" (ionFocus)="checkFocus()">\n    </ion-searchbar>\n  </form>\n  <ion-spinner name="crescent" class="pageLoader" *ngIf="pageLoaded == false"></ion-spinner>\n  <div *ngIf="pageLoaded">\n    <p *ngIf="pets?.length == 0" class="noPetResult">No posted adoption pet yet.</p>\n    <div *ngIf="pets?.length">\n      <ion-card *ngFor="let pet of pets">\n        <img [src]="pet?.image != \'\' && pet?.image != null ? pet?.image : \'assets/images/icon.png\'" [class.noImage]="pet?.image == \'\' || pet?.image == null"\n        />\n        <ion-card-content>\n          <ion-card-title>{{pet.name}}\n            <span class="price">{{pet.price | currency:\'PHP\':true}}</span>\n          </ion-card-title>\n          <div>\n            <span class="bold">Breed:</span>\n            <span>{{pet.breed}}</span>\n          </div>\n          <div>\n            <span class="bold">Age:</span>\n            <span>{{pet.age}}</span>\n          </div>\n          <button ion-button type="button" *ngIf="userId == pet?.uid" class="removeBtn" (click)="action(pet.adoptPetId, pet.isactive)">\n            <ion-icon name="more"></ion-icon>\n          </button>\n          <button ion-button type="submit" class="btnDetails" (click)="adoptPetDetails(pet)">\n            <ion-icon name="paw"></ion-icon> More Details</button>\n          <button ion-button type="button" class="btnMessage" *ngIf="userId != pet?.uid" (click)="openMessage(pet)">\n            <ion-icon name="chatboxes"></ion-icon> Message Seller</button>\n          <span class="datePosted">Posted: {{pet.datePosted | date:\'mediumDate\'}}</span>\n          <div class="interestedBlock">\n            <button ion-button type="button" class="thumbsUpBtn" [class.blue]="pet.interested">\n              <ion-icon name="thumbs-up" (click)="thumbsUp(pet.adoptPetId)"></ion-icon> &nbsp;\n              <span (click)="interestedView(pet.adoptPetId)">Interested ({{pet.interestedCount}})</span>\n            </button>\n          </div>\n        </ion-card-content>\n      </ion-card>\n    </div>\n  </div>\n\n  <page-chat-notif-fab></page-chat-notif-fab>\n\n  <ion-fab bottom right>\n    <button ion-fab (click)="addAdoptPet()">\n      <ion-icon name="add"></ion-icon>\n    </button>\n  </ion-fab>\n</ion-content>'/*ion-inline-end:"C:\Users\Sanchez\Dropbox\petApp\src\pages\adoption\adoption.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_6__providers_buypet_buypet__["a" /* BuypetProvider */]])
], AdoptionPage);

//# sourceMappingURL=adoption.js.map

/***/ })

});
//# sourceMappingURL=4.js.map