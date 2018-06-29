<?php

require_once 'AutentificadorJWT.php';
require_once 'clases/servicioWeb.php';

class servicioWebApi {

    public function agregar($request, $response, $args){
        $result = array(
            'status' => 'error',
            'code' => 500,
            'message' => "Error 500 de servidor"
        );
        try{
            $data = $request->getParsedBody();
            $error = 0;
            if(empty($data['nombre'])){
                $result['message'] = "Nombre requerida";
                $error = 1;
            }
            if(empty($data['espacio'])){
                $result['message'] = "espacio requerido";
                $error = 1;
            }
            if(empty($data['idUsuario'])){
                $result['message'] = "Usuario requerido";
                $error = 1;
            }
            if($error == 0){
                $servicioWeb = servicioWeb::AgregarServicioWeb($data['nombre'], $data['espacio'], $data['idUsuario']);
                $result = array(
                    'status' => 'success',
                    'code' => 200,
                    'message' => 'Se agrego el servicioWeb correctamente',
                    'data' => $servicioWeb
                );
            }
        }catch(Exception $excepcion){
            $result['message'] = "Error 500 de servidor. ".$excepcion->getMessage();
        }
        return $response->withJson($result);     
    }

    public function listarServiciosWeb($request, $response, $args){
        $result = array(
            'status' => 'error',
            'code' => 500,
            'message' => "Error 500 de servidor"
        );
        try{
            $arrayConToken = $request->getHeader('Authorization');
            $token=$arrayConToken[0];
            $dataToken = AutentificadorJWT::checkedToken($token);
            $idUsuario = $dataToken->id;

            $servicios = servicioWeb::listarServiciosWebPorUsuario($idUsuario);
            $result = array(
                'status' => 'success',
                'code' => 200,
                'message' => "Listado serviciosWeb",
                'data' => $servicios
            );
        }catch(Exception $excepcion){
            $result['message'] = "Error 500 de servidor. ".$excepcion->getMessage();
        }

        return $response->withJson($result);     

    }



}