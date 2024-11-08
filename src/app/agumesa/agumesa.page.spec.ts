import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AgumesaPage } from './agumesa.page';

describe('AgumesaPage', () => {
  let component: AgumesaPage;
  let fixture: ComponentFixture<AgumesaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AgumesaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
