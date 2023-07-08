import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from '../cliente';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-actualizar-cliente',
  templateUrl: './actualizar-cliente.component.html',
  styleUrls: ['./actualizar-cliente.component.css']
})
export class ActualizarClienteComponent {
  clienteEdicion: Cliente;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private clienteservicio: ClienteService
  ) {}

  ngOnInit(): void {
    this.clienteEdicion = history.state.cliente;
  }

  actualizarCliente(): void {
    this.clienteservicio.actualizarCliente(this.clienteEdicion).subscribe(
      () => {
        console.log('Personal actualizado correctamente');
        this.router.navigate(['/cliente']);
      },
      error => {
        console.error('Error al actualizar el personal', error);
      }
    );
  }
}
