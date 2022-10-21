import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExternalProfileNgoPageRoutingModule } from './external-profile-ngo-routing.module';

import { ExternalProfileNgoPage } from './external-profile-ngo.page';
import { UserInformationComponent } from './user-information/user-information.component';
import { PostsComponent } from './posts/posts.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExternalProfileNgoPageRoutingModule,
  ],
  declarations: [
    ExternalProfileNgoPage,
    UserInformationComponent,
    PostsComponent,
  ],
})
export class ExternalProfileNgoPageModule {}
