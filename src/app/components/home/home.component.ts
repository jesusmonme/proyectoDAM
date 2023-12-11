import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Penya } from 'src/app/modelos/penya.model';
import { JugadoresServiceService } from 'src/app/services/jugadores-service.service';
import { PenyasServiceService } from 'src/app/services/penyas-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  penyas:Penya[];
  constructor(private router:Router, private penyaService:PenyasServiceService,
    private servicioJugadores: JugadoresServiceService){
  
    
  }
  ngOnInit(): void {
    //cargamos las peñas
    this.obtenerPenyas();
    
  }

  private obtenerPenyas(){
    //Consumir los datos del observable (suscribir)
    this.penyaService.obtenerPenyas().subscribe(
      datos=> {
        this.penyas=datos;
      }
    );
  }

  crearPenya(){
    this.router.navigate(['formularioPeña'])
  }
  editarPenya(id:number){
    
    this.router.navigate(['editarPenya',id]);
  }

  eliminarPenya(id:number){
    let confirmacion = confirm("seguro que quieres eliminar la peña?");
    if (confirmacion) {
      this.penyaService.eliminarPenya(id).subscribe(
        {
          next:(datos) => this.obtenerPenyas(),
          error:(errores)=> console.log(errores)
        }
      );
    }

  }

  irAPenya(id:number){
    this.router.navigate(['jugadores/',id]);
  }
}
