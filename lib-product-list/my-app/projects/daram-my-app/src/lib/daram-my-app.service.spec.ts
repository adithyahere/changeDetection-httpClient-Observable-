import { TestBed } from '@angular/core/testing';

import { DaramMyAppService } from './daram-my-app.service';

describe('DaramMyAppService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DaramMyAppService = TestBed.get(DaramMyAppService);
    expect(service).toBeTruthy();
  });
});
