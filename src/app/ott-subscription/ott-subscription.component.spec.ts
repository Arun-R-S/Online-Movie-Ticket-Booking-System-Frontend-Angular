import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OttSubscriptionComponent } from './ott-subscription.component';

describe('OttSubscriptionComponent', () => {
  let component: OttSubscriptionComponent;
  let fixture: ComponentFixture<OttSubscriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OttSubscriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OttSubscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
