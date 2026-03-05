import { TestBed } from '@angular/core/testing';
import { SUPPLIERS } from '../../../core/config/suppliers.config';

import { SuppliersService } from './suppliers.service';

describe('SuppliersService', () => {
  let service: SuppliersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SuppliersService);
  });

  it('deberia crearse correctamente', () => {
    expect(service).toBeTruthy();
  });

  it('getAllSuppliers deberia retornar un observable con los proveedores', (done) => {
    service.getAllSuppliers().subscribe((suppliers) => {
      expect(suppliers).toEqual(SUPPLIERS);
      expect(suppliers.length).toBe(SUPPLIERS.length);
      done();
    });
  });
});
