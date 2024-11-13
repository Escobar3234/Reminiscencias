import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Caract2PageRoutingModule } from './caract2-routing.module';

import { Caract2Page } from './caract2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Caract2PageRoutingModule
  ],
  declarations: [Caract2Page]
})
export class Caract2PageModule {}
