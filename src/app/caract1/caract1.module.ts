import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Caract1PageRoutingModule } from './caract1-routing.module';

import { Caract1Page } from './caract1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Caract1PageRoutingModule
  ],
  declarations: [Caract1Page]
})
export class Caract1PageModule {}
