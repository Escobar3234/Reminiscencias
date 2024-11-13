import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Caract2Page } from './caract2.page';

const routes: Routes = [
  {
    path: '',
    component: Caract2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Caract2PageRoutingModule {}
