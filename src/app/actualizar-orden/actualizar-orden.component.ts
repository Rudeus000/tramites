import { Component } from '@angular/core';
import { Orden } from '../orden';
import { ActivatedRoute, Router } from '@angular/router';
import { OrdenService } from '../orden.service';

@Component({
  selector: 'app-actualizar-orden',
  templateUrl: './actualizar-orden.component.html',
  styleUrls: ['./actualizar-orden.component.css']
})
export class ActualizarOrdenComponent {
  ordenEdicion: Orden;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private personalservice: OrdenService
  ) {}

  ngOnInit(): void {
    this.ordenEdicion = history.state.orden;
  }

  actualizarOrden(): void {
    this.personalservice.actualizarOrden(this.ordenEdicion).subscribe(
      () => {
        console.log('Personal actualizado correctamente');
        this.router.navigate(['/productos']);
      },
      error => {
        console.error('Error al actualizar el personal', error);
      }
    );
}
}
