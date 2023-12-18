import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Jugador } from 'src/app/modelos/jugador.model';
import { Penya } from 'src/app/modelos/penya.model';
import { JugadoresServiceService } from 'src/app/services/jugadores-service.service';
import { PenyasServiceService } from 'src/app/services/penyas-service.service';

@Component({
  selector: 'app-clasificacion',
  templateUrl: './clasificacion.component.html',
  styleUrls: ['./clasificacion.component.css'],
})
export class ClasificacionComponent {
  penya: Penya = new Penya();
  @Input() idPenya: number;
  jugadores: Jugador[] = [];
  jugadoresClasificacion: Jugador[];
  // @Input() jugadores: Jugador[];

  @Input() modalClasificacion: boolean;
  @Output() salirClasificacion = new EventEmitter<boolean>();

  constructor(
    private servicioJugadores: JugadoresServiceService,
    private servicioPenyas: PenyasServiceService    
  ) {}
  ngOnInit(): void {

    this.servicioPenyas.obtenerPenyaPorId(this.idPenya).subscribe({
      next: (datos) => (this.penya = datos),
      error: (error: any) => console.log(error),
    });

    this.obtenerJugadores();

  }

  private obtenerJugadores() {
    //Consumir los datos del observable (suscribir)

    this.servicioJugadores.obtenerJugadores(this.idPenya).subscribe({
      next: (datos) => {
        this.jugadores = datos;
      },
      complete: () => {
        let jugadoresCopia = this.jugadores;
        this.jugadoresClasificacion = jugadoresCopia.sort(
          (jugadorA, jugadorB) => {
            if (jugadorA.ratio > jugadorB.ratio) {
              return -1;
            } else if (jugadorA.ratio > jugadorB.ratio) {
              return 1;
            } else {
              return 0;
            }
          }
        );
      },
      error: (error: any) => {
        console.log(error);
      },
    });
  }
  volver() {
    this.salirClasificacion.emit(false);
  }
  
}
