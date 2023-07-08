import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistarClienteComponent } from './registar-cliente.component';

describe('RegistarClienteComponent', () => {
  let component: RegistarClienteComponent;
  let fixture: ComponentFixture<RegistarClienteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistarClienteComponent]
    });
    fixture = TestBed.createComponent(RegistarClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
