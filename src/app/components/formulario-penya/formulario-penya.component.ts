import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Equipo } from 'src/app/modelos/equipo.model';
import { Penya } from 'src/app/modelos/penya.model';
import { EquipoServiceService } from 'src/app/services/equipo-service.service';
import { PenyasServiceService } from 'src/app/services/penyas-service.service';
import { lastValueFrom } from 'rxjs';
@Component({
  selector: 'app-formulario-pena',
  templateUrl: './formulario-penya.component.html',
  styleUrls: ['./formulario-penya.component.css']
})
export class FormularioPenyaComponent implements OnInit{
  penyaCreada:Penya=new Penya();
  equipo0= new Equipo();
  equipo1= new Equipo();
  equipo2= new Equipo();
  //equipos: Equipo[]=[];
  constructor(private router:Router, private servicioPenya:PenyasServiceService, 
    private servicioEquipo: EquipoServiceService){

  }
  ngOnInit(): void {

   
  }
  onSubmit(){
    this.crearPenya();
    
  }
  crearPenya(){
    if(this.penyaCreada.nombrePenya=="" || this.penyaCreada.nombreBD == "" 
      || this.penyaCreada.equipo1 == "" || this.penyaCreada.equipo2 =="" ){
        //TODO marcar en rojo campos obligatorios
        alert("Los campos: nombre, nombreBD, nombreEquipo1 y nombreEquipo2 tienen que estar rellenos");
      }
    else{
      this.servicioPenya.agregarPenya(this.penyaCreada).subscribe(
      {
      complete:()=>{      
        this.irListaPenyas();
        alert(`Peña ${this.penyaCreada.nombrePenya} creada, entra en ella para crear los jugadores`);
      },     
        error:(error:any)=>{console.log(error)}
    }
    );
    }
}
  //TODO valorar como enlazar esto y si numerico o string. Ahora mismo no sirve
 
  irListaPenyas(){
  this.router.navigate(['home'])
  }

  //TODO ver si eliminar el botón de salir
  salir(){
  this.router.navigate(['home']);
  }
}

