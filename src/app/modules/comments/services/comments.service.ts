import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CommentInterface } from '../interfaces/comments.interface';

/**
 * Servicio para obtener comentarios desde una API externa.
 *
 * Se registra a nivel raíz y expone métodos tipados que devuelven
 * flujos `Observable` con la forma `CommentInterface[]` para que los
 * componentes los consuman directamente.
 */
@Injectable({
  providedIn: 'root',
})
export class CommentsService {
  /** Cliente HTTP inyectado usando la función `inject`. */
  private http = inject(HttpClient);

  /** Endpoint público usado en el taller (JSONPlaceholder). */
  private readonly url = 'https://jsonplaceholder.typicode.com/comments';

  /**
   * Obtiene el listado de comentarios desde el endpoint configurado.
   *
   * @returns Observable que emite un arreglo de `CommentInterface`.
   * @example
   * this.commentsService.getComments().subscribe(comments => console.log(comments));
   */
  getComments(): Observable<CommentInterface[]> {
    return this.http.get<CommentInterface[]>(this.url);
  }
}
