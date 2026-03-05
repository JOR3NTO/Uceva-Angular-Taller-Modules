import { Component, inject } from '@angular/core';
import { Sale } from '../../interfaces/sales.interface';
import { SalesService } from '../../services/sales.service';

/**
 * Componente contenedor de ventas.
 *
 * @remarks
 * Se encarga de obtener las ventas desde `SalesService`,
 * mantener el estado de filtro y enviar la colección a
 * `TableSalesComponent` para su renderización.
 */
@Component({
  selector: 'app-list-sales.component',
  template: '<app-table-sales [sales]="filteredSales"></app-table-sales>',
  standalone: false,
})
export class ListSalesComponent {
  /**
   * Listado completo de ventas obtenido del servicio.
   */
  sales: Sale[] = [];

  /**
   * Estado seleccionado para filtrar resultados.
   *
   * @defaultValue `'Todos'`
   */
  selectedStatus: string = 'Todos';

  /**
   * Servicio de ventas inyectado.
   */
  private salesService = inject(SalesService);

  /**
   * Inicializa el componente y carga ventas.
   */
  ngOnInit(): void {
    this.salesService.getAllSales().subscribe({
      next: (sales) => (this.sales = sales),
      error: (error) => console.error(error),
    });
  }

  /**
   * Retorna ventas filtradas por estado.
   *
   * @returns Colección final a visualizar en la tabla.
   */
  get filteredSales(): Sale[] {
    if (this.selectedStatus === 'Todos') return this.sales;
    return this.sales.filter((sale) => sale.status === this.selectedStatus);
  }
}
