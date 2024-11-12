import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DebilidadesPage } from './debilidades.page';

describe('DebilidadesPage', () => {
  let component: DebilidadesPage;
  let fixture: ComponentFixture<DebilidadesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DebilidadesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
