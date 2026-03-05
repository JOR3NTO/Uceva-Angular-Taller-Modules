import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/countries.interface';

@Component({
  selector: 'app-table-countries',
  standalone: false,
  templateUrl: './table-countries.component.html',
})
export class TableCountriesComponent {
  @Input() countries: Country[] = [];
}
