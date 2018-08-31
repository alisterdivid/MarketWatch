import { TestBed, inject } from '@angular/core/testing';

import { NoAccessService } from './no-access.service';

describe('NoAccessService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NoAccessService]
    });
  });

  it('should be created', inject([NoAccessService], (service: NoAccessService) => {
    expect(service).toBeTruthy();
  }));
});
