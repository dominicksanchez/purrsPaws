webpackJsonp([23],{

/***/ 615:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatListPageModule", function() { return ChatListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chat_list__ = __webpack_require__(654);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let ChatListPageModule = class ChatListPageModule {
};
ChatListPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__chat_list__["a" /* ChatListPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__chat_list__["a" /* ChatListPage */]),
        ],
    })
], ChatListPageModule);

//# sourceMappingURL=chat-list.module.js.map

/***/ }),

/***/ 654:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_chat_chat__ = __webpack_require__(361);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase_firestore__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase_firestore__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





let ChatListPage = class ChatListPage {
    constructor(navCtrl, navParams, chatProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.chatProvider = chatProvider;
        this.db = __WEBPACK_IMPORTED_MODULE_2_firebase__["firestore"]();
        this.pageLoaded = false;
        this.userId = localStorage.getItem('userId');
        this.userEmailName = localStorage.getItem('email').split('@')[0].replace('.', '').toLowerCase();
    }
    ionViewDidLoad() {
        this.loadChatList();
    }
    openChatSingle(chatId) {
        let chatUserArr = chatId.split('-');
        let name = chatUserArr[0] == this.userEmailName ? chatUserArr[1] : chatUserArr[0];
        this.db.collection('users').get().then(res => {
            let data = res.docs.map(doc => doc.data());
            let user = data.filter(user => user.email.split('@')[0].replace('.', '').toLowerCase() == name.toLowerCase());
            let payload = { uid: user[0].uid };
            this.navCtrl.push('ChatSinglePage', payload);
        }).catch(err => {
            console.log(err);
        });
    }
    loadChatList() {
        this.db.collection("chats").onSnapshot(querySnapshot => {
            let myArr = [];
            let promises = [];
            let contactsArr = [];
            querySnapshot.forEach((doc) => {
                if (doc.id.indexOf(this.userEmailName) != -1) {
                    contactsArr.push(doc.id);
                }
            });
            if (contactsArr.length) {
                for (let x = 0; x < contactsArr.length; x++) {
                    let contactArr = contactsArr[x].toLowerCase();
                    console.log('contactsArr', contactArr);
                    const promise = new Promise((resolve, reject) => {
                        this.db.collection("chats").doc(contactArr).collection('messages').orderBy("dateAdded", "desc").limit(1).onSnapshot(res => {
                            let data = res.docs.map(data => data.data());
                            if (res.docs.length) {
                                data[0]['chatId'] = contactArr;
                                let userArr = contactArr.split('-');
                                let userEmailName = userArr[0] == this.userEmailName ? userArr[1] : userArr[0];
                                this.db.collection("chats").doc(contactArr).collection('messages').get().then(chatRes => {
                                    let chatUnreadCount = chatRes.docs.map(chatData => chatData.data()).filter(chatRead => chatRead.isRead == 0 && chatRead.userEmailName != this.userEmailName).length;
                                    this.db.collection('users').get().then(res => {
                                        let userData = res.docs.map(doc => doc.data());
                                        let user = userData.filter(user => user.email.split('@')[0].replace('.', '').toLowerCase() == userEmailName.toLowerCase());
                                        data[0]['userPhoto'] = user[0].photo;
                                        data[0]['otherName'] = user[0].name;
                                        data[0]['unreadCount'] = chatUnreadCount;
                                        console.log('chatUnreadCount', chatUnreadCount);
                                        myArr.map((arr, index) => {
                                            if (arr.chatId == contactArr) {
                                                myArr.splice(index, 1);
                                            }
                                        });
                                        myArr.push(data[0]);
                                        console.log('myArr', myArr);
                                        resolve(1);
                                    });
                                });
                            }
                            else {
                                this.chatLists = [];
                                this.pageLoaded = true;
                            }
                        });
                    });
                    promises.push(promise);
                }
            }
            else {
                this.chatLists = [];
                this.pageLoaded = true;
            }
            Promise.all(promises).then(() => {
                this.chatLists = [];
                this.chatLists = myArr;
                function compare(a, b) {
                    if (a.timestampInSecs < b.timestampInSecs)
                        return -1;
                    if (a.timestampInSecs > b.timestampInSecs)
                        return 1;
                    return 0;
                }
                this.chatLists.reverse(compare);
                console.log('this.chatLists', this.chatLists);
                this.pageLoaded = true;
            });
        });
    }
    onSearch(ev) {
        this.pageLoaded = false;
        let val = ev.target.value;
        // this.db.collection("chats").onSnapshot(querySnapshot => {
        //   let myArr = [];
        //   let promises = [];
        //   let contactsArr = [];
        //   querySnapshot.forEach((doc) => {
        //     if(doc.id.indexOf(this.userEmailName) != -1) {
        //       contactsArr.push(doc.id);
        //     }
        //   });
        //   if(contactsArr.length) {
        //     for(let x = 0; x < contactsArr.length; x++) {
        //       console.log('contactsArr', contactsArr[x]);
        //       const promise = new Promise((resolve, reject) => {
        //         this.db.collection("chats").doc(contactsArr[x]).collection('messages').orderBy("dateAdded", "desc").limit(1).onSnapshot(res => {
        //           let data = res.docs.map(data => data.data());
        //           if(res.docs.length) {
        //             data[0]['chatId'] = contactsArr[x];
        //             let userArr = contactsArr[x].split('-');
        //             let userEmailName = userArr[0] == this.userEmailName ? userArr[1] : userArr[0];
        //             this.db.collection("chats").doc(contactsArr[x]).collection('messages').get().then(chatRes => {
        //               let chatUnreadCount = chatRes.docs.map(chatData => chatData.data()).filter(chatRead => chatRead.isRead == 0 && chatRead.userEmailName != this.userEmailName).length;
        //               this.db.collection('users').get().then(res => {
        //                 let userData = res.docs.map(doc => doc.data());
        //                 let user = userData.filter(user => user.email.split('@')[0].replace('.', '').toLowerCase() == userEmailName.toLowerCase());
        //                 data[0]['userPhoto'] = user[0].photo;
        //                 data[0]['otherName'] = user[0].name;
        //                 data[0]['unreadCount'] = chatUnreadCount;
        //                 myArr.map((arr, index) => {
        //                   if(arr.chatId == contactsArr[x]) {
        //                     myArr.splice(index, 1);
        //                   }
        //                 });
        //                 myArr.push(data[0]);
        //                 console.log('myArr', myArr);
        //                 resolve(1);
        //               });
        //             });
        //           }else {
        //             this.chatLists = [];
        //             this.pageLoaded = true;
        //           }
        //         });
        //       });
        //       promises.push(promise);
        //     }  
        //   }else {
        //     this.chatLists = [];
        //     this.pageLoaded = true;
        //   }
        //   Promise.all(promises).then(() => {
        //     this.chatLists = [];
        //     this.chatLists = myArr;
        //     if (val && val.trim() != '') {
        //       this.chatLists =  this.chatLists.filter((el) => {
        //         return (el.name.toLowerCase().indexOf(val.toLowerCase()) > -1 ||
        //                 el.otherName.toLowerCase().indexOf(val.toLowerCase()) > - 1);
        //       });
        //     }
        //     setTimeout(() => {
        //       this.pageLoaded = true;
        //     }, 700);
        //   });
        // });
        this.db.collection("chats").onSnapshot(querySnapshot => {
            let myArr = [];
            let promises = [];
            let contactsArr = [];
            querySnapshot.forEach((doc) => {
                if (doc.id.indexOf(this.userEmailName) != -1) {
                    contactsArr.push(doc.id);
                }
            });
            if (contactsArr.length) {
                for (let x = 0; x < contactsArr.length; x++) {
                    let contactArr = contactsArr[x].toLowerCase();
                    console.log('contactsArr', contactArr);
                    const promise = new Promise((resolve, reject) => {
                        this.db.collection("chats").doc(contactArr).collection('messages').orderBy("dateAdded", "desc").limit(1).onSnapshot(res => {
                            let data = res.docs.map(data => data.data());
                            if (res.docs.length) {
                                data[0]['chatId'] = contactArr;
                                let userArr = contactArr.split('-');
                                let userEmailName = userArr[0] == this.userEmailName ? userArr[1] : userArr[0];
                                this.db.collection("chats").doc(contactArr).collection('messages').get().then(chatRes => {
                                    let chatUnreadCount = chatRes.docs.map(chatData => chatData.data()).filter(chatRead => chatRead.isRead == 0 && chatRead.userEmailName != this.userEmailName).length;
                                    this.db.collection('users').get().then(res => {
                                        let userData = res.docs.map(doc => doc.data());
                                        let user = userData.filter(user => user.email.split('@')[0].replace('.', '').toLowerCase() == userEmailName.toLowerCase());
                                        data[0]['userPhoto'] = user[0].photo;
                                        data[0]['otherName'] = user[0].name;
                                        data[0]['unreadCount'] = chatUnreadCount;
                                        console.log('chatUnreadCount', chatUnreadCount);
                                        myArr.map((arr, index) => {
                                            if (arr.chatId == contactArr) {
                                                myArr.splice(index, 1);
                                            }
                                        });
                                        myArr.push(data[0]);
                                        console.log('myArr', myArr);
                                        resolve(1);
                                    });
                                });
                            }
                            else {
                                this.chatLists = [];
                                this.pageLoaded = true;
                            }
                        });
                    });
                    promises.push(promise);
                }
            }
            else {
                this.chatLists = [];
                this.pageLoaded = true;
            }
            Promise.all(promises).then(() => {
                this.chatLists = [];
                this.chatLists = myArr;
                function compare(a, b) {
                    if (a.timestampInSecs < b.timestampInSecs)
                        return -1;
                    if (a.timestampInSecs > b.timestampInSecs)
                        return 1;
                    return 0;
                }
                this.chatLists.reverse(compare);
                if (val && val.trim() != '') {
                    this.chatLists = this.chatLists.filter((el) => {
                        return (el.name.toLowerCase().indexOf(val.toLowerCase()) > -1 ||
                            el.otherName.toLowerCase().indexOf(val.toLowerCase()) > -1);
                    });
                }
                setTimeout(() => {
                    this.pageLoaded = true;
                }, 700);
            });
        });
    }
};
ChatListPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-chat-list',template:/*ion-inline-start:"C:\Users\Sanchez\Dropbox\petApp\src\pages\chat-list\chat-list.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Chats</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <form action="" class="searchBar">\n\n      <ion-searchbar\n\n          [showCancelButton]="shouldShowCancel"\n\n          (ionInput)="onSearch($event)"\n\n          (ionCancel)="onCancel($event)"\n\n          [debounce]="700"\n\n          placeholder="Search Name"\n\n      >\n\n      </ion-searchbar>\n\n  </form>\n\n  <ion-spinner name="crescent" class="pageLoader" *ngIf="pageLoaded == false"></ion-spinner>\n\n  <div *ngIf="pageLoaded">\n\n    <p *ngIf="chatLists?.length == 0" class="noChat">No chat messages yet.</p>\n\n    <ul class="chatList" *ngIf="chatLists?.length">\n\n      <li *ngFor="let chat of chatLists" (click)="openChatSingle(chat?.chatId)" [class.unread]="chat?.isRead == 0 && chat?.userEmailName != userEmailName">\n\n        <div class="chatBlock01">\n\n          <img [src]="chat?.userPhoto != \'\' && chat?.userPhoto != null ? chat?.userPhoto : \'assets/images/blank-profile.png\' " width="50" height="50" alt="">\n\n          <ion-badge color="danger" *ngIf="chat?.unreadCount">{{chat?.unreadCount}}</ion-badge>\n\n        </div>\n\n        <div class="chatBlock02">\n\n          <strong *ngIf="chat?.userEmailName != userEmailName">{{chat?.name}}</strong>\n\n          <strong *ngIf="chat?.userEmailName == userEmailName">{{chat?.otherName}}</strong>\n\n          <span *ngIf="chat?.userEmailName != userEmailName" class="lastChat">{{chat?.message.indexOf(\'https://firebasestorage\') != -1 ? \'Sent photo\' : chat?.message}}</span>\n\n          <span *ngIf="chat?.userEmailName == userEmailName" class="lastChat">You: {{chat?.message.indexOf(\'https://firebasestorage\') != -1 ? \'Sent photo\' : chat?.message}}</span>\n\n          <span class="chatDate">{{chat?.dateAdded | date:\'MMM d\'}}, {{chat?.dateAdded | date:\'h:mm a\'}}</span>\n\n        </div>\n\n      </li>\n\n    </ul>\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Sanchez\Dropbox\petApp\src\pages\chat-list\chat-list.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3__providers_chat_chat__["a" /* ChatProvider */]])
], ChatListPage);

//# sourceMappingURL=chat-list.js.map

/***/ })

});
//# sourceMappingURL=23.js.map