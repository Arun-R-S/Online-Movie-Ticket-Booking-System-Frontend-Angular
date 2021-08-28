import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoldTicketsComponent } from './sold-tickets.component';

describe('SoldTicketsComponent', () => {
  let component: SoldTicketsComponent;
  let fixture: ComponentFixture<SoldTicketsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoldTicketsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SoldTicketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
