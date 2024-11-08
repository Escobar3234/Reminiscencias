import { ComponentFixture, TestBed } from '@angular/core/testing';
import { stadisticasPage } from './stadisticas.page';


describe('StadisticasPage', () => {
  let component: stadisticasPage;
  let fixture: ComponentFixture<stadisticasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(stadisticasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
