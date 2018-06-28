import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders, HttpRequest } from '@angular/common/http';
import { LoginService } from './login.service'
import { Observable, ObservableInput } from 'rxjs/Observable';
import { Subject } from 'rxjs';
import { Session } from '../models';
import { JwtHelper } from '../classes/JWTHelper';

import 'rxjs/Rx';

import { GLOBAL } from './GLOBAL';
import { SnackMessage } from './snackmessage.service';

@Injectable()
export class BaseService {

  private url: string;

  constructor(public _http: HttpClient,
              private loginService:LoginService,
              private snackMessage: SnackMessage) {
    this.url = GLOBAL.url;
  }

  private getHeaders(){
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.loginService.getToken()
      })
    };
  }

  public post(api, data?){
    data = data ? data : {};
    return this._http.post(this.url + api, data, this.getHeaders());
  }

  public get(api){
    return this._http.get(this.url + api, this.getHeaders());
  }

  private responseInterceptor(e){
    debugger;
    this.snackMessage.ShowErrorSnack(e);
  }






}

