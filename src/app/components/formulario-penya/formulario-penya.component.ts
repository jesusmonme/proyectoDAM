import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario-pena',
  templateUrl: './formulario-penya.component.html',
  styleUrls: ['./formulario-penya.component.css']
})
export class FormularioPenyaComponent {
  constructor(private router:Router){

  }

  nombre:string;
  nombreBD:string;
  cuota:number;
  puntosVictoria:number=3;
  puntosEmpate:number=1;
  puntosDerrota:number=0;
  //TODO valorar si numerico o string
  sorteo:number;
  equilibrarNiveles:boolean=true;
  equilibrarPosiciones:boolean=true;
  considerarIncompatibilidades:boolean=false;
  nombreEquipos:string[]=[];
crearPena(){
  //todo metodo para crear peña

  this.router.navigate(['home']);
}

salir(){
  this.router.navigate(['home']);
}
}
