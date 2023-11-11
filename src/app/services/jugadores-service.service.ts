import { Injectable } from '@angular/core';
import { Jugador } from '../modelos/jugador.model';

@Injectable({
  providedIn: 'root'
})
export class JugadoresServiceService {

  constructor() { 
    this.jugadores=[
      new Jugador(1,'Jesús', 'A','AP',true),
      new Jugador(2,'Nacho', 'A','A',true),
      new Jugador(3,'Tallon', 'B','B',true),
      new Jugador(4,'Carlos', 'A','B',true),
      new Jugador(5,'Dani', 'B','P',true),
      new Jugador(6,'Juan', 'B','P',true)
    ]
   
  }
  
  jugadores:Jugador[];
  //todo borrar cuando la base datos genere los ID
  idContador:number=6;
  

  agregarJugador(jugador:Jugador){
    jugador.id=this.idContador;
    this.jugadores.push(jugador);
    //todo borrar esto cuando lo haga la base de datos
    this.idContador++;
    alert('Jugador: '+jugador.nombre+' creado');
    
  }
  borrarJugador(jugador:Jugador){
    this.jugadores.splice(jugador.id-1,1);
  }

  editarJugador(){

  }
  

}
