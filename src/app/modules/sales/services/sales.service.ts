import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Sale } from '../interfaces/sales.interface';
import { SALES } from '../../../core/config/sales.config';

/**
 * Servicio de datos para el módulo de ventas.
 *
 * @remarks
 * Centraliza la obtención del catálogo de ventas para
 * desacoplar la fuente de datos de los componentes.
 */
@Injectable({
  providedIn: 'root',
})
export class SalesService {
  /**
   * Retorna todas las ventas disponibles.
   *
   * @returns Flujo observable con el arreglo de ventas.
   */
  getAllSales(): Observable<Sale[]> {
    return of(SALES);
  }
}
