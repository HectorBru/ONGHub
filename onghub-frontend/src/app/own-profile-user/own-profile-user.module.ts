import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OwnProfileUserPageRoutingModule } from './own-profile-user-routing.module';

import { OwnProfileUserPage } from './own-profile-user.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OwnProfileUserPageRoutingModule
  ],
  declarations: [OwnProfileUserPage]
})
export class OwnProfileUserPageModule {}
