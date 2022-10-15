import { TestBed } from '@angular/core/testing';

import { AkumasService } from './akumas.service';

describe('AkumasService', () => {
  let service: AkumasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AkumasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
