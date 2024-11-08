import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgmesaPageRoutingModule } from './agmesa-routing.module';

import { AgmesaPage } from './agmesa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgmesaPageRoutingModule
  ],
  declarations: [AgmesaPage]
})
export class AgmesaPageModule {}
