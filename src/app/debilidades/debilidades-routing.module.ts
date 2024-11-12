import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DebilidadesPage } from './debilidades.page';

const routes: Routes = [
  {
    path: '',
    component: DebilidadesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DebilidadesPageRoutingModule {}
