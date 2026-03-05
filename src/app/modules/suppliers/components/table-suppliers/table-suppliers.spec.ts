import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableSuppliers } from './table-suppliers';

describe('TableSuppliers', () => {
  let component: TableSuppliers;
  let fixture: ComponentFixture<TableSuppliers>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableSuppliers]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableSuppliers);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
