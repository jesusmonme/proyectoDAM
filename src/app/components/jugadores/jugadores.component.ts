import { Component, OnInit } from '@angular/core';
import { Jugador } from './jugador.model';
import { Equipo } from './equipo.model';

@Component({
  selector: 'app-jugadores',
  templateUrl: './jugadores.component.html',
  styleUrls: ['./jugadores.component.css']
})
export class JugadoresComponent implements OnInit{
  ngOnInit(): void {
    this.jugadores=[
      new Jugador(1,'Jesús', 'A','AP',true),
      new Jugador(2,'Nacho', 'A','A',true),
      new Jugador(3,'Tallon', 'B','B',true),
      new Jugador(4,'Carlos', 'A','B',true),
      new Jugador(5,'Dani', 'B','P',true),
    ];
   console.log(this.jugadores);
   this.equipos=[
      new Equipo (1,"equipo1",([this.jugadores[0],this.jugadores[1]])),
      new Equipo (2,"equipo2",([this.jugadores[2],this.jugadores[3]]))
   ];
   this.jugadoresTotales= this.jugadores.length;
   console.log(this.equipos);
   console.log('jugadores totaleS: '+this.jugadoresTotales);
  }
  
  jugadores:Jugador[]=[];
  nombrePena='Nombre Peña';
  jugadoresSeleccionados:number = 0;
  contadorEquipos =2 ;
  jugadoresTotales :number= 0;
  
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
console.log(jugadorBuscado);
}
}
