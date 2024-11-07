import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Perma1Page } from './perma1.page';

describe('Perma1Page', () => {
  let component: Perma1Page;
  let fixture: ComponentFixture<Perma1Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Perma1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
