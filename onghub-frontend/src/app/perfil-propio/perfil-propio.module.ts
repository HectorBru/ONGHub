import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfilPropioPageRoutingModule } from './perfil-propio-routing.module';

import { PerfilPropioPage } from './perfil-propio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfilPropioPageRoutingModule
  ],
  declarations: [PerfilPropioPage]
})
export class PerfilPropioPageModule {}
