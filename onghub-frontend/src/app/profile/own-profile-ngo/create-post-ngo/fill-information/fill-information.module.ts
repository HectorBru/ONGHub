import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FillInformationPageRoutingModule } from './fill-information-routing.module';

import { FillInformationPage } from './fill-information.page';
import { TagsAndODSPage } from '../tags-and-ods/tags-and-ods.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FillInformationPageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [FillInformationPage],
})
export class FillInformationPageModule {}
