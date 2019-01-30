@extends('layouts.app')

@section('title', 'Quizzes')

@section('menu')
@section('menu-list')
    @foreach($menus as $menu => $link)
        <li class="nav-item">
            <a class="nav-link text-dark" href="{{ $link }}">{{ $menu }}</a>
        </li>
    @endforeach
@endsection
@include('layouts.menu')
@endsection

@section('content')
    <main role="main" id="questionsListPage">

        <div class="quizzContainer row justify-content-center justify-content-center flex-column">
            <div class="quizzTitle align-self-start ml-5 mt-4">Quizz Title 1</div>
            <div class="quizzQuestion mb-2 align-self-center mt-5">What is the color of the car ?</div>
            <div class="quizzImage align-self-center">
                <img src="{{ asset('/img/vehicle.png') }}" alt="questionImage" class="mt-5"/>
            </div>

            <div class="responsesContainer mt-5">
                <div class="row">

                    <div class="col-md col-sm  response-button text-center mt-3" v-for="quizz in quizzes">

                        <div class="btn btn-primary btn-lg bg-brandblue rounded-0" :click="takeUserResponse"> 1. Blue</div>
                    </div>
                </div>
            </div>
        </div>
    </main>
@endsection

{{--@section('footer')--}}
{{--<footer>--}}
{{--@include('layouts.footer')--}}
{{--</footer>--}}
{{--@endsection--}}

