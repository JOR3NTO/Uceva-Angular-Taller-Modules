import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuppliersRoutingModule } from './suppliers-routing-module';
import { TableSuppliers } from './components/table-suppliers/table-suppliers';
import { SuppliersComponent } from './suppliers.component';
import { ListSuppliersComponent } from './pages/list-suppliers.component';
import { SharedModule } from '../shared/shared-module';


@NgModule({
  declarations: [
    TableSuppliers,
    SuppliersComponent,
    ListSuppliersComponent
  ],
  imports: [
    CommonModule,
    SuppliersRoutingModule,
    SharedModule
  ]
})
export class SuppliersModule { }
