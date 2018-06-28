
export class Turno {

  public id:number;
  public idMascota:number;
  public idUsuario:number;
  public fecha:string;

  public copyData(data){
    this.id = data.id;
    this.idMascota = data.idMascota;
    this.idUsuario = data.idUsuario;
    this.fecha = data.fecha;
  }

}
