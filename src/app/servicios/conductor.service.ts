
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Conductor } from './../modelo/conductor';

@Injectable({
  providedIn: 'root'
})
export class ConductorService {

  constructor(private http: HttpClient) { }

  consultarConductores(): Observable<Conductor[]>{
    return this.http.get<Conductor[]>(environment.CONSULTAR_CONDUCTORES);
  }
}
