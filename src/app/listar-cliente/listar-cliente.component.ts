import { Component } from '@angular/core';
import { Cliente } from '../cliente';
import { ClienteService } from '../cliente.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-cliente',
  templateUrl: './listar-cliente.component.html',
  styleUrls: ['./listar-cliente.component.css']
})
export class ListarClienteComponent {
  cliente : Cliente [];
  clienteEdicion:Cliente; 

  constructor(private clienteServicio: ClienteService,private router:Router) {}

  ngOnInit(): void {
    this.obtenerCliente();
  }

  private obtenerCliente() {
    this.clienteServicio.obtenerlistadeCliente().subscribe(dato => {
      this.cliente = dato;
    });
  }

  eliminarCliente(codigo: string):void {
    this.clienteServicio.eliminarCliente(codigo).subscribe(() =>  {
        this.obtenerCliente ();
      },
      error => {
        console.log(error);
      }
    );
  }
  actualizarCliente(cliente:Cliente){
    this.router.navigate(['actualizar-cliente'],{state:{cliente}});
    this.clienteEdicion = {...cliente };
  }
}
