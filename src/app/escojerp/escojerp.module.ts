import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EscojerpPageRoutingModule } from './escojerp-routing.module';

import { EscojerpPage } from './escojerp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EscojerpPageRoutingModule
  ],
  declarations: [EscojerpPage]
})
export class EscojerpPageModule {}
