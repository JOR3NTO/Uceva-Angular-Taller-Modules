import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { of, throwError } from 'rxjs';
import { SALES } from '../../../../core/config/sales.config';
import { BadgeComponent } from '../../../shared/components/badge/badge.component';
import { TableSalesComponent } from '../../components/table-sales/table-sales.component';
import { SalesService } from '../../services/sales.service';
import { ListSalesComponent } from './list-sales.component';

describe('ListSalesComponent', () => {
  let component: ListSalesComponent;
  let fixture: ComponentFixture<ListSalesComponent>;
  let salesService: SalesService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListSalesComponent, TableSalesComponent, BadgeComponent],
    })
      .compileComponents();

    fixture = TestBed.createComponent(ListSalesComponent);
    component = fixture.componentInstance;
    salesService = TestBed.inject(SalesService);
  });

  it('deberia crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('deberia llamar a getAllSales al iniciar', () => {
    const spyGetAllSales = jest.spyOn(salesService, 'getAllSales').mockReturnValue(of(SALES));
    fixture.detectChanges();
    expect(spyGetAllSales).toHaveBeenCalled();
  });

  it('deberia asignar las ventas recibidas del servicio', () => {
    jest.spyOn(salesService, 'getAllSales').mockReturnValue(of(SALES));
    fixture.detectChanges();
    expect(component.sales).toEqual(SALES);
  });

  it('deberia pasar las ventas al componente table-sales', () => {
    jest.spyOn(salesService, 'getAllSales').mockReturnValue(of(SALES));
    fixture.detectChanges();

    const tableComponent = fixture.debugElement
      .query(By.directive(TableSalesComponent))
      .componentInstance;

    expect(tableComponent.sales).toEqual(SALES);
  });

  it('deberia filtrar ventas por estado', () => {
    jest.spyOn(salesService, 'getAllSales').mockReturnValue(of(SALES));
    fixture.detectChanges();

    component.selectedStatus = 'Pendiente';
    const filtered = SALES.filter((sale) => sale.status === 'Pendiente');

    expect(component.filteredSales).toEqual(filtered);
  });

  it('deberia manejar el error cuando falla getAllSales', () => {
    component.sales = [];
    const errorResponse = new Error('Error al cargar ventas');

    jest.spyOn(console, 'error').mockImplementation(() => {});
    jest.spyOn(salesService, 'getAllSales').mockReturnValue(throwError(() => errorResponse));

    fixture.detectChanges();

    expect(salesService.getAllSales).toHaveBeenCalled();
    expect(console.error).toHaveBeenCalledWith(errorResponse);
    expect(component.sales.length).toBe(0);
  });
});
