import { Component, inject } from '@angular/core';
import { Country } from '../../interfaces/countries.interface';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-list-countries',
  standalone: false,
  template: '<app-table-countries [countries]="countries"></app-table-countries>',
})
export class ListCountriesComponent {
  countries: Country[] = [];
  private countriesService = inject(CountriesService);

  ngOnInit(): void {
    this.countriesService.getAllCountries().subscribe({
      next: (countries) => (this.countries = countries),
      error: (error) => console.error(error),
    });
  }
}
