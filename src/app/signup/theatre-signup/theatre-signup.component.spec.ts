import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheatreSignupComponent } from './theatre-signup.component';

describe('TheatreSignupComponent', () => {
  let component: TheatreSignupComponent;
  let fixture: ComponentFixture<TheatreSignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TheatreSignupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TheatreSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
