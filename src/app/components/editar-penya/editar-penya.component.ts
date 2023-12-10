import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Equipo } from 'src/app/modelos/equipo.model';
import { Penya } from 'src/app/modelos/penya.model';
import { EquipoServiceService } from 'src/app/services/equipo-service.service';
import { PenyasServiceService } from 'src/app/services/penyas-service.service';

@Component({
  selector: 'app-editar-penya',
  templateUrl: './editar-penya.component.html',
  styleUrls: ['./editar-penya.component.css']
})
export class EditarPenyaComponent {
  penya: Penya = new Penya();
  id: number;
 
  //TODO valorar como enlazar esto y si numerico o string

  constructor(private penyaServicio: PenyasServiceService, private router: ActivatedRoute,
    private route: Router, private servicioEquipo: EquipoServiceService) { }

  ngOnInit() {
    this.id = this.router.snapshot.params['id'];
    this.penyaServicio.obtenerPenyaPorId(this.id).subscribe(
      {
        next: (datos) => this.penya = datos
        ,
        error: (error: any) => console.log(error)
      }
    );   
  }

  onSubmit() {
    this.guardarPenya();
  }
  salir() {
    this.irListaPenyas();
  }

  guardarPenya() {
    if(this.penya.nombrePenya=="" || this.penya.nombreBD == "" 
      || this.penya.equipo1 == "" || this.penya.equipo2 =="" ){
        //TODO marcar en rojo campos obligatorios
        alert("Los campos: nombre, nombreBD, nombreEquipo1 y nombreEquipo2 tienen que estar rellenos")
      }
      else{

        this.penyaServicio.editarPenya(this.id, this.penya).subscribe(
      {
        complete: () => {
          //this.actualizarNombresEquipos();
          alert(`Peña ${this.penya.nombrePenya} editada`);
          this.irListaPenyas();
        },

        error: (errores) => (console.log(errores))
      }
    )
      }
  }
  irListaPenyas() {

    this.route.navigate(['home']);
  }
}
