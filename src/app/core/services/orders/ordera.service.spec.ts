import { TestBed } from '@angular/core/testing';

import { OrderaService } from './ordera.service';

describe('OrderaService', () => {
  let service: OrderaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrderaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
