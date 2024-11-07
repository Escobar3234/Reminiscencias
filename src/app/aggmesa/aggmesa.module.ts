import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AggmesaPageRoutingModule } from './aggmesa-routing.module';

import { AggmesaPage } from './aggmesa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AggmesaPageRoutingModule
  ],
  declarations: [AggmesaPage]
})
export class AggmesaPageModule {}
