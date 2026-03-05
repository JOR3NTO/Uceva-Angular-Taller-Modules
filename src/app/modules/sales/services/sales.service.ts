import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Sale } from '../interfaces/sales.interface';
import { SALES } from '../../../core/config/sales.config';
@Injectable({
  providedIn: 'root',
})
export class SalesService {

  getAllSales(): Observable<Sale[]> {
    return of(SALES);
  }

}
