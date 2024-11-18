import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AgrusmePage } from './agrusme.page';

describe('AgrusmePage', () => {
  let component: AgrusmePage;
  let fixture: ComponentFixture<AgrusmePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AgrusmePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
