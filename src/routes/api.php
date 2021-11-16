<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\Auth\ForgotPasswordController;

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
Route::post('/login', [LoginController::class, 'login']);
Route::post('/user', [UserController::class, 'addUser']);
Route::post('/send-reset-link-email', [ForgotPasswordController::class, 'sendResetLinkEmail']);

Route::group(['middleware' => ['auth:api']], function () {
    Route::get('/me', [UserController::class, 'aboutMe']);
    Route::post('/logout', [LoginController::class, 'logout']);
});
