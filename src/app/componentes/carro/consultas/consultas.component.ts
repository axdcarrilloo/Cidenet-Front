import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Carro } from 'src/app/modelo/carro';
import { NotificacionesComponent } from '../../notificaciones/notificaciones.component';
import { CarroService } from './../../../servicios/carro.service';

@Component({
  selector: 'app-consultas',
  templateUrl: './consultas.component.html',
  styleUrls: ['./consultas.component.css']
})
export class ConsultasComponent implements OnInit {

  contrainsSearch = '';
  carros: Carro[] = [];

  constructor(private carroService: CarroService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.cargarCarros();
  }

  notificacionMensajeEliminacionExitosa(): void{
    const info = ['Eliminacion exitosa', 'El carro se elimino satisfactoriamente', 'success'];
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

  cargarCarros(): void{
    this.carroService.consultarCarros().subscribe((datos: Carro[]) => {
      this.carros = datos;
    });
  }

  modificar(carro: Carro): void{}

  eliminar(id: any): void{
    this.carroService.eliminarCarro(id).subscribe((dato: number) => {
      if(dato === 0){
        this.notificacionMensajeEliminacionExitosa();
        this.cargarCarros();
      }
    });
  }

  buscarCon(): void{
    const length = this.contrainsSearch.length;
    if (length > 2){
      this.carroService.consultarPorPlacaMarca(this.contrainsSearch)
      // tslint:disable-next-line: deprecation
      .subscribe((datos: Carro[]) => {
        this.carros = datos;
      });
    }else{
      this.cargarCarros();
    }
  }

}
