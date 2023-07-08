import { Component } from '@angular/core';
import { Insumos } from '../insumos';
import { InsumosService } from '../insumos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar-insumos',
  templateUrl: './registrar-insumos.component.html',
  styleUrls: ['./registrar-insumos.component.css']
})
export class RegistrarInsumosComponent {
  insumos: Insumos = new Insumos();

  constructor(
    private personalServicio: InsumosService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  guardarInsumos() {
    this.personalServicio.registrarInsumos(this.insumos).subscribe(
      (dato: any) => {
        console.log(dato);
        this.irPersonal();
      },
      error => console.log(error)
    );
  }

  irPersonal() {
    this.router.navigate(['/productos']);
  }

  onSubmit() {
    this.guardarInsumos();
  }
}
