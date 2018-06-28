
export class Mascota {

  public nroFicha:number;
  public nombre:string;
  public raza:string;
  public color:string;
  public edad:string;
  public tipo:string;

  public copyData(data){
    this.nroFicha = data.nroFicha;
    this.nombre = data.nombre;
    this.raza = data.raza;
    this.color = data.color;
    this.edad = data.edad;
    this.tipo = data.tipo;
  }

}
