import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NgoRegisterPageRoutingModule } from './ngo-register-routing.module';

import { NgoRegisterPage } from './ngo-register.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NgoRegisterPageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [NgoRegisterPage],
})
export class NgoRegisterPageModule {}
