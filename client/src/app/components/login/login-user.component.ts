import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {  Router } from '@angular/router';
import { SnackMessage } from './../../services/snackmessage.service';
import { LoginService } from '../../services/login.service';
import { User } from '../../models';

@Component({
  selector: 'login-user',
  templateUrl: './login-user.component.html'
})

export class LoginUserComponent implements OnInit {

  public user  = new User();
  public loading:boolean;

  public listaRoles = [
    {
      name: "Profesional",
      value: "profesional"
    },
    {
      name: "Normal",
      value: "normal"
    },
    {
      name: "Free",
      value: "free"
    }
  ];

  constructor(private router: Router,
              private loginService: LoginService,
              private snackMessage: SnackMessage ){
  }

  ngOnInit(){
  }

  loginClick() {
    this.login();
  }

  registrarse() {
    this.router.navigate(['/registrarse' ]);
  }

  profesionalClick(){
    this.user.name = "Carlos";
    this.user.email = "carlos@email.com";
    this.user.role = "profesional";
    this.user.pass = "1234";
  }

  normalClick(){
    this.user.name = "German";
    this.user.email = "german@email.com";
    this.user.role = "normal";
    this.user.pass = "1234";
  }
  
  freeClick(){
    this.user.name = "Carina";
    this.user.email = "carina@email.com";
    this.user.role = "free";
    this.user.pass = "1234";
  }

  private login(){
    this.loading = true;
    this.loginService.login(this.user).subscribe((response) => {
      if(response.code == 201){
        this.router.navigate(['./home' ]);
      }else{
        this.snackMessage.ShowErrorSnack("error al loguearse: " + response.message);
      }
      this.loading = false;
      console.log(response);
    }, (error) => {
      this.loading = false;
      this.snackMessage.ShowErrorSnack("error al loguearse: " + error);
      console.log("error al loguearse", error);
    });
  }



}
