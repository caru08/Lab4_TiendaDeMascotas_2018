import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicioWeb } from '../../models';
import { ServicioWebService } from '../../services/servicioWeb.service';
import { SnackMessage } from './../../services/snackmessage.service';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'servicioWeb-listado',
  templateUrl: './servicioWeb-listado.component.html'
})

export class ServicioWebListadoComponent implements OnInit {

    public servicioWeb;
    public loading = false;
    public datasource:any;    
    public displayedColumns: string[] = ['nombre', 'espacio', 'precio', 'name'];
    
    constructor(private router: Router,
        private servicioWebService: ServicioWebService,
        private snackMessage: SnackMessage,
        private loginService: LoginService){

        this.servicioWeb = new ServicioWeb();
    }

    ngOnInit(){
        debugger;
        this.misServicios();

    }

    agregarServicio(){
        this.router.navigate(['./home/servicioWeb-formulario' ]);
    }

    private misServicios(){
        this.loading = true;
        this.servicioWebService.listarserviciosWeb().subscribe((response) => {
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