import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { JugadoresComponent } from './components/jugadores/jugadores.component';
import { CrearJugadorComponent } from './components/crear-jugador/crear-jugador.component';
import { FormularioPenyaComponent } from './components/formulario-penya/formulario-penya.component';
import { HomeComponent } from './components/home/home.component';
import { SortearEquiposComponent } from './components/sortear-equipos/sortear-equipos.component';
import { ErrorPersonalizadoComponent } from './components/error-personalizado/error-personalizado.component';

//http:localhost:4200/login
const routes:Routes=[
  {path:"login", component:LoginComponent},
  {path:"", redirectTo: 'login', pathMatch:'full'},
  {path:"jugadores", component:JugadoresComponent},
  {path:"crearJugador", component:CrearJugadorComponent},
  {path:"formularioPeña", component:FormularioPenyaComponent},  
  {path:"home", component:HomeComponent},
  {path:"sorteo", component:SortearEquiposComponent},
  {path:"**", component:ErrorPersonalizadoComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
