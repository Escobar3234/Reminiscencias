import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EscojerpPage } from './escojerp.page';

describe('EscojerpPage', () => {
  let component: EscojerpPage;
  let fixture: ComponentFixture<EscojerpPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EscojerpPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
