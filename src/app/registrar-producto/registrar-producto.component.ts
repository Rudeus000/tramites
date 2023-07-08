import { Component } from '@angular/core';
import { Producto } from '../producto';
import { ProductoService } from '../producto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar-producto',
  templateUrl: './registrar-producto.component.html',
  styleUrls: ['./registrar-producto.component.css']
})
export class RegistrarProductoComponent {
  producto: Producto = new Producto();

  constructor(
    private productoServicio: ProductoService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  guardarProducto() {
    this.productoServicio.registrarProducto(this.producto).subscribe(
      (dato: any) => {
        console.log(dato);
        this.irAlistaDeproductos();
      },
      error => console.log(error)
    );
}

irAlistaDeproductos() {
  this.router.navigate(['/consultar']);
}

onSubmit() {
  this.guardarProducto();
}

}
