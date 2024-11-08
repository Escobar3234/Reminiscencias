import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { stadisticasPage } from './stadisticas.page';

const routes: Routes = [
  {
    path: '',
    component: stadisticasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StadisticasPageRoutingModule {}
