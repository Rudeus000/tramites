import { Component } from '@angular/core';
import { Mesa } from '../mesa';
import { ActivatedRoute, Router } from '@angular/router';
import { MesaService } from '../mesa.service';

@Component({
  selector: 'app-actualizar-mesa',
  templateUrl: './actualizar-mesa.component.html',
  styleUrls: ['./actualizar-mesa.component.css']
})
export class ActualizarMesaComponent {
  mesaEdicion: Mesa;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private mesaServicio: MesaService
  ) {}

  ngOnInit(): void {
    this.mesaEdicion = history.state.mesa;
  }

  actualizarMesa(): void {
    this.mesaServicio.actualizarMesa(this.mesaEdicion).subscribe(
      () => {
        console.log('Personal actualizado correctamente');
        this.router.navigate(['/mesa']);
      },
      error => {
        console.error('Error al actualizar el personal', error);
      }
    );
  }
}
