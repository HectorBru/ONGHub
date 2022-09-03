import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PantallaInicialPageRoutingModule } from './pantalla-inicial-routing.module';

import { PantallaInicialPage } from './pantalla-inicial.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PantallaInicialPageRoutingModule
  ],
  declarations: [PantallaInicialPage]
})
export class PantallaInicialPageModule {}
