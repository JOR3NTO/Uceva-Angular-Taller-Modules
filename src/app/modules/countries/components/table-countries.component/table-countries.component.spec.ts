import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Country } from '../../interfaces/countries.interface';

import { TableCountriesComponent } from './table-countries.component';

/**
 * Pruebas unitarias del componente de presentacion `TableCountriesComponent`.
 *
 * Aqui se valida que la vista realmente muestre los datos recibidos por Input,
 * incluyendo el caso donde un pais no tiene capital definida.
 */
describe('TableCountriesComponent', () => {
  let component: TableCountriesComponent;
  let fixture: ComponentFixture<TableCountriesComponent>;

  const countriesMock: Country[] = [
    {
      name: { common: 'Colombia', official: 'Republic of Colombia' },
      capital: ['Bogota'],
      region: 'Americas',
      population: 52000000,
      flags: {
        png: 'https://flagcdn.com/w320/co.png',
        svg: 'https://flagcdn.com/co.svg',
        alt: 'Bandera de Colombia',
      },
      cca2: 'CO',
    },
    {
      name: { common: 'Antarctica', official: 'Antarctica' },
      region: 'Polar',
      population: 1106,
      flags: {
        png: 'https://flagcdn.com/w320/aq.png',
        svg: 'https://flagcdn.com/aq.svg',
      },
      cca2: 'AQ',
    },
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableCountriesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableCountriesComponent);
    component = fixture.componentInstance;
    component.countries = countriesMock;
    fixture.detectChanges();
  });

  it('deberia crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('deberia renderizar una tabla', () => {
    const table = fixture.debugElement.query(By.css('table'));
    expect(table).toBeTruthy();
  });

  it('deberia renderizar una fila por cada pais recibido', () => {
    const rows = fixture.debugElement.queryAll(By.css('tbody tr'));
    expect(rows.length).toBe(countriesMock.length);
  });

  it('deberia mostrar correctamente los datos del primer pais en cada columna', () => {
    const firstRowColumns = fixture.debugElement.queryAll(By.css('tbody tr'))[0].queryAll(By.css('td'));

    expect(firstRowColumns[1].nativeElement.textContent.trim()).toBe('Colombia');
    expect(firstRowColumns[2].nativeElement.textContent.trim()).toBe('Bogota');
    expect(firstRowColumns[3].nativeElement.textContent.trim()).toBe('Americas');
    expect(firstRowColumns[4].nativeElement.textContent.trim()).toContain('52');
    expect(firstRowColumns[5].nativeElement.textContent.trim()).toBe('CO');
  });

  it('deberia mostrar N/A cuando el pais no tenga capital', () => {
    const secondRowColumns = fixture.debugElement.queryAll(By.css('tbody tr'))[1].queryAll(By.css('td'));
    expect(secondRowColumns[2].nativeElement.textContent.trim()).toBe('N/A');
  });
});
