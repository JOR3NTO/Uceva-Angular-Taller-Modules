import { Component, inject, OnInit } from '@angular/core';
import { Country } from '../../interfaces/countries.interface';
import { CountriesService } from '../../services/countries.service';

/**
 * Componente contenedor del listado de paises.
 *
 * Este componente consume `CountriesService` y entrega
 * los datos al componente de tabla para su visualizacion.
 */
@Component({
  selector: 'app-list-countries',
  standalone: false,
  template: '<app-table-countries [countries]="countries"></app-table-countries>',
})
export class ListCountriesComponent implements OnInit {
  /** Listado de paises mostrado en la vista. */
  countries: Country[] = [];

  /** Servicio de acceso a datos de paises. */
  private countriesService = inject(CountriesService);

  /**
   * Carga los paises al inicializar el componente.
   */
  ngOnInit(): void {
    this.countriesService.getAllCountries().subscribe({
      next: (countries) => (this.countries = countries),
      error: (error) => console.error(error),
    });
  }
}
