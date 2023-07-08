import { Component } from '@angular/core';
import { Personal } from '../personal';
import { PersonalService } from '../personal.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-personal',
  templateUrl: './listar-personal.component.html',
  styleUrls: ['./listar-personal.component.css']
})
export class ListarPersonalComponent {
  personal: Personal[];
  personalEdicion:Personal; 

  constructor(private personalServicio: PersonalService,private router:Router) {}

  ngOnInit(): void {
    this.obtenerPersonal();
  }

  private obtenerPersonal() {
    this.personalServicio.obtenerlistadePersonal().subscribe(dato => {
      this.personal = dato;
    });
  }

  eliminarPersonal(codigo: string):void {
    this.personalServicio.eliminarPersonal(codigo).subscribe(() =>  {
        this.obtenerPersonal();
      },
      error => {
        console.log(error);
      }
    );
  }
  actualizarPersonal(personal:Personal){
    this.router.navigate(['actualizar-personal'],{state:{personal}});
    this.personalEdicion = {...personal };
  }
}
