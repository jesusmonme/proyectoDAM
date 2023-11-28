import { Component, Input, OnInit } from '@angular/core';
import { Jugador } from '../../modelos/jugador.model';
import { JugadoresServiceService } from 'src/app/services/jugadores-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Penya } from 'src/app/modelos/penya.model';
import { PenyasServiceService } from 'src/app/services/penyas-service.service';

@Component({
  selector: 'app-crear-jugador',
  templateUrl: './crear-jugador.component.html',
  styleUrls: ['./crear-jugador.component.css']
})
export class CrearJugadorComponent implements OnInit {

  penya:Penya = new Penya();
  id:number;
  jugadores:Jugador[];
  jugadorCreado:Jugador=new Jugador();
  
  constructor(
    private servicioJugadores: JugadoresServiceService,
    private servicioPenya: PenyasServiceService,
    private route:Router,
    private router:ActivatedRoute) { 
  }

  ngOnInit(): void {
    this.id = this.router.snapshot.params['id'];
    this.servicioPenya.obtenerPenyaPorId(this.id).subscribe(
      {
        next: (datos) => this.penya=datos
        ,
        error: (error:any)=> console.log(error)
      }
    );
    this.servicioJugadores.obtenerJugadores(this.id).subscribe({
      next: (datos) => this.jugadores=datos
      ,
      error(error:any){console.log(error);
      }
    })  
    //pasamos el id de ruta para almacenarlo como idPenya
   // this.jugadorCreado.idPenya=Number(this.id);
    
    
  }
  
  onSubmit(){   
      this.crearJugador();    
  }

  //Metodo que almacena jugador creado y pasa idPenya de la ruta para que el backend
  //introduzca la penya e idPenya en la BD
  crearJugador() {
    //TODO poner en rojo campos no rellenos
    if (this.jugadorCreado.nombreJugador == "" || this.jugadorCreado.posicion =="" ) {
      alert('El nombre y posición deben estar rellenos');
    }
    else{     
      this.servicioJugadores.agregarJugador(this.jugadorCreado, this.id).subscribe({
        complete:() =>{
          alert(`Jugador ${this.jugadorCreado.nombreJugador} creado`);
          this.limpiarDatos();
        },
        error:(error:any) => {console.log(error)}
      });
    }
  }
  
  salir(){
    this.route.navigate(['jugadores/',this.penya.idPenya]);
  }

  limpiarDatos() {
   this.jugadorCreado=new Jugador();
    
  }

}
