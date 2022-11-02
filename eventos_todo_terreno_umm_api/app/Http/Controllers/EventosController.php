<?php

namespace App\Http\Controllers;

use App\Models\Eventos;
use Illuminate\Http\Request;

class EventosController extends Controller
{
    //
    public function index(){
        return ["evento"=>Eventos::all()];
    }

    public function eventosById(){
        echo "Teste\n";

        //How to Get URI -> https://www.edureka.co/community/85258/how-to-get-the-full-url-in-php
        //How to get ID from URI -> https://stackoverflow.com/questions/23886584/get-number-from-an-url-in-php
        //Eventos By ID -> https://youtu.be/CHWb2rbtkRU?list=PLYVcyg3AF-zvDDXBLDyn9UJSgAYMWpUS3
        $id_evento = substr(strrchr($_SERVER['REQUEST_URI'], '/'), 1);

        echo "Id = " . $id_evento . "\n";
        return ["eventoById"=>Eventos::find($id_evento)];
    }

    public function store(Request $request){
        return ["Created Evento"=>Eventos::create($request->all())];
    }


    public function edit(Request $request){
        return ["Edited Event"=>Eventos::update($request->all())];
    }

    public function destroy(){

    }
}
