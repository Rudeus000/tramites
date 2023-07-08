import { Component } from '@angular/core';
import { Personal } from '../personal';
import { PersonalService } from '../personal.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar-personal',
  templateUrl: './registrar-personal.component.html',
  styleUrls: ['./registrar-personal.component.css']
})
export class RegistrarPersonalComponent {
  personal: Personal = new Personal();

  constructor(
    private personalServicio: PersonalService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  guardarPersonal() {
    this.personalServicio.registrarPersonal(this.personal).subscribe(
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
    this.guardarPersonal();
  }
}
