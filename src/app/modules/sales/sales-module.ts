import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared-module';
import { TableSalesComponent } from './components/table-sales/table-sales.component';
import { SalesRoutingModule } from './sales-routing-module';
import { ListSalesComponent } from './pages/list-sales/list-sales.component';
import { SalesComponent } from './sales.component';

@NgModule({
  declarations: [
    TableSalesComponent,
    ListSalesComponent,
    SalesComponent,
  ],
  imports: [
    CommonModule,
    SalesRoutingModule,
    SharedModule,
  ]
})
export class SalesModule { }
