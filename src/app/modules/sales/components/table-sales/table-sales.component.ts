import { Component, Input } from '@angular/core';
import { Sale } from '../../interfaces/sales.interface';

/**
 * Componente de presentación para mostrar ventas en una tabla.
 *
 * @remarks
 * Recibe la colección desde el componente contenedor y aplica
 * el mapeo visual de estado para el componente `app-badge`.
 */
@Component({
  selector: 'app-table-sales',
  standalone: false,
  templateUrl: './table-sales.component.html',
})
export class TableSalesComponent {
  /**
   * Ventas a renderizar en la tabla.
   */
  @Input() sales: Sale[] = [];

  /**
   * Mapeo de estado de venta a tipo visual de badge.
   */
  statusMap: Record<string, 'success' | 'warning' | 'danger' | 'secondary'> = {
    Completada: 'success',
    Pendiente: 'warning',
    Cancelada: 'danger',
  };
}
