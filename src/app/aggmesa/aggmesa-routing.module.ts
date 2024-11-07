import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AggmesaPage } from './aggmesa.page';

const routes: Routes = [
  {
    path: '',
    component: AggmesaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AggmesaPageRoutingModule {}
