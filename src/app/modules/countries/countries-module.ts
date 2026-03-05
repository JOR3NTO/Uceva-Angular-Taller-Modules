import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CountriesRoutingModule } from './countries-routing-module';
import { CountriesComponent } from './countries.component';
import { ListCountriesComponent } from './pages/list-countries.component/list-countries.component';
import { TableCountriesComponent } from './components/table-countries.component/table-countries.component';
import { SharedModule } from '../shared/shared-module';

/**
 * Modulo de paises.
 *
 * Agrupa componentes, rutas y dependencias necesarias
 * para la funcionalidad de consulta y visualizacion de paises.
 */
@NgModule({
  declarations: [
    ListCountriesComponent,
    TableCountriesComponent,
    CountriesComponent
  ],
  imports: [
    CommonModule,
    CountriesRoutingModule,
    SharedModule
  ]
})
/**
 * Modulo principal de la funcionalidad `countries`.
 */
export class CountriesModule { }
