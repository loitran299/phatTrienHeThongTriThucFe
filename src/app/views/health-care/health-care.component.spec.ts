import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthCareComponent } from './health-care.component';

describe('HealthCareComponent', () => {
  let component: HealthCareComponent;
  let fixture: ComponentFixture<HealthCareComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HealthCareComponent]
    });
    fixture = TestBed.createComponent(HealthCareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
