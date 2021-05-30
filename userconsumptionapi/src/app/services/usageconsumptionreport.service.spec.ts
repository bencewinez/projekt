import { TestBed } from '@angular/core/testing';

import { UsageconsumptionreportService } from './usageconsumptionreport.service';

describe('UsageconsumptionreportService', () => {
  let service: UsageconsumptionreportService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsageconsumptionreportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
