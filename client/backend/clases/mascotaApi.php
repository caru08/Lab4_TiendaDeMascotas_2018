<?php

require_once 'AutentificadorJWT.php';
require_once 'clases/mascota.php';

class mascotaApi {


    public function agregar($request, $response, $args){
        $result = array(
            'status' => 'error',
            'code' => 500,
            'message' => "Error 500 de servidor"
        );
        try{
            $data = $request->getParsedBody();
            $error = 0;
            if(empty($data['nroFicha'])){
                $result['message'] = "Ficha requerida";
                $error = 1;
            }
            if(empty($data['nombre'])){
                $result['message'] = "nombre requerido";
                $error = 1;
            }
            if(empty($data['raza'])){
                $result['message'] = "raza requerido";
                $error = 1;
            }
            if(empty($data['color'])){
                $result['message'] = "color requerida";
                $error = 1;                
            }
            if(empty($data['edad'])){
                $result['message'] = "edad requerida";
                $error = 1;                
            }
            if(empty($data['tipo'])){
                $result['message'] = "tipo requerida";
                $error = 1;                
            }
            if($error == 0){
                $mascota = mascota::AgregarMascota($data['nroFicha'], $data['nombre'], $data['raza'], $data['color'], $data['edad'],$data['tipo']);
                $result = array(
                    'status' => 'success',
                    'code' => 200,
                    'message' => 'Se agrego la mascota correctamente',
                    'data' => $mascota
                );
            }
        }catch(Exception $excepcion){
            $result['message'] = "Error 500 de servidor. ".$excepcion->getMessage();
        }
        return $response->withJson($result);     
    }

    public function listaMascotas($request, $response, $args){
        $result = array(
            'status' => 'error',
            'code' => 500,
            'message' => "Error 500 de servidor"
        );
        try{
            $mascotas = mascota::TraerTodasLasMascotas();
            $result = array(
                'status' => 'success',
                'code' => 200,
                'message' => "Listado mascotas",
                'data' => $mascotas
            );
        }catch(Exception $excepcion){
            $result['message'] = "Error 500 de servidor. ".$excepcion->getMessage();
        }

        return $response->withJson($result);     

    }



}