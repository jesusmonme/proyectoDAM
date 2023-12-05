import { Jugador } from "./jugador.model";

export class Penya{
  
    
        public idPenya:number;
        public nombrePenya:string; 
        public nombreBD:string;
        public puntosVictoria:number;
        public puntosEmpate:number;
        public puntosDerrota:number;
        //TODO valorar si numerico o string el sorteo
        public sorteo:number;
        public equilibrarNiveles:boolean;
        public equilibrarPosiciones:boolean;
        public considerarIncompatibilidades:boolean;
        //public jugadores:Jugador[]=[];
        public nombreEquipos?:string[];
        public cuota?:number;
        
                
        
    }

