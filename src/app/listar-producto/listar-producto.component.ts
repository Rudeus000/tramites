import { Component } from '@angular/core';
import { Producto } from '../producto';
import { ProductoService } from '../producto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-producto',
  templateUrl: './listar-producto.component.html',
  styleUrls: ['./listar-producto.component.css']
})
export class ListarProductoComponent {
  producto: Producto[];
  productoEdicion:Producto; 

  constructor(private productoServicio: ProductoService,private router:Router) {}

  ngOnInit(): void {
    this.obtenerProductos();
  }

  private obtenerProductos() {
    this.productoServicio.obtenerlistadeProductos().subscribe(dato => {
      this.producto = dato;
    });
  }

  eliminarProducto(codigo: string):void {
    this.productoServicio.eliminarProducto(codigo).subscribe(() =>  {
        this.obtenerProductos();
      },
      error => {
        console.log(error);
      }
    );
  }
  actualizarProducto(producto:Producto){
    this.router.navigate(['actualizar-producto'],{state:{producto}});
    this.productoEdicion = {...producto };
  }
}
