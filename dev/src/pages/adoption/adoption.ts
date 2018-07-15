import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, AlertController, ToastController, ActionSheetController, LoadingController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import * as firebase from 'firebase';
import 'firebase/firestore';
import { BuyPetDetailsPage } from '../buy-pet-details/buy-pet-details';
import { BuypetProvider } from '../../providers/buypet/buypet';
import { AddAdoptPetPage } from '../add-adopt-pet/add-adopt-pet';
import { EditAdoptPetPage } from '../edit-adopt-pet/edit-adopt-pet';

@IonicPage()
@Component({
  selector: 'page-adoption',
  templateUrl: 'adoption.html',
})
export class AdoptionPage {
  pets: any;
  petsCount: number = 0;
  db: any = firebase.firestore();
  pageLoaded: boolean = false;
  userId: string = localStorage.getItem('userId');
  searchFocus: number = 0;
  userEmailName: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public authProvider: AuthProvider,
    public modalCtrl: ModalController,
    public alertCtrl: AlertController,
    public toastCtrl: ToastController,
    public actionSheetCtrl: ActionSheetController,
    public loadingCtrl: LoadingController,
    public buypetProvider: BuypetProvider,
  ) {
    this.userEmailName = localStorage.getItem('email').split('@')[0].replace('.', '');
    this.getItems();
  }

  readNotif() {
    firebase.database().ref(`notif/adopt/${this.userEmailName}/`).set({
      unread: 0
    });
  }

  ionViewDidEnter() {
    this.searchFocus = 0;
    this.readNotif();
  }

  onSearch(ev: any) {
    this.pageLoaded = false;
    let val = ev.target.value;

    this.db.collection('adopt').where("isactive", "==", true).orderBy("datePosted", "desc").limit(1000).onSnapshot(snapshots => {
      console.log('snapshots', snapshots);
      let pets = [];
      snapshots.forEach(doc => {
        let docData = doc.data();
        let interestedUsers = docData['interestedUsers'];

        if (interestedUsers.indexOf(this.userId) == -1) { // no user records
          docData['interested'] = false;
        } else {
          docData['interested'] = true;
        }

        docData['adoptPetId'] = doc.id
        pets.push(docData);
      });

      this.pets = pets;
      this.petsCount = Object.keys(pets).length;

      if (val && val.trim() != '') {
        this.pets = this.pets.filter((el) => {
          return (el.name.toLowerCase().indexOf(val.toLowerCase()) > -1) ||
            (el.breed.toLowerCase().indexOf(val.toLowerCase()) > -1) ||
            (el.petType.toLowerCase().indexOf(val.toLowerCase()) > -1)
        });
      }

      setTimeout(() => {
        this.pageLoaded = true;
      }, 700);
    }), (err => {
      console.log('err', err);
    });



  }

  onCancel(ev: any) {
    this.getItems();
  }

  getItems() {
    this.db.collection('adopt').where("isactive", "==", true).orderBy("datePosted", "desc").onSnapshot(snapshots => {
      console.log('snapshots', snapshots);
      let pets = [];
      snapshots.forEach(doc => {
        let docData = doc.data();
        let interestedUsers = docData['interestedUsers'];

        if (interestedUsers.indexOf(this.userId) == -1) { // no user records
          docData['interested'] = false;
        } else {
          docData['interested'] = true;
        }

        docData['adoptPetId'] = doc.id
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
    let modal = this.modalCtrl.create(AddAdoptPetPage);

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
    } else {
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
    } else {
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
            let data: object = {
              petId: petId
            };
            let modal = this.modalCtrl.create(EditAdoptPetPage, data);

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
    let modal = this.modalCtrl.create(BuyPetDetailsPage, pet);

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

      if (interestedUsers.indexOf(this.userId) == -1) { // no user records
        interestedUsers.push(this.userId)
        petRef.update({
          interestedUsers: interestedUsers
        });

        let toast = this.toastCtrl.create({
          message: 'Interested!',
          duration: 5000,
          position: 'bottom'
        });

        toast.present();
      } else {
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
      let names: any;
      let interestedUser: any[] = res.data()['interestedUsers'];
      let html = "";
      if (interestedUser.length > 0) {
        for (let userId of interestedUser) {
          this.db.collection('users').doc(userId).get().then(user => {
            let name = user.data()['name'];

            html += '- ' + name + '<br>';
          }).catch(err => {
            console.log('err', err);
          })
        }
      } else {
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

  openMessage(pet: object) {
    this.navCtrl.push("ChatSinglePage", pet);
  }

  goToChatList() {
    this.navCtrl.push('ChatListPage');
  }
}
