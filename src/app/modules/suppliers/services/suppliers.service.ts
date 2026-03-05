import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SUPPLIERS } from '../../../core/config/suppliers.config';
import { Supplier } from '../interfaces/suppliers.interface';

/**
 * Servicio para gestionar proveedores.
 *
 * Se encarga de exponer metodos de lectura de proveedores
 * consumidos por los componentes de presentacion.
 */
@Injectable({
  providedIn: 'root',
})
export class SuppliersService {
  /**
   * Obtiene todos los proveedores disponibles.
   *
   * @returns Observable con el listado de proveedores (`Supplier[]`).
   */
  getAllSuppliers(): Observable<Supplier[]> {
    return of(SUPPLIERS);
  }
}
