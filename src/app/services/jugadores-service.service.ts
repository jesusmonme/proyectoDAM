import { Injectable } from '@angular/core';
import { Jugador } from '../components/jugadores/jugador.model';

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
    ]
   
  }
  
  jugadores:Jugador[];
  idContador:number=6;
  

  agregarJugador(jugador:Jugador){
    jugador.id=this.idContador;
    this.jugadores.push(jugador);
    //todo borrar esto cuando lo haga la base de datos
    this.idContador++;
    
  }
  borrarJugador(jugador:Jugador){
    this.jugadores.splice(jugador.id-1,1);
  }

  

}
