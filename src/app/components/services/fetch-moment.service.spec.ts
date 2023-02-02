import { TestBed } from '@angular/core/testing';

import { FetchMomentService } from './fetch-moment.service';

describe('FetchMomentService', () => {
  let service: FetchMomentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchMomentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
