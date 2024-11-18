import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MesasJugadorPage } from './mesas-jugador.page';

const routes: Routes = [
  {
    path: '',
    component: MesasJugadorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MesasJugadorPageRoutingModule {}
