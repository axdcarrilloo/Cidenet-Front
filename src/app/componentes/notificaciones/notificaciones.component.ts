import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-notificaciones',
  templateUrl: './notificaciones.component.html',
  styleUrls: ['./notificaciones.component.css']
})
export class NotificacionesComponent implements OnInit {

  title = '';
  message = '';
  urlIcon = '';

  constructor(public dialog: MatDialogRef<NotificacionesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string[]) { }

  ngOnInit(): void {
    this.loadInfo(this.data);
  }

  selectImage(style: string): void{
    if (style === 'success'){
      this.urlIcon = './../../../assets/icon/success.png';
    }
    if (style === 'warning'){
      this.urlIcon = './../../../assets/icon/warning.png';
    }
  }

  loadInfo(data: string[]): void{
    this.title = data[0];
    this.message = data[1];
    this.selectImage(data[2]);
  }

  confirmed(): void{
    this.dialog.close(true);
  }

}
