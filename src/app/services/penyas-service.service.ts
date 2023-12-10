import { Injectable } from '@angular/core';
import { Penya } from '../modelos/penya.model';
import {HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Equipo } from '../modelos/equipo.model';
@Injectable({
  providedIn: 'root'
})
export class PenyasServiceService {

  private urlBase="http://localhost:8080/penyas-app/v1/penyas";
  penyas:Penya[];
  

constructor(private clienteHttp: HttpClient) { 

}

obtenerPenyas():Observable<Penya[]>{
    return this.clienteHttp.get<Penya[]>(this.urlBase);
}

//En este metodo recibimos un objeto de tipo Penya que vamos a enviar en nuestra peticion de tipo POST
//Va devolver un objeto de tipo Observable, y es un objeto de tipo Object, aunque es un Penya
agregarPenya(penya: Penya):Observable<Penya> {

  return this.clienteHttp.post<Penya>(this.urlBase, penya);
}

obtenerPenyaPorId(id:number){
  return this.clienteHttp.get<Penya>(`${this.urlBase}/${id}`);
  
}

editarPenya(id:number, penya:Penya):Observable<Object>{
  return this.clienteHttp.put(`${this.urlBase}/${id}`,penya);
}

eliminarPenya(id:number): Observable<Object>{
  return this.clienteHttp.delete(`${this.urlBase}/${id}`);
}


}
