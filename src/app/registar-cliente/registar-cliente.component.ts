import { Component } from '@angular/core';
import { Cliente } from '../cliente';
import { ClienteService } from '../cliente.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registar-cliente',
  templateUrl: './registar-cliente.component.html',
  styleUrls: ['./registar-cliente.component.css']
})
export class RegistarClienteComponent {
  cliente: Cliente = new Cliente();
  
  constructor(
    private personalServicio: ClienteService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  guardarCliente() {
    this.personalServicio.registrarCliente(this.cliente).subscribe(
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
    this.guardarCliente();
  }
}
