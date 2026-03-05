import { Component, Input } from '@angular/core';
import { Supplier } from '../../interfaces/suppliers.interface';

@Component({
  selector: 'app-table-suppliers',
  standalone: false,
  templateUrl: './table-suppliers.html',
})
export class TableSuppliers {

  @Input() supplier: Supplier[] = [];

}
