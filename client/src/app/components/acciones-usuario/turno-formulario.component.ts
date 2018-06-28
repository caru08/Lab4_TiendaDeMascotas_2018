import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Mascota, Turno } from '../../models';
import { LoginService } from '../../services/login.service';
import { MascotaService } from '../../services/mascota.service';
import { TurnoService } from '../../services/turno.service';
import { SnackMessage } from './../../services/snackmessage.service';

@Component({
  selector: 'turno-formulario',
  templateUrl: './turno-formulario.component.html'
})

export class TurnoFormularioComponent implements OnInit{

  public listaMascotas = new Array<Mascota>();
  public turno = new Turno();
  public loading = false;

  constructor(private mascotaService: MascotaService,
              private snackMessage: SnackMessage,
              private turnoService: TurnoService,
              private loginService: LoginService,
              private router: Router){
  }

  ngOnInit(){
    this.listarMascotas();
  }

  acceptClick(){
    this.loading = true;
    this.turno.idUsuario = this.loginService.getUserId();
    this.turnoService.agregarTurno(this.turno).subscribe((response) => {
      if(response.code == 200){
        this.router.navigate(['./home' ]);
        this.snackMessage.ShowSuccesSnack("El turno se pidió correctamente");
      }else{
        this.snackMessage.ShowErrorSnack("Error al pedir turno: " + response.message);
      }
      this.loading = false;
      console.log(response);
    }, (error) => {
      this.loading = false;
      this.snackMessage.ShowErrorSnack("Error al pedir turno: " + error.message);
    });
  }


  private listarMascotas(){
    this.loading = true;
    this.mascotaService.listarMascotas().subscribe((response) => {
      if(response.code == 200){
        this.listaMascotas = response.data;
      }
      console.log(response);
      this.loading = false;
    }, (error) => {
      this.loading = false;
      this.snackMessage.ShowErrorSnack("Error al obtener las mascotas: " + error);
    });
  }


}
