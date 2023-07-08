import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Mesa } from './mesa';

@Injectable({
  providedIn: 'root'
})
export class MesaService {  private baseURL = "http://localhost:8080/mesa";

constructor(private httpClient: HttpClient) { }

obtenerListadodeMesa(): Observable<Mesa[]> {
  return this.httpClient.get<Mesa[]>(`${this.baseURL}/consultar`);
}

registrarMesa(mesa: Mesa): Observable<object> {
  return this.httpClient.post(`${this.baseURL}/registrar`,mesa);
}
eliminarMesa(mesa_pago: number): Observable<void> {
  return this.httpClient.delete<void>(`${this.baseURL}/eliminar/${mesa_pago}`);
}

actualizarMesa(mesa: Mesa):Observable<Mesa>{
  return this.httpClient.put<Mesa>(`${this.baseURL}/actualizar` ,mesa);
}
}
