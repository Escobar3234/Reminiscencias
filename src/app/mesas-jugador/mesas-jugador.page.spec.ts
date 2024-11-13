import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MesasJugadorPage } from './mesas-jugador.page';

describe('MesasJugadorPage', () => {
  let component: MesasJugadorPage;
  let fixture: ComponentFixture<MesasJugadorPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MesasJugadorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
