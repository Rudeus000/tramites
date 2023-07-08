import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarProductoComponent } from './listar-producto/listar-producto.component';
import { RegistrarPersonalComponent } from './registrar-personal/registrar-personal.component';
import { ListarInsumosComponent } from './listar-insumos/listar-insumos.component';
import { RegistrarInsumosComponent } from './registrar-insumos/registrar-insumos.component';
import { ListarClienteComponent } from './listar-cliente/listar-cliente.component';
import { ListarMesaComponent } from './listar-mesa/listar-mesa.component';
import { RegistarClienteComponent } from './registar-cliente/registar-cliente.component';
import { RegistrarProductoComponent } from './registrar-producto/registrar-producto.component';
import { ActualizarProductoComponent } from './actualizar-producto/actualizar-producto.component';
import { ListarPersonalComponent } from './listar-personal/listar-personal.component';
import { ActualizarPersonalComponent } from './actualizar-personal/actualizar-personal.component';
import { ActualizarInsumosComponent } from './actualizar-insumos/actualizar-insumos.component';
import { ActualizarClienteComponent } from './actualizar-cliente/actualizar-cliente.component';
import { RegistarMesaComponent } from './registar-mesa/registar-mesa.component';
import { ActualizarMesaComponent } from './actualizar-mesa/actualizar-mesa.component';


const routes: Routes = [
  {path : 'producto',component:ListarProductoComponent},
  {path : '',redirectTo:'producto',pathMatch:'full' },
  {path : 'registrar-producto',component:RegistrarProductoComponent},
  {path : 'registrar-personal',component:RegistrarPersonalComponent },
  {path : 'insumos',component: ListarInsumosComponent},
  {path : 'registrar-insumos',component:RegistrarInsumosComponent },
  {path : 'cliente',component: ListarClienteComponent},
  {path : 'registrar-cliente',component:RegistarClienteComponent },
  {path : 'actualizar-producto',component : ActualizarProductoComponent},
  { path: 'actualizar-personal', component: ActualizarPersonalComponent },
  {path : 'personal',component: ListarPersonalComponent},
  { path: 'actualizar-insumos', component: ActualizarInsumosComponent },
  { path: 'actualizar-cliente', component: ActualizarClienteComponent },
  { path: 'mesa', component: ListarMesaComponent },
  { path: 'registrar-mesa', component: RegistarMesaComponent },
  { path: 'actualizar-mesa', component: ActualizarMesaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
