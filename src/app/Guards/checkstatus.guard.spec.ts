import { TestBed } from '@angular/core/testing';

import { CheckstatusGuard } from './checkstatus.guard';

describe('CheckstatusGuard', () => {
  let guard: CheckstatusGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CheckstatusGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
