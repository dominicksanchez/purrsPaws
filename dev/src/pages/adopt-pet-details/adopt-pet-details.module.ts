import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdoptPetDetailsPage } from './adopt-pet-details';

@NgModule({
  declarations: [
    AdoptPetDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(AdoptPetDetailsPage),
  ],
})
export class AdoptPetDetailsPageModule {}
