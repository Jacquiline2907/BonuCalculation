import { TestBed } from '@angular/core/testing';

import { PercentageConnService } from './percentage-conn.service';

describe('PercentageConnService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PercentageConnService = TestBed.get(PercentageConnService);
    expect(service).toBeTruthy();
  });
});
