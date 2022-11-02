<?php

namespace App\Http\Controllers;

use App\Models\Administrador;
use Illuminate\Http\Request;

class AdministradorController extends Controller
{
    //How to connect Laravel API to MYSQL Database -> https://youtu.be/0_wi6n9bh2o

    public function index(){
        $administrador = new Administrador();

        //How to Read Data From DataBase -> https://youtu.be/bU1nVHSmGhk?list=PLYVcyg3AF-zvDDXBLDyn9UJSgAYMWpUS3
        return ["administrador"=>$administrador::all()];
    }


    public function store(){

    }

    public function edit(){

    }

    public function destroy(){

    }
}
