<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

//ClienteController
Route::get('/cliente/', [\App\Http\Controllers\ClienteController::class, 'index']);
//Route::get('/cliente/create', [\App\Http\Controllers\ClienteController::class, 'create']);
Route::post('/cliente/store', [\App\Http\Controllers\ClienteController::class, 'store']);

//ClienteInscreveEventoController
Route::get('/clienteinscreveevento/', [\App\Http\Controllers\ClienteInscreveEventoController::class, 'index']);
//Route::get('/clienteinscreveevento/create', [\App\Http\Controllers\ClienteInscreveEventoController::class, 'create']);
Route::post('/clienteinscreveevento/store', [\App\Http\Controllers\ClienteInscreveEventoController::class, 'store']);
Route::get('/clienteinscreveevento/{post}', [\App\Http\Controllers\ClienteInscreveEventoController::class, 'show']);
Route::get('/clienteinscreveevento/{post}/edit', [\App\Http\Controllers\ClienteInscreveEventoController::class, 'edit']);
Route::get('/clienteinscreveevento/{post}', [\App\Http\Controllers\ClienteInscreveEventoController::class, 'destroy']);

//EventosController
Route::get('/eventos/', [\App\Http\Controllers\EventosController::class, 'index']);
Route::post('/eventos/store', [\App\Http\Controllers\EventosController::class, 'store']);
Route::get('/eventos/{post}', [\App\Http\Controllers\EventosController::class, 'show']);
Route::get('/eventos/{post}/edit', [\App\Http\Controllers\EventosController::class, 'edit']);
Route::get('/eventos/{post}', [\App\Http\Controllers\EventosController::class, 'destroy']);

//MensagemController
Route::get('/mensagem/', [\App\Http\Controllers\MensagemController::class, 'index']);
Route::post('/mensagem/store', [\App\Http\Controllers\MensagemController::class, 'store']);
Route::get('/mensagem/{post}', [\App\Http\Controllers\MensagemController::class, 'show']);
Route::get('/mensagem/{post}/edit', [\App\Http\Controllers\MensagemController::class, 'edit']);
Route::get('/mensagem/{post}', [\App\Http\Controllers\MensagemController::class, 'destroy']);

//AdministradorController
Route::get('/administrador/', [\App\Http\Controllers\AdministradorController::class, 'index']);
Route::post('/administrador/', [\App\Http\Controllers\AdministradorController::class, 'store']);
Route::get('/administrador/{post}', [\App\Http\Controllers\AdministradorController::class, 'show']);
Route::get('/administrador/{post}/edit', [\App\Http\Controllers\AdministradorController::class, 'edit']);
Route::get('/administrador/{post}', [\App\Http\Controllers\AdministradorController::class, 'destroy']);
