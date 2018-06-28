<?php
include_once "AccesoDatos.php";

class mascota{

    public $id;
    public $nroFicha;
    public $nombre;
    public $raza;
    public $color;
    public $edad;
    public $tipo;

    public static function TraerTodasLasMascotas() {
			$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
			$consulta =$objetoAccesoDato->RetornarConsulta("select * from mascotas");
            $consulta->execute();
            return $consulta->fetchAll(PDO::FETCH_CLASS, "mascota");            
    }

    public static function TraerMascotaPorId($id){
        $objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
        $consulta =$objetoAccesoDato->RetornarConsulta("select * from mascotas where id = '$id'");
        $consulta->execute();
        $mascota= $consulta->fetchObject('Mascota');
        if($consulta->rowCount() == 0){
            return false;   
        }
        return $mascota;	
    }

    public static function AgregarMascota($nroFicha, $nombre, $raza, $color, $edad, $tipo) {
        $objetoAccesoDatos = AccesoDatos::dameUnObjetoAcceso(); 
        $consulta = $objetoAccesoDatos->RetornarConsulta("INSERT into mascotas (nroFicha, nombre, raza, color, edad, tipo)values(:nroFicha,:nombre,:raza,:color,:edad,:tipo)");            
        $consulta->bindValue(':nroFicha', $nroFicha, PDO::PARAM_STR);
        $consulta->bindValue(':nombre', $nombre, PDO::PARAM_STR);
        $consulta->bindValue(':raza', $raza, PDO::PARAM_STR);
        $consulta->bindValue(':color', $color, PDO::PARAM_STR);
        $consulta->bindValue(':edad', $edad, PDO::PARAM_STR);
        $consulta->bindValue(':tipo', $tipo, PDO::PARAM_STR);
        $consulta->execute();
        $id= $objetoAccesoDatos->RetornarUltimoIdInsertado();
        return mascota::TraerMascotaPorId($id); 
    }

  


}