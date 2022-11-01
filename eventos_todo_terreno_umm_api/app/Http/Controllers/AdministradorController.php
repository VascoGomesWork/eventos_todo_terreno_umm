<?php

namespace App\Http\Controllers;

use App\Models\Administrador;
use Illuminate\Http\Request;

class AdministradorController extends Controller
{
    //How to connect Laravel API to MYSQL Database -> https://youtu.be/0_wi6n9bh2o

    public function index(){
        $administrador = new Administrador();
        echo 'Teste' . $administrador->index();
        return ["name"=>"Vasco", "administrador"=>$administrador->index()];
    }


    public function store(){

    }

    public function edit(){

    }

    public function destroy(){

    }
}
