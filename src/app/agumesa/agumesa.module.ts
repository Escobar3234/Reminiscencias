import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgumesaPageRoutingModule } from './agumesa-routing.module';

import { AgumesaPage } from './agumesa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgumesaPageRoutingModule
  ],
  declarations: [AgumesaPage]
})
export class AgumesaPageModule {}
