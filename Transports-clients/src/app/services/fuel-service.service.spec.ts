import { TestBed } from '@angular/core/testing';

import { FuelServiceService } from './fuel-service.service';

describe('FuelServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FuelServiceService = TestBed.get(FuelServiceService);
    expect(service).toBeTruthy();
  });
});
