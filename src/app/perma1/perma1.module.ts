import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Perma1PageRoutingModule } from './perma1-routing.module';

import { Perma1Page } from './perma1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Perma1PageRoutingModule
  ],
  declarations: [Perma1Page]
})
export class Perma1PageModule {}
