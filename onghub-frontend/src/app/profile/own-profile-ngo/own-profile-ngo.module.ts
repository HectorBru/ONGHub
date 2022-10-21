import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OwnProfileNgoPageRoutingModule } from './own-profile-ngo-routing.module';

import { OwnProfileNgoPage } from './own-profile-ngo.page';
import { UserInformationComponent } from './user-information/user-information.component';
import { PostsComponent } from './posts/posts.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OwnProfileNgoPageRoutingModule,
  ],
  declarations: [OwnProfileNgoPage, UserInformationComponent, PostsComponent],
})
export class OwnProfileNgoPageModule {}
