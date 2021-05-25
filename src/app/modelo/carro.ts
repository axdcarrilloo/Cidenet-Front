
import { Conductor } from './conductor';

export class Carro {
    id?: number;
    placa: string;
    marca: string;
    conductor: Conductor;

    constructor(id: number, placa: string, marca: string, conductor: Conductor){
        this.id;
        this.placa = placa;
        this.marca = marca;
        this.conductor = conductor;
    }
}
