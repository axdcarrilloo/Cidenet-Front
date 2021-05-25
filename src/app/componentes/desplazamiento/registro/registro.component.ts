import { ChangeDetectorRef, Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Carro } from 'src/app/modelo/carro';
import { CarroService } from './../../../servicios/carro.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  desplazamientoForm: FormGroup;
  carros: Carro[] = [];

  constructor(private fb: FormBuilder, private carroService: CarroService) { 
    this.desplazamientoForm = this.buildForm();
  }

  ngOnInit(): void {}

  guardar(event: any): void {
    
  }

  cargarCarros(): void{
    this.carroService.consultarCarros().subscribe((datos: Carro[]) => {
      this.carros = datos;
    });
  }

  buildForm(): FormGroup {
    return this.fb.group({
      placaCarro: ['',  [Validators.required]],
      origen: ['',  [Validators.required]],
      destino: ['',  [Validators.required]],
      fechaOrigen: ['',  [Validators.required]],
      fechaDestino: ['',  [Validators.required]],
    });
  }

}
