import { Component, OnInit } from '@angular/core';
import { Jugador } from '../../modelos/jugador.model';
import { Equipo } from '../../modelos/equipo.model';
import { JugadoresServiceService } from 'src/app/services/jugadores-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PenyasServiceService } from 'src/app/services/penyas-service.service';
import { Penya } from 'src/app/modelos/penya.model';

@Component({
  selector: 'app-jugadores',
  templateUrl: './jugadores.component.html',
  styleUrls: ['./jugadores.component.css']
})
export class JugadoresComponent implements OnInit {

  penya: Penya = new Penya();
  id: number;
  jugadores: Jugador[] = [];
  modalSorteo = false;
  jugadoresSeleccionados: number = 0;
  contadorEquipos = 2;
  jugadoresConvocados: Jugador[] = [];
  modalResultado: boolean = false;
  jugadorConCambiosPartidos?: Jugador;
  modalClasificacion: boolean=false;
  modalJugadores:boolean= true;
  
  constructor(private servicioJugadores: JugadoresServiceService,
    private servicioPenyas: PenyasServiceService,
    private route: Router, private router: ActivatedRoute) {

  }


  ngOnInit(): void {
    this.jugadoresConvocados=[];
    this.modalClasificacion=false;
    this.modalJugadores=true;
    this.id = this.router.snapshot.params['id'];
    this.servicioPenyas.obtenerPenyaPorId(this.id).subscribe({
      next: (datos) => this.penya = datos,
      error: (error: any) => console.log(error)
    }
    );
    this.obtenerJugadores();

  }

  private obtenerJugadores() {
    //Consumir los datos del observable (suscribir)
    this.servicioJugadores.obtenerJugadores(this.id).subscribe({
      next: (datos) => {
        this.jugadores = datos;
      }

    }
    );
  }
 
  // sumarContador() {
  //   //TODO si al final no hay tiempo para que puedan ser mas de 2equipos, mandar alerta "version premium"
  //   if (this.contadorEquipos >= 2) {
  //     this.contadorEquipos = ++this.contadorEquipos;

  //   }
  //   else {
  //     this.contadorEquipos = 2;
  //   }
  // }
  // restarContador() {
  //   if (this.contadorEquipos > 2) {
  //     this.contadorEquipos = --this.contadorEquipos;
  //   }
  //   else {
  //     this.contadorEquipos = 2;
  //   }
  // }
  crearJugadores() {
    this.route.navigate(['crearJugador/', this.id]);
    
  }


  seleccionarJugador(idJugador: number) {
    const jugadorBuscado = this.jugadores.find((elemento) => elemento.idJugador == idJugador);
    if (jugadorBuscado) {
      if (jugadorBuscado.jugadorSeleccionado == false) {
        jugadorBuscado.jugadorSeleccionado = true;       
        this.jugadoresConvocados.push(jugadorBuscado);
        this.jugadoresSeleccionados++;
      }
      else {
        jugadorBuscado.jugadorSeleccionado = false;
        this.jugadoresSeleccionados--;      
        this.jugadoresConvocados = this.jugadoresConvocados.filter(j => j.idJugador !== jugadorBuscado.idJugador);


      }
    }

  }
  borrarJugador(jugadorAborrar: Jugador) {

    let confirmacion = confirm("seguro que quieres eliminar al jugador: " + jugadorAborrar.nombreJugador + '?');
    if (confirmacion) {
      this.servicioJugadores.eliminarJugador(jugadorAborrar.idJugador).subscribe(
        {
          next: (datos) => this.obtenerJugadores(),
          complete: () => {
            alert(`Jugador ${jugadorAborrar.nombreJugador} eliminado`);
          },
          error: (errores) => console.log(errores)
          ,
        }
      );
      
    }
  }


  editarJugador(idJugador: number, idPenya: number) {
    this.route.navigate(['/jugadores/', idPenya, idJugador]);
  }

  salir() {
    this.route.navigate(['home']);
  }

  equipo1: Jugador[] = [];
  equipo2: Jugador[] = [];
  

  //Sorteo de equipos en base al nivel
  hacerEquipos(jugadores:Jugador[]){
    
    this.equipo1=[];
    this.equipo2=[];
    // Crear una copia del array antes de ordenar por nivel
    jugadores.sort((jugadorA, jugadorB) => {
      if (jugadorA.nivel < jugadorB.nivel) {
        return -1;
      } else if (jugadorA.nivel > jugadorB.nivel) {
        return 1;
      } else {
        return 0;
      }
    });
    
    
    for(let jugador of jugadores){
      if(jugadores.indexOf(jugador) %2 ==0){
        
        this.equipo1.push(jugador)
      }
      else{
        this.equipo2.push(jugador)
      }    
    }
    this.modalSorteo=true;
  }
  volver(){
    this.modalSorteo=false;
  }

  mostrarModalResultado(){
    this.modalResultado = true;
  }
  //viene del hijo "sortearEquipos"
  cambiarModalResultado(modalResultado:boolean): void{
    this.modalResultado=modalResultado;
    //cuando se cierre la modal resultado pone contador jugadores seleccionados y convocados a 0
    this.jugadoresSeleccionados=0;
    this.jugadoresConvocados=[];
  }

  irClasificacion(){   
    this.modalClasificacion=true;
    this.modalResultado=false;
    this.modalSorteo=false;
    this.modalJugadores=false;
  }

  cambiarModalClasificacion(modalClasificacion:boolean):void{
    this.modalClasificacion=modalClasificacion;
    this.modalJugadores=true;
  }
  

}

