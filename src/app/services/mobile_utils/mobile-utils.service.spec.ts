import { TestBed } from '@angular/core/testing';

import { MobileUtilsService } from './mobile-utils.service';

describe('MobileUtilsService', () => {
  let service: MobileUtilsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MobileUtilsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
