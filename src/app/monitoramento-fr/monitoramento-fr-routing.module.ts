import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MonitoramentoFrPage } from './monitoramento-fr.page';

const routes: Routes = [
  {
    path: '',
    component: MonitoramentoFrPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MonitoramentoFrPageRoutingModule {}
