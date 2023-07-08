import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Orden } from './orden';

@Injectable({
  providedIn: 'root'
})
export class OrdenService {
  private baseURL = "http://localhost:8080/insumo"
  constructor(private httpClient : HttpClient) { }


  obtenerlistadeOrden () : Observable <Orden[]>{
  return this.httpClient.get<Orden[]>(`${this.baseURL}/consultar`);
  
}
 registrarOrden(orden:Orden):Observable<object>{
  return this.httpClient.post(`${this.baseURL}/registrar`,orden);
 }
 
 eliminarOrden(n_mesa: string): Observable<void> {
  return this.httpClient.delete<void>(`${this.baseURL}/eliminar/${n_mesa}`);
}
actualizarOrden(insumos: Orden):Observable<Orden>{
  return this.httpClient.put<Orden>(`${this.baseURL}/actualizar` ,insumos);
}
}
