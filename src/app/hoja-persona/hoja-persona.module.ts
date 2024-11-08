import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HojaPersonaPageRoutingModule } from './hoja-persona-routing.module';

import { HojaPersonaPage } from './hoja-persona.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HojaPersonaPageRoutingModule
  ],
  declarations: [HojaPersonaPage]
})
export class HojaPersonaPageModule {}
