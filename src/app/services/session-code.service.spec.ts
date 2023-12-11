import { TestBed } from '@angular/core/testing';

import { SessionCodeService } from './session-code.service';

describe('SessionCodeService', () => {
  let service: SessionCodeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SessionCodeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
