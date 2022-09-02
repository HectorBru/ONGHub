import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UsuarioPagePageRoutingModule } from './usuario-page-routing.module';

import { UsuarioPagePage } from './usuario-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UsuarioPagePageRoutingModule
  ],
  declarations: [UsuarioPagePage]
})
export class UsuarioPagePageModule {}
