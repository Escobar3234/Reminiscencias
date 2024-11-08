import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EscojerpPage } from './escojerp.page';

const routes: Routes = [
  {
    path: '',
    component: EscojerpPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EscojerpPageRoutingModule {}
