import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExternalProfilePageRoutingModule } from './external-profile-routing.module';

import { ExternalProfilePage } from './external-profile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExternalProfilePageRoutingModule,
  ],
  declarations: [ExternalProfilePage],
})
export class ExternalProfilePageModule {}
