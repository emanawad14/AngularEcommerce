import { TestBed } from '@angular/core/testing';

import { ProductrouteService } from './productroute.service';

describe('ProductrouteService', () => {
  let service: ProductrouteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductrouteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
