import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs';

import 'rxjs/Rx';

import { GLOBAL } from './GLOBAL';
import { SnackMessage } from './snackmessage.service';

import {BaseService} from "./base.service";

@Injectable()
export class MascotaService {

  private url = '/mascotas';

  constructor(private baseService:BaseService){
  }

  agregarMasctora(mascota):any{
    var path = this.url + '/agregar';
    return this.baseService.post(path, mascota)
  }




}
