export class Jugador{
    id:number=0;
    nombre:string="";
    nivel:string="";
    posicion:string="";
    partidosGanados:number=0;
    partidosPerdidos:number=0;
    partidosEmpatados:number=0;
    miembro:boolean=true;
    ratio:number=0;
    ultimoPartido:string='W';
    jugadorSeleccionado=false;

    constructor(id:number,nombre:string, nivel:string, posicion:string,miembro:boolean ){
        this.id=id;
        this.nombre=nombre;
        this.nivel=nivel;
        this.posicion=posicion;
        this.miembro=miembro;
    }
}