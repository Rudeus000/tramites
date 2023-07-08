import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarProductoComponent } from './listar-producto/listar-producto.component';
import { ListarClienteComponent } from './listar-cliente/listar-cliente.component';
import { ListarInsumosComponent } from './listar-insumos/listar-insumos.component';
import { ListarMesaComponent } from './listar-mesa/listar-mesa.component';
import { ListarPersonalComponent } from './listar-personal/listar-personal.component';
import { RegistarClienteComponent } from './registar-cliente/registar-cliente.component';
import { RegistrarInsumosComponent } from './registrar-insumos/registrar-insumos.component';
import { RegistrarPersonalComponent } from './registrar-personal/registrar-personal.component';
import { RegistrarProductoComponent } from './registrar-producto/registrar-producto.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ActualizarProductoComponent } from './actualizar-producto/actualizar-producto.component';
import { ActualizarClienteComponent } from './actualizar-cliente/actualizar-cliente.component';
import { ActualizarInsumosComponent } from './actualizar-insumos/actualizar-insumos.component';
import { ActualizarMesaComponent } from './actualizar-mesa/actualizar-mesa.component';
import { ActualizarOrdenComponent } from './actualizar-orden/actualizar-orden.component';
import { ActualizarPersonalComponent } from './actualizar-personal/actualizar-personal.component';
import { RegistarMesaComponent } from './registar-mesa/registar-mesa.component';

@NgModule({
  declarations: [
    AppComponent,
    ListarProductoComponent,
    ListarClienteComponent,
    ListarInsumosComponent,
    ListarMesaComponent,
    ListarPersonalComponent,
    RegistarClienteComponent,
    RegistrarInsumosComponent,
    RegistrarPersonalComponent,
    RegistrarProductoComponent,
    ActualizarProductoComponent,
    ActualizarClienteComponent,
    ActualizarInsumosComponent,
    ActualizarMesaComponent,
    ActualizarOrdenComponent,
    ActualizarPersonalComponent,
    RegistarMesaComponent,

  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
