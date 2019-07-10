import { TestBed } from '@angular/core/testing';

import { ConversionCalculatorServiceService } from './conversion-calculator-service.service';

describe('ConversionCalculatorServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConversionCalculatorServiceService = TestBed.get(ConversionCalculatorServiceService);
    expect(service).toBeTruthy();
  });
});
