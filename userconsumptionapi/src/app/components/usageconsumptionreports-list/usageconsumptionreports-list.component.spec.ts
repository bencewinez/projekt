import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsageconsumptionreportsListComponent } from './usageconsumptionreports-list.component';

describe('UsageconsumptionreportsListComponent', () => {
  let component: UsageconsumptionreportsListComponent;
  let fixture: ComponentFixture<UsageconsumptionreportsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsageconsumptionreportsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsageconsumptionreportsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
