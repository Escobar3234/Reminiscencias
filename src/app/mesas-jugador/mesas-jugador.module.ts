import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MesasJugadorPageRoutingModule } from './mesas-jugador-routing.module';

import { MesasJugadorPage } from './mesas-jugador.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MesasJugadorPageRoutingModule
  ],
  declarations: [MesasJugadorPage]
})
export class MesasJugadorPageModule {}
