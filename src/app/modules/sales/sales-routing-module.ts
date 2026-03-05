import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListSalesComponent } from './pages/list-sales/list-sales.component';

/**
 * Rutas internas del módulo de ventas.
 *
 * @remarks
 * Define la vista principal de listado y una redirección
 * por defecto para rutas no reconocidas dentro del módulo.
 */
const routes: Routes = [
  {
    path: 'list-sales',
    component: ListSalesComponent
  },
  {
    path: '**',
    redirectTo: 'list-sales'
  }
];

/**
 * Módulo de enrutamiento del feature `sales`.
 *
 * @remarks
 * Registra las rutas hijas con `RouterModule.forChild(...)`
 * para mantener encapsulada la navegación del módulo.
 */

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalesRoutingModule { }
