<?php

require_once 'AutentificadorJWT.php';
require_once 'clases/turno.php';

class turnoApi {

    public function agregar($request, $response, $args){
        $result = array(
            'status' => 'error',
            'code' => 500,
            'message' => "Error 500 de servidor"
        );
        try{
            $data = $request->getParsedBody();
            $error = 0;
            if(empty($data['idMascota'])){
                $result['message'] = "Mascota requerida";
                $error = 1;
            }
            if(empty($data['idUsuario'])){
                $result['message'] = "Usuario requerido";
                $error = 1;
            }
            if(empty($data['fecha'])){
                $result['message'] = "raza requerido";
                $error = 1;
            }
            
            if($error == 0){
                $turno = turno::AgregarTurno($data['idMascota'], $data['idUsuario'], $data['fecha']);
                $result = array(
                    'status' => 'success',
                    'code' => 200,
                    'message' => 'Se agrego el turno',
                    'data' => $turno
                );
            }
        }catch(Exception $excepcion){
            $result['message'] = "Error 500 de servidor. ".$excepcion->getMessage();
        }
        return $response->withJson($result);     
    }

    public function listaTurnos($request, $response, $args){
        $result = array(
            'status' => 'error',
            'code' => 500,
            'message' => "Error 500 de servidor"
        );
        try{
            $turnos = turno::TraerTodosLosTurnos();
            $result = array(
                'status' => 'success',
                'code' => 200,
                'message' => "Listado turnos",
                'data' => $turnos
            );
        }catch(Exception $excepcion){
            $result['message'] = "Error 500 de servidor. ".$excepcion->getMessage();
        }
        return $response->withJson($result);     
    }

    public function listaTurnosPorCliente($request, $response, $args){
        $result = array(
            'status' => 'error',
            'code' => 500,
            'message' => "Error 500 de servidor"
        );
        try{
            $arrayConToken = $request->getHeader('Authorization');
            $token=$arrayConToken[0];
            $dataToken = AutentificadorJWT::checkedToken($token);
            $idCliente = $dataToken->id;
            
            $turnos = turno::listarTurnosPorCliente($idCliente);
            $result = array(
                'status' => 'success',
                'code' => 200,
                'message' => "Listado turnos",
                'data' => $turnos
            );
        }catch(Exception $excepcion){
            $result['message'] = "Error 500 de servidor. ".$excepcion->getMessage();
        }
        return $response->withJson($result);     
    }

   

}