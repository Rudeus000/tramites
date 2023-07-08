import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Insumos } from './insumos';

@Injectable({
  providedIn: 'root'
})
export class InsumosService {
  private baseURL = "http://localhost:8080/insumo"
  constructor(private httpClient : HttpClient) { }


  obtenerlistadeInsumos () : Observable <Insumos[]>{
  return this.httpClient.get<Insumos[]>(`${this.baseURL}/consultar`);
  
}
 registrarInsumos(insumos:Insumos):Observable<object>{
  return this.httpClient.post(`${this.baseURL}/registrar`,insumos);
 }
 
 eliminarInsumos(dni: string): Observable<void> {
  return this.httpClient.delete<void>(`${this.baseURL}/eliminar/${dni}`);
}
actualizarInsumos(insumos: Insumos):Observable<Insumos>{
  return this.httpClient.put<Insumos>(`${this.baseURL}/actualizar` ,insumos);
}
}
