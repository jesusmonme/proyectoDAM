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
//   obtenerJugadores():Observable<Jugador[]>{
//     return this.clienteHttp.get<Jugador[]>(this.urlBase);
// }

obtenerJugadores(idPenya: number): Observable<Jugador[]> {
  const url = `${this.urlBase}/${idPenya}`;
  return this.clienteHttp.get<Jugador[]>(url);
}


//En este metodo recibimos un objeto de tipo Penya que vamos a enviar en nuestra peticion de tipo POST
//Va devolver un objeto de tipo Observable, y es un objeto de tipo Object, aunque es un Jugador

agregarJugador(jugador: Jugador, id:number):Observable<Object> {
  
  return this.clienteHttp.post(`${this.urlBase}/crearJugador/${id}`, jugador);
}
//TODO ver si esto es mas correcto
// agregarJugador(jugador: Jugador, id: number): Observable<Jugador> {
//   return this.clienteHttp.post<Jugador>(`${this.urlBase}/crearJugador/${id}`, jugador);
// }
obtenerJugadorPorId(id:number){
  return this.clienteHttp.get<Jugador>(`${this.urlBase}/jugador/${id}`);
  
}

editarJugador(id:number, jugador:Jugador):Observable<Object>{
  return this.clienteHttp.put(`${this.urlBase}/${id}`,jugador);
}

eliminarJugador(id:number): Observable<Object>{
  return this.clienteHttp.delete(`${this.urlBase}/${id}`);
}
}
