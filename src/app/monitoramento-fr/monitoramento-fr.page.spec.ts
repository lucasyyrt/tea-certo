import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MonitoramentoFrPage } from './monitoramento-fr.page';

describe('MonitoramentoFrPage', () => {
  let component: MonitoramentoFrPage;
  let fixture: ComponentFixture<MonitoramentoFrPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MonitoramentoFrPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
