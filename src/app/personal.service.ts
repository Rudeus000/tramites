import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Personal } from './personal';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonalService {
  private baseURL = "http://localhost:8080/personal"
  constructor(private httpClient : HttpClient) { }


  obtenerlistadePersonal () : Observable <Personal[]>{
  return this.httpClient.get<Personal[]>(`${this.baseURL}/consultar`);
  
}
 registrarPersonal(personal:Personal):Observable<object>{
  return this.httpClient.post(`${this.baseURL}/registrar`,personal);
 }
 
 eliminarPersonal(codigo: string): Observable<void> {
  return this.httpClient.delete<void>(`${this.baseURL}/eliminar/${codigo}`);
}
actualizarPersonal(personal: Personal):Observable<Personal>{
  return this.httpClient.put<Personal>(`${this.baseURL}/actualizar` ,personal);
}
}
