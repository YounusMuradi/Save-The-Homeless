<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\DonorController;
use App\Http\Controllers\StudentController;
use App\Http\Controllers\TeacherController;
use App\Models\Teacher;

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
// for donar
Route::get('donors',[DonorController::class, 'index']);
Route::get('donors/{id}',[DonorController::class,'show']);
Route::post('add',[DonorController::class, 'store']);
Route::put('donoerupdate/{id}',[DonorController::class, 'update']);
Route::delete('deletedonor/{id}',[DonorController::class, 'delete']);

//for student

Route::get('students',[StudentController::class, 'index']);
Route::get('students/{id}',[StudentController::class, 'show']);
Route::post('addstudent',[StudentController::class, 'store']);
Route::put('studentupdate/{id}',[StudentController::class, 'update']);
Route::delete('deletestudent/{id}',[StudentController::class, 'destroy']);

//for Teacher

Route::get('teachers',[TeacherController::class, 'index']);
Route::get('teachers/{id}',[TeacherController::class, 'show']);
Route::post('addteachers',[TeacherController::class,'store']);
Route::put('teacherUpdate/{id}',[TeacherController::class, 'update']);
Route::delete('deleteTeacher/{id}', [TeacherController::class, 'destroy']);
