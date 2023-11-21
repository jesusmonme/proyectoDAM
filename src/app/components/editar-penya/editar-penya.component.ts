import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Penya } from 'src/app/modelos/penya.model';
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
 
    nombreEquipo1:string="equipo1";
    nombreEquipo2:string="equipo2";
    nombreEquipo3:string;
    nombreEquipo4:string;
    nombreEquipo5:string;

    constructor(private penyaServicio: PenyasServiceService, private router:ActivatedRoute,
      private route: Router){}

    ngOnInit(){
      this.id=this.router.snapshot.params['id'];
      this.penyaServicio.obtenerPenyaPorId(this.id).subscribe(
        {
          next: (datos) => this.penya=datos
          ,
          error: (error:any)=> console.log(error)
        }
      );
    }

    onSubmit(){
      //editar producto
      
      this.guardarPenya();
     
      
    }
    salir(){
      this.irListaPenyas();
    }

    guardarPenya(){
        this.penyaServicio.editarPenya(this.id, this.penya).subscribe(
          {
          complete: () => this.irListaPenyas(),
          
          error: (errores) => (console.log(errores))
          }
        )
    }
    irListaPenyas(){
      
      this.route.navigate(['home']);
    }
}
