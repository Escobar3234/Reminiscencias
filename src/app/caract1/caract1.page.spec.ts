import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Caract1Page } from './caract1.page';

describe('Caract1Page', () => {
  let component: Caract1Page;
  let fixture: ComponentFixture<Caract1Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Caract1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
