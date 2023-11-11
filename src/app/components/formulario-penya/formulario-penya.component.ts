import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Penya } from 'src/app/modelos/penya.model';
import { PenyasServiceService } from 'src/app/services/penyas-service.service';

@Component({
  selector: 'app-formulario-pena',
  templateUrl: './formulario-penya.component.html',
  styleUrls: ['./formulario-penya.component.css']
})
export class FormularioPenyaComponent {
  constructor(private router:Router, private servicioPenya:PenyasServiceService){

  }
  modalCrearJugador=false;
  penyaCreada:Penya;

  idPenya:number;
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
  considerarIncompatibilidades:boolean=true;
  nombreEquipo1:string;
  nombreEquipo2:string;
  nombreEquipo3:string;
  nombreEquipo4:string;
  nombreEquipo5:string;
  
  nombreEquipos:string[]=[];

crearPena(){
  //TODO metodo para crear peña
  if (this.nombre && this.nombreBD){

    this.penyaCreada=new Penya(1,this.nombre,this.nombreBD,this.puntosVictoria,this.puntosEmpate,
        this.puntosDerrota,this.sorteo,this.equilibrarNiveles,this.equilibrarPosiciones,
        this.considerarIncompatibilidades,[],this.nombreEquipos,this.cuota);
    this.servicioPenya.crearPenya(this.penyaCreada);
    this.modalCrearJugador=true;
  }
  else{
    alert('Los campos Nombre y NombreBD tienen que estar rellenos')
  }
    
   
}

salir(){
  this.router.navigate(['home']);
}
}
