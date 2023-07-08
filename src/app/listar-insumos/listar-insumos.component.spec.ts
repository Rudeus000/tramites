import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarInsumosComponent } from './listar-insumos.component';

describe('ListarInsumosComponent', () => {
  let component: ListarInsumosComponent;
  let fixture: ComponentFixture<ListarInsumosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarInsumosComponent]
    });
    fixture = TestBed.createComponent(ListarInsumosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
