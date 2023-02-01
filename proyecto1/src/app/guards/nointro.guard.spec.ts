import { TestBed } from '@angular/core/testing';

import { NointroGuard } from './nointro.guard';

describe('NointroGuard', () => {
  let guard: NointroGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(NointroGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
