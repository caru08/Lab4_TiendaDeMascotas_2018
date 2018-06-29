import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs';

import 'rxjs/Rx';

import { GLOBAL } from './GLOBAL';
import { SnackMessage } from './snackmessage.service';

import {BaseService} from "./base.service";

@Injectable()
export class ServicioClienteService {

    private url = '/registrarse';
    
      constructor(private baseService:BaseService){
      }
    
      agregarCliente(servicio):any{
        return this.baseService.post(this.url, servicio);
      }

      listarClientes():any{
        return this.baseService.get('/usuarios');
      }
    




}