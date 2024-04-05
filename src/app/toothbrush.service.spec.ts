import { TestBed } from '@angular/core/testing';

import { ToothbrushService } from './toothbrush.service';

describe('ToothbrushService', () => {
  let service: ToothbrushService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToothbrushService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
