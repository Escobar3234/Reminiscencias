import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HojaPersonaPage } from './hoja-persona.page';

const routes: Routes = [
  {
    path: '',
    component: HojaPersonaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HojaPersonaPageRoutingModule {}
