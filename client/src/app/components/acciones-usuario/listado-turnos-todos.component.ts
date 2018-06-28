import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Mascota, Turno } from '../../models';
import { LoginService } from '../../services/login.service';
import { MascotaService } from '../../services/mascota.service';
import { TurnoService } from '../../services/turno.service';
import { SnackMessage } from './../../services/snackmessage.service';

@Component({
  selector: 'listado-turnos.todos',
  templateUrl: './listado-turnos-todos.component.html'
})

export class ListadoTurnosTodosComponent implements OnInit {

  public loading = false;
  public datasource: any;
  public displayedColumns: string[] = ['fecha', 'nombre', 'nroFicha', 'raza', 'tipo', 'edad', 'color', 'name', 'email'];

  constructor(private snackMessage: SnackMessage,
              private turnoService: TurnoService,
              private loginService: LoginService,){
  }

  ngOnInit(){
    this.listarTurnos();
  }

  applyFilter(value){
    this.datasource.filter = value.trim().toLowerCase();
  }

  private listarTurnos(){
    this.loading = true;
    this.turnoService.listarTodosLosTurnos().subscribe((response) => {
      if(response.code == 200){
        this.datasource = response.data;
      }
      console.log(response);
      this.loading = false;
    }, (error) => {
      this.loading = false;
      this.snackMessage.ShowErrorSnack("Error al obtener las mascotas: " + error);
    });
  }


}
