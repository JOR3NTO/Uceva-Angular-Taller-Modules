import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListCountriesComponent } from './pages/list-countries.component/list-countries.component';

/**
 * Definicion de rutas del modulo de paises.
 */
const routes: Routes = [
  {
    path: 'list-countries',
    component: ListCountriesComponent
  },
  {
    path: '**',
    redirectTo: 'list-countries'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
/**
 * Modulo de enrutamiento para `CountriesModule`.
 */
export class CountriesRoutingModule { }
