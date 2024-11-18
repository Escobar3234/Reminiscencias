import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Caract2Page } from './caract2.page';

describe('Caract2Page', () => {
  let component: Caract2Page;
  let fixture: ComponentFixture<Caract2Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Caract2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
