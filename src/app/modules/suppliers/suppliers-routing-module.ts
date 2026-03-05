import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListSuppliersComponent } from './pages/list-suppliers.component';

/**
 * Definicion de rutas del modulo de proveedores.
 */
const routes: Routes = [
  {
    path: 'list-suppliers',
    component: ListSuppliersComponent
  },
  {
    path: '**',
    redirectTo: 'list-suppliers'
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
/**
 * Modulo de enrutamiento para `SuppliersModule`.
 */
export class SuppliersRoutingModule { }
