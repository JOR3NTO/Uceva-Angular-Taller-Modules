import { Component, inject} from '@angular/core';
import { Supplier } from '../interfaces/suppliers.interface';
import { SuppliersService } from '../services/suppliers.service';

/**
 * Componente contenedor del listado de proveedores.
 *
 * Este componente consulta `SuppliersService` y entrega
 * los datos al componente de tabla para su renderizado.
 */
@Component({
  selector: 'app-list-suppliers.component',
  standalone: false,
  template: '<app-table-suppliers [supplier]="suppliers" ></app-table-suppliers>'
})
export class ListSuppliersComponent {
  /** Listado de proveedores mostrado en la vista. */
  suppliers: Supplier[] = [];

  /** Servicio de acceso a datos de proveedores. */
  private suppliersService = inject(SuppliersService);

  /**
   * Carga los proveedores al inicializar el componente.
   */
  ngOnInit(): void {
    this.suppliersService.getAllSuppliers().subscribe({
      next: (suppliers) => this.suppliers = suppliers,
      error: (error) => console.error(error),
    })
  }
}
