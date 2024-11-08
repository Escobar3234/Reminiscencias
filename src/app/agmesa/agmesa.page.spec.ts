import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AgmesaPage } from './agmesa.page';

describe('AgmesaPage', () => {
  let component: AgmesaPage;
  let fixture: ComponentFixture<AgmesaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AgmesaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
