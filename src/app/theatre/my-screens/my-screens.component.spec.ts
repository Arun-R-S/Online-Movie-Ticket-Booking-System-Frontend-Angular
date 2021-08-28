import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyScreensComponent } from './my-screens.component';

describe('MyScreensComponent', () => {
  let component: MyScreensComponent;
  let fixture: ComponentFixture<MyScreensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyScreensComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyScreensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
