import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarInsumosComponent } from './registrar-insumos.component';

describe('RegistrarInsumosComponent', () => {
  let component: RegistrarInsumosComponent;
  let fixture: ComponentFixture<RegistrarInsumosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrarInsumosComponent]
    });
    fixture = TestBed.createComponent(RegistrarInsumosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
