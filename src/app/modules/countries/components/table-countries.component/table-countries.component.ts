import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/countries.interface';

/**
 * Tabla de paises.
 *
 * Componente de presentacion encargado de mostrar
 * el listado de paises en formato tabular.
 */
@Component({
  selector: 'app-table-countries',
  standalone: false,
  templateUrl: './table-countries.component.html',
})
export class TableCountriesComponent {
  /**
   * Paises recibidos desde el componente padre.
   */
  @Input() countries: Country[] = [];
}
