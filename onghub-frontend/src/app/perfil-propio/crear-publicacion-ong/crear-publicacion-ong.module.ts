import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrearPublicacionOngPageRoutingModule } from './crear-publicacion-ong-routing.module';

import { CrearPublicacionOngPage } from './crear-publicacion-ong.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrearPublicacionOngPageRoutingModule
  ],
  declarations: [CrearPublicacionOngPage]
})
export class CrearPublicacionOngPageModule {}
