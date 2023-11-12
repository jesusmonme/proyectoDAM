import { Injectable } from '@angular/core';
import { Penya } from '../modelos/penya.model';
import { JugadoresServiceService } from './jugadores-service.service';
@Injectable({
  providedIn: 'root'
})
export class PenyasServiceService {

constructor(private servicioJugadores:JugadoresServiceService) { 
  //mockeo de peñas, ¿aqui meto los jugadores desde el otro servicio?
  this.penyas=[
    new Penya(1,'RACA','RacaBD',3,1,0,1,true,true,true,this.servicioJugadores.jugadores,['Equipo-Color','Equipo-Blanco'],0),
    new Penya(2,'Agustinos','AgustinosBD',3,1,0,1,true,true,false,[],['Equipo-Color','Equipo-Blanco'],0),
    new Penya(3,'Cazuela de Manises Pelaos','CazuelaBD',3,1,0,1,true,true,true,[],['Equipo-Color','Equipo-Blanco'],0),
  ]
  console.log(this.penyas);
}

penyas:Penya[];
//TODO eliminar variable cuando lo haga la BD
idContador:number=1;

crearPenya(penya:Penya){
  penya.idPenya=this.idContador; //quitar cuando lo haga la BD
  this.penyas.push(penya);
  this.idContador++;
  alert('Penya: '+penya.nombrePenya+' creada');
}
}
