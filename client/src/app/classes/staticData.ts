import { Injectable } from '@angular/core';

@Injectable()
export class StaticData {
  static clientModules:any = [
    {
      name: "Agregar Mascota",
      path: "/home/mascota-formulario"
    },
    {
      name: "Pedir turno",
      path: "/home/turnos"
    },
    {
      name: "Mis Turnos",
      path: "/home/mis-turnos"
    }
  ];
  static adminModules:any = [
    {
      name: "Agregar Mascota",
      path: "/home/mascota-formulario"
    },
    {
      name: "Turnos",
      path: "/home/listado-turnos"
    }
  ];
}
