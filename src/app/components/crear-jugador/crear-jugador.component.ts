import { Component, Input, OnInit } from '@angular/core';
import { Jugador } from '../../modelos/jugador.model';
import { JugadoresServiceService } from 'src/app/services/jugadores-service.service';
import { Router } from '@angular/router';
import { Penya } from 'src/app/modelos/penya.model';

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
  //TODO ver como importar el nombre peña
  //  @Input() penyaCreada:Penya;

    jugadores: Jugador[];
  nombre: string='';
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
      //TODO manejar el id de la BD
      let jugador1 = new Jugador(1, this.nombre, this.nivel, this.posicion, this.miembro, this.incompatibilidad, this.email,this.descripcion,);
      this.servicioJugadores.agregarJugador(jugador1);
      // this.servicioJugadores.jugadoresTotales++;
      this.limpiarDatos();
      console.log(this.jugadores);
      console.log(jugador1);
    }
  }
  
  salir(){
    //Deseleccionar todos los jugadores
    for(let i=0;i<this.jugadores.length;i++){
      this.jugadores[i].jugadorSeleccionado=false;
    }
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
