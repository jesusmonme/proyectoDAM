import { Jugador } from "./jugador.model";

export class Equipo{    
    constructor(public id:number,public nombre:string,public jugadores:Jugador[]){
        this.id=id;
        this.nombre=nombre;
        this.jugadores=jugadores;
    }
}