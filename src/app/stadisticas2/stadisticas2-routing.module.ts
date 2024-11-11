import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Stadisticas2Page } from './stadisticas2.page';

const routes: Routes = [
  {
    path: '',
    component: Stadisticas2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Stadisticas2PageRoutingModule {}
