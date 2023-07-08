import { Component } from '@angular/core';
import { Mesa } from '../mesa';
import { MesaService } from '../mesa.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-mesa',
  templateUrl: './listar-mesa.component.html',
  styleUrls: ['./listar-mesa.component.css']
})
export class ListarMesaComponent {
  mesa : Mesa [];
  mesaEdition : Mesa
  constructor(private mesaServicio: MesaService,private router:Router) {}

  ngOnInit(): void {
    this.obtenerMesa();
  }

  private obtenerMesa() {
    this.mesaServicio.obtenerListadodeMesa().subscribe(dato => {
      this.mesa = dato;
    });
  }

  eliminarMesa(codigo: number): void {
    this.mesaServicio.eliminarMesa(codigo).subscribe(
      () => {
        console.log('Mesa eliminada correctamente');
        this.obtenerMesa();
      },
      error => {
        console.error('Error al eliminar la mesa', error);
      }
    );
  }
  actualizarMesa(mesa:Mesa){
    this.router.navigate(['actualizar-mesa'],{state:{mesa}});
    this.mesaEdition = {...mesa };
  }
}
