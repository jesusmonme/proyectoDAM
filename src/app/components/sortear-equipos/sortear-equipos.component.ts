import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Equipo } from 'src/app/modelos/equipo.model';
import { Jugador } from 'src/app/modelos/jugador.model';
import { EquipoServiceService } from 'src/app/services/equipo-service.service';
import { JugadoresServiceService } from 'src/app/services/jugadores-service.service';


@Component({
  selector: 'app-sortear-equipos',
  templateUrl: './sortear-equipos.component.html',
  styleUrls: ['./sortear-equipos.component.css']
})
export class SortearEquiposComponent implements OnInit {
  @Input() equipo1?: Jugador[];
  @Input() equipo2?: Jugador[];
  @Input() idPenya: number;
  @Input() modalSorteo: boolean;
  @Input() modalResultado: boolean;
  equipos: Equipo[] = [];
  @Output() mensajeAlPadre = new EventEmitter<boolean>();
  equipoGanador: string = "";

  nombreEquipo1: String;
  nombreEquipo2: String;
  constructor(private route: Router, private servicioEquipo: EquipoServiceService,
    private servicioJugadores: JugadoresServiceService) {
  }
  ngOnInit(): void {
    this.servicioEquipo.obtenerEquipos(this.idPenya).subscribe({
      next: (datos) => this.equipos = datos,
      error: (error: any) => console.log(error)
    }
    );
  }

  volver() {
    this.modalSorteo = false;
    this.route.navigate(['jugadores/', this.idPenya]);
  }

  cerrarResultado() {
    this.mensajeAlPadre.emit(false);
  }
  guardarResultado(equipoGanador: string) {
    
    if (this.equipo1 && this.equipo2) {
      if (equipoGanador == '1') {
        for (const jugadorGanador of this.equipo1) {
          jugadorGanador.partidosGanados++;
          jugadorGanador.ratio = this.ratio(jugadorGanador.partidosGanados,jugadorGanador.partidosPerdidos);
          jugadorGanador.jugadorSeleccionado = false;
          this.servicioJugadores.editarJugador(jugadorGanador).subscribe({    
            error:(error:any) => {console.log(error)}
          });
        }
  
        for (const jugadorPerdedor of this.equipo2) {
          jugadorPerdedor.partidosPerdidos++;
          jugadorPerdedor.ratio = this.ratio(jugadorPerdedor.partidosGanados,jugadorPerdedor.partidosPerdidos);
          jugadorPerdedor.jugadorSeleccionado = false;
          this.servicioJugadores.editarJugador(jugadorPerdedor).subscribe({   
            error:(error:any) => {console.log(error)}
          });
        }
        
        alert("Equipo Ganador: "+ this.equipos[1].nombreEquipo + ". Puede anotar más partidos")
      }
      else{
        for (const jugadorGanador of this.equipo2) {
          jugadorGanador.partidosGanados++;
          jugadorGanador.ratio = this.ratio(jugadorGanador.partidosGanados,jugadorGanador.partidosPerdidos);
          jugadorGanador.jugadorSeleccionado = false;
          this.servicioJugadores.editarJugador(jugadorGanador).subscribe({  
            error:(error:any) => {console.log(error)}
          });
        }
        for (const jugadorPerdedor of this.equipo1) {
          jugadorPerdedor.partidosPerdidos++;
          jugadorPerdedor.ratio = this.ratio(jugadorPerdedor.partidosGanados,jugadorPerdedor.partidosPerdidos);
          jugadorPerdedor.jugadorSeleccionado = false;
          this.servicioJugadores.editarJugador(jugadorPerdedor).subscribe({  
            error:(error:any) => {console.log(error)}
          });
        }
        alert("Equipo Ganador: "+ this.equipos[2].nombreEquipo + ". Puede anotar más partidos")
      }
    }   
  }
  ratio(partidosGanados: number, partidosPerdidos: number){
    return ((partidosGanados)/(partidosGanados+partidosPerdidos))*100;
  }
}
