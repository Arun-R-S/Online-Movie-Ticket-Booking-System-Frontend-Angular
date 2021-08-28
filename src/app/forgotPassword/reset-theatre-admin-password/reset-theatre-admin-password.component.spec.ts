import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetTheatreAdminPasswordComponent } from './reset-theatre-admin-password.component';

describe('ResetTheatreAdminPasswordComponent', () => {
  let component: ResetTheatreAdminPasswordComponent;
  let fixture: ComponentFixture<ResetTheatreAdminPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResetTheatreAdminPasswordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResetTheatreAdminPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
