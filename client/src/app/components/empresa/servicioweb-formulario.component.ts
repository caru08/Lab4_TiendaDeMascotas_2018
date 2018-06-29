import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicioWeb } from '../../models';
import { ServicioWebService } from '../../services/servicioWeb.service';
import { SnackMessage } from './../../services/snackmessage.service';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'servicioWeb-formulario',
  templateUrl: './servicioWeb-formulario.component.html'
})

export class ServicioWebFormularioComponent {

    public servicioWeb;
    public loading = false;

    constructor(private router: Router,
        private servicioWebService: ServicioWebService,
        private snackMessage: SnackMessage,
        private loginService: LoginService,){

        this.servicioWeb = new ServicioWeb();
    }

    acceptClick(){
        this.loading = true;
        this.servicioWeb.idUsuario = this.loginService.getUserId();
        this.servicioWebService.agregarServicioWeb(this.servicioWeb).subscribe((response) => {
          if(response.code == 200){
            this.router.navigate(['./home' ]);
            this.snackMessage.ShowSuccesSnack("El servicio se agrego correctamente");
          }else{
            this.snackMessage.ShowErrorSnack("Error al agregar el servicoi: " + response.message);
          }
          this.loading = false;
          console.log(response);
        }, (error) => {
          this.loading = false;
          this.snackMessage.ShowErrorSnack("Error al agregar el servicio: " + error);
        });
    }

    cancelClick(){
        this.router.navigate(['./home/servicioWeb-listado' ]);
    }


}