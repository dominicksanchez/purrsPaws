import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditAdoptPetPage } from './edit-adopt-pet';

@NgModule({
  declarations: [
    EditAdoptPetPage,
  ],
  imports: [
    IonicPageModule.forChild(EditAdoptPetPage),
  ],
})
export class EditAdoptPetPageModule {}
