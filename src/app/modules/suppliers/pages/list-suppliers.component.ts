import { Component, inject} from '@angular/core';
import { Supplier } from '../interfaces/suppliers.interface';
import { SuppliersService } from '../services/suppliers.service';


@Component({
  selector: 'app-list-suppliers.component',
  standalone: false,
  template: '<app-table-suppliers [supplier]="suppliers" ></app-table-suppliers>'
})
export class ListSuppliersComponent {
  suppliers: Supplier[] = [];

  private suppliersService = inject(SuppliersService);


  ngOnInit(): void {
    this.suppliersService.getAllSuppliers().subscribe({
      next: (suppliers) => this.suppliers = suppliers,
      error: (error) => console.error(error),
    })
  }




}
