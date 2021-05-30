import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsageconsumptionreportDetailsComponent } from './usageconsumptionreport-details.component';

describe('UsageconsumptionreportDetailsComponent', () => {
  let component: UsageconsumptionreportDetailsComponent;
  let fixture: ComponentFixture<UsageconsumptionreportDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsageconsumptionreportDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsageconsumptionreportDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
