import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Perma1Page } from './perma1.page';

const routes: Routes = [
  {
    path: '',
    component: Perma1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Perma1PageRoutingModule {}
