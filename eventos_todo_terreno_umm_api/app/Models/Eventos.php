<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Eventos extends Model
{
    use HasFactory;

    protected $table = "eventos";
    //Error SQL State[42S22] -> https://stackoverflow.com/questions/71906013/pdoexceptionsqlstate42s22column-not-found-1054-unknown-column-tbl-destinat
    protected $primaryKey = 'id_evento';
    public $timestamps = false;

    protected $fillable = [
        "nome_evento",
        "imagem_evento",
        "requisito_evento",
        "descricao_evento",
        "id_administrador_fk",
    ];
}
