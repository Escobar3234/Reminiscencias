import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { Stadisticas1PageRoutingModule } from './stadisticas1-routing.module';
import { Stadisticas1Page } from './stadisticas1.page';  // Nombre de la clase corregido

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Stadisticas1PageRoutingModule
  ],
  declarations: [Stadisticas1Page]  // Nombre de la clase corregido
})
export class Stadisticas1PageModule {}  // Nombre del módulo corregido
