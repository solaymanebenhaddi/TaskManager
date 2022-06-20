import { TestBed } from '@angular/core/testing';

import { InterseptorServeService } from './interseptor-serve.service';

describe('InterseptorServeService', () => {
  let service: InterseptorServeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InterseptorServeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
