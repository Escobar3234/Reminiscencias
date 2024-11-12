import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DebilidadesPageRoutingModule } from './debilidades-routing.module';

import { DebilidadesPage } from './debilidades.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DebilidadesPageRoutingModule
  ],
  declarations: [DebilidadesPage]
})
export class DebilidadesPageModule {}
