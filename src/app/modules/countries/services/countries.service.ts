import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/countries.interface';

/**
 * Servicio para consultar paises desde una API publica.
 *
 * Se encarga de obtener el listado de paises desde `restcountries.com`
 * y exponerlo como un flujo tipado para los componentes de presentacion.
 */
@Injectable({ providedIn: 'root' })
export class CountriesService {
  /** Cliente HTTP para realizar solicitudes a la API. */
  private http = inject(HttpClient);
  /** Endpoint con campos limitados para optimizar la respuesta. */
  private readonly url =
    'https://restcountries.com/v3.1/all?fields=name,capital,region,population,flags,cca2';

  /**
   * Obtiene todos los paises disponibles desde la API.
   *
   * @returns Observable con el listado de paises (`Country[]`).
   */
  getAllCountries(): Observable<Country[]> {
    return this.http.get<Country[]>(this.url);
  }
}