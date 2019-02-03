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
//    <img src="{{ asset('') }}" alt="100 points" style="margin-left: 20px;"/>
//                <img src="{{ asset('') }}" alt="Thumbs up"/>
//
    $winningEmojis  = ["img/hundred_points.png", "img/thumbs_up.png", "img/face-with-party-horn-and-party-hat.png", "img/nerd-face.png", "img/winking-face.png", "img/ok-hand-sign.png", "img/heavy-check.png"];

    $neutralEmojis = ["img/neutral-face.png", "img/thinking-face.png", "img/eyes.png", "img/astonished-face.png", "img/face-with-monocle.png", "img/face-with-one-eyebrow-raised.png", "img/upside-down-face.png"];

    $losingEmojis = ["img/confused-face.png", "img/astonished-face.png", "img/face-with-open-mouth-vomiting.png", "img/face-with-uneven-eyes-and-wavy-mouth.png", "img/grimacing-face.png", "img/loudly-crying-face.png", "img/overheated-face.png"];

    $randomWinningElements =    array_rand($winningEmojis,    rand(2, 4));
    $randomNeutralElements =    array_rand($neutralEmojis,    2);
    $randomLosingElements =     array_rand($losingEmojis,     2);

    return view('quizzes_results')->with(["quizzTitle" => $quizzTitle,
        "userScore" => $userScore,
        "numberOfQuestion" => $numberOfQuestion,
        "winningEmojis" => $winningEmojis,
        "neutralEmojis" => $neutralEmojis,
        "losingEmojis"  => $losingEmojis,
        "randomWinningElements"     => $randomWinningElements,
        "randomNeutralElements"     => $randomNeutralElements,
        "randomLosingElements"      => $randomLosingElements,
        ]);
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

