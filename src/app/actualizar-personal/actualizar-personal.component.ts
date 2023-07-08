import { Component } from '@angular/core';
import { Personal } from '../personal';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonalService } from '../personal.service';

@Component({
  selector: 'app-actualizar-personal',
  templateUrl: './actualizar-personal.component.html',
  styleUrls: ['./actualizar-personal.component.css']
})
export class ActualizarPersonalComponent {
  personalEdicion: Personal;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private personalservice: PersonalService
  ) {}

  ngOnInit(): void {
    this.personalEdicion = history.state.personal;
  }

  actualizarPersonal(): void {
    this.personalservice.actualizarPersonal(this.personalEdicion).subscribe(
      () => {
        console.log('Personal actualizado correctamente');
        this.router.navigate(['/productos']);
      },
      error => {
        console.error('Error al actualizar el personal', error);
      }
    );
  }
}
