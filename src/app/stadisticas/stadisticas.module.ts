import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StadisticasPageRoutingModule } from './stadisticas-routing.module';

import { stadisticasPage } from './stadisticas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StadisticasPageRoutingModule
  ],
  declarations: [stadisticasPage]
})
export class StadisticasPageModule {}
