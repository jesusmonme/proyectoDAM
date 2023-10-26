import { Component } from '@angular/core';

@Component({
  selector: 'app-jugadores',
  templateUrl: './jugadores.component.html',
  styleUrls: ['./jugadores.component.css']
})
export class JugadoresComponent {
  jugadores=['Kexu','Migue','Nacho','Tallon','Leandro'];
  nombrePena='Nombre Peña';
  jugadoresSeleccionados:number = 0;
  contadorEquipos =2 ;
  jugadoresTotales = this.jugadores.length + 1;
  name:string = "Jesus";
  level = ['A', 'B', 'C', 'D', 'E'];
  position = ['P', 'AP', 'A', 'E', 'B'];
  iconoUltimoPartido =['^','~','v'];
  iconoMiembro=['SI','NO'];
  iconoRatio=['+','=','-'];

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
}
