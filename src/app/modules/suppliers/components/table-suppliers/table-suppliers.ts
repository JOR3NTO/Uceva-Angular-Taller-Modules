import { Component, Input } from '@angular/core';
import { Supplier } from '../../interfaces/suppliers.interface';

/**
 * Tabla de proveedores.
 *
 * Componente de presentacion encargado de mostrar
 * el listado de proveedores en formato tabular.
 */
@Component({
  selector: 'app-table-suppliers',
  standalone: false,
  templateUrl: './table-suppliers.html',
})
export class TableSuppliers {
  /**
   * Proveedores recibidos desde el componente padre.
   */
  @Input() supplier: Supplier[] = [];
}
