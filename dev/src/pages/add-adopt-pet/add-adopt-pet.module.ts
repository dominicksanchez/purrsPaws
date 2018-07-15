import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddAdoptPetPage } from './add-adopt-pet';

@NgModule({
  declarations: [
    AddAdoptPetPage,
  ],
  imports: [
    IonicPageModule.forChild(AddAdoptPetPage),
  ],
})
export class AddAdoptPetPageModule {}
