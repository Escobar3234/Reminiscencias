import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgmesaPage } from './agmesa.page';

const routes: Routes = [
  {
    path: '',
    component: AgmesaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgmesaPageRoutingModule {}
