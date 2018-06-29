<?php
include_once "AccesoDatos.php";

class servicioWeb{

    public $id;
    public $nombre;
    public $espacio;
    public $precio;    

    public static function AgregarServicioWeb($nombre, $espacio, $usuarioId) {
        $precio = 0;
        if(servicioWeb::ExisteUnServicioParaUsuario($usuarioId)){
            $precio = 300;
        }
        $objetoAccesoDatos = AccesoDatos::dameUnObjetoAcceso(); 
        $consulta = $objetoAccesoDatos->RetornarConsulta("INSERT into servicioWeb (nombre, espacio, precio, idUsuario)values(:nombre,:espacio,:precio,:idUsuario)");            
        $consulta->bindValue(':nombre', $nombre, PDO::PARAM_STR);
        $consulta->bindValue(':espacio', $espacio, PDO::PARAM_STR);
        $consulta->bindValue(':idUsuario', $usuarioId, PDO::PARAM_STR);
        $consulta->bindValue(':precio', $precio, PDO::PARAM_STR);
        $consulta->execute();
        $id= $objetoAccesoDatos->RetornarUltimoIdInsertado();
        return servicioWeb::TraerServicioWebPorId($id); 
    }

    public static function ExisteUnServicioParaUsuario($idUsuario){
            $objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
            $consulta =$objetoAccesoDato->RetornarConsulta("select * from servicioWeb where idUsuario = '$idUsuario'");
            $consulta->execute();
            $mascota= $consulta->fetchObject('ServicioWeb');
            if($consulta->rowCount() == 0){
                return false;   
            }
            return true;	
    }

    public static function TraerServicioWebPorId($id){
        $objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
        $consulta =$objetoAccesoDato->RetornarConsulta("select * from servicioWeb where id = '$id'");
        $consulta->execute();
        $servicio= $consulta->fetchObject('ServicioWeb');
        if($consulta->rowCount() == 0){
            return false;   
        }
        return $servicio;	
    } 

    public function listarServiciosWebPorUsuario($idUser){
        $objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
        $consulta =$objetoAccesoDato->RetornarConsulta("select servicioWeb.*, usuarios.* from servicioWeb INNER JOIN usuarios on usuarios.id = servicioWeb.idUsuario AND servicioWeb.idUsuario='$idUser'");
        $consulta->execute();
        return $consulta->fetchAll(PDO::FETCH_CLASS, "servicioWeb");        
    }

}