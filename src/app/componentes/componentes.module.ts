
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';

import { FormularioComponent } from './carro/formulario/formulario.component';
import { NotificacionesComponent } from './notificaciones/notificaciones.component';
import { RegistroComponent } from './desplazamiento/registro/registro.component';
import { ConsultasComponent } from './carro/consultas/consultas.component';
import { ConsultasDesplazamientoComponent } from './desplazamiento/consultas-desplazamiento/consultas-desplazamiento.component';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  declarations: [
    FormularioComponent, NotificacionesComponent, RegistroComponent, ConsultasDesplazamientoComponent,
    ConsultasComponent
  ],
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule, MatDialogModule, MatButtonModule, MatTableModule,
    MatDatepickerModule, MatFormFieldModule, MatNativeDateModule
  ]
})
export class ComponentesModule { }
