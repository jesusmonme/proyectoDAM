import { Component } from '@angular/core';

@Component({
  selector: 'app-jugadores',
  templateUrl: './jugadores.component.html',
  styleUrls: ['./jugadores.component.css']
})
export class JugadoresComponent {
  contadorEquipos:number=2;
  jugadores=[];
  name:string="Jesus";
  level:string="A";
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
