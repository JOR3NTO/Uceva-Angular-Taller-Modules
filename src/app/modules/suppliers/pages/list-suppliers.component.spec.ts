import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { of, throwError } from 'rxjs';
import { SUPPLIERS } from '../../../core/config/suppliers.config';
import { TableSuppliers } from '../components/table-suppliers/table-suppliers';
import { SuppliersService } from '../services/suppliers.service';

import { ListSuppliersComponent } from './list-suppliers.component';

describe('ListSuppliersComponent', () => {
  let component: ListSuppliersComponent;
  let fixture: ComponentFixture<ListSuppliersComponent>;
  let suppliersService: SuppliersService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListSuppliersComponent, TableSuppliers]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListSuppliersComponent);
    component = fixture.componentInstance;
    suppliersService = TestBed.inject(SuppliersService);
  });

  it('deberia crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('deberia llamar a getAllSuppliers al iniciar', () => {
    const spyGetAllSuppliers = jest.spyOn(suppliersService, 'getAllSuppliers').mockReturnValue(of(SUPPLIERS));

    fixture.detectChanges();

    expect(spyGetAllSuppliers).toHaveBeenCalled();
  });

  it('deberia asignar los proveedores recibidos del servicio', () => {
    jest.spyOn(suppliersService, 'getAllSuppliers').mockReturnValue(of(SUPPLIERS));

    fixture.detectChanges();

    expect(component.suppliers).toEqual(SUPPLIERS);
  });

  it('deberia pasar los proveedores al componente table-suppliers', () => {
    jest.spyOn(suppliersService, 'getAllSuppliers').mockReturnValue(of(SUPPLIERS));

    fixture.detectChanges();

    const tableComponent = fixture.debugElement
      .query(By.directive(TableSuppliers))
      .componentInstance;

    expect(tableComponent.supplier).toEqual(SUPPLIERS);
  });

  it('deberia manejar el error cuando falla getAllSuppliers', () => {
    component.suppliers = [];
    const errorResponse = new Error('Error al cargar proveedores');

    jest.spyOn(console, 'error').mockImplementation(() => {});
    jest.spyOn(suppliersService, 'getAllSuppliers').mockReturnValue(throwError(() => errorResponse));

    fixture.detectChanges();

    expect(suppliersService.getAllSuppliers).toHaveBeenCalled();
    expect(console.error).toHaveBeenCalledWith(errorResponse);
    expect(component.suppliers.length).toBe(0);
  });
});
