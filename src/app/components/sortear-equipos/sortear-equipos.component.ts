import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Equipo } from 'src/app/modelos/equipo.model';
import { Jugador } from 'src/app/modelos/jugador.model';
import { EquipoServiceService } from 'src/app/services/equipo-service.service';


@Component({
  selector: 'app-sortear-equipos',
  templateUrl: './sortear-equipos.component.html',
  styleUrls: ['./sortear-equipos.component.css']
})
export class SortearEquiposComponent implements OnInit{
  @Input() equipo1:Jugador[];
  @Input() equipo2:Jugador[];
  @Input() idPenya:number;
  @Input() modalSorteo:boolean;
  equipos: Equipo[]=[];
  
  nombreEquipo1:String;
  nombreEquipo2:String;
  constructor( private route:Router, private servicioEquipo: EquipoServiceService){
  } 
  ngOnInit(): void {
    this.servicioEquipo.obtenerEquipos(this.idPenya).subscribe({
      next: (datos) => this.equipos = datos,
      error: (error: any) => console.log(error)
    }
    );
  }

volver(){
  this.modalSorteo=false;
  this.route.navigate(['jugadores/',this.idPenya]);
}

}
