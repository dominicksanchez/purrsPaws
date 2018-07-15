webpackJsonp([21],{

/***/ 616:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatSinglePageModule", function() { return ChatSinglePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chat_single__ = __webpack_require__(655);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let ChatSinglePageModule = class ChatSinglePageModule {
};
ChatSinglePageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__chat_single__["a" /* ChatSinglePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__chat_single__["a" /* ChatSinglePage */]),
        ],
    })
], ChatSinglePageModule);

//# sourceMappingURL=chat-single.module.js.map

/***/ }),

/***/ 655:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatSinglePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_chat_chat__ = __webpack_require__(361);
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






let ChatSinglePage = class ChatSinglePage {
    constructor(navCtrl, navParams, toastCtrl, loadingCtrl, chatProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.chatProvider = chatProvider;
        this.db = __WEBPACK_IMPORTED_MODULE_3_firebase__["firestore"]();
        this.pageLoaded = false;
        this.chatTxtCtrl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required);
        this.chatForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            chatTxt: this.chatTxtCtrl
        });
        this.userEmail = localStorage.getItem('email');
        this.userId = localStorage.getItem('userId');
        this.userEmailName = localStorage.getItem('email').split('@')[0].replace('.', '').toLowerCase();
        console.log('this.userEmailName', this.userEmailName);
        this.getChatReceiverInfo(this.navParams.data['uid']);
        this.scrollToBottom();
    }
    ionViewDidLoad() {
        this.getSenderPhoto();
    }
    markAsRead() {
        this.db.collection('chats').doc(this.chatId).collection('messages').get().then(res => {
            let unreadCount = 0;
            let data = res.docs.filter(messageData => {
                console.log('wwwwww', messageData.data().userEmailName);
                return messageData.data().userEmailName.toLowerCase() != this.userEmailName;
            }).map(filterData => {
                unreadCount++;
                this.db.collection('chats').doc(this.chatId).collection('messages').doc(filterData.id).update({
                    isRead: 1
                });
            });
            let notifRef = __WEBPACK_IMPORTED_MODULE_3_firebase__["database"]().ref(`notif/chats/${this.userEmailName}`);
            notifRef.once('value', snapshot => {
                if (snapshot.hasChild('unread')) {
                    let unread = snapshot.val().unread - unreadCount;
                    if (unread < 0) {
                        notifRef.set({
                            unread: 0
                        });
                    }
                    else {
                        notifRef.set({
                            unread: unread
                        });
                    }
                }
                else {
                    notifRef.set({
                        unread: 0
                    });
                }
            });
        });
    }
    scrollToBottom() {
        setTimeout(() => {
            this.content.scrollToBottom();
        }, 300);
        setTimeout(() => {
            this.content.scrollToBottom();
        }, 2000);
    }
    getSenderPhoto() {
        this.db.collection('users').doc(this.userId).get().then(res => {
            let sender = res.data();
            this.userPhoto = sender.photo;
            this.userName = sender.name;
            if (this.userPhoto == null || this.userPhoto == '') {
                this.userPhoto = '';
            }
        }).catch(err => {
            let toast = this.toastCtrl.create({
                message: err.message,
                duration: 3000,
                position: 'top'
            });
            toast.present();
        });
    }
    getChatReceiverInfo(uid) {
        this.db.collection('users').doc(uid).get().then(res => {
            let receiver = res.data();
            this.receiverEmail = receiver.email.toLowerCase();
            this.receiverName = receiver.name;
            console.log('this.receiverName', this.receiverName);
            this.receiverPhoto = receiver.photo;
            let senderName = this.userEmail.split('@')[0].replace('.', '');
            let recName = this.receiverEmail.split('@')[0].replace('.', '');
            this.chatId = senderName < recName ? senderName + '-' + recName : recName + '-' + senderName;
            this.loadChatConversation();
            this.markAsRead();
        }).catch(err => {
            let toast = this.toastCtrl.create({
                message: err.message,
                duration: 3000,
                position: 'top'
            });
            toast.present();
        });
    }
    back() {
        this.navCtrl.pop();
    }
    loadChatConversation() {
        this.db.collection('chats').doc(this.chatId).collection('messages').orderBy("dateAdded", "asc").limit(1000).onSnapshot(res => {
            let data = res.docs.map(doc => doc.data());
            this.chats = data;
            this.pageLoaded = true;
        });
    }
    chatSubmit() {
        if (this.chatForm.valid) {
            let timeStampSec = new Date().getTime() / 1000;
            let payload = {
                message: this.chatTxt,
                isPhoto: false,
                name: this.userName,
                userEmailName: this.userEmailName,
                photo: this.userPhoto,
                isRead: 0,
                dateAdded: __WEBPACK_IMPORTED_MODULE_3_firebase__["firestore"].FieldValue.serverTimestamp(),
                timestampInSecs: timeStampSec
            };
            this.chatTxt = '';
            this.db.collection('chats').doc(this.chatId).set({
                docId: this.chatId
            });
            let receiverEmailName = this.receiverEmail.split('@')[0].replace('.', '').toLowerCase();
            let notifRef = __WEBPACK_IMPORTED_MODULE_3_firebase__["database"]().ref(`notif/chats/${receiverEmailName}`);
            notifRef.once('value', snapshot => {
                console.log('firing');
                if (snapshot.hasChild('unread')) {
                    let unread = snapshot.val().unread + 1;
                    notifRef.set({
                        unread: unread
                    });
                }
                else {
                    notifRef.set({
                        unread: 1
                    });
                }
            });
            this.db.collection('chats').doc(this.chatId).collection('messages').add(payload).then(() => {
                this.scrollToBottom();
            }).catch(err => {
                let toast = this.toastCtrl.create({
                    message: err.message,
                    duration: 3000,
                    position: 'top'
                });
                toast.present();
            });
        }
        else {
            let toast = this.toastCtrl.create({
                message: 'Message is required in able to send!',
                duration: 3000,
                position: 'top'
            });
            toast.present();
        }
    }
    sendPhoto(event) {
        let loading = this.loadingCtrl.create({
            content: 'Sending photo, please wait...'
        });
        loading.present();
        let imageType = ['image/gif', 'image/png', 'image/jpeg', 'image/bmp', 'image/webp'];
        if (imageType.indexOf(event.target.files.item(0)['type']) != -1) {
            this.chatProvider.uploadPhoto(event.target.files.item(0), this.chatId, this.userName, this.userEmailName, this.userPhoto).then(photo => {
                loading.dismiss();
                this.scrollToBottom();
            }).catch(err => {
                loading.dismiss();
                let toast = this.toastCtrl.create({
                    message: err.message,
                    duration: 3000,
                    position: 'top'
                });
                toast.present();
            });
        }
        else {
            loading.dismiss();
            let toast = this.toastCtrl.create({
                message: 'Invalid file type, only allowed file types are gif, png, jpeg, bmp, webp',
                duration: 3000,
                position: 'top'
            });
            toast.present();
        }
    }
};
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* Content */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* Content */])
], ChatSinglePage.prototype, "content", void 0);
ChatSinglePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-chat-single',template:/*ion-inline-start:"C:\Users\Sanchez\Dropbox\petApp\src\pages\chat-single\chat-single.html"*/'<ion-content #chatArea>\n\n  <div class="chatHead">\n\n    <button (click)="back()"><ion-icon name="arrow-back"></ion-icon></button>\n\n    <h1>{{receiverName}}</h1>\n\n    <p>{{receiverEmail}}</p>\n\n    <div class="chatPhoto">\n\n      <img [src]="receiverPhoto != \'\' && receiverPhoto != null ? receiverPhoto : \'assets/images/blank-profile.png\' " width="45" height="45" alt="">\n\n    </div>\n\n  </div>\n\n  <div class="chatArea">\n\n  <ion-spinner name="crescent" class="pageLoader" *ngIf="pageLoaded == false"></ion-spinner>\n\n  <div *ngIf="pageLoaded">\n\n    <p *ngIf="chats?.length == 0" class="noPetResult">No chat messages yet.</p>\n\n    <div *ngIf="chats?.length">\n\n      <div *ngFor="let chat of chats">\n\n          <div class="leftChat" *ngIf="userName != chat?.name">\n\n            <div class="pic">\n\n                <img [src]="chat.photo != \'\' && chat.photo != null ? chat.photo : \'assets/images/blank-profile.png\' " width="40" height="40" alt="">\n\n            </div>\n\n            <div class="message">\n\n              <p *ngIf="!chat?.isPhoto">{{chat?.message}}</p>\n\n              <p *ngIf="chat?.isPhoto" class="hasPhoto"><img [src]="chat?.message" alt=""></p>\n\n              <span>{{chat?.dateAdded | date:\'MMM d\'}}, {{chat?.dateAdded | date:\'h:mm a\'}}</span>\n\n            </div>\n\n          </div>\n\n          <div class="rightChat" *ngIf="userName == chat?.name">\n\n            <div class="message">\n\n              <p *ngIf="!chat?.isPhoto">{{chat?.message}}</p>\n\n              <p *ngIf="chat?.isPhoto" class="hasPhoto"><img [src]="chat?.message"></p>\n\n              <span>{{chat?.dateAdded | date:\'MMM d\'}}, {{chat?.dateAdded | date:\'h:mm a\'}}</span>\n\n            </div>\n\n          </div>\n\n        </div>\n\n    </div>\n\n  </div>\n\n    <!-- <div class="leftChat">\n\n      <div class="pic">\n\n          <img src="assets/images/blank-profile.png" width="40" height="40" alt="">\n\n      </div>\n\n      <div class="message">\n\n        <p>Hello doms!</p>\n\n        <span>10:33 PM</span>\n\n      </div>\n\n    </div>\n\n    <div class="rightChat">\n\n      <div class="message">\n\n        <p>Thank you</p>\n\n        <span>10:35 PM</span>\n\n      </div>\n\n    </div> -->\n\n  </div>\n\n  <div class="chatFooter">\n\n    <input type="file" hidden #profilePicUpload name="profilePicUpload" (change)="sendPhoto($event)">\n\n    <form [formGroup]="chatForm" (ngSubmit)="chatSubmit()">\n\n      <button type="button" class="camera" (click)="profilePicUpload.click()"><ion-icon name="camera"></ion-icon></button>\n\n      <input type="text" placeholder="Type your message" formControlName="chatTxt" [(ngModel)]="chatTxt" name="chatTxt">\n\n      <button type="submit" class="like"><ion-icon name="send"></ion-icon></button>\n\n    </form>\n\n  </div>  \n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Sanchez\Dropbox\petApp\src\pages\chat-single\chat-single.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["o" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_4__providers_chat_chat__["a" /* ChatProvider */]])
], ChatSinglePage);

//# sourceMappingURL=chat-single.js.map

/***/ })

});
//# sourceMappingURL=21.js.map