import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Stadisticas1Page } from './stadisticas1.page';

const routes: Routes = [
  {
    path: '',
    component: Stadisticas1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Stadisticas1PageRoutingModule {}
