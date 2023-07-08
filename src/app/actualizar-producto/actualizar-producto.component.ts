import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from '../producto';
import { ProductoService } from '../producto.service';

@Component({
  selector: 'app-actualizar-producto',
  templateUrl: './actualizar-producto.component.html',
  styleUrls: ['./actualizar-producto.component.css']
})
export class ActualizarProductoComponent implements OnInit {
  productoEdicion: Producto;

  constructor(private route:ActivatedRoute,
    private router:Router,
    private productoservice:ProductoService){}

    ngOnInit(): void {
      this.productoEdicion = history.state.producto;
    }
  actualizarProducto():void{
    this.productoservice.actualizarProducto(this.productoEdicion).subscribe(()=>{
      console.log('Producto Actualizado correctamente');
      this.router.navigate(['/productos']);
    },error=>{
      console.error('Error al actualizar el producto',error);
    });
  }


}

