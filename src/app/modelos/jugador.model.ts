export class Jugador{
    //TODO ver mejor manera de crear clase jugador
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
    jugadorSeleccionado:boolean=false;
    descripcion:string;
    incompatibilidad:string='';
    email:string='';
   
    
    // // Si pongo ? para que sea opcional me da errores en la asignacion de variable
    // constructor(id:number,nombre:string, nivel:string, posicion:string,miembro:boolean,
    //     descripcion?:string,incompatibilidad?:string,email?:string){
      
    //     this.id=id;
    //     this.nombre=nombre;
    //     this.nivel=nivel;
    //     this.posicion=posicion;
    //     this.miembro=miembro;
    //     this.descripcion = descripcion || ''; // Valor predeterminado si es undefined
    //     this.incompatibilidad = incompatibilidad || ''; // Valor predeterminado si es undefined
    //     this.email = email || ''; // Valor predeterminado si es undefined
    // }
    constructor(
        ){
            
        }

}