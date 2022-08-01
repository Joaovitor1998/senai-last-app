/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { VehicleNewService } from './vehicle-new.service';

describe('Service: VehicleNew', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VehicleNewService]
    });
  });

  it('should ...', inject([VehicleNewService], (service: VehicleNewService) => {
    expect(service).toBeTruthy();
  }));
});
