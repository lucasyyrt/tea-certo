import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MonitoramentoFpPage } from './monitoramento-fp.page';

describe('MonitoramentoFpPage', () => {
  let component: MonitoramentoFpPage;
  let fixture: ComponentFixture<MonitoramentoFpPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MonitoramentoFpPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
