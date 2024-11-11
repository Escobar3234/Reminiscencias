import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Stadisticas2PageRoutingModule } from './stadisticas2-routing.module';

import { Stadisticas2Page } from './stadisticas2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Stadisticas2PageRoutingModule
  ],
  declarations: [Stadisticas2Page]
})
export class Stadisticas2PageModule {}
