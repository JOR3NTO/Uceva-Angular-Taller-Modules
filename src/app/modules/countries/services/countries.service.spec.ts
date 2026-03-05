import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Country } from '../interfaces/countries.interface';
import { CountriesService } from './countries.service';

/**
 * Pruebas unitarias del servicio de paises.
 *
 * En estas pruebas validamos:
 * 1. Que el servicio se pueda crear correctamente.
 * 2. Que la peticion HTTP use el endpoint y metodo esperados.
 * 3. Que el servicio entregue al consumidor los datos de la API.
 */
describe('CountriesService', () => {
  let service: CountriesService;
  let httpMock: HttpTestingController;

  /** Endpoint exacto que usa el servicio en produccion. */
  const countriesUrl =
    'https://restcountries.com/v3.1/all?fields=name,capital,region,population,flags,cca2';

  /**
   * Datos simulados para no depender de la API real en pruebas unitarias.
   */
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

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });

    service = TestBed.inject(CountriesService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    // Verifica que no queden solicitudes HTTP pendientes entre pruebas.
    httpMock.verify();
  });

  it('deberia crearse correctamente', () => {
    expect(service).toBeTruthy();
  });

  it('getAllCountries deberia hacer una peticion GET al endpoint de paises', () => {
    service.getAllCountries().subscribe();

    const request = httpMock.expectOne(countriesUrl);
    expect(request.request.method).toBe('GET');

    // Respondemos la solicitud para completar el flujo del observable.
    request.flush(countriesMock);
  });

  it('getAllCountries deberia retornar el arreglo de paises recibido desde la API', () => {
    service.getAllCountries().subscribe((countries) => {
      expect(countries).toEqual(countriesMock);
      expect(countries.length).toBe(countriesMock.length);
      expect(countries[0].name.common).toBe('Colombia');
    });

    const request = httpMock.expectOne(countriesUrl);
    request.flush(countriesMock);
  });
});
