/**
 * Representa un comentario proveniente de la API (JSONPlaceholder).
 *
 * Esta interfaz define la forma mínima esperada de un comentario para
 * que los componentes y servicios del módulo `comments` puedan tiparse
 * correctamente y para que Compodoc genere la documentación.
 */
export interface CommentInterface {
  /** Identificador del recurso `post` al que pertenece el comentario. */
  postId: number;
  /** Identificador único del comentario. */
  id: number;
  /** Nombre del autor del comentario. */
  name: string;
  /** Email del autor del comentario. */
  email: string;
  /** Contenido del comentario. */
  body: string;
}
