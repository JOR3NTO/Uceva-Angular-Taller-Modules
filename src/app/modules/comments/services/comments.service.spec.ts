import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { CommentInterface } from '../interfaces/comments.interface';
import { CommentsService } from './comments.service';

/**
 * Pruebas unitarias del servicio `CommentsService`.
 *
 * Validan la creacion del servicio, el endpoint consumido,
 * el metodo HTTP utilizado y la forma de los datos retornados.
 */
describe('CommentsService', () => {
  let service: CommentsService;
  let httpMock: HttpTestingController;

  /** Endpoint esperado segun la implementacion del servicio. */
  const commentsUrl = 'https://jsonplaceholder.typicode.com/comments';

  /** Respuesta simulada de comentarios para pruebas. */
  const commentsMock: CommentInterface[] = [
    {
      postId: 1,
      id: 1,
      name: 'id labore ex et quam laborum',
      email: 'Eliseo@gardner.biz',
      body: 'laudantium enim quasi est quidem magnam voluptate ipsam eos',
    },
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });

    service = TestBed.inject(CommentsService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    // Garantiza que no queden solicitudes pendientes entre pruebas.
    httpMock.verify();
  });

  it('deberia crearse correctamente', () => {
    expect(service).toBeTruthy();
  });

  it('getComments deberia hacer una peticion GET al endpoint de comentarios', () => {
    service.getComments().subscribe();

    const request = httpMock.expectOne(commentsUrl);
    expect(request.request.method).toBe('GET');

    request.flush(commentsMock);
  });

  it('getComments deberia retornar el arreglo de comentarios recibido desde la API', () => {
    service.getComments().subscribe((comments) => {
      expect(comments).toEqual(commentsMock);
      expect(comments.length).toBe(commentsMock.length);
      expect(comments[0].email).toBe('Eliseo@gardner.biz');
    });

    const request = httpMock.expectOne(commentsUrl);
    request.flush(commentsMock);
  });
});
