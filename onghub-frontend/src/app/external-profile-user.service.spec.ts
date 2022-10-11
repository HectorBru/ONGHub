import { TestBed } from '@angular/core/testing';

import { ExternalProfileUserService } from './external-profile-user.service';

describe('ExternalProfileUserService', () => {
  let service: ExternalProfileUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExternalProfileUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
