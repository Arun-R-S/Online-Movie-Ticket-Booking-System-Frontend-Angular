import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTheatreAdminRequestComponent } from './view-theatre-admin-request.component';

describe('ViewTheatreAdminRequestComponent', () => {
  let component: ViewTheatreAdminRequestComponent;
  let fixture: ComponentFixture<ViewTheatreAdminRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewTheatreAdminRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewTheatreAdminRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
