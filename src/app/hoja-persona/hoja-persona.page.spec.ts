import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HojaPersonaPage } from './hoja-persona.page';

describe('HojaPersonaPage', () => {
  let component: HojaPersonaPage;
  let fixture: ComponentFixture<HojaPersonaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HojaPersonaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
