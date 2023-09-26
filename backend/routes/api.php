<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\DonorController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('donors',[DonorController::class, 'index']);
Route::get('donors/{id}',[DonorController::class,'show']);
Route::post('add',[DonorController::class, 'store']);
Route::put('donoerupdate/{id}',[DonorController::class, 'update']);
Route::delete('deletedonor/{id}',[DonorController::class, 'delete']);