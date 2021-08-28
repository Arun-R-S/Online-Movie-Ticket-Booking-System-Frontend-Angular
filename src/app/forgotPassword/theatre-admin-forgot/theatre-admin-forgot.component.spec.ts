import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheatreAdminForgotComponent } from './theatre-admin-forgot.component';

describe('TheatreAdminForgotComponent', () => {
  let component: TheatreAdminForgotComponent;
  let fixture: ComponentFixture<TheatreAdminForgotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TheatreAdminForgotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TheatreAdminForgotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
