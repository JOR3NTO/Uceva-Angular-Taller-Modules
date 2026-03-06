import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { of, throwError } from 'rxjs';
import { CommentInterface } from '../../interfaces/comments.interface';
import { TableCommentsComponent } from '../../components/table-component/table-comments.component/table-comments.component';
import { CommentsService } from '../../services/comments.service';

import { ListCommentsComponent } from './list-comments.component';

/**
 * Pruebas unitarias del contenedor `ListCommentsComponent`.
 *
 * Se valida que el componente:
 * 1. Se cree correctamente.
 * 2. Llame al servicio al inicializar.
 * 3. Asigne datos recibidos al estado local.
 * 4. Envie los datos al componente de tabla.
 * 5. Maneje errores del servicio.
 */
describe('ListCommentsComponent', () => {
  let component: ListCommentsComponent;
  let fixture: ComponentFixture<ListCommentsComponent>;
  let commentsService: { getComments: jest.Mock };

  /** Datos simulados para pruebas de flujo exitoso. */
  const commentsMock: CommentInterface[] = [
    {
      postId: 1,
      id: 1,
      name: 'Comentario de prueba',
      email: 'test@example.com',
      body: 'Contenido de comentario de prueba',
    },
  ];

  beforeEach(async () => {
    commentsService = {
      getComments: jest.fn(),
    };

    await TestBed.configureTestingModule({
      declarations: [ListCommentsComponent, TableCommentsComponent],
      providers: [{ provide: CommentsService, useValue: commentsService }],
    }).compileComponents();

    fixture = TestBed.createComponent(ListCommentsComponent);
    component = fixture.componentInstance;
  });

  it('deberia crear el componente', () => {
    commentsService.getComments.mockReturnValue(of(commentsMock));

    fixture.detectChanges();

    expect(component).toBeTruthy();
  });

  it('deberia llamar a getComments al iniciar', () => {
    commentsService.getComments.mockReturnValue(of(commentsMock));

    fixture.detectChanges();

    expect(commentsService.getComments).toHaveBeenCalled();
  });

  it('deberia asignar los comentarios recibidos del servicio', () => {
    commentsService.getComments.mockReturnValue(of(commentsMock));

    fixture.detectChanges();

    expect(component.comments).toEqual(commentsMock);
  });

  it('deberia pasar los comentarios al componente table-comments', () => {
    commentsService.getComments.mockReturnValue(of(commentsMock));

    fixture.detectChanges();

    const tableComponent = fixture.debugElement
      .query(By.directive(TableCommentsComponent))
      .componentInstance as TableCommentsComponent;

    expect(tableComponent.comments).toEqual(commentsMock);
  });

  it('deberia manejar el error cuando falla getComments', () => {
    const errorResponse = new Error('Error al cargar comentarios');
    component.comments = [];

    jest.spyOn(console, 'error').mockImplementation(() => {});
    commentsService.getComments.mockReturnValue(throwError(() => errorResponse));

    fixture.detectChanges();

    expect(commentsService.getComments).toHaveBeenCalled();
    expect(console.error).toHaveBeenCalledWith(errorResponse);
    expect(component.comments.length).toBe(0);
  });
});
