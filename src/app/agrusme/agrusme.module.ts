import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgrusmePageRoutingModule } from './agrusme-routing.module';

import { AgrusmePage } from './agrusme.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgrusmePageRoutingModule
  ],
  declarations: [AgrusmePage]
})
export class AgrusmePageModule {}
