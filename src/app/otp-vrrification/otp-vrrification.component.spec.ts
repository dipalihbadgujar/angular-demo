import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtpVrrificationComponent } from './otp-vrrification.component';

describe('OtpVrrificationComponent', () => {
  let component: OtpVrrificationComponent;
  let fixture: ComponentFixture<OtpVrrificationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OtpVrrificationComponent]
    });
    fixture = TestBed.createComponent(OtpVrrificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
