import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableCommentsComponent } from './table-comments.component';

describe('TableCommentsComponent', () => {
  let component: TableCommentsComponent;
  let fixture: ComponentFixture<TableCommentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableCommentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
