import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Desplazamiento } from '../modelo/desplazamiento';
import { DesplazamientoDto } from './../modelo/dtos/desplazamiento-dto';

@Injectable({
  providedIn: 'root'
})
export class DesplazamientoService {

  constructor(private http: HttpClient) { }

  consultarPorPlaca(placa: string): Observable<Desplazamiento>{
    return this.http.get<Desplazamiento>(environment.CONSULTAR_DESPLAZAMIENTO_PLACA + placa);
  }

  eliminar(id: number): Observable<number>{
    return this.http.delete<number>(environment.ELIMINAR_DESPLAZAMIENTO + id);
  }

  consultarTodos(): Observable<Desplazamiento[]>{
    return this.http.get<Desplazamiento[]>(environment.CONSULTAR_DESPLAZAMIENTO);
  }

  registrar(playload: DesplazamientoDto): Observable<number>{
    const header = new HttpHeaders();
    header.append('Content-Type', 'application/json');
    const options = ({ headers: header });
    return this.http.post<number>(environment.REGISTRAR_DESPLAZAMIENTO, playload, options);
  }
}
