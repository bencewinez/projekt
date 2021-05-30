import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUsageconsumptionreportComponent } from './add-usageconsumptionreport.component';

describe('AddUsageconsumptionreportComponent', () => {
  let component: AddUsageconsumptionreportComponent;
  let fixture: ComponentFixture<AddUsageconsumptionreportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddUsageconsumptionreportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUsageconsumptionreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
