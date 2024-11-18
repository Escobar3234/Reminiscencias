import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgrusmePage } from './agrusme.page';

const routes: Routes = [
  {
    path: '',
    component: AgrusmePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgrusmePageRoutingModule {}
