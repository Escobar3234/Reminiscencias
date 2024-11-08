import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Stadisticas1Page } from './stadisticas1.page';

describe('Stadisticas1Page', () => {
  let component: Stadisticas1Page;
  let fixture: ComponentFixture<Stadisticas1Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Stadisticas1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
