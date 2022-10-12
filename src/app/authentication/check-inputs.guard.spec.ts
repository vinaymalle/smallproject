import { TestBed } from '@angular/core/testing';

import { CheckInputsGuard } from './check-inputs.guard';

describe('CheckInputsGuard', () => {
  let guard: CheckInputsGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CheckInputsGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
