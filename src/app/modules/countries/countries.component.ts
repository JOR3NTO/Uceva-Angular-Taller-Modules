import { Component } from '@angular/core';

/**
 * Componente contenedor (shell) del modulo de paises.
 *
 * Expone un `router-outlet` para renderizar las vistas hijas
 * definidas en `CountriesRoutingModule`.
 */
@Component({
  selector: 'app-countries.component',
  template: `<router-outlet></router-outlet>`,
  standalone: false,
})
export class CountriesComponent { }
