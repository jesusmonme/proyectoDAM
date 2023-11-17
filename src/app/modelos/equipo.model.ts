import { Jugador } from "./jugador.model";

export class Equipo{    
    constructor(public jugadores:Jugador[],public id?:number,public nombre?:string){
        this.id=id;
        this.nombre=nombre;
        this.jugadores=jugadores;
    }
}