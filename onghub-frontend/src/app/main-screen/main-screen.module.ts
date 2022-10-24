import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MainScreenPageRoutingModule } from './main-screen-routing.module';

import { MainScreenPage } from './main-screen.page';
import { TimelinePage } from './timeline/timeline.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MainScreenPageRoutingModule,
  ],
  declarations: [MainScreenPage, TimelinePage],
  exports: [MainScreenPage],
})
export class MainScreenPageModule {}
