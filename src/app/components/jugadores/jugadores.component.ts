import { Component, OnInit } from '@angular/core';
import { Jugador } from './jugador.model';

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
  }
 
  jugadores:Jugador[]=[];
  nombrePena='Nombre Peña';
  jugadoresSeleccionados:number = 0;
  contadorEquipos =2 ;
  jugadoresTotales = this.jugadores.length + 1;
  
  
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
    }
    else{  
       jugadorBuscado.jugadorSeleccionado=false;     
    }
}
console.log(jugadorBuscado);
}
}
