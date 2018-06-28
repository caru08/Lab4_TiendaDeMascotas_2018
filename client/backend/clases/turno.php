<?php
include_once "AccesoDatos.php";

class turno{

    public $id;
    public $idMascota;
    public $nombre;
    public $idUsuario;
    public $fecha;

    public static function TraerTurnoPorId($id){
        $objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
        $consulta =$objetoAccesoDato->RetornarConsulta("select * from turnos where id = '$id'");
        $consulta->execute();
        $turno= $consulta->fetchObject('Turno');
        if($consulta->rowCount() == 0){
            return false;   
        }
        return $turno;	
    }

    public static function AgregarTurno($idMascota, $idUsuario, $fecha) {
        $objetoAccesoDatos = AccesoDatos::dameUnObjetoAcceso(); 
        $consulta = $objetoAccesoDatos->RetornarConsulta("INSERT into turnos (idMascota, idUsuario, fecha)values(:idMascota,:idUsuario,:fecha)");            
        $consulta->bindValue(':idMascota', $idMascota, PDO::PARAM_STR);
        $consulta->bindValue(':idUsuario', $idUsuario, PDO::PARAM_STR);
        $consulta->bindValue(':fecha', $fecha, PDO::PARAM_STR);
        $consulta->execute();
        $id= $objetoAccesoDatos->RetornarUltimoIdInsertado();
        return turno::TraerTurnoPorId($id); 
    }

    public function TraerTodosLosTurnos(){
        $objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso();         
		$consulta =$objetoAccesoDato->RetornarConsulta("SELECT turnos.*, mascotas.*, usuarios.* FROM turnos INNER JOIN mascotas ON turnos.idMascota = mascotas.id INNER JOIN usuarios ON usuarios.id = turnos.idUsuario ORDER BY turnos.fecha");
        $consulta->execute();
        return $consulta->fetchAll(PDO::FETCH_CLASS, "Turno");            
    }

    public function listarTurnosPorCliente($idUser){
        $objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
        $consulta =$objetoAccesoDato->RetornarConsulta("select turnos.*, mascotas.nombre from turnos INNER JOIN mascotas on mascotas.id = turnos.idMascota AND turnos.idUsuario ='$idUser'");
        $consulta->execute();
        return $consulta->fetchAll(PDO::FETCH_CLASS, "Turno");        
    }
    


}