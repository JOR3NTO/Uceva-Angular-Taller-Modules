import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SUPPLIERS } from '../../../core/config/suppliers.config';
import { Supplier } from '../interfaces/suppliers.interface';

@Injectable({
  providedIn: 'root',
})
export class SuppliersService {
  getAllSuppliers(): Observable<Supplier[]> {
    return of(SUPPLIERS);
  }
}
