
import { Conductor } from "../conductor";

export class CarroDto {
    placa: string;
    marca: string;
    conductor: Conductor;

    constructor(placa: string, marca: string, conductor: Conductor){
        this.placa = placa;
        this.marca = marca;
        this.conductor = conductor;
    }
}
