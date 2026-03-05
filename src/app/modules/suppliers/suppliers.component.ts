import { Component } from '@angular/core';

/**
 * Componente contenedor (shell) del modulo de proveedores.
 *
 * Expone un `router-outlet` para renderizar las vistas hijas
 * definidas en `SuppliersRoutingModule`.
 */
@Component({
  selector: 'app-suppliers.component',
  template: `<router-outlet></router-outlet>`,
  standalone: false,
})
export class SuppliersComponent { }
