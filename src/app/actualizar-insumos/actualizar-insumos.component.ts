import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Insumos } from '../insumos';
import { InsumosService } from '../insumos.service';

@Component({
  selector: 'app-actualizar-insumos',
  templateUrl: './actualizar-insumos.component.html',
  styleUrls: ['./actualizar-insumos.component.css']
})
export class ActualizarInsumosComponent implements OnInit {
  insumoEdicion: Insumos;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private insumoServicio: InsumosService
  ) {}

  ngOnInit(): void {
    this.insumoEdicion = history.state.insumos;
  }

  actualizarInsumos(): void {
    this.insumoServicio.actualizarInsumos(this.insumoEdicion).subscribe(
      () => {
        console.log('Insumo actualizado correctamente');
        this.router.navigate(['/insumos']);
      },
      error => {
        console.error('Error al actualizar el insumo', error);
      }
    );
  }
}
