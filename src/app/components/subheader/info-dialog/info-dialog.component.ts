import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HorarioSemanal } from './info-dialog';

@Component({
  selector: 'app-info-dialog',
  templateUrl: './info-dialog.component.html',
  styleUrls: ['./info-dialog.component.scss']
})
export class InfoDialogComponent implements OnInit{

  hoursList!: HorarioSemanal[];

  constructor (public dialog: MatDialog){}

  ngOnInit(): void {
    this.hoursList = [
      {
        semana: 'Domingo',
        horario: '18h as 22h'
      },
      {
        semana: 'Segunda',
        horario: '18h as 22h'
      },
      {
        semana: 'Terça',
        horario: '18h as 22h'
      },
      {
        semana: 'Quarta',
        horario: '18h as 22h'
      },
      {
        semana: 'Quinta',
        horario: '18h as 22h'
      },
      {
        semana: 'Sexta',
        horario: '18h as 00h'
      },
      {
        semana: 'Sábado',
        horario: '18h as 00h'
      },
    ]
  }
}
