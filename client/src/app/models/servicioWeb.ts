
export class ServicioWeb {

  public nombre:string;
  public espacio:number;
  public precio:number;
  public idUsuario:number;
  

  public copyData(data){
    this.nombre = data.nombre;
    this.espacio = data.espacio;
    this.precio = data.precio;
    this.idUsuario = data.idUsuario;
    
  }

}
