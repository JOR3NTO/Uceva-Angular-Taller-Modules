import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TableCommentsComponent } from './table-comments.component';

/**
 * Pruebas unitarias del componente presentacional `TableCommentsComponent`.
 *
 * Valida la creacion del componente y el renderizado basico segun
 * el estado de entrada (`comments` vacio y con datos).
 */
describe('TableCommentsComponent', () => {
  let component: TableCommentsComponent;
  let fixture: ComponentFixture<TableCommentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableCommentsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TableCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deberia crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('deberia mostrar mensaje cuando no hay comentarios', () => {
    component.comments = [];
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('No hay comentarios para mostrar.');
  });

  it('deberia renderizar filas cuando recibe comentarios', () => {
    component.comments = [
      {
        postId: 1,
        id: 1,
        name: 'Comentario 1',
        email: 'uno@example.com',
        body: 'Texto 1',
      },
      {
        postId: 1,
        id: 2,
        name: 'Comentario 2',
        email: 'dos@example.com',
        body: 'Texto 2',
      },
    ];
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const rows = compiled.querySelectorAll('tbody tr');

    expect(rows.length).toBe(2);
    expect(compiled.textContent).toContain('Comentario 1');
    expect(compiled.textContent).toContain('Comentario 2');
  });
});
