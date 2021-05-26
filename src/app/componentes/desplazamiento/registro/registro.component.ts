import { ChangeDetectorRef, Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Carro } from 'src/app/modelo/carro';
import { NotificacionesComponent } from '../../notificaciones/notificaciones.component';
import { CarroService } from './../../../servicios/carro.service';
import { DesplazamientoService } from './../../../servicios/desplazamiento.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  desplazamientoForm: FormGroup;
  carros: Carro[] = [];

  constructor(private fb: FormBuilder, private carroService: CarroService,
              private desplamientoService: DesplazamientoService, private dialog: MatDialog) { 
    this.desplazamientoForm = this.buildForm();
  }

  ngOnInit(): void {
    this.cargarCarros();
  }

  notificacionCarroNoExistente(): void{
    const info = ['Error de registro',
      'Este carro no se encuentra registrado', 'warning'];
    this.dialog.open(
      NotificacionesComponent, {data: info
    // tslint:disable-next-line: deprecation
    }).afterClosed().subscribe((confirmed: boolean) => {
      if (confirmed){
        console.log('Se acepto');
      }else{
        console.log('Se rechazo');
      }
    });
  }

  notificacionMensajeExitoso(): void{
    const info = ['Registro exitoso', 'El desplazamiento se registro satisfactoriamente', 'success'];
    this.dialog.open(
      NotificacionesComponent, {data: info
    // tslint:disable-next-line: deprecation
    }).afterClosed().subscribe((confirmed: boolean) => {
      if (confirmed){
        console.log('Se acepto');
      }else{
        console.log('Se rechazo');
      }
    });
  }

  guardar(): void {
    console.log(this.desplazamientoForm.value);
    this.desplamientoService.registrar(this.desplazamientoForm.value).subscribe((dato: number) => {
      if(dato > 0){
        this.notificacionMensajeExitoso();
      }
      if(dato < 0){
        this.notificacionCarroNoExistente();
      }
      this.desplazamientoForm.reset();
    });
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
