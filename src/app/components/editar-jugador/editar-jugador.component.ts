import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Jugador } from 'src/app/modelos/jugador.model';
import { Penya } from 'src/app/modelos/penya.model';
import { JugadoresServiceService } from 'src/app/services/jugadores-service.service';
import { PenyasServiceService } from 'src/app/services/penyas-service.service';

@Component({
  selector: 'app-editar-jugador',
  templateUrl: './editar-jugador.component.html',
  styleUrls: ['./editar-jugador.component.css']
})
export class EditarJugadorComponent {
  idJugador:number;
  idPenya:number;
  jugadores:Jugador[];
  jugadorEditar:Jugador=new Jugador();
  
  constructor(
    private servicioJugadores: JugadoresServiceService,
    private route:Router,
    private router:ActivatedRoute) { 
  }

  ngOnInit(): void {
    this.idJugador = this.router.snapshot.params['idJugador'];
    this.idPenya = this.router.snapshot.params['idPenya'];
    this.servicioJugadores.obtenerJugadorPorId(this.idJugador).subscribe(
      {
        next: (datos) => this.jugadorEditar=datos
        ,
        error: (error:any)=> console.log(error)
      }
      
    );
   
    this.obtenerJugadores(); 
  }
  private obtenerJugadores(){

    //Consumir los datos del observable (suscribir)
    this.servicioJugadores.obtenerJugadores(this.idPenya).subscribe({
      next: (datos)=> {
        this.jugadores=datos;
      }
      
    }
    );
   
  }
  onSubmit(){   
          this.editarJugador();    
  }

  //Metodo que almacena jugador creado y pasa idPenya de la ruta para que el backend
  //introduzca la penya e idPenya en la BD
  editarJugador() {
    //TODO poner en rojo campos no rellenos
    if (this.jugadorEditar.nombreJugador == "" || this.jugadorEditar.posicion =="" ) {
      alert('El nombre y posición deben estar rellenos');
    }
    else{     
     // this.servicioJugadores.agregarJugador(this.jugadorEditar, this.idPenya).subscribe({
      this.servicioJugadores.editarJugador(this.jugadorEditar).subscribe({

        complete:() =>{
          alert(`Jugador ${this.jugadorEditar.nombreJugador} editado`);
          this.salir();
        },
        error:(error:any) => {console.log(error)}
      });
    }
  }
  
  salir(){
    this.route.navigate(['jugadores/',this.idPenya]);
  }
}

