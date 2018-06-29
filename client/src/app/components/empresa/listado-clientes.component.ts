import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicioWeb } from '../../models';
import { ServicioClienteService } from '../../services/servicioCliente.service';

import { ServicioWebService } from '../../services/servicioWeb.service';
import { SnackMessage } from './../../services/snackmessage.service';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'listado-clientes',
  templateUrl: './listado-clientes.component.html'
})

export class ListadoClientesComponent implements OnInit {

    public loading = false;
    public datasource:any;    
    public displayedColumns: string[] = ['name', 'email', 'role', 'sex'];


    constructor(private router: Router,
        private servicioWebService: ServicioWebService,
        private servicioClienteService: ServicioClienteService,
        private snackMessage: SnackMessage,
        private loginService: LoginService){
    }

    ngOnInit(){
        debugger;
        this.getUsuarios();

    }

    agregarCliente(){
        this.router.navigate(['./home/alta-clientes' ]);
    }

    private getUsuarios(){
        this.loading = true;
        this.servicioClienteService.listarClientes().subscribe((response) => {
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