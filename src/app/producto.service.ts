import { Injectable } from '@angular/core';
import { Producto } from './producto';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

    private baseURL = "http://localhost:8080/producto"
    constructor(private httpClient : HttpClient) { }
  
  
    obtenerlistadeProductos () : Observable <Producto[]>{
    return this.httpClient.get<Producto[]>(`${this.baseURL}/consultar`);
    
  }
   registrarProducto(producto:Producto):Observable<object>{
    return this.httpClient.post(`${this.baseURL}/registrar`,producto);
   }
   
   eliminarProducto(codigo: string): Observable<void> {
    return this.httpClient.delete<void>(`${this.baseURL}/eliminar/${codigo}`);
  }
  actualizarProducto(producto: Producto):Observable<Producto>{
    return this.httpClient.put<Producto>(`${this.baseURL}/actualizar` ,producto);
  }
  }

