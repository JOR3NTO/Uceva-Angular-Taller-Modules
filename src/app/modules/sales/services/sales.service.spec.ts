import { TestBed } from '@angular/core/testing';
import { SalesService } from './sales.service';
import { SALES } from '../../../core/config/sales.config';

describe('SalesService', () => {
  let service: SalesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SalesService);
  });

  it('deberia crearse correctamente', () => {
    expect(service).toBeTruthy();
  });

  it('getAllSales deberia retornar un observable con las ventas', (done) => {
    service.getAllSales().subscribe((sales) => {
      expect(sales).toEqual(SALES);
      expect(sales.length).toBe(SALES.length);
      done();
    });
  });
});
