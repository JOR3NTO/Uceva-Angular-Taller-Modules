import { Component, Input } from '@angular/core';
import { CommentInterface } from '../../../interfaces/comments.interface';

/**
 * Componente presentacional que muestra una tabla con comentarios.
 *
 * Recibe un arreglo de `CommentInterface` a través del `@Input()` llamado
 * `comments` y se encarga exclusivamente de la presentación.
 */
@Component({
  selector: 'app-table-comments',
  standalone: false,
  templateUrl: './table-comments.component.html',
})
export class TableCommentsComponent {

  /** Comentarios recibidos desde el componente padre. */
  @Input() comments: CommentInterface[] = [];

}
