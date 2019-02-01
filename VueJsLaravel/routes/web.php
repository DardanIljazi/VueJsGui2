<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    // ["menu" => ["MENU_NAME" => "LINK_TO_MENU", ..]
    return view('home')->with(["menus" => ["Login" => "login", "Signup" => "signup"]]);
});

Route::get('/login', function () {
    return view('login');
});

Route::get('/signup', function () {
    return view('subscription');
});

Route::get('/quizzes', function () {
    return view('quizzes')->with(["menus" => []]);;
});

Route::get('/quizzes/finished/{quizzTitle}/{userScore}/{numberOfQuestions}', function ($quizzTitle, $userScore, $numberOfQuestion) {
    return view('quizzes_results')->with(["quizzTitle" => $quizzTitle, "userScore" => $userScore, "numberOfQuestion" => $numberOfQuestion]);
});

Route::get('/quizzes/{id}', function ($id) {
    return view('quizzes_questions')->with(["menus" => [], "id" => $id]);
});

//Route::get('/quizzes/{id}/finished', function ($id) {
//    return view('quizzes_results')->with(["menus" => ["Return to home page" => "/"], "id" => $id]);
//});


Route::get('/results', function () {
    return view('quizzes_results')->with(["menus" => ["Logout" => "#"]]);
});

