import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarInsumosComponent } from './actualizar-insumos.component';

describe('ActualizarInsumosComponent', () => {
  let component: ActualizarInsumosComponent;
  let fixture: ComponentFixture<ActualizarInsumosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActualizarInsumosComponent]
    });
    fixture = TestBed.createComponent(ActualizarInsumosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
