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
import { ErrorPersonalizadoComponent } from './components/error-personalizado/error-personalizado.component';
import { HttpClientModule } from '@angular/common/http';
import { EditarPenyaComponent } from './components/editar-penya/editar-penya.component';
import { EditarJugadorComponent } from './components/editar-jugador/editar-jugador.component';

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
    EditarPenyaComponent,
    EditarJugadorComponent
   
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
