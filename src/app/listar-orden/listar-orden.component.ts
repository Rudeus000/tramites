import { Component } from '@angular/core';
import { Orden } from '../orden';
import { OrdenService } from '../orden.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-orden',
  templateUrl: './listar-orden.component.html',
  styleUrls: ['./listar-orden.component.css']
})
export class ListarOrdenComponent {
  orden: Orden[];
  ordenEdicion:Orden; 

  constructor(private ordenservicio: OrdenService,private router:Router) {}

  ngOnInit(): void {
    this.obtenerOrden();
  }

  private obtenerOrden() {
    this.ordenservicio.obtenerlistadeOrden().subscribe(dato => {
      this.orden = dato;
    });
  }

  eliminarInsumos(codigo: string):void {
    this.ordenservicio.eliminarOrden(codigo).subscribe(() =>  {
        this.obtenerOrden();
      },
      error => {
        console.log(error);
      }
    );
  }
  actualizarOrden(orden:Orden){
    this.router.navigate(['actualizar-producto'],{state:{orden}});
    this.ordenEdicion = {...orden};
  }
}
