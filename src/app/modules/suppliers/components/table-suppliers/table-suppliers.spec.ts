import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { SUPPLIERS } from '../../../../core/config/suppliers.config';

import { TableSuppliers } from './table-suppliers';

describe('TableSuppliers', () => {
  let component: TableSuppliers;
  let fixture: ComponentFixture<TableSuppliers>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableSuppliers]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableSuppliers);
    component = fixture.componentInstance;
    component.supplier = SUPPLIERS;
    fixture.detectChanges();
  });

  it('deberia crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('deberia renderizar una tabla', () => {
    const table = fixture.debugElement.query(By.css('table'));
    expect(table).toBeTruthy();
  });

  it('deberia renderizar una fila por cada proveedor', () => {
    const rows = fixture.debugElement.queryAll(By.css('tbody tr'));
    expect(rows.length).toBe(component.supplier.length);
  });

  it('deberia mostrar los datos del proveedor en cada columna', () => {
    const rows = fixture.debugElement.queryAll(By.css('tbody tr'));

    rows.forEach((row, index) => {
      const columns = row.queryAll(By.css('th, td'));
      const supplier = component.supplier[index];

      expect(columns[0].nativeElement.textContent.trim()).toBe(String(supplier.id));
      expect(columns[1].nativeElement.textContent.trim()).toBe(supplier.name);
      expect(columns[2].nativeElement.textContent.trim()).toBe(supplier.contactEmail);
      expect(columns[3].nativeElement.textContent.trim()).toBe(supplier.phoneNumber);
    });
  });
});
