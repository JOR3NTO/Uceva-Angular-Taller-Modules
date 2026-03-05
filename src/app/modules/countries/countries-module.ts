import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CountriesRoutingModule } from './countries-routing-module';
import { CountriesComponent } from './countries.component';
import { ListCountriesComponent } from './pages/list-countries.component/list-countries.component';
import { TableCountriesComponent } from './components/table-countries.component/table-countries.component';
import { SharedModule } from '../shared/shared-module';


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
export class CountriesModule { }
