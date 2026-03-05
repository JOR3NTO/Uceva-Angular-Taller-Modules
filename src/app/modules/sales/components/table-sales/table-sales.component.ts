import { Component, Input } from '@angular/core';
import { Sale } from '../../interfaces/sales.interface';

@Component({
  selector: 'app-table-sales',
  standalone: false,
  templateUrl: './table-sales.component.html',
  })
export class TableSalesComponent {

  @Input() sales: Sale[] = [];

  statusMap: Record<string, 'success' | 'warning' | 'danger' | 'secondary'> = {
    Completada: 'success',
    Pendiente: 'warning',
    Cancelada: 'danger'
  };


}
