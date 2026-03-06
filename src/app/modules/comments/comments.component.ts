import { Component } from '@angular/core';

/**
 * Componente raíz del módulo `comments`.
 *
 * Actúa como punto de entrada del módulo y expone un `<router-outlet>`
 * para renderizar las páginas hijas definidas en `CommentsRoutingModule`.
 */
@Component({
  selector: 'app-comments',
  template: `<router-outlet></router-outlet>`,
  standalone: false,
})
export class CommentsComponent { }
