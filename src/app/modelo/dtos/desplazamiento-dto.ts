export class DesplazamientoDto {
    placaCarro: string;
    origen: string;
    destino: string;
    fechaOrigen: Date;
    fechaDestino: Date;
    
    constructor(id: number, placaCarro: string, origen: string, destino: string, 
                fechaOrigen: Date, fechaDestino: Date){
        this.placaCarro = placaCarro;
        this.origen = origen;
        this.destino = destino;
        this.fechaOrigen = fechaOrigen;
        this.fechaDestino = fechaDestino;
    }
}
