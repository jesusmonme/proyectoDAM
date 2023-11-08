import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Penya } from 'src/app/modelos/penya.model';
import { PenyasServiceService } from 'src/app/services/penyas-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private router:Router, private penyaService:PenyasServiceService){
  
    
  }
  ngOnInit(): void {
    this.penyas=this.penyaService.penyas;
    console.log(this.penyas[0].jugadores?.length + this.penyas[0].nombre)
  }


  penyas:Penya[];

  crearPena(){
    this.router.navigate(['formularioPeña'])
  }

  irApenya(){
    this.router.navigate(['jugadores']);
  }
}
