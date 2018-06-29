import { Injectable } from '@angular/core';

@Injectable()
export class StaticData {
  static clientModules:any = [
    {
      name: "Base de datos",
      path: "home/"
    },
    {
      name: "Servicios",
      path: "home/servicioWeb-listado"
    },
    {
      name: "Almacenamiento de Archivos",
      path: "home/"
    }
  ];
  static adminModules:any = [
    {
      name: "",
      path: "home/mascota-formulario"
    },
    {
      name: "",
      path: "home/listado-turnos"
    }
  ];
  static freeModules:any [

  ];

}
