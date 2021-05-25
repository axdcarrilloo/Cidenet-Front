import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Conductor } from './../../../modelo/conductor';
import { ConductorService } from './../../../servicios/conductor.service';
import { CarroService } from './../../../servicios/carro.service';
import { MatDialog } from '@angular/material/dialog';
import { NotificacionesComponent } from '../../notificaciones/notificaciones.component';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  carroForm: FormGroup;
  conductoresRegistrados:Conductor[] = [];

  constructor(private fb: FormBuilder, private conductorServicio: ConductorService,
              private carroService: CarroService, private dialog: MatDialog) {
    this.carroForm = this.buildForm();
  }

  ngOnInit(): void {
    this.cagarConductores()
  }

  notificacionCarroExistente(): void{
    const info = ['Error de registro',
      'Este carro ya se encuentra registrado', 'warning'];
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
    const info = ['Registro exitoso', 'El carro se registro satisfactoriamente', 'success'];
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

  cagarConductores(): void{
    this.conductorServicio.consultarConductores().subscribe((data: Conductor[]) => {
      this.conductoresRegistrados = data;
    });
  }

  guardar(event: any): void{
    this.carroService.registrarCarro(this.carroForm.value).subscribe((resultado: number) => {
      if(resultado > 0){
        this.notificacionMensajeExitoso();
      }
      if(resultado < 0){
        this.notificacionCarroExistente();
      }
      this.carroForm.reset();
    });
  }

  buildForm(): FormGroup{
    return this.fb.group({
      placa: ['',  [Validators.required]],
      marca: ['',  [Validators.required]],
      conductor: ['',  [Validators.required]]
    });
  }

}
