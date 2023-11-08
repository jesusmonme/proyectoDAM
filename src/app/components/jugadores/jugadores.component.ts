import { Component, OnInit } from '@angular/core';
import { Jugador } from './jugador.model';
import { Equipo } from './equipo.model';
import { JugadoresServiceService } from 'src/app/services/jugadores-service.service';

@Component({
  selector: 'app-jugadores',
  templateUrl: './jugadores.component.html',
  styleUrls: ['./jugadores.component.css']
})
export class JugadoresComponent implements OnInit{
  
  constructor(private servicioJugadores:JugadoresServiceService){

  }
  
  ngOnInit(): void {
    this.jugadores=this.servicioJugadores.jugadores;
    

  }
  
  jugadores:Jugador[];
  nombrePena='Nombre Peña';
  jugadoresSeleccionados:number = 0;
  contadorEquipos =2 ;

  
  //ver como gestionar el sorteo equipos,si metiendo cada uno en array o
  //en un solo por si habilito mas de 2equipos y coger tramos para cada equipo
  equipos:Equipo[]=[];
  
  
  // ver como asociar imagenes a un valor, estas variables no se si al final las usare
  iconoUltimoPartido =[1,2,3];
  iconoMiembro=['SI','NO'];
  iconoRatio=[1,2,3];

 

  

sumarContador(){
  if(this.contadorEquipos>=2){
  this.contadorEquipos = ++this.contadorEquipos;
  
  }
  else{
    this.contadorEquipos=2;
  }
}
restarContador(){
  if(this.contadorEquipos>2){
    this.contadorEquipos = --this.contadorEquipos;
    }
    else{
      this.contadorEquipos=2;
    }
}
añadirJugadores(){

}





seleccionarJugador(idJugador:number){
 const jugadorBuscado=this.jugadores.find((elemento)=>elemento.id==idJugador);
 if(jugadorBuscado){
    if(jugadorBuscado.jugadorSeleccionado==false){
      jugadorBuscado.jugadorSeleccionado=true;  
      this.jugadoresSeleccionados++;    
    }
    else{  
       jugadorBuscado.jugadorSeleccionado=false;  
       this.jugadoresSeleccionados--;   
    }
}
console.log('jugador buscado:'+jugadorBuscado);
}
borrarJugador(jugadorAborrar:Jugador){
  
  let confirmacion=confirm("seguro que quieres eliminar al jugador: "+ jugadorAborrar.nombre + '?');
  if(confirmacion){
    this.servicioJugadores.borrarJugador(jugadorAborrar);
  }
}

}

