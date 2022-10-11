import { TestBed } from '@angular/core/testing';

import { OwnProfileUserService } from './own-profile-user.service';

describe('OwnProfileUserService', () => {
  let service: OwnProfileUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OwnProfileUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
