import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreatePostNgoPageRoutingModule } from './create-post-ngo-routing.module';

import { CreatePostNgoPage } from './create-post-ngo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreatePostNgoPageRoutingModule,
  ],
  declarations: [CreatePostNgoPage],
})
export class CreatePostNgoPageModule {}
