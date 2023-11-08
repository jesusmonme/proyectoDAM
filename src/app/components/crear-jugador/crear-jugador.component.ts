import { Component, OnInit } from '@angular/core';
import { Jugador } from '../../modelos/jugador.model';
import { JugadoresServiceService } from 'src/app/services/jugadores-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-jugador',
  templateUrl: './crear-jugador.component.html',
  styleUrls: ['./crear-jugador.component.css']
})
export class CrearJugadorComponent implements OnInit {
  constructor(private servicioJugadores: JugadoresServiceService, private router:Router) {

  }
  ngOnInit(): void {
    this.jugadores = this.servicioJugadores.jugadores;

  }
  jugadores: Jugador[];
  nombre: string = '';
  posicion: string = '';
  descripcion: string = '';
  email: string = '';
  nivel: string = '';
  incompatibilidad: string = '';
  miembro: boolean = true;

  crearJugador() {
    if (this.nombre == "") {
      alert('El campo nombre debe estar relleno');
    }
    else {
      let jugador1 = new Jugador(1, this.nombre, this.nivel, this.posicion, this.miembro, this.descripcion, this.incompatibilidad, this.email);
      this.servicioJugadores.agregarJugador(jugador1);
      // this.servicioJugadores.jugadoresTotales++;
      this.limpiarDatos();
      console.log(this.jugadores);
      console.log(jugador1);
    }
  }
  
  salir(){
    this.router.navigate(['jugadores']);
  }

  limpiarDatos() {
    this.nombre = '';
    this.posicion = '';
    this.descripcion = '';
    this.email = '';
    this.nivel = '';
    this.incompatibilidad = '';
    this.miembro = true;
  }

}
