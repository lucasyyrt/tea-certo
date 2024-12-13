import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MonitoramentoFpPageRoutingModule } from './monitoramento-fp-routing.module';

import { MonitoramentoFpPage } from './monitoramento-fp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MonitoramentoFpPageRoutingModule
  ],
  declarations: [MonitoramentoFpPage]
})
export class MonitoramentoFpPageModule {}
