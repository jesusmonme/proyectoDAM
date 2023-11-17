import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { FormularioPenyaComponent } from './components/formulario-penya/formulario-penya.component';
import { JugadoresComponent } from './components/jugadores/jugadores.component';
import { CrearJugadorComponent } from './components/crear-jugador/crear-jugador.component';
import { FormsModule } from '@angular/forms';
import { SortearEquiposComponent } from './components/sortear-equipos/sortear-equipos.component';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPersonalizadoComponent } from './components/error-personalizado/error-personalizado.component';
import { HttpClientModule } from '@angular/common/http';

const appRoutes:Routes=[
  {path:"", component:LoginComponent},
  {path:"jugadores", component:JugadoresComponent},
  {path:"crearJugador", component:CrearJugadorComponent},
  {path:"formularioPeña", component:FormularioPenyaComponent},
  {path:"login", component:LoginComponent},
  {path:"home", component:HomeComponent},
  {path:"sorteo", component:SortearEquiposComponent},
  {path:"**", component:ErrorPersonalizadoComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    FormularioPenyaComponent,
    JugadoresComponent,
    CrearJugadorComponent,
    SortearEquiposComponent,
    ErrorPersonalizadoComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
