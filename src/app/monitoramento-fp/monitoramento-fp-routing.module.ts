import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MonitoramentoFpPage } from './monitoramento-fp.page';

const routes: Routes = [
  {
    path: '',
    component: MonitoramentoFpPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MonitoramentoFpPageRoutingModule {}
