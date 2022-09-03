import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistroOngPageRoutingModule } from './registro-ong-routing.module';

import { RegistroOngPage } from './registro-ong.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistroOngPageRoutingModule
  ],
  declarations: [RegistroOngPage]
})
export class RegistroOngPageModule {}
