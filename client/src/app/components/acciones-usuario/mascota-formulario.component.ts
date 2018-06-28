import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Mascota } from '../../models';
import { MascotaService } from '../../services/mascota.service';
import { SnackMessage } from './../../services/snackmessage.service';

@Component({
  selector: 'mascota-formulario',
  templateUrl: './mascota-formulario.component.html'
})

export class MascotaFormularioComponent {

  public mascota:any; //Mascota;
  public loading:boolean;
  public listaTipo = [
    {
      name : "Perro",
      value: "perro"
    },
    {
      name : "Gato",
      value: "gato"
    }
  ]

  constructor(private router: Router,
              private mascotaService: MascotaService,
              private snackMessage: SnackMessage){
    this.mascota = new Mascota();
    this.mascota.tipo = "perro";
  }

  acceptClick(){
    debugger;
    this.loading = true;
    this.mascotaService.agregarMasctora(this.mascota).subscribe((response) => {
      if(response.code == 200){
        this.router.navigate(['./home' ]);
        this.snackMessage.ShowSuccesSnack("La mascota se agrego correctamente");
      }else{
        this.snackMessage.ShowErrorSnack("Error al agregar mascota: " + response.message);
      }
      this.loading = false;
      console.log(response);
    }, (error) => {
      this.loading = false;
      this.snackMessage.ShowErrorSnack("Error al agregar mascota: " + error);
    });
  }

  cancelClick(){
    this.router.navigate(['./home' ]);
  }


}
