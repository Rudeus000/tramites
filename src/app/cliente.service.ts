import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from './cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private baseURL = "http://localhost:8080/cliente";

  constructor(private httpClient: HttpClient) { }

  obtenerlistadeCliente () : Observable <Cliente[]>{
    return this.httpClient.get<Cliente[]>(`${this.baseURL}/consultar`);
    
  }
   registrarCliente(insumos:Cliente):Observable<object>{
    return this.httpClient.post(`${this.baseURL}/registrar`,insumos);
   }
   
   eliminarCliente(dni: string): Observable<void> {
    return this.httpClient.delete<void>(`${this.baseURL}/eliminar/${dni}`);
  }
  actualizarCliente(cliente: Cliente):Observable<Cliente>{
    return this.httpClient.put<Cliente>(`${this.baseURL}/actualizar` ,cliente);
  }
}
