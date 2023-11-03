import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginComponent } from '././components/login/login.component';
import { HomeComponent } from '././components/home/home.component';
import { FormularioPenaComponent } from './components/formulario-pena/formulario-pena.component';
import { JugadoresComponent } from './components/jugadores/jugadores.component';
import { CrearJugadorComponent } from './components/crear-jugador/crear-jugador.component';
import { FormsModule } from '@angular/forms';
import { SortearEquiposComponent } from './components/sortear-equipos/sortear-equipos.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    FormularioPenaComponent,
    JugadoresComponent,
    CrearJugadorComponent,
    SortearEquiposComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
