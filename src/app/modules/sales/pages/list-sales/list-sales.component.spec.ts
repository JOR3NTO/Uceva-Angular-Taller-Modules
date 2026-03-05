import { TestBed } from '@angular/core/testing';

import { ListSalesComponent } from './list-sales.component';

describe('ListSalesComponent', () => {
  let service: ListSalesComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListSalesComponent);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
