import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgumesaPage } from './agumesa.page';

const routes: Routes = [
  {
    path: '',
    component: AgumesaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgumesaPageRoutingModule {}
