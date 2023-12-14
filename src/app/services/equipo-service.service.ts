import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Equipo } from '../modelos/equipo.model';
import { Observable } from 'rxjs';
import { Penya } from '../modelos/penya.model';

@Injectable({
  providedIn: 'root'
})
export class EquipoServiceService {
  //private urlBase="http://localhost:8080/penyas-app/v1/equipos"; 
 private urlBase="http://localhost:35640/penyas-app/v1/equipos";
  equipos: Equipo[];
  constructor(private clienteHttp : HttpClient) { }

  agregarEquipo(equipo: Equipo, idPenya: number):Observable<Penya> {
    return this.clienteHttp.post<Penya>(`${this.urlBase}/agregarEquipos/${idPenya}`, equipo);
  }

  obtenerEquipos(idPenya : number): Observable <Equipo[]> {
  return this.clienteHttp.get<Equipo[]>(`${this.urlBase}/penya/${idPenya}`);
  }

  obtenerEquipoPorId(idEquipo: number){
    return this.clienteHttp.get<Equipo>(`${this.urlBase}/${idEquipo}`);
    
  }


  //TODO valorar si hacer dos metodos uno por cada equipo
  editarNombreEquipo(idEquipo: number, equipo: Equipo):Observable<Object>{  
    return this.clienteHttp.put(`${this.urlBase}/${idEquipo}`,equipo);
  }
}
