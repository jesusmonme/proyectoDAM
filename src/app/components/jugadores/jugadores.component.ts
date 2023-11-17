import { Component, OnInit } from '@angular/core';
import { Jugador } from '../../modelos/jugador.model';
import { Equipo } from '../../modelos/equipo.model';
import { JugadoresServiceService } from 'src/app/services/jugadores-service.service';
import { Router } from '@angular/router';
import { PenyasServiceService } from 'src/app/services/penyas-service.service';
import { Penya } from 'src/app/modelos/penya.model';

@Component({
  selector: 'app-jugadores',
  templateUrl: './jugadores.component.html',
  styleUrls: ['./jugadores.component.css']
})
export class JugadoresComponent implements OnInit {

  constructor(private servicioJugadores: JugadoresServiceService,
    private servicioPenyas: PenyasServiceService,
    private route: Router) {

  }

  ngOnInit(): void {
    // this.jugadores = this.servicioJugadores.jugadores;
    this.jugadores = this.servicioPenyas.penyas[0].jugadores;
    this.penya=this.servicioPenyas.penyas[0];

  }

  jugadores: Jugador[];
  penya:Penya;
  modalSorteo=false;

  //TODO corregir cuando pasemos un id al indice array peñas
  nombrePenya = this.servicioPenyas.penyas[0].nombrePenya;
  jugadoresSeleccionados: number = 0;
  contadorEquipos = 2;
  
  jugadoresConvocados: Jugador[] = [];

  //ver como gestionar el sorteo equipos,si metiendo cada uno en array o
  //en un solo por si habilito mas de 2equipos y coger tramos para cada equipo
  
  equipo1:Equipo=new Equipo([],1,'Equipo1');
  equipo2:Equipo=new Equipo([],2,'Equipo2');
  equipos: Equipo[] = [this.equipo1,this.equipo2];

  // ver como asociar imagenes a un valor, estas variables no se si al final las usare
  iconoUltimoPartido = [1, 2, 3];
  iconoMiembro = ['SI', 'NO'];
  iconoRatio = [1, 2, 3];
 

  sumarContador() {
    //TODO si al final no hay tiempo para que puedan ser mas de 2equipos, mandar alerta "version premium"
    if (this.contadorEquipos >= 2) {
      this.contadorEquipos = ++this.contadorEquipos;

    }
    else {
      this.contadorEquipos = 2;
    }
  }
  restarContador() {
    if (this.contadorEquipos > 2) {
      this.contadorEquipos = --this.contadorEquipos;
    }
    else {
      this.contadorEquipos = 2;
    }
  }
  crearJugadores() {
    this.route.navigate(['crearJugador']);
  }

  seleccionarJugador(idJugador: number) {
    const jugadorBuscado = this.jugadores.find((elemento) => elemento.id == idJugador);
    if (jugadorBuscado) {
      if (jugadorBuscado.jugadorSeleccionado == false) {
        jugadorBuscado.jugadorSeleccionado = true;
        this.jugadoresSeleccionados++;

        this.jugadoresConvocados.push(jugadorBuscado);

      }
      else {
        jugadorBuscado.jugadorSeleccionado = false;
        this.jugadoresSeleccionados--;
        this.jugadoresConvocados = this.jugadoresConvocados.filter(j => j.id !== jugadorBuscado.id);


      }
    }
    console.log('jugador buscado:' + jugadorBuscado);
  }
  borrarJugador(jugadorAborrar: Jugador) {

    let confirmacion = confirm("seguro que quieres eliminar al jugador: " + jugadorAborrar.nombre + '?');
    if (confirmacion) {
      this.servicioJugadores.borrarJugador(jugadorAborrar);
      this.jugadoresSeleccionados--;
    }
  }

  sortearEquipos() {
    //Probando para separar equipos sin equilibrar, solo meter parres en un lado e impares en otro
   
    this.modalSorteo=true;
    for(let i=0;i<this.jugadoresConvocados.length;i++){
      if(this.jugadoresConvocados.length % i !=0){
        this.equipo1.jugadores.push(this.jugadoresConvocados[i]);
      }
      else{
        this.equipo2.jugadores.push(this.jugadoresConvocados[i]);
      }

    }
    // this.route.navigate(['sorteo']);
  }
  volver(){
    this.modalSorteo=false;
    //TODO ver si es necesario
    //vaciar equipos al volver del sorteo 
    this.equipo1=new Equipo([],1,'Equipo1');
    this.equipo2=new Equipo([],2,'Equipo2');
    this.equipos=[this.equipo1,this.equipo2];
  }


}

