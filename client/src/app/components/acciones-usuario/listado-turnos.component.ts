import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Mascota, Turno } from '../../models';
import { LoginService } from '../../services/login.service';
import { MascotaService } from '../../services/mascota.service';
import { TurnoService } from '../../services/turno.service';
import { SnackMessage } from './../../services/snackmessage.service';

@Component({
  selector: 'turno-listado',
  templateUrl: './listado-turnos.component.html'
})

export class ListadoTurnosComponent implements OnInit {

  public loading = false;
  public datasource:any;
  public displayedColumns: string[] = ['fecha', 'nombre'];


  constructor(private mascotaService: MascotaService,
              private snackMessage: SnackMessage,
              private turnoService: TurnoService,
              private loginService: LoginService,
              private router: Router) {
  }

  ngOnInit(){
    this.misTurnos();

  }

  private misTurnos(){
    this.loading = true;
    this.turnoService.listarTurnosPorCliente().subscribe((response) => {
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
