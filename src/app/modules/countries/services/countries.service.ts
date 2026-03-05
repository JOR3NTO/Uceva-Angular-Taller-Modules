import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/countries.interface';

@Injectable({ providedIn: 'root' })
export class CountriesService {
  private http = inject(HttpClient);
  private readonly url =
    'https://restcountries.com/v3.1/all?fields=name,capital,region,population,flags,cca2';

  getAllCountries(): Observable<Country[]> {
    return this.http.get<Country[]>(this.url);
  }
}