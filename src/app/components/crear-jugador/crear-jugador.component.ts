import { Component } from '@angular/core';
import { Jugador } from '../jugadores/jugador.model';

@Component({
  selector: 'app-crear-jugador',
  templateUrl: './crear-jugador.component.html',
  styleUrls: ['./crear-jugador.component.css']
})
export class CrearJugadorComponent {
    jugadores=[
    new Jugador(1,'Jesús', 'A','AP',true),
    new Jugador(2,'Nacho', 'A','A',true),
    new Jugador(3,'Tallon', 'B','B',true),
    new Jugador(4,'Carlos', 'A','B',true),
    new Jugador(5,'Dani', 'B','P',true),
  ];

  nombre:string='';
  posicion:string='';
  descripcion:string='';
  email:string='';
  nivel:string='';
  incompatibilidad:string='';
  miembro:boolean=true;

  crearJugador(){
     if(this.nombre==""){
      alert('El campo nombre debe estar relleno');
     }
     else{
    let jugador1=new Jugador(1,this.nombre,this.nivel,this.posicion,this.miembro,this.descripcion,this.incompatibilidad,this.email);
    this.jugadores.push(jugador1);
    console.log(this.jugadores);
    console.log(jugador1);
     }
    }
  
}
