import { Component } from '@angular/core';
import { Mesa } from '../mesa';
import { MesaService } from '../mesa.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registar-mesa',
  templateUrl: './registar-mesa.component.html',
  styleUrls: ['./registar-mesa.component.css']
})
export class RegistarMesaComponent {
  mesa: Mesa = new Mesa();

  constructor(
    private mesaServicio: MesaService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  guardarMesa() {
    this.mesaServicio.registrarMesa(this.mesa).subscribe(
      (dato: any) => {
        console.log(dato);
        this.irMesa();
      },
      error => console.log(error)
    );
  }

  irMesa() {
    this.router.navigate(['/mesa']);
  }

  onSubmit() {
    this.guardarMesa();
  }
}
