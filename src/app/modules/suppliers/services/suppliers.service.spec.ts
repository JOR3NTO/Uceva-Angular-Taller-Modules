import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuppliersService } from './suppliers.service';

describe('SuppliersService', () => {
  let component: SuppliersService;
  let fixture: ComponentFixture<SuppliersService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SuppliersService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuppliersService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
