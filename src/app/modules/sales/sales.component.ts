import { Component } from '@angular/core';

/**
 * Componente contenedor del módulo de ventas.
 *
 * @remarks
 * Este componente actúa como layout base del módulo `SalesModule`
 * y renderiza las vistas hijas definidas en `SalesRoutingModule`
 * mediante `<router-outlet>`.
 *
 * @example
 * ```html
 * <app-sales></app-sales>
 * ```
 */

@Component({
  selector: 'app-sales',
  template: `<router-outlet></router-outlet>`,
  standalone: false,
})
export class SalesComponent {}
