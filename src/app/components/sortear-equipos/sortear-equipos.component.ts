import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Equipo } from 'src/app/modelos/equipo.model';
import { Jugador } from 'src/app/modelos/jugador.model';
import { JugadoresServiceService } from 'src/app/services/jugadores-service.service';

@Component({
  selector: 'app-sortear-equipos',
  templateUrl: './sortear-equipos.component.html',
  styleUrls: ['./sortear-equipos.component.css']
})
export class SortearEquiposComponent {

  constructor( private servicioJugadores:JugadoresServiceService, private route:Router){

  } 
  @Input() equipos:Equipo[];
  

}
