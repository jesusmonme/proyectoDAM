export class Jugador{
        public idJugador:number;

        public nombreJugador:string=''

        public idEquipo:number

        public idPenya:number

        public nivel:string=''

        public posicion:string=''

        public miembro:boolean=true;

        public descripcion?:string

        public incompatibilidad?:string="";

        public email?:string

        public partidosGanados:number=0

        public partidosEmpatados:number=0

        public partidosPerdidos:number=0

        public ratio:number=0

        public ultimoPartido?:string

        public jugadorSeleccionado:boolean=false
}