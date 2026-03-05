import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { By } from '@angular/platform-browser';
import { of, throwError } from 'rxjs';
import { TableCountriesComponent } from '../../components/table-countries.component/table-countries.component';
import { Country } from '../../interfaces/countries.interface';
import { CountriesService } from '../../services/countries.service';

import { ListCountriesComponent } from './list-countries.component';

/**
 * Pruebas unitarias del componente contenedor `ListCountriesComponent`.
 *
 * Estas pruebas validan el flujo completo del componente:
 * - Inicializacion y consumo del servicio.
 * - Asignacion de datos al estado local.
 * - Paso de datos al componente de presentacion (tabla).
 * - Manejo de errores cuando la consulta falla.
 */
describe('ListCountriesComponent', () => {
  let component: ListCountriesComponent;
  let fixture: ComponentFixture<ListCountriesComponent>;
  let countriesService: CountriesService;

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
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListCountriesComponent, TableCountriesComponent],
      imports: [HttpClientTestingModule],
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListCountriesComponent);
    component = fixture.componentInstance;
    countriesService = TestBed.inject(CountriesService);
  });

  it('deberia crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('deberia llamar a getAllCountries al iniciar', () => {
    const spyGetAllCountries = jest
      .spyOn(countriesService, 'getAllCountries')
      .mockReturnValue(of(countriesMock));

    // detectChanges dispara ngOnInit y con ello la consulta al servicio.
    fixture.detectChanges();

    expect(spyGetAllCountries).toHaveBeenCalled();
  });

  it('deberia asignar los paises recibidos del servicio', () => {
    jest.spyOn(countriesService, 'getAllCountries').mockReturnValue(of(countriesMock));

    fixture.detectChanges();

    expect(component.countries).toEqual(countriesMock);
  });

  it('deberia pasar los paises al componente table-countries', () => {
    jest.spyOn(countriesService, 'getAllCountries').mockReturnValue(of(countriesMock));

    fixture.detectChanges();

    const tableComponent = fixture.debugElement
      .query(By.directive(TableCountriesComponent))
      .componentInstance;

    expect(tableComponent.countries).toEqual(countriesMock);
  });

  it('deberia manejar el error cuando falla getAllCountries', () => {
    const errorResponse = new Error('Error al cargar paises');
    component.countries = [];

    jest.spyOn(console, 'error').mockImplementation(() => {});
    jest.spyOn(countriesService, 'getAllCountries').mockReturnValue(throwError(() => errorResponse));

    fixture.detectChanges();

    expect(countriesService.getAllCountries).toHaveBeenCalled();
    expect(console.error).toHaveBeenCalledWith(errorResponse);
    expect(component.countries.length).toBe(0);
  });
});
