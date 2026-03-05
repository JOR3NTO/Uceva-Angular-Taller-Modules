import { CurrencyPipe, DatePipe } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { SALES } from '../../../../core/config/sales.config';
import { BadgeComponent } from '../../../shared/components/badge/badge.component';

import { TableSalesComponent } from './table-sales.component';

describe('TableSalesComponent', () => {
  let component: TableSalesComponent;
  let fixture: ComponentFixture<TableSalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableSalesComponent, BadgeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableSalesComponent);
    component = fixture.componentInstance;
    component.sales = SALES;
    fixture.detectChanges();
  });

  it('deberia crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('deberia renderizar una tabla', () => {
    const table = fixture.debugElement.query(By.css('table'));
    expect(table).toBeTruthy();
  });

  it('deberia renderizar una fila por cada venta', () => {
    const rows = fixture.debugElement.queryAll(By.css('tbody tr'));
    expect(rows.length).toBe(component.sales.length);
  });

  it('deberia mostrar los datos de la venta en cada columna', () => {
    const rows = fixture.debugElement.queryAll(By.css('tbody tr'));

    rows.forEach((row, index) => {
      const columns = row.queryAll(By.css('th, td'));
      const sale = component.sales[index];
      const total = new CurrencyPipe('en-US').transform(sale.total);
      const date = new DatePipe('en-US').transform(sale.date, 'shortDate');

      expect(columns[0].nativeElement.textContent.trim()).toBe(String(sale.id));
      expect(columns[1].nativeElement.textContent.trim()).toBe(String(sale.productId));
      expect(columns[2].nativeElement.textContent.trim()).toBe(sale.name);
      expect(columns[3].nativeElement.textContent.trim()).toBe(String(sale.quantity));
      expect(columns[4].nativeElement.textContent.trim()).toBe(total);
      expect(columns[5].nativeElement.textContent.trim()).toBe(date);
      expect(columns[6].nativeElement.textContent.trim()).toBe(sale.status);
    });
  });

  it('deberia mapear cada estado a su BadgeType correcto', () => {
    expect(component.statusMap['Completada']).toBe('success');
    expect(component.statusMap['Pendiente']).toBe('warning');
    expect(component.statusMap['Cancelada']).toBe('danger');
  });
});
