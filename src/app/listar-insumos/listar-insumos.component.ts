import { Component } from '@angular/core';
import { Insumos } from '../insumos';
import { Router } from '@angular/router';
import { InsumosService } from '../insumos.service';

@Component({
  selector: 'app-listar-insumos',
  templateUrl: './listar-insumos.component.html',
  styleUrls: ['./listar-insumos.component.css']
})
export class ListarInsumosComponent {
  insumos: Insumos[];
  insumoEdicion:Insumos; 

  constructor(private insumoServicio: InsumosService,private router:Router) {}

  ngOnInit(): void {
    this.obtenerInsumos();
  }

  private obtenerInsumos() {
    this.insumoServicio.obtenerlistadeInsumos().subscribe(dato => {
      this.insumos = dato;
    });
  }

  eliminarInsumos(codigo: string):void {
    this.insumoServicio.eliminarInsumos(codigo).subscribe(() =>  {
        this.obtenerInsumos();
      },
      error => {
        console.log(error);
      }
    );
  }
  actualizarInsumos(insumos:Insumos){
    this.router.navigate(['actualizar-insumos'],{state:{insumos}});
    this.insumoEdicion = {...insumos };
  }
}
