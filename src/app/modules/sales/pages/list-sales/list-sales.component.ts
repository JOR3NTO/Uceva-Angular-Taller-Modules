import { Component, inject } from '@angular/core';
import { Sale } from '../../interfaces/sales.interface';
import { SalesService } from '../../services/sales.service';

@Component({
  selector: 'app-list-sales.component',
  template: '<app-table-sales [sales]="sales"></app-table-sales>',
  standalone: false,
})
export class ListSalesComponent {
  sales: Sale[] = [];
  selectedStatus: string = 'Todos';

  private salesService = inject(SalesService);

  ngOnInit(): void {
    this.salesService.getAllSales().subscribe({
      next: (sales) => (this.sales = sales),
      error: (error) => console.error(error),
    });
  }

  get filteredSales(): Sale[] {
    if (this.selectedStatus === 'Todos') return this.sales;
    return this.sales.filter((sale) => sale.status === this.selectedStatus);
  }
}
