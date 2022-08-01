/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { VehicleDataService } from './vehicle-data.service';

describe('Service: VehicleData', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VehicleDataService]
    });
  });

  it('should ...', inject([VehicleDataService], (service: VehicleDataService) => {
    expect(service).toBeTruthy();
  }));
});
