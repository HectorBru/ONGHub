import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TagsAndODSPageRoutingModule } from './tags-and-ods-routing.module';

import { TagsAndODSPage } from './tags-and-ods.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TagsAndODSPageRoutingModule,
  ],
  declarations: [TagsAndODSPage],
})
export class TagsAndODSPageModule {}
