import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdoptionPage } from './adoption';
import { ChatNotifFabPageModule } from '../chat-notif-fab/chat-notif-fab.module';

@NgModule({
  declarations: [
    AdoptionPage,
  ],
  imports: [
    IonicPageModule.forChild(AdoptionPage),
    ChatNotifFabPageModule
  ],
})
export class AdoptionPageModule {}
