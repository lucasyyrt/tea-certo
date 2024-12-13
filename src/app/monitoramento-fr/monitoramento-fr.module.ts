import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MonitoramentoFrPageRoutingModule } from './monitoramento-fr-routing.module';

import { MonitoramentoFrPage } from './monitoramento-fr.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MonitoramentoFrPageRoutingModule
  ],
  declarations: [MonitoramentoFrPage]
})
export class MonitoramentoFrPageModule {}
