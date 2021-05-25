export class Conductor {
    id?: number;
    nombre: string;
    apellido: string;
    cedula: string;

    constructor(id: number, nombre: string, apellido: string, cedula: string){
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.cedula = cedula;
    }
}
