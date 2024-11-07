import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AggmesaPage } from './aggmesa.page';

describe('AggmesaPage', () => {
  let component: AggmesaPage;
  let fixture: ComponentFixture<AggmesaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AggmesaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
