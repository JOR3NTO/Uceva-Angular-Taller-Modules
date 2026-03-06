import { Component, OnInit, inject } from '@angular/core';
import { CommentsService } from '../../services/comments.service';
import { CommentInterface } from '../../interfaces/comments.interface';

/**
 * Página contenedora del listado de comentarios.
 *
 * Este componente actúa como orquestador: solicita los datos al
 * `CommentsService` y entrega el arreglo resultante al componente
 * presentacional `TableCommentsComponent` a través del `@Input`.
 */
@Component({
  selector: 'app-list-comments',
  standalone: false,
  template: '<app-table-comments [comments]="comments"></app-table-comments>',
})
export class ListCommentsComponent implements OnInit {
  /** Arreglo con los comentarios recuperados desde la API. */
  comments: CommentInterface[] = [];

  /** Servicio para obtener comentarios. */
  private commentsService = inject(CommentsService);

  /**
   * Al inicializar el componente se suscribe al servicio para cargar datos.
   */
  ngOnInit(): void {
    this.commentsService.getComments().subscribe({
      next: (comments) => (this.comments = comments),
      error: (error) => console.error(error),
    });
  }
}
