import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Carro } from './../modelo/carro';
import { CarroDto } from './../modelo/dtos/carro-dto';

@Injectable({
  providedIn: 'root'
})
export class CarroService {

  constructor(private http: HttpClient) { }

  eliminarCarro(id: number): Observable<number>{
    return this.http.delete<number>(environment.ELIMINAR_CARRO + id);
  }

  consultarPorPlacaMarca(contrains: string): Observable<Carro[]>{
    return this.http.get<Carro[]>(environment.CONSULTAR_CARROS_PLACAMARCA + contrains);
  }

  consultarCarros(): Observable<Carro[]>{
    return this.http.get<Carro[]>(environment.CONSULTAR_CARROS);
  }

  registrarCarro(playload: CarroDto): Observable<number>{
    const header = new HttpHeaders();
    header.append('Content-Type', 'application/json');
    const options = ({ headers: header });
    return this.http.post<number>(environment.REGISTRAR_CARRO, playload, options);
  }

}
