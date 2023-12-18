import { Injectable } from '@angular/core';
import { Jugador } from '../modelos/jugador.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JugadoresServiceService {
  
  //private urlBase="http://localhost:8080/penyas-app/v1/jugadores";
  private urlBase="http://localhost:35640/penyas-app/v1/jugadores";
  jugadores:Jugador[];
  constructor(private clienteHttp: HttpClient) { 

  }
//   obtenerJugadores():Observable<Jugador[]>{
//     return this.clienteHttp.get<Jugador[]>(this.urlBase);
// }

obtenerJugadores(idPenya: number): Observable<Jugador[]> {
  const url = `${this.urlBase}/${idPenya}`;
  return this.clienteHttp.get<Jugador[]>(url);
  
}
//En este metodo recibimos un objeto de tipo Jugador que vamos a enviar en nuestra peticion de tipo POST
//Va devolver un objeto de tipo Observable, y es un objeto de tipo Object, aunque es un Jugador
agregarJugador(jugador: Jugador, idPenya:number):Observable<Object> {
  
  return this.clienteHttp.post(`${this.urlBase}/crearJugador/${idPenya}`, jugador);
}
//TODO ver si esto es mas correcto
// agregarJugador(jugador: Jugador, id: number): Observable<Jugador> {
//   return this.clienteHttp.post<Jugador>(`${this.urlBase}/crearJugador/${id}`, jugador);
// }

editarJugador(jugador:Jugador):Observable<Object>{
  return this.clienteHttp.put(`${this.urlBase}/editarJugador`,jugador);
}

obtenerJugadorPorId(id:number){
  return this.clienteHttp.get<Jugador>(`${this.urlBase}/jugador/${id}`);
  
}

eliminarJugador(idJugador:number): Observable<Object>{
  return this.clienteHttp.delete(`${this.urlBase}/borrarJugador/${idJugador}`);
}
}
