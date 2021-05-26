import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Desplazamiento } from 'src/app/modelo/desplazamiento';
import { NotificacionesComponent } from '../../notificaciones/notificaciones.component';
import { DesplazamientoService } from './../../../servicios/desplazamiento.service';

@Component({
  selector: 'app-consultas-desplazamiento',
  templateUrl: './consultas-desplazamiento.component.html',
  styleUrls: ['./consultas-desplazamiento.component.css']
})
export class ConsultasDesplazamientoComponent implements OnInit {

  desplazamientos: Desplazamiento[] = [];
  contrainsSearch = '';

  constructor(private desplazamientoService: DesplazamientoService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.cargarDesplazamientos();
  }

  notificacionMensajeEliminacionExitosa(): void{
    const info = ['Eliminacion exitosa', 'El desplazamiento se elimino satisfactoriamente', 'success'];
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

  modificar(desplazamiento: Desplazamiento): void{}

  eliminar(id: any): void{
    this.desplazamientoService.eliminar(id).subscribe((dato: number) => {
      if(dato === 0){
        this.notificacionMensajeEliminacionExitosa();
        this.cargarDesplazamientos();
      }
    });
  }

  buscarPorPlaca(): void{
    if(this.contrainsSearch !== ''){
      this.desplazamientoService.consultarPorPlaca(this.contrainsSearch).subscribe((dato: Desplazamiento) =>{
        let desplazamientosAux: Desplazamiento[] = [];
        desplazamientosAux.push(dato);
        this.desplazamientos = desplazamientosAux;
      });
    }else{
      this.cargarDesplazamientos();
    }
  }

  cargarDesplazamientos(): void{
    this.desplazamientoService.consultarTodos().subscribe((datos: Desplazamiento[]) => {
      this.desplazamientos = datos;
    });
  }

}
