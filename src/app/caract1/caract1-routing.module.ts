import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Caract1Page } from './caract1.page';

const routes: Routes = [
  {
    path: '',
    component: Caract1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Caract1PageRoutingModule {}
