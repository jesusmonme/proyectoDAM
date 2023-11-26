import { Injectable } from '@angular/core';
import { Jugador } from '../modelos/jugador.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JugadoresServiceService {

  private urlBase="http://localhost:8080/penyas-app/v1/jugadores";
  jugadores:Jugador[];
  constructor(private clienteHttp: HttpClient) { 

  }
  obtenerJugadores():Observable<Jugador[]>{
    return this.clienteHttp.get<Jugador[]>(this.urlBase);
}

//En este metodo recibimos un objeto de tipo Penya que vamos a enviar en nuestra peticion de tipo POST
//Va devolver un objeto de tipo Observable, y es un objeto de tipo Object, aunque es un Penya
agregarJugador(jugador: Jugador):Observable<Object> {
  return this.clienteHttp.post(this.urlBase, jugador);
}
obtenerJugadorPorId(id:number){
  return this.clienteHttp.get<Jugador>(`${this.urlBase}/${id}`);
  
}

editarJugador(id:number, jugador:Jugador):Observable<Object>{
  return this.clienteHttp.put(`${this.urlBase}/${id}`,jugador);
}

eliminarJugador(id:number): Observable<Object>{
  return this.clienteHttp.delete(`${this.urlBase}/${id}`);
}


  
  // jugadores:Jugador[];
  // //todo borrar cuando la base datos genere los ID
  // idContador:number=7;
  

  // agregarJugador(jugador:Jugador){
  //   jugador.id=this.idContador;
  //   this.jugadores.push(jugador);
  //   //todo borrar esto cuando lo haga la base de datos
  //   this.idContador++;
  //   alert('Jugador: '+jugador.nombre+' creado');
    
  // }
  // borrarJugador(jugador:Jugador){
  //   this.jugadores.splice(jugador.id-1,1);
  // }

  // editarJugador(){

  // }
  

}
