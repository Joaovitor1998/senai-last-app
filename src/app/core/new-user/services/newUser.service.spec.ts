/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { NewUserService } from './newUser.service';

describe('Service: NewUser', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NewUserService]
    });
  });

  it('should ...', inject([NewUserService], (service: NewUserService) => {
    expect(service).toBeTruthy();
  }));
});
