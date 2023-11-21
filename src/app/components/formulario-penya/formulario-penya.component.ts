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
  
  modalCrearJugador=false;
  penyaCreada:Penya=new Penya();
  constructor(private router:Router, private servicioPenya:PenyasServiceService){

  }
  
  onSubmit(){
    this.crearPenya();
  }

 
  //TODO valorar como enlazar esto y si numerico o string
 
  nombreEquipo1:string="equipo1";
  nombreEquipo2:string="equipo2";
  nombreEquipo3:string;
  nombreEquipo4:string;
  nombreEquipo5:string;
  

crearPenya(){
    this.servicioPenya.agregarPenya(this.penyaCreada).subscribe(
      {
      next:(datos)=>{
        alert(`Peña ${this.penyaCreada.nombrePenya} creada`);
        this.irListaPenyas();
      },
      error:(error:any)=>{console.log(error)}
    }
    );
    
  }

  irListaPenyas(){
  this.router.navigate(['home'])
  }

  //TODO ver si eliminar el botón de salir
salir(){
  this.router.navigate(['home']);
}
}
