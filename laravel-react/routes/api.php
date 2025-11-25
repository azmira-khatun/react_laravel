<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ProfileController;

// Default user route
Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');



Route::get('/products', [ProductController::class, 'index']);

Route::get('/products/{id}', [ProductController::class, 'show']);

Route::post('/products', [ProductController::class, 'store']);

Route::put('/products/{id}', [ProductController::class, 'update']);

Route::delete('/products/{id}', [ProductController::class, 'destroy']);








Route::get('/profiles', [ProfileController::class, 'index']);

Route::get('/profiles/{id}', [ProfileController::class, 'show']);

Route::post('/profiles', [ProfileController::class, 'store']);

Route::put('/profiles/{id}', [ProfileController::class, 'update']);

Route::delete('/profiles/{id}', [ProfileController::class, 'destroy']);
