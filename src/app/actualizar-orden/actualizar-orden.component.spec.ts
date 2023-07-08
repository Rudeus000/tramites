import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarOrdenComponent } from './actualizar-orden.component';

describe('ActualizarOrdenComponent', () => {
  let component: ActualizarOrdenComponent;
  let fixture: ComponentFixture<ActualizarOrdenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActualizarOrdenComponent]
    });
    fixture = TestBed.createComponent(ActualizarOrdenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
