import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistarMesaComponent } from './registar-mesa.component';

describe('RegistarMesaComponent', () => {
  let component: RegistarMesaComponent;
  let fixture: ComponentFixture<RegistarMesaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistarMesaComponent]
    });
    fixture = TestBed.createComponent(RegistarMesaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
